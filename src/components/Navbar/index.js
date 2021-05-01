import React from 'react'
import {
   HeaderNavigation,
   ALIGN,
   StyledNavigationItem as NavigationItem,
   StyledNavigationList as NavigationList,
 } from 'baseui/header-navigation';
 import {StyledLink as Link} from 'baseui/link';
 import {StatefulSelect as Search, TYPE} from 'baseui/select';




const options = {
   options: [
     {id: 'cup', type: '1'},
     {id: 'shirt', type: '2'},
   ],
   labelKey: 'id',
   valueKey: 'type',
   placeholder: 'Search item',
   maxDropdownHeight: '300px',
 };


 export const Navbar = () => {
    return (
      <HeaderNavigation>
      <NavigationList $align={ALIGN.left}>
        <NavigationItem>Marvel</NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.center} />
      <NavigationList $align={ALIGN.right}>
        <NavigationItem>
          <Link href="#search-link1">Edit</Link>
        </NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.right}>
        <NavigationItem style={{width: '200px'}}>
          <Search
            {...options}
            type={TYPE.search}
            getOptionLabel={props => props.option.id || null}
            onChange={() => {}}
          />
        </NavigationItem>
      </NavigationList>
    </HeaderNavigation>
    )
}


