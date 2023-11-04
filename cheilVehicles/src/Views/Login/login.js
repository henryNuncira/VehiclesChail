import React, { useState, useEffect } from "react";
// import { withRouter } from "react-router-dom";
// import MiniLoading from "../../Components/MiniLoading";
// import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEyeSlash,
  faCheck,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import "./login.css";

// Redux
import { useDispatch, useSelector } from "react-redux";
// Actions de Redux
// import { restorePasswordAction } from "redux/actions/clientsActions";
// import { Modal } from "react-bootstrap";
import { loginUser } from "../../Core/redux/actions/loginActions";
import MiniLoading from "../../Components/Loading/loading";
import { useNavigate } from "react-router";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
function Login(props) {
  // SHOW PASSWORD
  const [showPassword, setShowPassword] = useState(false);

  // PASSWORD RESTORE MODAL STATE
  const [showModal, setShowModal] = useState(false);

  // RESTORE STATE (TEMP)
  const [restore, setRestore] = useState(false);

  // LOGIN STATE (Loading/Not Loading)
  const [isLoading, setIsLoading] = useState(false);

  // ERROR MESSAGE STATE (Retrive user data from API)
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  // REDUX
  const dispatch = useDispatch();
  const cargando = useSelector(state => state.login.loading);
  const error = useSelector(state => state.login.error);
  const errorModalStore = useSelector(state => state.login.errorStore);
  const navigate = useNavigate();

  // USER LOGIN REDUX
  const login = async(emailLogin, pass) => {
    const sign_in= await dispatch(loginUser(emailLogin, pass, props));
    if(sign_in===true){
      navigate("/home");
    }
  };

  const callLogin = e => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <>
      {isLoading ? (
        <MiniLoading />
      ) : (
        <MDBContainer className='my-5'>
        <MDBCard>
  
          <MDBRow className='g-0 d-flex align-items-center'>
  
            <MDBCol md='4'>
              <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
            </MDBCol>
  
            <MDBCol md='8'>
  
              <MDBCardBody onClick={callLogin}>
  
                <MDBInput wrapperClass='mb-4'
                          label='Email'
                          id='form1'
                          type='text'
                          onChange={e => setEmail(e.target.value)}
                          value={email}
                          required/>
                <MDBInput wrapperClass='mb-4'
                          label='Password'
                          id='form2'
                          type={showPassword ? "text" : "password"}
                          onChange={e => setPassword(e.target.value)}
                          value={password}
                          required/>
  
                <div className="d-flex justify-content-between mx-4 mb-4">
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                  <a href="!#">Forgot password?</a>
                </div>
  
                <MDBBtn className="mb-4 w-100">
                {cargando ? (
                      <FontAwesomeIcon icon={faSpinner} className="spinner" />
                    ) : (<>
                      {"Sign in"}
                      </>
                    )}
                </MDBBtn>
  
              </MDBCardBody>
  
            </MDBCol>
  
          </MDBRow>
  
        </MDBCard>
      </MDBContainer>
      )}
    </>
  );
}

export default Login;
