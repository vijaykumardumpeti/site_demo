    import React, { useState } from 'react';
    import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
    } from 'reactstrap';

    import { Link } from 'react-router-dom';
    import { HiOutlineLogout } from "react-icons/hi";
import LogoutModel from './logoutModel';


    function NavbarComponent(args) {
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const toggleModel = () => setModal(!modal);

    return (
        <div>
        <Navbar className='border rounded shadow bg-white' light={false} dark={false} full={true} expand={'md'} container={'fluid'} fixed={'top'}>
        <NavbarBrand className='border rounded-circle shadow p-2' href="/">
        <img
            alt="logo"
            src="https://res.cloudinary.com/dymmp1vtz/image/upload/v1690716883/czm1ul830lbbjupav8kl.png"
            style={{
            height: 40,
            width: 35
            }}
        />
        <small>Earn</small>
        </NavbarBrand>

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
                <NavItem >
                    <Link to='/' onClick={toggle} className='list-style-type-none'>
                        <NavLink className='custom-hover'>
                                Home
                        </NavLink>
                    </Link>
                </NavItem>
                <NavItem >
                    <Link to='/contact' onClick={toggle} className='list-style-type-none'>
                        <NavLink className='custom-hover'>
                                Contact us
                        </NavLink>
                    </Link>
                </NavItem>
                <NavItem >
                    <Link to='/about' onClick={toggle} className='list-style-type-none'>
                        <NavLink className='custom-hover'>
                                About Us
                        </NavLink>
                    </Link>
                </NavItem>
                <NavItem >
                <Link to='/overview' onClick={toggle} className='list-style-type-none'>
                    <NavLink className='custom-hover'>
                            overview
                    </NavLink>
                </Link>
                </NavItem>
                <NavItem>
                <Link to='/signin' onClick={toggle} className='list-style-type-none'>
                    <NavLink className='custom-hover'>
                        Sigin
                    </NavLink>
                </Link>
                </NavItem>
                <NavItem>
                <Link to='/signup' onClick={toggle} className='list-style-type-none'>
                    <NavLink className='custom-hover'>
                            Signup
                    </NavLink>
                </Link>
                </NavItem>
                <UncontrolledDropdown direction='down' nav inNavbar start>
                    <DropdownToggle nav caret className='custom-hover'>
                        Options
                    </DropdownToggle>
                    <DropdownMenu left>
                    <DropdownItem header>Choose Your option</DropdownItem>
                    <DropdownItem divider />
                    <Link to='/option-1' onClick={toggle} className='list-style-type-none'>
                        <DropdownItem className='custom-hover'>
                                Option 1
                        </DropdownItem>
                    </Link>
                    <Link to='/option-2' onClick={toggle} className='list-style-type-none'>
                        <DropdownItem className='custom-hover'>
                                Option 2
                        </DropdownItem>
                    </Link>
                    <DropdownItem divider />
                    <Link to='/option-1' onClick={toggle} className='list-style-type-none'>
                        <DropdownItem className='custom-hover'>
                                    Reset                            
                        </DropdownItem>
                    </Link>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
            <NavLink className='custom-hover py-2 shadow'  onClick={()=>{
                toggle()
                toggleModel()
            }}><HiOutlineLogout className='fs-4' /></NavLink>
            </Collapse>
        </Navbar>

        <LogoutModel toggleModel={toggleModel} model={modal} />
        </div>
    );
    }

    export default NavbarComponent;