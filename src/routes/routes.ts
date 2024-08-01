import { lazy, LazyExoticComponent } from 'react'
import LazyLayout from '../01-lazyload/layout/LazyLayout'
import NoLazy from '../01-lazyload/pages/NoLazy'


type JSXComponent = () => JSX.Element

interface Route {
    to: string,
    path:  string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}

const lazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'))


export const routes: Route[] = [
  {
    to: '/lazyload',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'LazyLayout'

  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No lazy'

  }
]

