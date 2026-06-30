import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Personagens', path: '/personagens' },
  { label: 'Missões', path: '/missoes' },
  { label: 'Locais', path: '/locais' },
  { label: 'Veículos', path: '/veiculos' },
  { label: 'Easter Eggs', path: '/easter-eggs' },
  { label: 'Guias', path: '/guias-farm' },
  { label: 'Dicas', path: '/dicas' },
]

export function Header() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="GTA VI Hub home">
        <span className="brand-mark">VI</span>
        <span className="brand-copy">
          <strong>GTA VI</strong>
          <small>Hub</small>
        </span>
      </NavLink>

      <nav className="nav-links" aria-label="Navegação principal">
        {navItems.map((item) => (
          <NavLink
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            key={item.path}
            to={item.path}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
