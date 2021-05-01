import React from 'react'
import { Link } from 'react-router-dom';

import {NavbarStyle,Img, Input} from './styles'

 export const Navbar = () => {
    return (
        <NavbarStyle>
        <a>
           <Img src = '' alt = 'Logo'/> 
        </a>
           <Input type = 'text' name = 'search' placeholder = '  Search' />
        </NavbarStyle>
    )
}


