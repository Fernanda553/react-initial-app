import { Formik, Form } from 'formik'
import formJson from '../data/custom-form.json'
import { MySelect, MyTextInput } from '../components'
import * as Yup from 'yup'

const initialValues: { [x: string]: any } = {}
const requiredFields: { [x: string]: any } = {}

for (const input of formJson) {
  initialValues[input.name] = input.value

  if (!input.validations) continue

  let schema = Yup.string()

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Este campo es requerido')
    }

    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value || 2, `Mínimo de ${(rule as any).value || 2} caracteres`)
    }

    if (rule.type === 'email') {
      schema = schema.email('Debe ser un formato valido')
    }
  }

  requiredFields[input.name] = schema
}

const validationSchema = Yup.object({ ...requiredFields })

const DinamicForm = () => {
  return (
    <div>
      <h1>DinamicForm</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (

          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === 'email' || type === 'input' || type === 'password') {
                return (
                  <MyTextInput
                    key={name}
                    type={(type as any)}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                  />
                )
              } else if (type === 'select') {
                return (
                  <MySelect
                    key={name}
                    label={label}
                    name={name}
                  >

                    <option value=''>Select an option</option>
                    {
                        options?.map(({ id, label }) => (
                          <option key={id} value={id}>{label}</option>
                        ))
                      }

                  </MySelect>
                )
              }
            })}

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default DinamicForm
