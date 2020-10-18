/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-eval */
/* eslint-disable no-use-before-define */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-redeclare */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
import React, { Component,useState,useEffect} from 'react';
import { Container } from "reactstrap";

//Import Breadcrumb
// import Breadcrumbs from '../../components/Common/Breadcrumb';
import TaskCreator from './TaskCreator'
import {  useAuth0} from "@auth0/auth0-react";
import { Redirect } from 'react-router-dom';
// import logodark from '../../assets/images/Platform.png';
// import useContextMenu from "./ContextMenu";
const StarterPage = (props) => {
    const [token, setToken] = useState("");
    const { isAuthenticated, user, getAccessTokenSilently, logout } = useAuth0();

    // const { xPos, yPos, menu } = useContextMenu(outerRef);

    useEffect( () => {

       


        // if (!isAuthenticated) {
        //     props.history.push('/login')
        // }
    }, []);

//     const redirect = async () => {
//     props.history.push('/login')
// }
    // if (menu) {
    //     return (
    //         <ul className="menu" style={{ top: yPos, left: xPos }}>
    //             <li>Item1</li>
    //             <li>Item2</li>
    //             <li>Item3</li>
    //         </ul>
    //     );
    // }
        return (
            <React.Fragment>
                <div style={{height:'auto',overflowY:'hidden'
            
    //              backgroundImage: `url(${logodark})`,
    // height: "100%",
    // backgroundPosition: "center",
    // backgroundRepeat:" no-repeat",
    // backgroundSize: "cover"       
                }}>
                    <TaskCreator token={localStorage.getItem("token")} logout={()=>{
                        
                        // logout();
                        // props.history.push('/login')
                    }} />

                 
                </div>
            </React.Fragment>
        );
    
}

export default StarterPage;