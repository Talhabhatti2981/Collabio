import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const files = (await readdir('src/pages')).filter((name) => name.endsWith('.tsx')).map((name) => join('src/pages', name))

function retarget(source) {
  return source.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/g, (full, attrs, inner) => {
    const text = inner.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim().toLowerCase()
    const blocked = ['save', 'edit', 'continue', 'confirm', 'compare'].some((word) => text.includes(word))
    const isProfile = !blocked && text.length < 40 && (text === 'profile' || text.endsWith(' profile'))
    if (!isProfile || attrs.includes('data-go="/profile"')) return full
    let next = attrs
    if (next.includes('data-go="')) next = next.replace(/data-go="[^"]*"/, 'data-go="/profile"')
    else next += ' data-go="/profile"'
    if (next.includes('href="')) next = next.replace(/href="[^"]*"/, 'href="/profile"')
    else next += ' href="/profile"'
    return `<a${next}>${inner}</a>`
  })
}

let changed = 0
for (const file of files) {
  const source = await readFile(file, 'utf8')
  const next = retarget(source)
  if (next !== source) {
    await writeFile(file, next)
    changed += 1
  }
}
console.log(`updated ${changed} pages`)
