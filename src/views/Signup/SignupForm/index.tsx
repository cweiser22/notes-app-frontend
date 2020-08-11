import React from 'react'
import * as Yup from 'yup'
import { useFormik, Formik } from 'formik'
import { Form, Loader, Button } from 'semantic-ui-react'
import { time } from 'console'

interface Values{
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    password: string;
}

const SignupSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
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

const SignupForm = () => {
    const {getFieldProps, getFieldMeta, isSubmitting, handleSubmit, errors, touched} = useFormik<Values>({
        validationSchema: SignupSchema,
        initialValues: {
            username:'',
            password:'',
            email:'',
            firstName:'',
            lastName:''
        },
        onSubmit: async () => {
            console.log('Submitted signup.')
            sleep(2000)
        }
    })

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Field>
                <label>Email</label>
                <input placeholder="Email" id="email" {...getFieldProps("email")}/>
                
            </Form.Field>
            <Form.Field>
                <label>Username</label>
                <input placeholder="Username" id="username" {...getFieldProps("username")}/>
            </Form.Field>
            <Form.Field>
                <label>First Name</label>
                <input placeholder="First Name" name="firstName"/>
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder="Last Name" name="lastName"/>
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder="Password" type="password" name="password"/>
            </Form.Field>
            {isSubmitting? <Loader/> : <Button type="submit" onClick={() => handleSubmit()}>Submit</Button>}
        </Form>
    )
}

export default SignupForm