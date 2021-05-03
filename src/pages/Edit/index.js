import React, { Fragment, useState } from 'react'
import { Dashboard } from '../../components/Dashboard'
import { CardProduct } from '../../components/CardProduct'
import { Input } from "baseui/input";
import { Container, SectionOne, SectionTwo,ContainerFooter } from './style'


export const Edit = (props) => {

    const [title, setTitle] = useState('');
    const [reference, setReference] = useState('') 
    const [description, setDescription] = useState('') 
    const [price, setPrice] = useState(''); 
    const [quantity,setQuantity] = useState('');

    const onChange = e => {
        e.target.name == 'name' ? setTitle(e.target.value) : ''
        e.target.name == 'description' ? setDescription(e.target.value) : ''
        e.target.name == 'reference' ? setReference(e.target.value) : ''
        e.target.name == 'price' ? setPrice(e.target.value) : ''
        e.target.name == 'quantity' ? setQuantity(e.target.value) : ''
        return {title,reference,description,price,quantity }   
    }
    
    // const title = useInputValue('');
    // const subtitle = useInputValue('');
    // const description = useInputValue('');
    // const price = useInputValue('');
    // const quantity = useInputValue('');

    
    return (
        <Fragment>
            <Container>
                <Input
                    onChange = {onchange}
                    placeholder="Search Item"
                    clearOnEscape
                />
           
            <ContainerFooter>
                <SectionOne>
                    <CardProduct
                    title = {title}
                    reference = {reference}
                    description = {description}
                    price = {price}
                    quantity = {quantity}
                    />
                </SectionOne>

                <SectionTwo>
                <Dashboard name="Name" 
                    reference = "Reference" 
                    price="Price" 
                    type = "Type" 
                    description = "Description" 
                    quantity = "Quantity" 
                    toggleAction = 'Edit' 
                    onChange={onChange}/>
                </SectionTwo>
            </ContainerFooter>
        </Container>
        </Fragment>
    )
}
