import React, {Fragment} from 'react'
import { Dashboard } from '../../components/Dashboard'
import {TablePrice} from '../../components/Table'

import {Container, SectionOne} from './style'

const Home = () => {
    return (
        <Fragment>
           <Container>
                <SectionOne>
                    <TablePrice />
                </SectionOne>
                
           </Container>
        </Fragment>
    )
}

export default Home
