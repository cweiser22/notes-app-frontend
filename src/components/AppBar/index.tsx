import React, { useState } from 'react'
import { Segment, Menu, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const AppBar: React.FC<{initialActiveItem: string}> = ({initialActiveItem}) => {

    const NotLoggedInLinks = () => {
        return (
         
                <Menu.Menu position="right">
                     <Menu.Item name="signUp"  >
                   <Link to="/login"> <Button >Log In</Button></Link>
                </Menu.Item>
                <Menu.Item name="signUp" >
                    <Link to="/sign-up"><Button color="blue">Sign Up</Button></Link>
                </Menu.Item>
               
                </Menu.Menu>
        )
    }

    const [activeItem, setActiveItem] = useState<string>(initialActiveItem);

    return (
  
            <Menu fixed="top" inverted >
                <Menu.Item header>
                    Notes
                </Menu.Item>
                <NotLoggedInLinks/>
            </Menu>

    )
}

export default AppBar