import { Formik, Form } from 'formik'
import formJson from '../data/custom-form.json'
import { MyTextInput } from '../components'

const DinamicForm = () => {
  return (
    <div>
        <h1>DinamicForm</h1>

        <Formik
          initialValues={{
            name: ""
          }}
          onSubmit={(values) => {
            console.log(values)
          }}
          >
          {(formik) => (
            <Form>
              {formJson.map(({ type, name, placeholder, label }) => {
                return <MyTextInput
                key={name}
                type={(type as any)}
                 label={label}
                  name={name}
                  placeholder={placeholder}
                  />
              })}

              <button type='submit'>Submit</button>
            </Form>
          )}
        </Formik>
    </div>
  )
}

export default DinamicForm
