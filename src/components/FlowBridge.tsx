import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ROLE_KEY = 'pactly-role'

export default function FlowBridge() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      const el = target.closest('[data-go], [data-flow]')
      if (!(el instanceof HTMLElement)) return

      const flow = el.dataset.flow
      const go = el.dataset.go

      if (flow === 'role-brand' || flow === 'role-creator') {
        sessionStorage.setItem(ROLE_KEY, flow === 'role-creator' ? 'creator' : 'brand')
        document.querySelectorAll('[data-flow^="role-"]').forEach((node) => {
          node.classList.remove('ring-2', 'ring-primary')
        })
        el.classList.add('ring-2', 'ring-primary')
      }

      if (flow === 'login-submit') {
        event.preventDefault()
        const role = sessionStorage.getItem(ROLE_KEY)
        navigate(role === 'creator' ? '/creator' : '/deals')
        return
      }

      if (go) {
        event.preventDefault()
        navigate(go)
      }
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [navigate])

  return null
}
