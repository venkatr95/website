import React from 'react'

interface SmoothLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
}

export function SmoothLink({ to, onClick, children, ...rest }: SmoothLinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    onClick?.(e)
    if (e.defaultPrevented) return
    const id = to.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      e.preventDefault()
      el.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', to)
    }
  }

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
