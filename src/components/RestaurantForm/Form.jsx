import React from 'react'
import { Label, Input, Spacing, Button } from '../styles'
import { Container, VerticleCenter } from './styles'

const FormComponent = ({ handleChange, restaurant, pageChange }) => {
    console.log(restaurant)
    return (
        <>
            <Container>
                <VerticleCenter>
                    <Label>
                        What is the name of your restaurant?
                        <Input type="text" name="name" onChange={handleChange} value={restaurant.name} />
                    </Label>
                    <Spacing />
                    <Label>
                        How many outlets do you own?
                        <Input type="text" name="outlets" onChange={handleChange} value={restaurant.outlets} />
                    </Label>
                    <Spacing />
                    <Label>
                        What country is your restaurant located?
                        <Input type="text" name="country" onChange={handleChange} value={restaurant.country} />
                    </Label>
                    <Spacing />
                    <Label>
                        How did you hear about us?
                        <Input type="text" name="hear" onChange={handleChange} value={restaurant.hear} />
                    </Label>
                    <Spacing />
                    <Button onClick={() => pageChange(true)}>Continue</Button>
                </VerticleCenter>
            </Container>
        </>
    )
}

export default FormComponent
