import React from "react";
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBContainer,
    MDBInputGroup
} from 'mdb-react-ui-kit';

function Login() {
    return (
        <MDBContainer className="vh-100 d-flex justify-content-center align-items-center">
            <MDBRow className="border w-50 h-50 justify-content-center">
                <MDBCol size={10}>
                    <form className="h-100 d-flex flex-column justify-content-center">
                        <span className="d-flex justify-content-center">
                            <p className="fs-3">LOGIN</p>
                        </span>
                        <MDBInputGroup className='mb-5' textAfter='@uftm.edu.br'>
                            <input className='form-control' type='text' placeholder="E-mail institucional" />
                        </MDBInputGroup>
                        <MDBInput className='' type='password' id='form1Example2' label='Password' />

                        <MDBRow className='mb-4 mt-4'>
                            <MDBCol className='d-flex justify-content-center'>
                                <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
                            </MDBCol>
                            <MDBCol>
                                <a href='#!'>Forgot password?</a>
                            </MDBCol>
                        </MDBRow>

                        <MDBBtn type='submit' block>
                            Sign in
                        </MDBBtn>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Login;