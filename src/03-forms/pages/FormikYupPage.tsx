import { useFormik } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

const FormikYupPage = () => {

  const {handleChange, handleSubmit, handleBlur ,touched, values, errors } = useFormik({
    initialValues:{
      firstName: '',
      lastName: '',
      email:''
    },
    onSubmit:(values) =>{
      console.log(values)
    },
    validationSchema: Yup.object({
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
  })

  return (
    <div>
        <h1>Formik Yup</h1>
        <form onSubmit={handleSubmit} noValidate>
        <label htmlFor='firstName'>First Name</label>
        <input
        type='text'
        name='firstName'
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.firstName}
        />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

        <label htmlFor='lastName'>Last Name</label>
        <input
        type='text'
        name='lastName'
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.lastName}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor='email'>Email Address</label>
        <input
        type='email'
        name='email'
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormikYupPage
