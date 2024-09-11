import { lazy, LazyExoticComponent } from 'react'
import LazyLayout from '../01-lazyload/layout/LazyLayout'
import {
  FormikAbstraction,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
  RegisterFormikPage,
  DinamicForm
} from '../03-forms/pages'

type JSXComponent = () => JSX.Element

interface Route {
  to: string
  path: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
}

const lazyLayout = lazy(async () => await import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'))

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

  },
  {
    to: '/formik-components',
    path: 'formik-components',
    Component: FormikComponents,
    name: 'Formik Components'

  },
  {
    to: '/formik-abstraction',
    path: 'formik-abstraction',
    Component: FormikAbstraction,
    name: 'Formik Abstraction'

  },
  {
    to: '/register-formik',
    path: 'register-formik',
    Component: RegisterFormikPage,
    name: 'Register Formik Page'

  },
  {
    to: '/dinamic-form',
    path: 'dinamic-form',
    Component: DinamicForm,
    name: 'Dinamic Form'

  }
]
