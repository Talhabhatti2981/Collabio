import { readFile } from 'node:fs/promises'

const ids = [
  '54b39b32d4bc4b559cc7c49bb1145c2d',
  '13948a871eb944ba88de42cf5d1f6293',
  '01f3f4dc567e4529b9453f23a320d3c4',
  '8484e68ab14c47a0b99956bec8ef1a46',
  'c4ec5889956746c78b612d6a8cb09e64',
  '7c9fa0c730704e7bb1a57225746e2548',
]

for (const id of ids) {
  const html = await readFile(`stitch-html/${id}.html`, 'utf8')
  const bits = [...html.matchAll(/<(button|a)\b[^>]*>([\s\S]*?)<\/\1>/gi)].map((match) =>
    match[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
  )
  console.log(`\n## ${id.slice(0, 8)}`)
  console.log([...new Set(bits.filter(Boolean))].slice(0, 20).join('\n'))
}
