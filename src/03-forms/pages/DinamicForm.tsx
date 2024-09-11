import { Formik, Form } from 'formik'
import formJson from '../data/custom-form.json'
import { MySelect, MyTextInput } from '../components'

const initialValues: {[x: string]: any} = {}

for(const input of formJson){
  initialValues[input.name] = input.value
}

const DinamicForm = () => {
  return (
    <div>
        <h1>DinamicForm</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values)
          }}
          >
          {(formik) => (

            <Form>
              {formJson.map(({ type, name, placeholder, label , options}) => {

                if(type === 'email' || type === 'input' || type === 'password'){
                  return <MyTextInput
                  key={name}
                  type={(type as any)}
                   label={label}
                    name={name}
                    placeholder={placeholder}
                    />

                }else if(type === 'select'){
                  return <MySelect
                  key={name}
                   label={label}
                    name={name}>

                      <option value={''}>Select an option</option>
                      {
                        options?.map(({id, label}) => (
                          <option key={id} value={id}>{label}</option>
                        ))
                      }

                  </MySelect>

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
