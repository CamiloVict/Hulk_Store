import React, {Fragment} from 'react'
import { Dashboard } from '../../components/Dashboard'
import {TablePrice} from '../../components/Table'

import {Container, SectionOne, SectionTwo} from './style'

 export const Remove = (props) => {
    return (
        <Fragment>
           <Container>
                <SectionOne>
                    <TablePrice data = {props.data}/>
                </SectionOne>
                <SectionTwo>
                <Dashboard name="Name" reference = "Reference" price="Price" type = "Type" description = "Description" quantity = "Quantity" toggleAction = 'Remove'/>
                </SectionTwo>
           </Container>
        </Fragment>
    )
}





