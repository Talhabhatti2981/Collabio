import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

type Props = { mode: 'login' | 'signup' }
type Role = 'brand' | 'creator'

export default function AuthScreen({ mode }: Props) {
  const navigate = useNavigate()
  const [role, setRole] = useState<Role>(() => sessionStorage.getItem('collabio-role') === 'creator' ? 'creator' : 'brand')
  const signup = mode === 'signup'
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    sessionStorage.setItem('collabio-role', role)
    navigate(role === 'creator' ? '/creator' : '/deals')
  }
  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <header className="border-b border-line"><div className="mx-auto flex h-16 max-w-[1000px] items-center justify-between px-4 sm:px-6 lg:px-8"><Link to="/login" className="rounded-lg text-[24px] font-bold tracking-[-0.045em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">Collabio</Link><Link to={signup ? '/login' : '/signup'} className="flex min-h-11 items-center rounded-lg text-sm font-semibold text-ink underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">{signup ? 'Log in' : 'Create account'}</Link></div></header>
      <main className="mx-auto w-full max-w-[480px] px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-sm font-medium text-ink/75">{signup ? 'Get started' : 'Welcome back'}</p>
        <h1 className="mt-2 text-[28px] font-semibold leading-9 tracking-tight sm:text-[32px] sm:leading-10">{signup ? 'Create your account' : 'Log in to Collabio'}</h1>
        <p className="mt-3 text-base leading-6">{signup ? 'Choose how you work and set up your account.' : 'Choose your account type to continue to your workspace.'}</p>
        <div className="mt-6 rounded-lg border border-line bg-panel p-5 sm:p-8">
          <p className="mb-6 rounded-md bg-ink/[0.06] px-4 py-3 text-sm leading-5">Demo mode: choose a workspace below. No email or password is needed.</p>
          <form onSubmit={submit} className="space-y-5">
            <fieldset><legend className="mb-2 text-sm font-semibold">I am a</legend><div className="grid grid-cols-2 gap-2">{(['brand', 'creator'] as const).map((option) => <button key={option} type="button" aria-pressed={role === option} onClick={() => setRole(option)} className={`min-h-11 rounded-lg border px-4 text-sm font-semibold capitalize focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${role === option ? 'border-ink bg-ink text-paper' : 'border-ink/60 hover:bg-ink/10'}`}>{option}</button>)}</div></fieldset>
            <button type="submit" className="min-h-11 w-full rounded-lg bg-ink px-4 text-sm font-semibold text-paper hover:bg-ink/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">Continue to demo workspace</button>
          </form>
        </div>
        <p className="mt-6 text-center text-sm">{signup ? 'Already have an account?' : 'New to Collabio?'}{' '}<Link to={signup ? '/login' : '/signup'} className="font-semibold text-ink underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">{signup ? 'Log in' : 'Create an account'}</Link></p>
      </main>
    </div>
  )
}
