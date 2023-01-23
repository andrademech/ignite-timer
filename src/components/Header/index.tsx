// Styles, Logo & Icons
import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/logo-ignite.svg'
import { Timer, Scroll } from 'phosphor-react'

import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoIgnite}
        alt="logomarca com dois triângulos sobrepostos de cor verde"
      />
      <nav>
        <NavLink to="/" title="timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
