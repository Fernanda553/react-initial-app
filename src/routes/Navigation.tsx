import { Suspense } from 'react'
import {
  BrowserRouter,
  Route,
  NavLink,
  Routes,
  Navigate
} from 'react-router-dom'
import { routes } from './routes'
import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img src={logo} alt='React Logo' />
            <ul>
              {routes.map(({ name, to }) => (
                <li key={to}>
                  <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ to, path, Component }) => <Route key={to} path={path} element={<Component />} />)}

            <Route path='/*' element={<Navigate to={routes[0].to} replace />} />

          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
