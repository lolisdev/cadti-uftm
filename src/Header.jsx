import React, { useState } from 'react';
import UftmLogo from './uftmlogo.png'
import './Header.css'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBCollapse,
} from 'mdb-react-ui-kit';

function Header() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' className='header-nav'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'>
                    <img src={UftmLogo} alt='logo-uftm'></img>
                </MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 justify-content-around'>
                        <MDBNavbarItem>
                            <MDBNavbarLink aria-current='page' href='#' className='text-white'>
                                PESQUISAR TABELA
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink aria-current='page' href='#' className='text-white'>
                                NOVA TABELA
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink aria-current='page' href='#' className='text-white'>
                                PESQUISAR EQUIPAMENTO
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink aria-current='page' href='#' className='text-white'>
                                NOVO EQUIPAMENTO
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                    </MDBNavbarNav>

                    <form className='d-flex input-group w-auto'>
                        <input type='search' className='form-control' placeholder='Pesquisar item' aria-label='Search' />
                        <MDBBtn color='primary'>Search</MDBBtn>
                    </form>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}

export default Header;