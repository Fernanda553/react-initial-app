import { useFormik } from 'formik'
import '../styles/styles.css'

const FormikBasicPage = () => {
  const {handleChange, handleSubmit, values} = useFormik({
    initialValues:{
      firstName: '',
      lastName: '',
      email:''
    },
    onSubmit:(values) =>{
      console.log(values)
    }
  })
  return (
    <div>
        <h1>Formik Basic Tutorial</h1>
        <form onSubmit={handleSubmit} noValidate>
        <label htmlFor='firstName'>First Name</label>
        <input
        type='text'
        name='firstName'
        onChange={handleChange}
        value={values.firstName}
        />
        <span>First name is required</span>

        <label htmlFor='firstName'>Last Name</label>
        <input
        type='text'
        name='lastName'
        onChange={handleChange}
        value={values.lastName}
        />
        <span>Last name is required</span>
        <span>Check for an valid email format</span>

        <label htmlFor='firstName'>Email Address</label>
        <input
        type='email'
        name='email'
        onChange={handleChange}
        value={values.email}
        />
        <span>Email is required</span>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormikBasicPage
