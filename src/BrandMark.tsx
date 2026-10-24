import logo from './assets/logo2.png'

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={className}>
      <span className="brand-mark-aura" aria-hidden="true" />
      <img src={logo} alt="" />
    </span>
  )
}
