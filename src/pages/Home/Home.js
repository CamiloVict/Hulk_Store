import React, {Fragment} from 'react'
import {TablePrice} from '../../components/Table'

import {Container, SectionOne, SectionTwo} from './style'

const Home = () => {
    return (
        <Fragment>
           <Container>
                <SectionOne>
                    <TablePrice />
                </SectionOne>
                <SectionTwo>
                    <TablePrice />
                </SectionTwo>
           </Container>
        </Fragment>
    )
}

export default Home
