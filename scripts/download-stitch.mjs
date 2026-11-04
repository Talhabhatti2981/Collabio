import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const mcp = JSON.parse(await readFile(join(process.env.USERPROFILE, '.cursor', 'mcp.json'), 'utf8'))
const key = mcp.mcpServers.stitch.headers['X-Goog-Api-Key']
const projectId = '13251268524825062037'
const outDir = join(root, 'stitch-html')
await mkdir(outDir, { recursive: true })

async function mcpCall(id, name, args) {
  const response = await fetch('https://stitch.googleapis.com/mcp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/event-stream',
      'X-Goog-Api-Key': key,
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id,
      method: 'tools/call',
      params: { name, arguments: args },
    }),
  })
  const payload = await response.json()
  const text = payload.result?.content?.find((item) => item.type === 'text')?.text
  if (!text) throw new Error(JSON.stringify(payload.error ?? payload).slice(0, 400))
  return JSON.parse(text)
}

const listed = await mcpCall(1, 'list_screens', { projectId })
const screens = listed.screens.map((screen) => ({
  id: screen.name.split('/').pop(),
  title: screen.title,
  deviceType: screen.deviceType,
  htmlUrl: screen.htmlCode?.downloadUrl,
}))
await writeFile(join(outDir, 'manifest.json'), JSON.stringify(screens, null, 2))

let saved = 0
for (const screen of screens) {
  if (!screen.htmlUrl) continue
  const response = await fetch(screen.htmlUrl, { headers: { 'X-Goog-Api-Key': key } })
  const payload = await response.json()
  const html = payload.dataString ?? payload
  await writeFile(join(outDir, `${screen.id}.html`), typeof html === 'string' ? html : JSON.stringify(html))
  saved += 1
  console.log(`saved ${saved}/${screens.length} ${screen.title}`)
}
