import React, {useState} from 'react';
import {Input} from 'baseui/input';
import {Form,Inputs} from './style'
import { Button, SHAPE } from "baseui/button";
import {DATA} from '../../utils/data'

export const Dashboard = (props) => {
    
    const useInputValue = initialValue => {
        const [value, SetValue] = useState(initialValue)
        const onChange = e => SetValue(e.target.value.toLoweCase())

        return [value, onChange]
    }
    
   

    const type = useInputValue('');
    const description = useInputValue('');
    const price = useInputValue('');

    return (
        <Form>
        <Inputs>
            <Input
            name= 'type'
            value={type.value}
            onChange={type.onChange}
            placeholder={props.type}
            />
        </Inputs>

        <Inputs>
            <Input
            name= 'description'
            value={description.value}
            onChange={description.onChange}
            placeholder={props.description}
            />
        </Inputs>
        
        <Inputs>
            <Input
            name= 'price'
            value={price.value}
            onChange={price.onChange}
            placeholder={props.price}
            endEnhancer=".00"
            />
        </Inputs>
         
        <Button
        onClick = {()=>{console.log('was clicked')}}
        shape={SHAPE.pill}
        >
        {props.action}
        </Button>
        </Form>
        
    )
}








