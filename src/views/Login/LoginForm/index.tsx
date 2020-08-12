import React from 'react'
import * as Yup from 'yup'
import { useFormik, Formik } from 'formik'
import { Form, Loader, Button, Header } from 'semantic-ui-react'
import { time } from 'console'

interface Values{
    username: string;
    password: string;
}

const SignupSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().min(8).required()
})

function sleep(milliseconds: number) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

const LoginForm = () => {
    const {getFieldProps, getFieldMeta, isSubmitting, handleSubmit, errors, touched} = useFormik<Values>({
        validationSchema: SignupSchema,
        initialValues: {
            username:'',
            password:'',
        
        },
        onSubmit: async () => {
            console.log('Submitted signup.')
            sleep(2000)
        }
    })

    return (
        <Form onSubmit={handleSubmit}>
            <Header>
                Login
            </Header>
            <Form.Field>
                <label>Username</label>
                <input placeholder="Username" id="username" {...getFieldProps("username")}/>
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder="Password" type="password" name="password"/>
            </Form.Field>
            {isSubmitting? <Loader/> : <Button type="submit" onClick={() => handleSubmit()}>Submit</Button>}
        </Form>
    )
}

export default LoginForm