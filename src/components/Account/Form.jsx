import React from 'react'
import { Container } from './styles'
import { Label, Input, Spacing, Button, Flex } from '../styles'

const FormComponent = ({ handleChange, user, pageChange }) => {
    console.log(user)
    return (
        <>
            <Container>
                <Label>
                    What is your first name?
                    <Input type="text" name="firstName" onChange={handleChange} value={user.firstName} />
                </Label>
                <Spacing />
                <Label>
                    What is your last name?
                    <Input type="text" name="lastName" onChange={handleChange} value={user.lastName} />
                </Label>
                <Spacing />

                <Label>
                    Country code
                    <Input type="text" name="countryCode" onChange={handleChange} value={user.countryCode} />
                </Label>
                <Spacing />

                <Label>
                    What is the best number to reach you?
                    <Input type="text" name="number" onChange={handleChange} value={user.number} />
                </Label>
                <Spacing />

                <Label>
                    What is your email?
                    <Input type="text" name="email" onChange={handleChange} value={user.email} />
                </Label>
                <Spacing />
                <Label>
                    Password
                    <Input type="password" name="password" onChange={handleChange} value={user.password} />
                </Label>
                <Spacing />

                <Label>
                    Confirm password
                    <Input type="password" name="confirmPassowrd" onChange={handleChange} value={user.confirmPassword} />
                </Label>
                <Spacing />
                <Flex>
                    <Button onClick={() => pageChange(false)}>Go Back</Button>
                </Flex>
            </Container>
        </>
    )
}

export default FormComponent
