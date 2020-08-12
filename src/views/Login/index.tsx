import React from 'react'
import AppBar from '../../components/AppBar'
import { Container, Segment } from 'semantic-ui-react'
import styles from './Login.module.css'
import LoginForm from './LoginForm'

const Login = () => {
    return (
        <div className="top">
            <AppBar initialActiveItem="signUp"/>
            <Container >
                <div className={styles.formContainer}>
                <Segment>
                    <LoginForm/>
                </Segment>
                </div>
            </Container>
        </div>
    )
}

export default Login