import React, {Fragment} from 'react'
import { Dashboard } from '../../components/Dashboard'
import {TablePrice} from '../../components/Table'

import {Container, SectionOne, SectionTwo} from './style'

 export const Remove = () => {
    return (
        <Fragment>
           <Container>
                <SectionOne>
                    <TablePrice />
                </SectionOne>
                <SectionTwo>
                    <Dashboard price="Price" type = "Type" description = "Description" action = 'Remove'/>
                </SectionTwo>
           </Container>
        </Fragment>
    )
}





