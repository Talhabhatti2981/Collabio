import { readFile } from 'node:fs/promises'

const ids = {
  wizard2: 'a5eafdfb6004497b8c52aeb4d5314e09',
  wizard3: '34cc380b9e38427cbb19151f9179a47b',
  wizard4: '0741661232a0403293997a4e3bf5325d',
  active: '8efe1d425ec146f78f1a18628657294d',
  sign: '25d1d0bd4ecc4af2801b93a7c7bf629a',
  invite: 'c043045bd7e34a43ab064884f4a35b22',
  respond: 'bef2d8f8303440818ccf3d112556bc58',
  locked: '36171ff38900496daed82614c84f8c2c',
  topup: 'eb3c4369c89640559cfa64c399cc56a8',
  m2: 'f17581d257864fd68064f6a321a0ce44',
  spark: '436a90230c334793bae1e5b4195aea6c',
  launched: '54cd7f5e3f1a478da527efe7f086d0cb',
  release: '0ff6ef5138ff4342bb49c32b21707200',
  settled: 'df4a5a01b6f147d7973b3c633d433617',
  audit: '084bee3d58a9469c8eea4bf95b1a5b25',
  close: '63a5cb08deff441a9ad48fadcbdc9f54',
  archive: '525d738ff5cf4dc4820ffe602ce4c7b7',
  creator: '193f2af35dc14c8491169fe9d8b780d9',
  revise: 'fa5c28f138a7426aa6ebda87aa99dc54',
  revision: '6972a6e0db7d4f6c8926ea1bd0cb0c05',
  resubmit: '24cf471a783647369440b222eddb49a3',
  receipt: '66306648f8894b70855772f438937459',
}

for (const [name, id] of Object.entries(ids)) {
  const html = await readFile(`stitch-html/${id}.html`, 'utf8')
  const bits = [...html.matchAll(/<(button|a)\b[^>]*>([\s\S]*?)<\/\1>/gi)]
    .map((match) => match[2].replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim())
    .filter((text) => text && text.length < 90)
  console.log(`\n## ${name}`)
  console.log([...new Set(bits)].join('\n'))
}
