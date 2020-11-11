import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse, NavbarBrand, Container, NavLink} from 'reactstrap';

function AppNavbar(props) {
    const [isOpen, setIsOpen ] = useState(false);

    return(
        <div>
            <Navbar className="mb-5" dark color="dark" expand="sm">
                <Container>
                    <NavbarBrand href="/">Shopping List</NavbarBrand>
                    <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink href="https://github.com/aadi2057">Github</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default AppNavbar;