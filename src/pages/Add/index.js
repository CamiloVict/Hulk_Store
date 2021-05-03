import React, {Fragment,useState} from 'react'
import { Dashboard } from '../../components/Dashboard'
import {TablePrice} from '../../components/Table'

import {useInputValue} from '../../hooks/useInputValue'
import {Container, SectionOne, SectionTwo} from './style'


 export const Add = (props) => {
     
        const [value, setValue] = useState('')
        
        const onChange = e => {
            setValue(e.target.value)
            console.log(e.target.value)
            return {value, onChange}   
        }
    
    
    return (
        <Fragment>
           <Container>
                <SectionOne>
                    <TablePrice data = {props.data}/>
                </SectionOne>
                <SectionTwo>
                    <Dashboard 
                    name="Name" 
                    reference = "Reference" 
                    price="Price"
                    type = "Type"
                    description = "Description"
                    quantity = "Quantity"
                    toggleAction = 'Add'
                    // data = {data}
                    onChange = {onChange}     
                        />
                </SectionTwo>
           </Container>
        </Fragment>
    )
}





