import React, {Fragment,useState} from 'react'
import { Dashboard } from '../../components/Dashboard'
import {TablePrice} from '../../components/Table'

import {Container, SectionOne, SectionTwo} from './style'


 export const Add = (props) => {
     
    return (
        <Fragment>
           <Container>
                <SectionOne>
                    <TablePrice data = {props.data}/>
                </SectionOne>
                <SectionTwo>
                    <Dashboard price="Price" type = "Type" description = "Description" action = 'Add'/>
                </SectionTwo>
           </Container>
        </Fragment>
    )
}





