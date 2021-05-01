import React, {Fragment} from 'react'
import { Dashboard } from '../../components/Dashboard'
import {CardProduct} from '../../components/CardProduct'
import {Container, SectionOne, SectionTwo} from './style'

 export const Edit = () => {
    return (
        <Fragment>
           <Container>
                <SectionOne>
                    <CardProduct/>
                </SectionOne>
                <SectionTwo>
                    <Dashboard price="Price" type = "Type" description = "Description" action = 'Edit'/>
                </SectionTwo>
           </Container>
        </Fragment>
    )
}
