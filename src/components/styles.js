import styled from 'styled-components'

export const RightSide = styled.div`
    box-sizing: border-box;
    padding-top: 150px;
    height: 100%;
    width: 50%;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
    right: 0;
`

export const LeftSide = styled.div`
    height: 100%;
    width: 50%;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
    left: 0;
    border-radius: 5px;
    //colors came from (https://uigradients.com/#CitrusPeel)
    background: -webkit-linear-gradient(to right, #fdc830, #f37335); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #fdc830, #f37335); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

export const Label = styled.label`
    font-weight: bold;
    font-size: 15px;
`

export const Title = styled.h1`
    padding: 10px;
    font-weight: bold;
    font-size: 20px;
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
    color: #333;
    margin: 0 auto;
    border-radius: 0.2rem;
    background-color: lightgray;
    border: none;
    display: block;
    border-bottom: 0.3rem solid transparent;
`

export const Spacing = styled.div`
    width: 100%;
    height: 15px;
`

export const Button = styled.button`
    cursor: pointer;
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 10px;
    //colors came from (https://uigradients.com/#CitrusPeel)
    background: -webkit-linear-gradient(to right, #fdc830, #f37335); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #fdc830, #f37335); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`
