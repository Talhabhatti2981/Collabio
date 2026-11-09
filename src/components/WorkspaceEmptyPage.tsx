import { Link } from 'react-router-dom'
import AppChrome from './AppChrome'

type Props = { eyebrow: string; title: string; description: string; sections: { title: string; description: string }[]; action?: { label: string; to: string } }
export default function WorkspaceEmptyPage({ eyebrow, title, description, sections, action }: Props) {
  return <AppChrome><div className="mx-auto max-w-[848px] px-4 py-10 sm:px-6 sm:py-12"><p className="text-sm font-medium text-ink/75">{eyebrow}</p><h1 className="mt-2 text-[28px] font-semibold leading-9 tracking-tight sm:text-[32px]">{title}</h1><p className="mt-2 max-w-xl text-base leading-6">{description}</p><div className="mt-6 border-t-2 border-ink pt-6 grid gap-3 md:grid-cols-2">{sections.map(section => <section key={section.title} className="rounded-lg border border-line bg-panel p-6"><h2 className="text-lg font-semibold">{section.title}</h2><p className="mt-2 text-sm leading-6 text-ink/75">{section.description}</p></section>)}</div>{action && <Link to={action.to} className="mt-6 inline-flex min-h-11 items-center rounded-lg border border-ink/50 px-4 text-sm font-semibold hover:bg-ink/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">{action.label}</Link>}</div></AppChrome>
}
