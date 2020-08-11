import React from 'react'
import AppBar from '../../components/AppBar'
import { Container, Segment } from 'semantic-ui-react'
import SignupForm from './SignupForm'
import styles from './Signup.module.css'

const Signup = () => {
    return (
        <div className="top">
            <AppBar initialActiveItem="signUp"/>
            <Container >
                <div className={styles.formContainer}>
                <Segment>
                    <SignupForm />
                </Segment>
                </div>
            </Container>
        </div>
    )
}

export default Signup