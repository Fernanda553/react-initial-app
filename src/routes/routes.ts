import { lazy, LazyExoticComponent } from 'react'
import LazyLayout from '../01-lazyload/layout/LazyLayout'
import RegisterPage from '../03-forms/pages/RegisterPage'
import FormikBasicPage from '../03-forms/pages/FormikBasicPage'
import FormikYupPage from '../03-forms/pages/FormikYupPage'


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
    to: '/register',
    path: 'register',
    Component: RegisterPage,
    name: 'Register'

  },
  {
    to: '/formik-basic',
    path: 'formik-basic',
    Component: FormikBasicPage,
    name: 'Formik Basic'

  },
  {
    to: '/formik-yup',
    path: 'formik-yup',
    Component: FormikYupPage,
    name: 'Formik Yup'

  }
]

