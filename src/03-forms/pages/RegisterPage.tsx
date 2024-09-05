import {FormEvent} from 'react'
import '../styles/styles.css'
import { useForm } from '../hooks/useForm'

const RegisterPage = () => {
    const { name, email, password1, password2, formData, onChange } = useForm({
      name: '',
      email: '',
      password1: '',
      password2: ''
  })

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      console.log(formData)
    }
  return (
    <div>
        <h1>Register Page</h1>

        <form onSubmit={onSubmit}>
            <input
            type="text"
            placeholder="Name"
            name='name'
            value={name}
            onChange={onChange}
            />

            <input
            type="email"
            name='email'
            placeholder="Email"
            value={email}
            onChange={onChange}
            />

            <input
            type="password"
            placeholder="Password"
            name='password1'
            value={password1}
            onChange={onChange}
            />

            <input
            type="password"
            placeholder="Repeat password"
            name='password2'
            value={password2}
            onChange={onChange}
            />

            <button type="submit">Create</button>
        </form>
    </div>
  )
}

export default RegisterPage
