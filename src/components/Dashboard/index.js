import React, {useState} from 'react';
import {Input} from 'baseui/input';
import {Form,Inputs} from './style'
import { Button, SHAPE } from "baseui/button";

export const Dashboard = (props) => {
    
    
    // const name = useInputValue('');
    // const description = useInputValue('');
    // const reference = useInputValue('');
    // const price = useInputValue('');
    // const quantity = useInputValue('');
    
    return (
        <Form>
        <Inputs>
            <Input
            //  {...name}
            name = 'name'
            onChange={props.onChange}
            placeholder={props.name}
            />
        </Inputs>
        <Inputs>
            <Input
            // {...description}
            name= 'description'
            onChange={props.onChange}
            placeholder={props.description}
            />
        </Inputs>

        <Inputs>
            <Input
            name= 'reference'
            onChange={props.onChange}
            placeholder={props.reference}
            />
        </Inputs>

        <Inputs>
            <Input
            name= 'quantity'
            onChange={props.onChange}
            placeholder={props.quantity}
            />
        </Inputs>
        
        <Inputs>
            <Input
            name= 'price'
            onChange={props.onChange}
            placeholder={props.price}
            endEnhancer=".00"
            />
        </Inputs>
         
        <Button type = "button"
        onClick = {() => console.log('click')}
        shape={SHAPE.pill}
        >
        {props.toggleAction}
        </Button>
        </Form>
        
    )
}








