import React, { Fragment } from 'react'
import { Dashboard } from '../../components/Dashboard'
import { CardProduct } from '../../components/CardProduct'
import { Input } from "baseui/input";
import { Container, SectionOne, SectionTwo,ContainerFooter } from './style'

import {useInputValue} from '../../hooks/useInputValue'

export const Edit = (props) => {
    const searchInput = useInputValue('')

    return (
        <Fragment>
            <Container>
                <Input
                    {...searchInput}
                    placeholder="Search Item"
                    clearOnEscape
                />
           
            <ContainerFooter>
                <SectionOne>
                    <CardProduct data = {props.data}/>
                </SectionOne>
                <SectionTwo>
                <Dashboard name="Name" reference = "Reference" price="Price" type = "Type" description = "Description" quantity = "Quantity" toggleAction = 'Edit'/>
                </SectionTwo>
            </ContainerFooter>
        </Container>
        </Fragment>
    )
}
