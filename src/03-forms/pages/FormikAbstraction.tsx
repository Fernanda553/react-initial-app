import { Field,Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'
import { MyTextInput } from '../components/MyTextInput'

const FormikAbstraction = () => {

  return (
    <div>
        <h1>Formik Abstraction</h1>

        <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email:'',
          terms: false,
          jobType: ''
        }}

        onSubmit={(values) => {
            console.log(values)
        }}

        validationSchema={ Yup.object({
          firstName: Yup.string()
                          .max(15, 'Debe tener maximo 15 caracteres')
                          .required('Requerido'),
          lastName: Yup.string()
                        .max(15, 'Debe de tener maximo 15 caracteres')
                        .required('Requerido'),
          email: Yup.string()
                    .email('Debe ser un email valido')
                    .required('Requerido'),

          terms: Yup.boolean()
                      .oneOf([true], 'Debe de aceptar las condiciones'),

          jobType: Yup.string()
                      .notOneOf(['it-jr'], 'Esta opción no es permitida')
                      .required('Requerido')
          })

        }
        >
          {(formik )=> (
                <Form>
                  <MyTextInput
                  label="FirstName"
                  name="firstName"
                  placeholder='Fernanda'
                  />

                  <MyTextInput
                  label="LastName"
                  name="lastName"
                  placeholder='Nuñez'
                  />

                  <MyTextInput
                  label="Email Adress"
                  name="email"
                  placeholder='fernanda.nunez@gmail.com'
                  type='email'
                  />

                  <label htmlFor='jobType'>Job Type</label>
                  <Field name='jobType' as='select'>

                    <option value='' >Pick something</option>
                    <option value='developer' >Developer</option>
                    <option value='designer' >Designer</option>
                    <option value='it-senior' >IT senior</option>
                    <option value='it-jr' >IT jr</option>

                  </Field>
                  <ErrorMessage name='jobType' component={"span"}/>

                  <label htmlFor='terms'>
                  <Field name='terms' type='checkbox'/>
                    terms and condition
                    </label>
                  <ErrorMessage name='terms' component={"span"}/>

                  <button type='submit'>Submit</button>
                </Form>
          )}
        </Formik>

    </div>
  )
}

export default FormikAbstraction
