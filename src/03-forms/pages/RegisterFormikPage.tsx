import '../styles/styles.css'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { MyTextInput } from '../components'

const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: ''
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Debe tener un mínimo de 2 caracteres')
            .max(15, 'Debe tener un máximo de 15 caracteres')
            .required('Requerido'),
          email: Yup.string()
            .email('Debe ser un email válido')
            .required('Requerido'),
          password1: Yup.string()
            .min(6, 'Debe tener un mínimo de 6 caracteres')
            .required('Requerido'),
          password2: Yup.string()
            .oneOf([Yup.ref('password1')], 'Las contraseñas deben coincidir')
            .required('Requerido')
        })}
      >
        {({handleReset}) => (
          <Form>
            <MyTextInput
              label="Nombre"
              name="name"
              placeholder="Fernanda"
            />

            <MyTextInput
              label="Email"
              name="email"
              type='email'
              placeholder="fernanda.nunez55@gmail.com"
            />

            <MyTextInput
            type='password'
              label="Password"
              name="password1"
            />

            <MyTextInput
            type='password'
              label="Confirm password"
              name="password2"
            />

            <button type="submit">Create</button>

            <button type='button' onClick={handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterFormikPage
