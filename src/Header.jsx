import React, { useState } from "react";
import UftmLogo from "./uftmlogo.png";
import "./Header.css";
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
} from "mdb-react-ui-kit";

function Header() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" className="header-nav">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <img src={UftmLogo} alt="logo-uftm"></img>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 justify-content-around">
            <MDBNavbarItem>
              <MDBNavbarLink aria-current="page" href="#">
                <div className="p-2 bg-success bg-gradient text-white rounded-5 hover-shadow d-flex justify-content-center">
                  Listar Tabela
                </div>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink aria-current="page" href="#">
                <div className="p-2 bg-success bg-gradient text-white rounded-5 hover-shadow d-flex justify-content-center">
                  Cadastrar Tabela
                </div>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink aria-current="page" href="#">
                <div className="p-2 bg-success bg-gradient text-white rounded-5 hover-shadow d-flex justify-content-center">
                  Listar Equipamento
                </div>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink aria-current="page" href="#">
                <div className="p-2 bg-success bg-gradient text-white rounded-5 hover-shadow d-flex justify-content-center">
                  Cadastrar Equipamento
                </div>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className="d-flex input-group w-auto form-floating">
            <input
              type="search"
              className="form-control p-4 me-1 rounded-5"
              placeholder="Pesquisar"
              aria-label="Search"
              id="search"
              name="search"
              label="search"
              maxLength={20}
            />
            <MDBBtn color="success" className="rounded-5">
              Search
            </MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header;
