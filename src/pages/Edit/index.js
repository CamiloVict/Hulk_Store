import React, { Fragment } from 'react'
import { Dashboard } from '../../components/Dashboard'
import { CardProduct } from '../../components/CardProduct'
import { Input } from "baseui/input";
import { Container, SectionOne, SectionTwo,ContainerFooter } from './style'

export const Edit = () => {
    const [value, setValue] = React.useState("");

    return (
        <Fragment>
            <Container>
                <Input
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="Search Item"
                    clearOnEscape
                />
           
            <ContainerFooter>
                <SectionOne>
                    <CardProduct />
                </SectionOne>
                <SectionTwo>
                    <Dashboard price="Price" type="Type" description="Description" action='Edit' />
                </SectionTwo>
            </ContainerFooter>
        </Container>
        </Fragment>
    )
}
