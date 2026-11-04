import { readdir, readFile } from 'node:fs/promises'

const files = (await readdir('stitch-html')).filter((name) => name.endsWith('.html'))
let style = 0
let svg = 0
let paths = new Set()
for (const file of files) {
  const html = await readFile(`stitch-html/${file}`, 'utf8')
  style += (html.match(/\sstyle="/g) ?? []).length
  svg += (html.match(/<svg\b/g) ?? []).length
  for (const match of html.matchAll(/data-path="([^"]+)"/g)) paths.add(match[1])
}
console.log('files', files.length, 'style', style, 'svg', svg)
console.log([...paths].sort().join('\n'))
