import { mkdir, readFile, writeFile } from 'node:fs/promises'

const PKR_PER_GBP = 370

const LOGIN = '54b39b32d4bc4b559cc7c49bb1145c2d'
const REVIEW = '00503f3b4d0344589b2f45dab9cf7689'

const screens = [
  [LOGIN, 'LoginPage', '/login'],
  ['13948a871eb944ba88de42cf5d1f6293', 'SignupPage', '/signup'],
  ['01f3f4dc567e4529b9453f23a320d3c4', 'VerifyEmailPage', '/verify-email'],
  ['8484e68ab14c47a0b99956bec8ef1a46', 'CompleteProfilePage', '/complete-profile'],
  ['c4ec5889956746c78b612d6a8cb09e64', 'BrandDashboardPage', '/deals'],
  ['193f2af35dc14c8491169fe9d8b780d9', 'CreatorDashboardPage', '/creator'],
  ['7c9fa0c730704e7bb1a57225746e2548', 'DealScopePage', '/deals/new'],
  ['a5eafdfb6004497b8c52aeb4d5314e09', 'DealCounterpartyPage', '/deals/new/counterparty'],
  ['34cc380b9e38427cbb19151f9179a47b', 'DealEscrowPage', '/deals/new/escrow'],
  ['0741661232a0403293997a4e3bf5325d', 'DealTermsPage', '/deals/new/terms'],
  ['36171ff38900496daed82614c84f8c2c', 'EscrowLockedPage', '/deals/uk-5028/locked'],
  ['8efe1d425ec146f78f1a18628657294d', 'ActiveDealPage', '/deals/uk-5028'],
  [REVIEW, 'ReviewScreen', '/deals/uk-5028/review'],
  ['eb3c4369c89640559cfa64c399cc56a8', 'TopUpSettledPage', '/deals/uk-5028/top-up-settled'],
  ['6972a6e0db7d4f6c8926ea1bd0cb0c05', 'RevisionRequestPage', '/deals/uk-5028/revision'],
  ['24cf471a783647369440b222eddb49a3', 'ResubmitDeliverablePage', '/creator/uk-5028/resubmit'],
  ['f17581d257864fd68064f6a321a0ce44', 'MilestoneTwoPage', '/deals/uk-5028/milestone-2'],
  ['436a90230c334793bae1e5b4195aea6c', 'SparkAdsPage', '/creator/uk-5028/spark-ads'],
  ['54cd7f5e3f1a478da527efe7f086d0cb', 'CampaignLaunchedPage', '/deals/uk-5028/launched'],
  ['0ff6ef5138ff4342bb49c32b21707200', 'PayoutReleasePage', '/deals/uk-5028/release'],
  ['df4a5a01b6f147d7973b3c633d433617', 'SettlementReceiptPage', '/deals/uk-5028/settled'],
  ['084bee3d58a9469c8eea4bf95b1a5b25', 'PerformanceAuditPage', '/deals/uk-5028/audit'],
  ['63a5cb08deff441a9ad48fadcbdc9f54', 'DealClosedPage', '/deals/uk-5028/closed'],
  ['525d738ff5cf4dc4820ffe602ce4c7b7', 'CreatorArchivePage', '/creator/uk-5028/archive'],
  ['66306648f8894b70855772f438937459', 'PayoutReceiptPage', '/creator/uk-5028/receipt'],
  ['237a97d17193478e815c9f3fbfb7a09f', 'TaxExportPage', '/deals/uk-5028/tax-export'],
  ['7be38f0876574cf194def140ceec403f', 'LedgerSyncPage', '/settings/sync'],
  ['25d1d0bd4ecc4af2801b93a7c7bf629a', 'CountersignPage', '/creator/uk-5028/sign'],
  ['bef2d8f8303440818ccf3d112556bc58', 'InvitationPage', '/invitations/uk-5028'],
  ['c043045bd7e34a43ab064884f4a35b22', 'InviteCreatorPage', '/deals/invite'],
  ['fa5c28f138a7426aa6ebda87aa99dc54', 'ProposeRevisionPage', '/creator/uk-5028/revise'],
  ['cb3a102720894080825b671eebbb8716', 'LegalPage', '/legal'],
  ['3c4dc4db516d4a9e98b040645c3b211d', 'WelcomePage', '/welcome'],
  ['dc349bd5473440ffb3086e84ed22d1cb', 'MobileRevisionPage', '/m/revision'],
  ['d90653278bb940cab551ffbe5a760ce9', 'MobileRevisionMilestonePage', '/m/revision/milestone-1'],
  ['7452ed133b5b46d1adf8c044dd868da3', 'MobileReceiptPage', '/m/receipt'],
  ['982eb2a81a77484996f8c445b147dd6a', 'MobileActiveDealPage', '/m/deals/uk-5028'],
]

const PATHS = {
  login: '/login',
  deals: '/deals',
  profile: '/profile',
  settings: '/settings',
  'help-and-legal': '/help',
  'help-legal': '/help',
  contracts: '/welcome',
  'how-escrow-works': '/welcome',
  terms: '/legal',
  'terms-and-jurisdiction': '/legal',
  'terms-of-escrow': '/legal',
  'uk-commercial-terms': '/legal',
  'commercial-terms': '/legal',
  'legal-terms': '/legal',
  'legal-safeguards': '/legal',
  privacy: '/legal',
  'privacy-notice': '/legal',
  'privacy-terms': '/legal',
  arbitration: '/legal',
  'arbitration-charter': '/legal',
  'audit-protocol': '/deals/uk-5028/audit',
  'dispute-arbitration': '/legal',
  'dispute-resolution': '/legal',
  'dispute-rules': '/legal',
  'escrow-agreement': '/legal',
  'escrow-safeguarding-policy': '/legal',
  'safeguarding-policy': '/legal',
  'fee-structure': '/welcome',
  'fca-compliance': '/legal',
  'regulatory-status': '/legal',
  'statutory-custody-terms': '/legal',
  security: '/legal',
  cookies: '/legal',
  invitations: '/invitations/uk-5028',
  'respond-to-invitation': '/invitations/uk-5028',
  'wizard-step-2': '/deals/new/counterparty',
  'creator-onboarding': '/signup',
  'brand-onboarding': '/signup',
  'creator-profile': '/complete-profile',
  'earnings-and-payouts': '/creator',
  messages: '/deals/uk-5028',
  vault: '/deals/uk-5028',
  deliverables: '/creator/uk-5028/resubmit',
  'deals-settlement': '/deals/uk-5028/settled',
  more: '/deals',
}

const SVG_TAGS = {
  lineargradient: 'linearGradient',
  radialgradient: 'radialGradient',
  clippath: 'clipPath',
  textpath: 'textPath',
  foreignobject: 'foreignObject',
}

const NUMERIC_ATTRS = new Set([
  'tabindex', 'rows', 'cols', 'span', 'colspan', 'rowspan', 'maxlength', 'minlength',
])

const VOID = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr',
])

const RENAMES = {
  for: 'htmlFor',
  tabindex: 'tabIndex',
  autocomplete: 'autoComplete',
  maxlength: 'maxLength',
  minlength: 'minLength',
  readonly: 'readOnly',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  srcset: 'srcSet',
  crossorigin: 'crossOrigin',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  playsinline: 'playsInline',
  novalidate: 'noValidate',
  contenteditable: 'contentEditable',
  spellcheck: 'spellCheck',
  viewbox: 'viewBox',
  preserveaspectratio: 'preserveAspectRatio',
  gradientunits: 'gradientUnits',
  gradienttransform: 'gradientTransform',
  spreadmethod: 'spreadMethod',
  clippathunits: 'clipPathUnits',
  patternunits: 'patternUnits',
  attributename: 'attributeName',
  repeatcount: 'repeatCount',
  stddeviation: 'stdDeviation',
  filterunits: 'filterUnits',
  primitiveunits: 'primitiveUnits',
  textlength: 'textLength',
  lengthadjust: 'lengthAdjust',
  fetchpriority: 'fetchPriority',
  referrerpolicy: 'referrerPolicy',
  datetime: 'dateTime',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formmethod: 'formMethod',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  acceptcharset: 'acceptCharset',
  'xmlns:xlink': 'xmlnsXlink',
  'xlink:href': 'href',
}

const BOOLEANS = new Set([
  'disabled', 'checked', 'readonly', 'required', 'selected', 'hidden', 'open', 'multiple',
  'autofocus', 'autoplay', 'controls', 'loop', 'muted', 'default', 'inert', 'reversed',
  'allowfullscreen', 'novalidate',
])

function toPkr(value) {
  return value.replace(/£\s?(\d{1,3}(?:,\d{3})*(?:\.\d{1,2})?)\s*([kKmM])?/g, (_, raw, suffix) => {
    const scale = suffix && suffix.toLowerCase() === 'm' ? 1_000_000 : suffix ? 1_000 : 1
    const pounds = Number(raw.replace(/,/g, '')) * scale
    const rupees = Math.round(pounds * PKR_PER_GBP)
    return `Rs ${rupees.toLocaleString('en-US')}`
  }).replace(/\bGBP\b/g, 'PKR')
}

function decode(value) {
  return value
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
}

function jsxAttr(value) {
  const escaped = toPkr(decode(value)).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/\s+/g, ' ')
  return `"${escaped}"`
}

function jsxText(value) {
  const lead = /^\s/.test(value) ? ' ' : ''
  const trail = /\s$/.test(value) ? ' ' : ''
  const core = toPkr(value).replace(/\s+/g, ' ').trim()
  if (!core) return ''
  const body = `${lead}${core}${trail}`
  return body.replace(/[{}]/g, (char) => (char === '{' ? "{'{'}" : "{'}'}"))
    .replace(/</g, '&lt;')
}

function norm(value) {
  return decode(value).replace(/\s+/g, ' ').trim().toLowerCase()
}

function flowFor(screenId, text) {
  const t = text
  if (!t || t.length > 420) return null
  if (t === "i'm a brand" || t === 'im a brand') return { flow: 'role-brand' }
  if (t.startsWith("i'm a creator") || t.startsWith('im a creator')) return { flow: 'role-creator' }
  if (t.includes('create an account') || t.includes('get started') || t.includes('create your collabio')) return { go: '/signup' }
  if (t.includes('create collabio account')) return { go: '/verify-email' }
  if (t.includes('forgot password')) return { go: '/login' }
  if (screenId === LOGIN && (t.startsWith('log in ') || t.includes('google workspace') || t.includes('apple passkey'))) {
    return { flow: 'login-submit' }
  }
  if (t === 'log in' || t === 'login') return { go: '/login' }
  if (t.includes('continue to dashboard')) return { go: '/complete-profile' }
  if (t.includes('proceed to deal escrow')) return { go: '/deals/new' }
  if (t.includes('save brand profile')) return { go: '/deals' }
  if (t.includes('save creator profile')) return { go: '/creator' }
  if (t.includes('start a new deal') || t.includes('create custom pact')) return { go: '/deals/new' }
  if (t.includes('sign out')) return { go: '/login' }
  if (t.includes('review & sign pact') || t.includes('review and sign pact')) return { go: '/creator/uk-5028/sign' }
  if (t.includes('upload draft')) return { go: '/creator/uk-5028/resubmit' }
  if (t.includes('back to scope') || t.includes('step 1')) return { go: '/deals/new' }
  if (t.includes('assign counterparty')) return { go: '/deals/new/counterparty' }
  if (t.includes('back to assign')) return { go: '/deals/new/counterparty' }
  if (t.includes('continue to step 3')) return { go: '/deals/new/escrow' }
  if (t.includes('back to funding')) return { go: '/deals/new/escrow' }
  if (t.includes('continue to step 4') || t.includes('authorize & lock') || t.includes('authorize and lock')) {
    return { go: '/deals/new/terms' }
  }
  if (t.includes('sign agreement') || t.includes('dispatch pact')) return { go: '/deals/uk-5028/locked' }
  if (t.includes('send deal voucher') || t.includes('dispatch secure invitation')) return { go: '/invitations/uk-5028' }
  if (t.includes('go to deals dashboard')) return { go: '/deals' }
  if (t.includes('accept terms') || t.includes('countersign')) return { go: '/deals/uk-5028' }
  if (t.includes('propose revision') || t.includes('propose changes') || t.includes('propose amendment')) {
    return { go: '/creator/uk-5028/revise' }
  }
  if (t.includes('submit counter-offer') || t.includes('submit structured counter')) return { go: '/deals/uk-5028/review' }
  if (t.includes('cancel & return to pact') || t.includes('cancel & return to overview') || t.includes('decline')) {
    return { go: '/creator' }
  }
  if (t.includes('request revision')) return { go: '/deals/uk-5028/revision' }
  if (t.includes('dispatch revision')) return { go: '/creator/uk-5028/resubmit' }
  if (t.includes('approve & release funds')) return { go: '/deals/uk-5028/release' }
  if (t.includes('resubmit revised')) return { go: '/deals/uk-5028/milestone-2' }
  if (t.includes('submit spark')) return { go: '/deals/uk-5028/milestone-2' }
  if (t.includes('launch campaign') || t.includes('approve deliverable & launch')) return { go: '/deals/uk-5028/launched' }
  if (t.includes('return to deal milestone')) return { go: '/deals/uk-5028' }
  if (t.includes('approve deliverable & release')) return { go: '/deals/uk-5028/release' }
  if (t.includes('trigger immediate') || t.includes('approve & arm') || t.includes('instantly')) {
    return { go: '/deals/uk-5028/settled' }
  }
  if (t.includes('view milestone 2')) return { go: '/deals/uk-5028/milestone-2' }
  if (t.includes('export tax') || t.includes('accounting packet')) return { go: '/deals/uk-5028/tax-export' }
  if (t.includes('archive pact') || t.includes('acknowledge final')) return { go: '/deals/uk-5028/closed' }
  if (t.includes('re-hire') || t.includes('rehire')) return { go: '/deals/new' }
  if (t.includes('xero') || t.includes('quickbooks')) return { go: '/settings/sync' }
  if (t.includes('how escrow works')) return { go: '/welcome' }
  if (t.includes('help & legal') || t.includes('help and legal')) return { go: '/help' }
  if (t.includes('dispute')) return { go: '/help' }
  if (t === 'contracts' || t.endsWith(' contracts')) return { go: '/welcome' }
  if (t.includes('invitation')) return { go: '/invitations/uk-5028' }
  if (t.includes('earnings')) return { go: '/creator' }
  if (t.includes('uk-4903')) return { go: '/creator/uk-5028/sign' }
  if (t.includes('uk-4850')) return { go: '/deals/uk-5028/closed' }
  if (!t.includes('new deal') && (t.includes('uk-4891') || t.includes('#uk-5028') || t.includes('deal #uk-5028'))) {
    return { go: '/deals/uk-5028/review' }
  }
  if (t.includes('billing') || t === 'settings' || t.endsWith(' settings')) return { go: '/settings' }
  if (t.includes('save') || t.includes('edit') || t.includes('continue') || t.includes('confirm')) {
    // onboarding actions stay on their own screens
  } else if (t === 'profile' || t.endsWith(' profile')) {
    return { go: '/profile' }
  }
  if (t === 'deals' || t.endsWith(' deals') || (/^deals\b/.test(t) && t.length < 28)) return { go: '/deals' }
  if (t === 'collabio' || t.endsWith(' collabio')) return { go: screenId === LOGIN ? '/login' : '/deals' }
  return null
}

function readTag(html, index) {
  let cursor = index + 1
  if (html[cursor] === '!' || html[cursor] === '?') {
    const end = html.indexOf('>', cursor)
    return { tag: null, next: end === -1 ? html.length : end + 1 }
  }
  const nameMatch = /^([a-zA-Z][\w:-]*)/.exec(html.slice(cursor))
  if (!nameMatch) return { tag: null, next: index + 1 }
  const name = nameMatch[1].toLowerCase()
  cursor += name.length
  const attrs = []
  let selfClose = false
  while (cursor < html.length) {
    while (html[cursor] === ' ' || html[cursor] === '\n' || html[cursor] === '\r' || html[cursor] === '\t') cursor += 1
    if (html[cursor] === '>') {
      cursor += 1
      break
    }
    if (html[cursor] === '/' && html[cursor + 1] === '>') {
      selfClose = true
      cursor += 2
      break
    }
    const attrMatch = /^([^\s=/>]+)/.exec(html.slice(cursor))
    if (!attrMatch) {
      cursor += 1
      continue
    }
    const attrName = attrMatch[1]
    cursor += attrName.length
    while (html[cursor] === ' ') cursor += 1
    let value = ''
    if (html[cursor] === '=') {
      cursor += 1
      while (html[cursor] === ' ') cursor += 1
      const quote = html[cursor]
      if (quote === '"' || quote === "'") {
        const end = html.indexOf(quote, cursor + 1)
        value = html.slice(cursor + 1, end === -1 ? html.length : end)
        cursor = end === -1 ? html.length : end + 1
      } else {
        const bare = /^[^\s>]+/.exec(html.slice(cursor))
        value = bare ? bare[0] : ''
        cursor += value.length
      }
    }
    attrs.push([attrName, value])
  }
  return {
    tag: { type: 'element', name, reactName: SVG_TAGS[name] ?? name, attrs, children: [], selfClose },
    next: cursor,
  }
}

function parse(html) {
  const root = { type: 'element', name: 'fragment', attrs: [], children: [] }
  const stack = [root]
  let index = 0
  while (index < html.length) {
    if (html[index] === '<') {
      if (html.startsWith('</', index)) {
        const end = html.indexOf('>', index)
        const name = html.slice(index + 2, end === -1 ? html.length : end).trim().split(/\s/)[0].toLowerCase()
        index = end === -1 ? html.length : end + 1
        for (let depth = stack.length - 1; depth > 0; depth -= 1) {
          const popped = stack.pop()
          if (popped.name === name) break
        }
        continue
      }
      const { tag, next } = readTag(html, index)
      if (!tag) {
        stack[stack.length - 1].children.push({ type: 'text', text: '<' })
        index = index + 1
        continue
      }
      index = next
      if (tag.name === 'script' || tag.name === 'style' || tag.name === 'noscript') {
        const close = new RegExp(`</${tag.name}\\s*>`, 'i')
        const rest = html.slice(index)
        const found = close.exec(rest)
        index = found ? index + found.index + found[0].length : html.length
        continue
      }
      stack[stack.length - 1].children.push(tag)
      if (!tag.selfClose && !VOID.has(tag.name)) stack.push(tag)
    } else {
      const next = html.indexOf('<', index)
      const end = next === -1 ? html.length : next
      const text = html.slice(index, end)
      if (jsxText(text)) stack[stack.length - 1].children.push({ type: 'text', text })
      index = end
    }
  }
  return root.children
}

function textOf(node) {
  if (node.type === 'text') return node.text
  return node.children.map(textOf).join(' ')
}

function attr(node, name) {
  const found = node.attrs.find(([key]) => key.toLowerCase() === name)
  return found ? found[1] : ''
}

function reactName(original) {
  const lower = original.toLowerCase()
  if (lower.startsWith('on')) return null
  if (lower === 'class' || lower === 'style' || lower === 'data-path') return null
  if (RENAMES[lower]) return RENAMES[lower]
  if (lower.startsWith('data-') || lower.startsWith('aria-')) return lower
  if (original.includes('-')) return original.replace(/-([a-z])/g, (_, char) => char.toUpperCase())
  return original
}

function styleObject(value) {
  const props = []
  for (const part of decode(value).split(';')) {
    const splitAt = part.indexOf(':')
    if (splitAt === -1) continue
    const key = part.slice(0, splitAt).trim()
    const prop = part.slice(splitAt + 1).trim()
    if (!key || !prop) continue
    const camel = key.startsWith('--') ? key : key.replace(/-([a-z])/g, (_, char) => char.toUpperCase())
    props.push(`${JSON.stringify(camel)}: ${JSON.stringify(prop)}`)
  }
  return `{{ ${props.join(', ')} }}`
}

function isLogo(node) {
  const alt = decode(attr(node, 'alt')).toLowerCase()
  const src = attr(node, 'src')
  return alt.includes('collabio logo') || src.includes('AEtjO1WhJfALA')
}

function emit(nodes, indent, screenId, state) {
  return nodes.map((node) => emitNode(node, indent, screenId, state)).filter(Boolean).join('\n')
}

function emitNode(node, indent, screenId, state) {
  const pad = '  '.repeat(indent)
  if (node.type === 'text') {
    const text = jsxText(node.text)
    return text ? `${pad}${text}` : ''
  }
  if (['script', 'style', 'noscript', 'link', 'meta', 'title', 'head'].includes(node.name)) return ''
  if (node.name === 'img' && isLogo(node)) {
    state.logo = true
    const className = decode(attr(node, 'class')) || 'h-8 w-8'
    return `${pad}<Logo className=${jsxAttr(className)} />`
  }

  const label = norm(textOf(node))
  const action = node.name === 'a' || node.name === 'button' ? flowFor(screenId, label) : null
  const path = node.name === 'a' ? PATHS[attr(node, 'data-path')] : ''
  const cardGo = node.name === 'article'
    ? (label.includes('uk-4903') || label.includes('uk-4922')
      ? '/creator/uk-5028/sign'
      : label.includes('uk-4850') || label.includes('uk-4820')
        ? '/deals/uk-5028/closed'
        : label.includes('uk-4891') || label.includes('uk-5028')
          ? '/deals/uk-5028/review'
          : '')
    : ''
  const go = action?.go || (!action?.flow && path ? path : '') || cardGo
  const flow = action?.flow || ''
  const unlock = Boolean(go) && node.attrs.some(([name, value]) => {
    const lower = name.toLowerCase()
    return (lower === 'disabled' || lower === 'aria-disabled') && value !== 'false'
  })

  const parts = []
  let className = ''
  let href = ''
  for (const [name, value] of node.attrs) {
    const lower = name.toLowerCase()
    if (lower === 'class') {
      className = decode(value)
      continue
    }
    if (lower === 'href') {
      href = value
      continue
    }
    if (lower === 'style') {
      parts.push(` style=${styleObject(value)}`)
      continue
    }
    const mapped = reactName(name)
    if (!mapped) continue
    if (unlock && (lower === 'disabled' || lower === 'aria-disabled')) continue
    if (NUMERIC_ATTRS.has(lower) && /^-?\d+(\.\d+)?$/.test(value)) {
      parts.push(` ${mapped}={${value}}`)
      continue
    }
    if (BOOLEANS.has(lower)) {
      const prop = lower === 'checked' ? 'defaultChecked' : mapped
      parts.push(value === 'false' ? ` ${prop}={false}` : ` ${prop}={true}`)
      continue
    }
    if ((node.name === 'input' || node.name === 'textarea') && lower === 'value') {
      parts.push(` defaultValue=${jsxAttr(value)}`)
      continue
    }
    parts.push(` ${mapped}=${jsxAttr(value)}`)
  }
  if (unlock) {
    className = className
      .replaceAll('cursor-not-allowed', 'cursor-pointer')
      .replaceAll(/bg-surface-container-high(?![\w-])/g, 'bg-primary')
      .replaceAll(/text-outline(?![\w-])/g, 'text-on-primary')
      .replaceAll('opacity-80', '')
  }
  if (cardGo) className = `${className} cursor-pointer`.trim()
  if (className) parts.push(` className=${jsxAttr(className)}`)
  if (go) parts.push(` data-go=${jsxAttr(go)}`)
  if (flow) parts.push(` data-flow=${jsxAttr(flow)}`)
  if (node.name === 'a') {
    const nextHref = go || href
    if (nextHref) parts.push(` href=${jsxAttr(nextHref)}`)
    if (!go && (href === '#' || href === '')) parts.push(' onClick={(event) => event.preventDefault()}')
  }
  const attrs = parts.join('')
  const tag = node.reactName || node.name
  if (VOID.has(node.name) || node.selfClose) return `${pad}<${tag}${attrs} />`
  if (node.children.length === 0) return `${pad}<${tag}${attrs}></${tag}>`
  const inner = emit(node.children, indent + 1, screenId, state)
  return `${pad}<${tag}${attrs}>\n${inner}\n${pad}</${tag}>`
}

function pageSource(name, title, jsx, usesLogo) {
  const importLine = usesLogo ? "import Logo from '../components/Logo'\n\n" : ''
  return `${importLine}/** ${title} */\nexport default function ${name}() {\n  return (\n    <>\n${jsx}\n    </>\n  )\n}\n`
}

const manifest = JSON.parse(await readFile('stitch-html/manifest.json', 'utf8'))
const titles = new Map(manifest.map((screen) => [screen.id, screen.title]))

await mkdir('src/pages', { recursive: true })

const routeLines = []
for (const [id, name, route] of screens) {
  const title = titles.get(id) ?? name
  if (id !== REVIEW) {
    const html = await readFile(`stitch-html/${id}.html`, 'utf8')
    const bodyMatch = /<body\b[^>]*>([\s\S]*)<\/body>/i.exec(html)
    const body = (bodyMatch ? bodyMatch[1] : html).replace(/<!--[\s\S]*?-->/g, '')
    const state = { logo: false }
    const jsx = emit(parse(body), 3, id, state)
    await writeFile(`src/pages/${name}.tsx`, pageSource(name, title, jsx, state.logo))
  }
  const element = id === REVIEW ? '<ReviewScreen />' : `<${name} />`
  const importPath = id === REVIEW ? `import ReviewScreen from './ReviewScreen'\n` : ''
  routeLines.push({ name, route, element, importPath, external: id === REVIEW })
}

const imports = [
  ...routeLines.filter((route) => route.external).map((route) => route.importPath.trim()),
  ...routeLines.filter((route) => !route.external).map((route) => `import ${route.name} from './pages/${route.name}'`),
]
const routes = routeLines.map((route) => `      <Route path="${route.route}" element={${route.element}} />`).join('\n')

await writeFile(
  'src/collabioRoutes.tsx',
  `import { Route } from 'react-router-dom'\n${imports.join('\n')}\n\nexport function CollabioRoutes() {\n  return (\n    <>\n${routes}\n    </>\n  )\n}\n`,
)

const counterPath = 'src/components/CounterOfferPage.tsx'
const counter = await readFile(counterPath, 'utf8')
await writeFile(counterPath, counter.replace(/£\s?(\d{1,3}(?:,\d{3})*(?:\.\d{1,2})?)/g, (_, raw) => {
  const pounds = Number(raw.replace(/,/g, ''))
  return `{pkr(${pounds})}`
}))

console.log(`wrote ${routeLines.length} routes`)
