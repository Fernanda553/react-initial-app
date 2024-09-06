import '../styles/styles.css'

const FormikBasicPage = () => {
  return (
    <div>
        <h1>Formik Basic Tutorial</h1>
        <form noValidate>
        <label htmlFor='firstName'>First Name</label>
        <input
        type='text'
        name='firstName'
        />
        <span>First name is required</span>

        <label htmlFor='firstName'>Last Name</label>
        <input
        type='text'
        name='lastName'
        />
        <span>Last name is required</span>
        <span>Check for an valid email format</span>

        <label htmlFor='firstName'>Email Address</label>
        <input
        type='email'
        name='email'
        />
        <span>Email is required</span>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormikBasicPage
