import React from "react";
import ProductTeardrown from "./product_teardrown.svg";
import "./Login.css";

import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBContainer,
  MDBInputGroup,
  MDBSwitch,
} from "mdb-react-ui-kit";

function Login() {
  return (
    <div id="login-page" className="d-flex align-items-center">
      <div
        className="container col-11 col-md-9 d-flex align-items-center"
        id="form-container"
      >
        <div className="row align-items-center gx-5">
          <div className="col-md-6 order-md-2">
            <h2>Faça o login para continuar</h2>
            <form>
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="user"
                  name="user"
                  label="Usuário"
                  placeholder="Digite seu usuário"
                />
                <label for="user" className="form-label">
                  Digite seu usuário
                </label>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    name="pwd"
                    label="Senha"
                    placeholder="Digite sua senha"
                  />
                  <label for="pwd" className="form-label">
                    Digite sua senha
                  </label>
                </div>
                <div className="d-flex d-md-block justify-content-center">
                  <input
                    type="submit"
                    className="btn btn-primary mt-2 mt-md-4"
                    value="Entrar"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6 order-md-1">
            <div className="col-12">
              <img
                src={ProductTeardrown}
                alt="Product Teardrown"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
