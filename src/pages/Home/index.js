import React, {Fragment} from 'react'
import { Dashboard } from '../../components/Dashboard'
import {TablePrice} from '../../components/Table'

import {Container, SectionOne} from './style'

export const Home = (props) => {
    return (
        <Fragment>
           <Container>
                <SectionOne>
                    <TablePrice data = {props.data}/>
                </SectionOne>
                
           </Container>
        </Fragment>
    )
}


