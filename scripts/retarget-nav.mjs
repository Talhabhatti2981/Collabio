import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const files = (await readdir('src/pages')).filter((name) => name.endsWith('.tsx')).map((name) => join('src/pages', name))

function retarget(source) {
  return source.replace(/<(a|button)\b([^>]*)>([\s\S]*?)<\/\1>/g, (full, tag, attrs, inner) => {
    const text = inner.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim().toLowerCase()
    let destination = ''
    if (text === 'settings' || text.endsWith(' settings') || text === 'billing & payouts' || text.endsWith(' billing & payouts')) {
      destination = '/settings'
    } else if ((text.includes('help') && text.includes('legal') && text.length < 40) || text === 'dispute resolution' || text.endsWith(' dispute resolution')) {
      destination = '/help'
    }
    if (!destination || attrs.includes(`data-go="${destination}"`)) return full
    let next = attrs
    if (next.includes('data-go="')) next = next.replace(/data-go="[^"]*"/, `data-go="${destination}"`)
    else next += ` data-go="${destination}"`
    if (tag === 'a') {
      if (next.includes('href="')) next = next.replace(/href="[^"]*"/, `href="${destination}"`)
      else next += ` href="${destination}"`
    }
    return `<${tag}${next}>${inner}</${tag}>`
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
