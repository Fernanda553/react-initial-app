import { Field,Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'

const FormikComponents = () => {

  return (
    <div>
        <h1>Formik Components</h1>

        <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email:''
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
                    .required('Requerido')
          })
        }
        >
          {(formik )=> (
                <Form>
                  <label htmlFor='firstName'>First Name</label>
                  <Field name='fisrtName' type='text'/>
                  <ErrorMessage name='firstName' component={"span"}/>

                  <label htmlFor='lastName'>Last Name</label>
                  <Field name='lastName' type='text'/>
                  <ErrorMessage name='lastName' component={"span"}/>

                  <label htmlFor='email'>Email Address</label>
                  <Field name='email' type='text'/>
                  <ErrorMessage name='email' component={"span"}/>

                  <button type='submit'>Submit</button>
                </Form>
          )}
        </Formik>

    </div>
  )
}

export default FormikComponents
