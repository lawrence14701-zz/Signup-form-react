import React, { useState } from 'react'
import RestForm from './RestaurantForm/Form'
import Account from './Account/Form'
import { RightSide, LeftSide, Title, Flex } from './styles'
import Circle from './Cirlce/Cirlcle'

const Form = () => {
    const [restaurant, setRestaurant] = useState({
        name: '',
        outlets: '',
        country: '',
        hear: '',
    })
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        countryCode: '',
        number: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [toggle, setToggle] = useState(false)

    const handleChange = (e) => {
        const type = e.target.name
        const value = e.currentTarget.value
        if (type === 'name') {
            setRestaurant({ ...restaurant, name: value })
        } else if (type === 'outlets') {
            setRestaurant({ ...restaurant, outlets: value })
        } else if (type === 'country') {
            setRestaurant({ ...restaurant, country: value })
        } else if (type === 'hear') {
            setRestaurant({ ...restaurant, hear: value })
        }
    }

    return (
        <>
            <LeftSide />
            <RightSide>
                <Flex>
                    <Circle on={!toggle}/>
                    <Title>Restaurant</Title>
                    <Circle on={toggle}/>
                    <Title>Account set up</Title>
                </Flex>
                {!toggle ? (
                    <>
                        <RestForm handleChange={handleChange} restaurant={restaurant} pageChange={setToggle} />
                    </>
                ) : (
                    <Account pageChange={setToggle} handleChange={handleChange} user={user} />
                )}
            </RightSide>
        </>
    )
}

export default Form
