/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-eval */
/* eslint-disable no-use-before-define */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-redeclare */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Button } from "reactstrap";
import ReactTooltip from "react-tooltip";
import { Progress } from 'reactstrap';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import GradeIcon from '@material-ui/icons/Grade';
import { Input, MenuItem, Select, Typography, Chip, Slider, Switch, Divider, Avatar } from '@material-ui/core';
const MenuCard = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            {/* <Typography
                onClick={() => {
                    this.setState({ menu: false })
                    this.setState({ flowState: 'new' })
                    this.getCodes()
                    //  this.setState({ addProject: true })

                }}
                color="white"
                style={{ fontSize: '20px', margin: 0, color: '#4442B5', fontWeight: 'bold',width:'100%' }}
                variant="body1"
            >Create Project</Typography> */}
        <div style={{ padding: 10, margin: 10, width: 300, background: 'white', boxShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 5px 0 rgba(0,0,0,.23)' }}>
            <Typography

                color="white"
                style={{ fontSize: '16px', margin: 0, color: 'black', fontWeight: 'bold' }}
                variant="body1"
            >Marketing Strategy</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10, marginBottom: 10 }}> <Typography

                color="white"
                style={{ fontSize: '12px', margin: 0, color: 'black', fontWeight: 'bold' }}
                variant="body1"
            >Creator: </Typography>
                <Typography

                    color="white"
                    style={{ fontSize: '12px', marginLeft: 5, color: 'black', fontWeight: 'normal' }}
                    variant="body1"
                >{' '}Mike James</Typography>
                <div style={{ flex: 1 }}></div>
                <Typography

                    color="white"
                    style={{ fontSize: '12px', margin: 0, color: 'black', fontWeight: 'normal' }}
                    variant="body1"
                ><GradeIcon style={{ color: 'orange' }} /></Typography>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10, marginBottom: 10 }}> <Typography

                color="white"
                style={{ fontSize: '12px', margin: 0, color: 'black', fontWeight: 'bold' }}
                variant="body1"
            >Priority: </Typography>
                <Typography

                    color="white"
                    style={{ fontSize: '12px', marginLeft: 5, color: 'red', fontWeight: 'normal' }}
                    variant="body1"
                >instant</Typography>

                <div style={{ flex: 1 }}></div>
                <Typography

                    color="white"
                    style={{ fontSize: '12px', margin: 0, color: 'black', fontWeight: 'normal' }}
                    variant="body1"
                >

                    <BorderColorIcon />
                </Typography>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10, marginBottom: 10 }}> <Typography

                color="white"
                style={{ fontSize: '12px', margin: 0, color: 'black', fontWeight: 'bold' }}
                variant="body1"
            >Last Updated: </Typography>
                <Typography

                    color="white"
                    style={{ fontSize: '12px', marginLeft: 5, color: 'black', fontWeight: 'normal' }}
                    variant="body1"
                >02:45pm | 14-10-2020</Typography>
            </div>
            <Progress color="success" value={75}>75%</Progress>
            <br />
            <Divider />

            <Typography

                color="white"
                style={{ fontSize: '12px', margin: 0, color: 'blue', fontWeight: 'bold', marginTop: 10 }}
                variant="body1"
            >
                <a
                    href='#'
                    data-for="custom-class"
                    data-tip="This is a marketing plan for the company main products to new clients"
                >
                    About Project
                </a>
                <ReactTooltip
                    id="custom-class"
                    className="extraClass"
                    //  delayHide={2000}

                    //  delayShow={2000}
                    effect="solid"
                    place="right"

                >
                    <div style={{ width: 200, fontWeight: 'normal' }}>This is a marketing plan for the company main products to new clients </div>
                </ReactTooltip>
            </Typography>
            <Typography

                color="white"
                style={{ fontSize: '12px', margin: 0, color: 'black', fontWeight: 'normal' }}
                variant="body1"
            >This is a marketing plan for the company main products to new clients </Typography>
            <br />
            <Divider />
            <Typography

                color="white"
                style={{ fontSize: '12px', margin: 0, color: 'blue', fontWeight: 'bold', marginTop: 10 }}
                variant="body1"
            >Members </Typography>

            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ margin: 3 }} />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" style={{ margin: 3 }} />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" style={{ margin: 3 }} />
                <div style={{ height: 40, width: 40, borderRadius: 20, background: '#BDBDBD', display: 'flex', flexDirection: 'row', margin: 3, alignItems: 'center', justifyContent: 'center' }}>
                    <strong style={{ color: 'red' }}><Typography

                        color="white"
                        style={{ fontSize: '16x', margin: 0, color: 'blue', }}
                        variant="body1"
                    >+3</Typography></strong>
                </div>

            </div>
</div>
        </div>
    );
};

export default MenuCard;