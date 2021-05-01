import React, {Fragment, useState} from 'react';
import {Input} from 'baseui/input';
import {Form,Inputs} from './style'
import { Button, SHAPE } from "baseui/button";


export const Dashboard = (props) => {
    
    const [value, setValue] = useState('');
    
    
    return (
        <Form>
        <Inputs>
            <Input
            value={value}
            onChange={event => setValue(event.currentTarget.value)}
            placeholder={props.type}
            />
        </Inputs>

        <Inputs>
            <Input
            value={value}
            onChange={event => setValue(event.currentTarget.value)}
            placeholder={props.description}
            />
        </Inputs>
        
        <Inputs>
            <Input
            value={value}
            onChange={event => setValue(event.currentTarget.value)}
            placeholder={props.price}
            endEnhancer=".00"
            />
        </Inputs>
        
        <Button
        onClick={() => alert("click")}
        shape={SHAPE.pill}
        >
        Add
        </Button>
        </Form>
        
    )
}








