import React from 'react'
import { OnCircle, OffCirlce } from './styles'

const Circle = ({ on }) => {
    return <>{on ? <OnCircle /> : <OffCirlce />}</>
}

export default Circle
