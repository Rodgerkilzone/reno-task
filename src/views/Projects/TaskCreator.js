/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-eval */
/* eslint-disable no-use-before-define */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-redeclare */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { Input, MenuItem, Select, Typography, Chip, Slider, Switch  } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import ReactTooltip from "react-tooltip";
import Modal from "react-animated-modal";
import GradeIcon from '@material-ui/icons/Grade';
import SettingsIcon from '@material-ui/icons/Settings';
import Divider from '@material-ui/core/Divider';
import {  useAuth0 } from "@auth0/auth0-react";
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Draggable, { DraggableCore } from 'react-draggable';
import { addProject } from '../../redux/action/addProject';
// import TweenOne from 'rc-tween-one';
// import { Alert } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
import CardTab from './CardTab'
import { Progress } from 'reactstrap';
// import ReactCSSTransitionGroup from 'react-transition-group'; 
import CircularProgress from '@material-ui/core/CircularProgress';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { Col, Row, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, CardImgOverlay, CardFooter, CardDeck, CardColumns, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { PanZoom } from 'react-easy-panzoom';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux'
 import logodark from '../../assets/images/Project_4.jpg';
import MenuCard from './MenuCard';
import Tooltip from '@material-ui/core/Tooltip';
// import ContextMenu from './ContextMenu'
import { Menu, Item, Separator, Submenu, MenuProvider,animation } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';
import './style.css'
// import {
//   CSSTransitionGroup
// } from 'react-transition-group';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Transition, CSSTransition } from 'react-transition-group';
// import Zoom from 'react-reveal/Zoom';
class App extends Component {
  constructor(props) {
    super(props)
    this.groupProps = {
      appear: false,
      enter: true,
      exit: true,
    }
    this.state = {
      menu: false, checkedB: false, settings: false, addProject: false, modalDrag:false,mode:'tasktree',
      showError: false, errorMsg: '', xPos: 0,
      yPos: 0,flow_code_2:'',step_1_err:false,flow_type:'', flow_desc: '',flow_name:'',addflow:false, search: '', results: true, sender: {}, selected: '', card_view: false, sidePane: false, drag: false,
      first_object: {
    
          name: 'start_page',
          type: 'items',
          node_items: [],
          external: false,
          method: "get",
          url: '',
          node_options: [],
          next_screen: '',
          progress:0,
          short_code: '',
          screen_text: '',


      }, form_1: [], lead: [1], loading: false, order_count: [], error: '', codes: [],itms:[1,1,1,1,1,1,1,1,,1,3,11,]
    }
  }
  sobj = (f,s)=>{
    //////console.log('jello')
    this.setState({ form_1: s })
    this.setState({ first_object: f });
    //     const z=form_1;
    //  setInterval(function v(){
    //   // var m = [];
    //   // this.state.form_1.map((item, i) => {
    //   //   //////console.log(item.type)
    //   //   if (item.type === 'raw_input') {

    //   //     item['type'] = 'direct_input'

    //   //   }
    //   //   m.push(item)
    //   // })
    //   //////console.log(form_1);
    //    //////console.log('hello');
    //    //////console.log(z);
    // },3000)   
    // this.level_update();
    this.level_update();

    this.fixappear()
    // this.setState({ l
  }
  ecov = (obj, form_1) => {

    try {
      // var payload = load.screens;
      // var sn=load.serviceCode;
      //   this.setState({ flow_name:load.name})
      //   this.setState({ flow_desc: load.description })
k=[]
      for (let i = 0; i < form_1.length; i++) {
        if (form_1[i].name != 'end' && form_1[i].show==true) {
            k.push(form_1[i]);
        }
      }
    
      // var g = [];
      console.log(k)
      console.log("sdssdsdsd")
    form_1 =k;
      var g = []
      for (let index = 0; index < form_1.length; index++) {
var n=[]
        form_1[index].node_items.forEach(element => {
  if(element!=null){
    n.push(element)
  }
});
var t=[]
   for (let index = 0; index < n.length; index++) {
     
     for (let i = 0; i < form_1.length; i++) {
       if (n[index].screen == form_1[i].name && form_1[i].name!='end'){
         t.push({field: n[index].field, screen: n[index].screen,id:i})
       }
      
    }
     
   }
console.log(t)
        if (form_1[index].name != 'end' && form_1[index].show==true) {
          g.push({

            name: form_1[index].name,
            type: form_1[index].type,
            node_items: t,
            node_options: form_1[index].node_options,
            external: form_1[index].external,
            url: form_1[index].url,
            inprop:true,
            progress: 0,
            method: form_1[index].method,
            next_screen: form_1[index].next_screen,
            //  short_code: form_1[index].short_code,
            exit_message: form_1[index].exit_message,
            screen_text: form_1[index].screen_text,
            order: [],
            show: form_1[index].show

          });
        }

      }
      form_1 = g;

     t= []
      n = obj.node_items;
      for (let index = 0; index < n.length; index++) {

        for (let i = 0; i < form_1.length; i++) {
          if (n[index].screen == form_1[i].name && form_1[i].name != 'end') {
            t.push({ field: n[index].field, screen: n[index].screen, id: i })
          }

        }

      }
      var obj = {
        name: obj.name,
        type: obj.type,
        node_items: t,
        external: obj.external,
        node_options: obj.node_options,
        url: obj.url,
        inprop: true,
        progress: 0,
        method: obj.method,
        next_screen: obj.next_screen,
        short_code: obj.short_code,
        exit_message: obj.exit_message,
        screen_text: obj.screen_text,
        show: obj.show
      };


      /////////////////-this///////////////////////////////// 
      for (var r = 0; obj.node_items.length > r; r++) {

        form_1[obj.node_items[r].id]['order'] = [1, r + 1];
        form_1[obj.node_items[r].id]['show'] = true;



        if (typeof obj.node_items !== 'undefined') {
          var k = obj.node_items;
          if (typeof form_1[k[r].id] !== 'undefined') {
            form_1[k[r].id]['order'] = [1, r + 1];
            form_1[k[r].id]['show'] = true;
          }


        }



      }


      if (obj.type !== 'items' && obj.next_screen === 'end') {
        obj.node_items = [{ field: obj.next_screen, screen: 'end', id: 0 }]
        obj.next_screen = "";
      }

      /////////////////-this///////////////////////////////// 



















      /////////////////-this///////////////////////////////// 
      for (var d = 0; form_1.length > d; d++) {
        for (var h = 0; form_1.length > h; h++) {

          if (form_1[h].order.length === d + 2) {





            if (form_1[h].next_screen !== 'end') {
              form_1[h].node_items.map((item, i) => {

                var k = form_1[h].order
                var k2 = [];

                for (var y = 0; k.length > y; y++) {
                  k2.push(k[y])
                }

                k2.push(i + 1)

                if (typeof form_1[item.id]!='undefined' && item.id !== null) {
                  console.log(form_1[item.id])
                  if (typeof form_1[item.id]['order'] == 'undefined' || form_1[item.id].order.length == 0) {
                    // if (typeof form_1[item.id].order == 'undefined'){
                    form_1[item.id]['order'] = k2


                    form_1[item.id]['f_id'] = h
                    form_1[item.id]['from'] = form_1[h].order
                    form_1[item.id].show = true
                  }

                  // }



                }

                //   form_1[i].splice(0, form_1[i].length - 2);
                // }

              })
            }
            console.log("form_1")
            console.log(form_1)
            if (form_1[h].next_screen === 'end') {
              form_1[h].node_items = [];
              form_1[h].next_screen = '';
            }





          }
        }
      }
      /////////////////-this///////////////////////////////// 



      // for (var d = form_1.length; d>0; d--) {
      //   if (typeof form_1[d].from != 'undefined' && typeof form_1[form_1[d].f_id].from != 'undefined'){
      //     form_1[form_1[d].f_id]['order'] = form_1[d].from;
      //   }

      // }

      this.level_update();
      
      this.setState({ order_count: [1] })
      this.setState({ form_1: form_1 })
      this.setState({ first_object: obj });



















    } catch (e) {
      console.log(e)
    }
  }
  getCodes = async () => {

    // this.setState({ loading: true })

    var token =this.props.token;
      var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", 'Bearer '+token )
    // console.log(this.props.token + 'hello')
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const url =  'https://flowbuilder-hwo36hymjq2-uc.a.run.app/api/v1/client/shorcodes/list';
    await fetch(url, requestOptions)
      .then(response => {
        // console.log(response.status)
        if (response.status == '403' || response.status == '401' || response.status == '500') {
          this.props.logout();
        }
        console.log(response)
        return response.json();
      })
      .then(result => {
        this.setState({ loading: false })
        // this.setState({ codes: result })

        if (result == null) {
          this.setState({ codes: [] })
        } else {
          this.setState({ codes: result })
        }
        console.log(result)


      })
      .catch(error => {
        this.setState({ loading: false })
        // if (JSON.error(error) === "{}") {
        console.log(error)
        //   this.setState({ errorMsg: 'Flow does not exist' })
        //   this.setState({ showError: true })
        // }else{
        //  this.setState({ loading: false })
        // this.setState({ errorMsg:'Network Error' })
        // this.setState({ showError: true })
        // }

      });



  }
  deleteFlow = (code) => {

    this.setState({ loading: true })


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", 'Bearer ' )
    // console.log(this.props.token + 'hello')
    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    };
    code = encodeURIComponent(code);
    //  config.baseUrl +
    const url = '/api/v1/flow/delete/' + code;
    fetch(url, requestOptions)
      .then(response => {
        if (response.status == '403' || response.status == '401' || response.status == '500') {
          this.props.logout();
        }
        return response.json();
      })
      .then(() => {
        this.setState({ loading: false })
        // this.setState({ codes: result.data })
        this.setState({ errorMsg: 'Flow Deleted' })
        this.setState({ showError: true })
        window.location.reload(false);
        // console.log(result.data)


      })
      .catch(error => {
        this.setState({ loading: false })
        // if (JSON.error(error) === "{}") {
        console.log(error)
        //   this.setState({ errorMsg: 'Flow does not exist' })
        //   this.setState({ showError: true })
        // }else{
        //  this.setState({ loading: false })
        // this.setState({ errorMsg:'Network Error' })
        // this.setState({ showError: true })
        // }

      });



  }
 
 
saveall(){
  this.props.updateProject(this.state)
}
  componentDidMount() {
   
    // setInterval(() => {
    //   // this.props.updateProject(this.state)
    //    console.log(this.props.project)
    // }, 3000);
      
   
    if (this.props.location.pathname=='/task/tree'){
      // this.updateScreen(this.props.project)
       var v={};
    if (this.props.project!=null){
      //  this.ecov(this.props.project)

//       for (var f = 0; Object.getOwnPropertyNames(this.props.project).length > f; f++) {
//         // //////console.log(Object.getOwnPropertyNames(payload)[f])
        
//         v[Object.getOwnPropertyNames(this.props.project)[f]]=this.props.project[Object.getOwnPropertyNames(this.props.project)[f]]
//       console.log(v)
//       this.setState(v) 
// v={}
//       };
      this.ecov(this.props.project.first_object, this.props.project.form_1)
      
//         // 
    
    }
//     var g=this.state.form_1;
//     var h=[];
//       this.setState({form_1:[]}) 
//     setTimeout(() => {
    
//       for (let index = 0; index < g.length; index++) {
//         // const element = array[index];
// // h.push(g[index])
//        h = [...this.state.form_1]
//         h.push(g[index])
//         this.setState({ form_1: h }) 
        
//       }
//       //  this.level_update()
//       // console.log(this.props.project)
//     }, 3000);

   
      this.setState({mode:'tasktree'})
    }else{
      this.setState({ mode: 'timeline' })
    }
    // document.addEventListener("contextmenu", (event) => {
    //   event.preventDefault();
    //   this.setState({ xPos: event.pageX + "px"});
    //   this.setState({ yPos:event.pageY + "px"}) ;
    //   //
    // });
    // this.ecov({"screens": { "school": { "options": [], "items": [], "next": "end", "text": "enter school", "type": "raw_input", "ExtraData": { "exit_message": "thanks", "url": "", "method": "" } }, "name": { "options": [], "items": [], "next": "end", "text": "enter name", "type": "raw_input", "ExtraData": { "exit_message": "thanks", "url": "", "method": "" } }, "start_page": { "options": [], "items": [{ "displayText": "school", "nextScreen": "school" }, { "displayText": "name", "nextScreen": "name" }], "next": "", "text": "enter name", "type": "items", "ExtraData": { "exit_message": "Thanks", "url": "", "method": "" } } },"serviceCode":"*435#" })
    // this.getCodes();
    // this.getToken()
    // console.log(this.props.user)
    // this.props.updateUser(null)

    // if (this.props.user !== null) {
    //   this.setState(JSON.parse(this.props.user));

    // }
    // setTimeout(function name2() {
    //   setInterval(function name() {
    //     if (typeof this.props !== 'undefined') {
    //       this.props.updateUser(this.state);
    //       console.log(this.props.user);
    //     }

    //   }, 3000);
    // }, 3000)


    
    // this.setter(config.sds);
    // this.setState({ selected: this.state.first_object }); 

  }
  setter = (sender) => {

    this.setState({
      showError: false, errorMsg: '', search: '', result: true, sender: {},
      first_object: {
        name: 'start_page',
        type: 'items',
        node_items: [],
        node_options: [],
        next_screen: '',
        short_code: '',
        screen_text: '',


      }, form_1: [], loading: false, order_count: [], error: '', codes: []
    }

    )
    //  this.setState({ loading: true })
    // this.setState({})
    //  setTimeout(() => {

    // this.ecov(sender);
    this.setState({ loading: false })
    //  }, 0);
    //
  }

  getFlow = (items) => {
    this.setState({ loading: true })



    //  axios.defaults.headers.get['Content-Type'] = 'application/json';

    var token = this.props.token;
     var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", 'Bearer ' +token)
    // console.log(this.props.token + 'hello')
    var requestOptions = {
      method: 'GET',
      // body: JSON.stringify(items),
      headers: myHeaders
    };


    const url = 'https://flowbuilder-hwo36hymjq2-uc.a.run.app/api/v1/client/flow/get/' + encodeURIComponent(items);
 
    fetch(url, requestOptions)
      .then(response => {
        if (response.status == '403' || response.status == '401' || response.status == '500') {
          this.props.logout();
        }
        return response.json();
      })
      .then(result => {

        this.setState({ loading: false })

  
        this.ecov(result)
        console.log(result)
      
      })
      .catch(() => {
  
        this.setState({ loading: false })
        this.setState({ errorMsg: 'Network Error' })
        this.setState({ showError: true })
        

      });
   

  };
  

  deleteFlow2 = (items) => {
    this.setState({ loading: true })



    //  axios.defaults.headers.get['Content-Type'] = 'application/json';

    var token = this.props.token;
     var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", 'Bearer ' +token)
    // console.log(this.props.token + 'hello')
    var requestOptions = {
      method: 'DELETE',
      // body: JSON.stringify(items),
      headers: myHeaders
    };


    const url = 'https://flowbuilder-hwo36hymjq2-uc.a.run.app/api/v1/client/flow/delete/' + encodeURIComponent(items);
 
    fetch(url, requestOptions)
      .then(response => {
        if (response.status == '403' || response.status == '401' || response.status == '500') {
          this.props.logout();
        }
        return response.json();
      })
      .then(result => {

        this.setState({ loading: false })

  
        // this.ecov(result)
        // console.log(result)
        this.setState({
          showError: false, errorMsg: '', search: '', menu: true, addflow2: false, result: true, sender: {}, selected: '', card_view: false, sidePane: false,
          first_object: {
            name: 'start_page',
            type: 'items',
            node_items: [],
            node_options: [],
            next_screen: '',
            short_code: '',
            screen_text: '',


          }, form_1: [], lead: [1], loading: false, order_count: [], error: '', codes: []
        })
        // 
        // this.setState({ errorMsg: result.message })
        // this.setState({ showError: true })
      this.getCodes();
      })
      .catch(() => {
  
        this.setState({ loading: false })
        this.setState({ errorMsg: 'Network Error' })
        this.setState({ showError: true })
        

      });
   

  };
  


  updateFlow = (items,fs) => {
    this.setState({ loading: true })



    //  axios.defaults.headers.get['Content-Type'] = 'application/json';

    var token = this.props.token;
      var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", 'Bearer ' + token)
    // console.log(this.props.token + 'hello')
    var mtd="PUT";
    if (this.state.flowState == 'new' ||  fs == "new"){
      mtd="POST"
    }
    var requestOptions = {
      method: mtd,
      body: JSON.stringify(items),
      headers: myHeaders
    };
var url = 'https://flowbuilder-hwo36hymjq2-uc.a.run.app/api/v1/client/flow/update';

if(this.state.flowState=='new' || fs=="new"){
url = 'https://flowbuilder-hwo36hymjq2-uc.a.run.app/api/v1/client/flow/create';
}
   

    fetch(url, requestOptions)
      .then(response => {
        if (response.status == '403' || response.status == '401' || response.status == '500') {
          this.props.logout();
        }
        return response.json();
      })
      .then(result => {

        this.setState({ loading: false })

      
        // this.ecov(result)
        console.log(result)
        this.setState({ errorMsg: result.message })
        this.setState({ showError: true })
        // this.setter(result)
        // if (JSON.stringify(result) === "{}") {
        //   this.setState({ loading: false })
        //   this.setState({ errorMsg: 'Flow does not exist' })
        //   this.setState({ showError: true })
        // }
        // }
      })
      .catch(() => {
        //  this.setState({ loading: false })
        // console.log(error)
        // if (JSON.stringify(error) === "{}") {
        //  
        //   this.setState({ errorMsg: 'Flow does not exist' })
        //   this.setState({ showError: true })
        // } else {
        this.setState({ loading: false })
        this.setState({ errorMsg: 'Network Error' })
        this.setState({ showError: true })
        // }

      });
 

  };
 handleClick=()=> {
  console.log('hello');
}
  sendForms2 = (search) => {
    // ////console.log('hello')
    this.setState({ loading: true })



    //  axios.defaults.headers.get['Content-Type'] = 'application/json';

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", 'Bearer ' )
    // console.log(this.props.token + 'hello')
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    search = encodeURIComponent(search);
    // config.baseUrl +
    const url =  '/api/v1/flow/get?shortcode=' + search;
    fetch(url, requestOptions)
      .then(response => {
        if (response.status == '403' || response.status == '401' || response.status == '500') {
          this.props.logout();
        }
        return response.json();
      })
      .then(result => {
        //   this.setState({ loading: false })
        console.log(JSON.parse(JSON.stringify(result)))
        if (result.statusCode === '404_FLW_1') {
          this.setState({ loading: false })
          this.setState({ errorMsg: result.message })
          this.setState({ showError: true })
        } else {
          this.setState({ loading: false })
          this.setState({ result: true })
          console.log(JSON.stringify(result.data))

          this.setter(result.data)
          // if (JSON.stringify(result)==="{}"){
          //   this.setState({ loading: false })
          //   this.setState({ errorMsg: 'Flow does not exist' })
          //   this.setState({ showError: true })
          // }
        }
      })
      .catch(error => {
        this.setState({ loading: false })
        // if (JSON.error(error) === "{}") {
        console.log(error)
        //   this.setState({ errorMsg: 'Flow does not exist' })
        //   this.setState({ showError: true })
        // }else{
        //  this.setState({ loading: false })
        this.setState({ errorMsg: 'Network Error' })
        this.setState({ showError: true })
        // }

      });
    //  //////console.log(search)
    //////console.log(JSON.stringify(items))
    // console.log(this.props.token)
    // var body = config.data
    // fetch(url,requestOptions).then(response => {
    // if (response.data.statusCode === '404_FLW_1') {
    //   this.setState({ loading: false })
    //   this.setState({ errorMsg: response.data.message })
    //   this.setState({ showError: true })
    // } else {
    //   this.setState({ loading: false })
    //   this.setState({ result: true })
    //   ////console.log(response)
    //   this.setter(response.data)
    // }
    // console.log(response)

    // this.setState({ error: JSON.stringify(response) });
    // dispatch(addUser(response.data))

    // }).catch(err => {
    //   this.setState({ loading: false })
    //   this.setState({ errorMsg: err.message })
    //   this.setState({ showError: true })
    // ////console.log(err.message)
    // this.setState({ error: JSON.stringify(err) });
    // if (err.message !== 'Network Error' && typeof err.response !== "undefined") {
    //   if (err.response.data.msg === 'Token is not valid') {
    //     dispatch(addToken(null))
    //     dispatch(authUpdate(false))
    //   } else {
    //     alert(err.response.data.msg)
    //     //////console.log(err.response.data.msg)
    //   }

    // } else {
    //   // alert(err.message)
    //   // //////console.log(err.response)
    // }
    // })

  };
  level_update() {
    for (var i = 0; this.state.form_1.length > i; i++) {
      //////console.log(this.state.form_1[i])
      //////console.log(this.state.form_1)
      // if (typeof this.state.order_count!=='undefined'){
      if (this.state.order_count.length < this.state.form_1[i].order.length && this.state.form_1[i].show === true) {
        var t = [];
        this.state.form_1.map(item => {
          t.push(item);
          t.push(item);
        })
        this.setState({ order_count: [1] });
      }
      // }

    }
    let intervalId=setInterval(() => {
  console.log('interval fix')

this.fixappear();
 clearInterval(intervalId);
//     }
}, 50);
  
   
  }
fixappear(){
  for (var v2 = 0; v2 < this.state.form_1.length; v2++) {
    if (this.state.form_1[v2].inprop==false && this.state.form_1[v2].show==true){
      let obj = this.state.form_1;
      obj[v2].inprop = true
      this.setState({ form_1: obj })
    
    }
  }
}
  new_object(j, k, i, m, c) {

    let obj2 = m;

    let t = []
    var p = 'Task ' + eval(j + 1);
    obj2.push({
      name: p,
      type: 'options',
      node_items: [],
      external: false,
      inprop:false,
      comment_color:'#FEFF9C',
      url: '',
      progress:0,
      method: 'get',
      node_options: [],
      next_screen: '',
      short_code: '',
      order: t.concat(k),
      from: k,
      f_id: c,
      show: true

    });

    // this.setState({ level_1: obj2 })
    // obj2[i + 1]['order'].push(1)
    //   let h=1;
    // let g=1;
    // let u;

    //   var choosen = false;
    //   var p = 1;
    //   u = this.joiner(obj2[i + 1]['order'], p);
    //   while (choosen === false) {
    var nm = 0;
    for (var v2 = 0; v2 < this.state.form_1.length; v2++) {
      if (this.state.form_1[v2].from === k) {
        nm++
      }
    }
    obj2[i + 1]['order'].push(nm)
    //       if(u.length === this.state.form_1[v2].order.length) {
    //       if (u !== this.state.form_1[v2].order) {

    //         //////console.log(p)
    //         choosen = true
    //         break;
    //       }
    //     }
    //   }
    //     p++
    //     u = this.joiner(obj2[i + 1]['order'], p);
    //   }
    // //////console.log(g)
    return [obj2, (obj2.length - 1), p];
    // const b=obj2[i + 1]['order'];
    // obj2[i + 1]['order'] = b;

    // this.new_object(this.state.form_1.length, this.state.form_1[i].order)
  }
  // h=()=>{
  //   setInterval(() => {
  //       var m=[];
  //           this.state.form_1.map((item, i) => {
  //             //////console.log(item.type)
  //             if (item.type === 'raw_input') {

  //              item['type'] = 'direct_input'

  //             }
  //               m.push(item)
  //           })
  //           this.setState({form_1:m})
  //     this.setState({form_1:m})      
  //     //////console.log(this.state.form_1)

  //   }, 3000);
  // }
  updateScreen = (fs) => {
    this.setState({ loading: true })
    //console.log(this.state.form_1)
    let form_1 = JSON.parse(JSON.stringify(fs.form_1));
    var sender = {};
    var error_value = ''
    // console.log(this.state.first_object.short_code.substring(0, 1))
    // if (this.state.first_object.short_code.substring(0, 1) !== '+'.toString() && this.state.first_object.short_code.substring(0, 1) !== '*'.toString()) {
    //   error_value = 'Please enter a valid short code or phone number';
    //   // this.setState({ showError: true })
    //   // console.log()
    // } { }
    // if (this.state.first_object.short_code.substring(0, 1) === '*'.toString() && this.state.first_object.short_code.substring(this.state.first_object.short_code.length - 1, this.state.first_object.short_code.length) !== '#'.toString()) {
    //   error_value = 'Please enter a valid short code or phone number';
    // }
    for (var i = 0; form_1.length > i; i++) {
      if (form_1[i].show === true) {

        // Check for repeated form name
        var test = []
        form_1.map((item) => { if (item.show === true) { test.push(item.name) } })
        test.push('start_page')
        let hasDup = test.some((val, i) => test.indexOf(val) !== i);
        //////console.log('Dupe: '+hasDup)
        if (hasDup === true) { error_value = 'Your can not submit forms with the same names' }
        //check for empty items forms
        var test2 = false
        form_1.map(item => {
          if (item.type === 'items' && item.show === true) {

            for (var i = 0; item.node_items.length > i; i++) {
              //console.log(item.node_items)
              if (typeof item.node_items[i] !== 'undefined' && item.node_items[i] !== null && item.node_items[i].field !== null) {
                if (item.node_items[i].field.trim() === '' || form_1[item.node_items[i].id].name.trim() === '') {
                  error_value = 'Your can not submit forms with empty fields, check ' + item.name
                }
              }
              // var t = item.node_items.filter(item => item !== null);

              var t = item.node_items.filter(item => item !== '');

              t.map((itm, p) => { if (itm === null) { t[p] = '' } })
              t.map((at, u) => {
                if (Object.getOwnPropertyNames(t[u]).length < 2) {
                  t[u] = '';
                }
              });
              t = t.filter(item => item !== '');

              //console.log(t)
              if (t.length === 0) {
                test2 = true
                error_value = 'Your can not submit empty forms of type items, check ' + item.name
              }
            }
            if (item.node_items.length === 0) {
              error_value = 'Your can not submit empty forms of type items, check ' + item.name
              test2 = true
            }
          }
        })

        //////console.log('items: ' + test2)
        //check screen text
        form_1.map(item => {
          if (item.show === true) {
            if (typeof item.screen_text === 'undefined' || item.screen_text.trim() === '') {
              error_value = 'Please enter the screen text - ' + item.name;
            }
          }

        })



        //check for empty option forms


        var test3 = false
        form_1.map((item, m) => {

          if (item.type !== 'items' && typeof item.node_items[item.node_items.length - 1] !== 'undefined') {
            form_1[m].next_screen = item.node_items[item.node_items.length - 1].screen
            form_1[m].node_items = [];
          }
          if (item.type === 'options' && item.show === true) {
            // //////console.log(item.node_items[item.node_items.length-1].field) 
            item.node_options.map((itm, j) => {
              if (item.node_options[j] === null || item.node_options[j].trim() === '') {
                item.node_options[j] = ''
                test3 = true
                if (item.name === null) {
                  item.name = 'start_page'
                }
                error_value = 'Your can not submit a form with empty options, check ' + item.name
              }
            })
            for (var i = 0; item.node_options.length > i; i++) {
              var t = item.node_options.filter(item => item !== null);
              var t = item.node_options.filter(item => item.trim() !== '');

              if (t.length === 0) {
                test3 = true
                error_value = 'Your can not submit a form with empty options, check ' + item.name
              }
            }
            if (item.node_options.length === 0) {
              test3 = true
              error_value = 'Your can not submit a form with empty options, check ' + item.name
            }

          }
        })

        //////console.log('options: ' + test3)
        //add end to final forms


        var itm = [];
        form_1[i].node_items.map((item, m) => {
          if (form_1[i].type === 'items' && item !== null && item.field !== null) {
            itm.push({
              "displayText": item.field.trim(),
              "nextScreen": item.screen.trim()
            })
          }
          if (item === null) {
            delete form_1[i].node_items[m]
          }

        })
        // remove items for option and raw input
        // form_1.map((item, m) => {
        //   if (item.type === 'options' || item.type === 'raw_input' || item.type === 'direct_input') {
        //     form_1[m].node_items = []
        //   }

        // })
        var k = form_1[i].next_screen;
        if (typeof form_1[i].next_screen === 'undefined') {
          form_1[i]['next_screen'] = "";
        }
        if (form_1[i].type !== 'items' && form_1[i].next_screen.trim() === '') {
          //console.log(this.state.form_1[i].node_items);
          var array =fs.form_1[i].node_items;
          array = array.filter(item => item !== '');
          array.map((itm, p) => { if (itm === null) { array[p] = '' } })
          array = array.filter(item => item !== '');
          array.map((a, i) => {
            if (Object.getOwnPropertyNames(array[i]).length < 2) {
              k = 'end'
            }
          });
          // if()


          if (array.length === 0) {
            k = 'end'
          }

        }

        if (form_1[i].type === 'direct_input') {
          form_1[i].type = 'raw_input'
        }
        if (typeof form_1[i].node_options === 'undefined' || form_1[i].node_options === null) {
          form_1[i].node_options = [];
        }
        form_1[i].node_options.map((itm, g) => {
          if (form_1[i].node_options[g] !== null && typeof form_1[i].node_options[g] !== 'undefined') {
            form_1[i].node_options[g] = form_1[i].node_options[g].trim();
          }
        })
        if (k !== null && typeof k !== 'undefined') {
          k = k.trim();
        }
        if (typeof form_1[i].screen_text === 'undefined') {
          form_1[i].screen_text = ''
        }
        if (form_1[i].type !== 'options') {
          form_1[i].node_options = [];
        }
        if (typeof form_1[i].exit_message === 'undefined') {
          form_1[i].exit_message = ''
        }

        var url = '';
        var ttp = form_1[i].type;
        var method = form_1[i].method;
        if (form_1[i].type == 'raw_input' && form_1[i].external == true) {
          url = form_1[i].url;
          ttp = 'external'
        }else{
          method="";
          url=""
        }
        sender[form_1[i].name.trim()] = {
          "options": form_1[i].node_options,
          "items": itm,
          "next": k,
          "text": form_1[i].screen_text.trim(),
          // "isScreenActive": true,
          "type": ttp,
          inprop:true,
          "ExtraData": { "exit_message": form_1[i].exit_message, "url": url, method: method},
          // "shortCode": this.state.first_object.short_code.trim()
        }



      }
    }

    var itm = [];
    var first_object = JSON.parse(JSON.stringify(fs.first_object));
    if (first_object.node_items === null || typeof first_object.node_items === 'undefined') {
      first_object.node_items = [];
    }
    first_object.node_items.map((item, m) => {
      if (first_object.type === 'items' && item !== null && item.field !== null) {
        itm.push({
          "displayText": item.field.trim(),
          "nextScreen": item.screen.trim()
        })
      }
      if (item === null) {
        delete first_object.node_items[m]
      }

    })
    var k = '';

    if (first_object.type !== 'items' && first_object.node_items !== null && typeof first_object.node_items !== 'undefined') {
      var array = first_object.node_items;
      array = array.filter(item => item !== '');
      array.map((itm, p) => { if (itm === null) { array[p] = '' } })
      array = array.filter(item => item !== '');
      //console.log(array)
      array.map((a, i) => {
        if (Object.getOwnPropertyNames(array[i]).length < 2) {
          k = 'end'
        }
      });
      if (array.length === 0) {
        k = 'end'
      }

    }
    if (typeof first_object.screen_text === 'undefined' || first_object.screen_text.trim() === '') {
      error_value = 'Please enter the screen text - start_page';
    }
    // if (first_object.short_code.trim() === '') {
    //   error_value = 'Please enter the short code';
    // }
    // for (var i = 0; first_object.node_items.length > i; i++) {
    //   if (typeof first_object.node_items[i] !== 'undefined') {
    //     if (first_object.node_items[i].field.trim() === '' || form_1[first_object.node_items[i].id].name.trim() === '') {
    //       error_value = 'Your can not submit forms with empty fields, check ' + first_object.name
    //   }
    // }
    // }
    if (first_object.type === 'items') {

      for (var i = 0; first_object.node_items.length > i; i++) {
        if (typeof first_object.node_items[i] !== 'undefined' && first_object.node_items[i] !== null && first_object.node_items[i].field !== null) {
          if (first_object.node_items[i].field.trim() === '' || form_1[first_object.node_items[i].id].name.trim() === '') {
            error_value = 'Your can not submit forms with empty fields, check ' + first_object.name
          }
        }

        var t = first_object.node_items.filter(item => item !== '');
        t.map((itm, p) => { if (itm === null) { t[p] = '' } })
        t.map((at, u) => {
          if (Object.getOwnPropertyNames(t[u]).length < 2) {
            t[u] = '';
          }
        });
        t = t.filter(item => item !== '');

        if (t.length === 0) {

          error_value = 'Your can not submit empty forms of type items, check ' + first_object.name
        }
      }
      if (first_object.node_items.length === 0) {
        error_value = 'Your can not submit empty forms of type items, check ' + first_object.name

      }
    }
    ///////////////////////

    if (first_object.type !== 'items' && typeof first_object.node_items[first_object.node_items.length - 1] !== 'undefined') {
      first_object.next_screen = first_object.node_items[first_object.node_items.length - 1].screen
      first_object.node_items = [];
    }
    if (first_object.type === 'options') {
      for (var i = 0; first_object.node_options.length > i; i++) {
        first_object.node_options.map((item, j) => {
          if (first_object.node_options[j] === null || first_object.node_options[j].trim() === '') {
            first_object.node_options[j] = ''
            test3 = true
            // if (item.name===null){
            //   item.name='start_page'
            // }
            error_value = 'Your can not submit a form with empty options, check ' + first_object.name
          }

        })
        var t = first_object.node_options.filter(item => item !== null);

        var t = first_object.node_options.filter(item => item.trim() !== '');
        if (t.length === 0) {
          // test3 = true
          error_value = 'Your can not submit a form with empty options, check ' + first_object.name
        }
      }
      if (first_object.node_options.length === 0) {
        // test3 = true
        error_value = 'Your can not submit a form with empty options, check ' + first_object.name
      }

    }
    if (first_object.type === 'direct_input') {
      first_object.type = 'raw_input'
    }

    var k = first_object.next_screen;
    if (typeof first_object.next_screen === 'undefined') {
      first_object['next_screen'] = "";
    }

    if (first_object.type !== 'items' && first_object.next_screen.trim() === '') {
      var array = this.state.first_object.node_items;
      array = array.filter(item => item !== '');
      array.map((itm, p) => { if (itm === null) { array[p] = '' } })
      array = array.filter(item => item !== '');
      array.map((a, i) => {
        if (Object.getOwnPropertyNames(array[i]).length < 2) {
          k = 'end'
        }
      });
      if (array.length === 0) {
        k = 'end'
      }

    }
    first_object.node_options.map((itm, g) => {
      if (first_object.node_options[g] !== null && typeof first_object.node_options[g] !== 'undefined') {
        first_object.node_options[g] = first_object.node_options[g].trim();
      }
    })
    if (k !== null && typeof k !== 'undefined') {
      k = k.trim();
    }
    if (itm === [] && first_object.type === 'items') {

      error_value = 'Your can not submit a form with empty node items, check start_page'
    }
    if (first_object.type !== 'options') {
      first_object.node_options = [];
    }
    if (typeof first_object.exit_message === 'undefined') {
      first_object.exit_message = ''
    }

    var url = '';
    var ttp = first_object.type;
    var method = this.state.first_object.method;
    if (first_object.type == 'raw_input' && first_object.external == true) {
      url = first_object.url;
      ttp = 'external'
    }else{
      method="";
       url="";
    }
    sender['start_page'] = {
      "options": first_object.node_options,
      "items": itm,
      "next": k,

      "text": first_object.screen_text.trim(),
      // "isScreenActive": true,
      "type": ttp,
      "ExtraData": { "exit_message": first_object.exit_message, url: url, method: method},
      // "shortCode": first_object.short_code.trim()
    }
    // var sc="";
//     if(fs=="new"){
//       var sc = first_object.short_code.trim();
//       if (first_object.short_code.trim() == this.state.flowCode){
//   error_value = 'Please change the service code to a new one'
// }
      
//     }else{
//         var  sc = this.state.flowCode;
//     }
//     console.log(first_object.short_code.trim());
//     console.log(this.state.flowCode);
    sender={
      "screens":sender,
      "name":this.state.flow_name,
      "description": this.state.flow_desc,
      "ServiceCode": '46564'

    }
    console.log(sender)
    console.log(JSON.stringify(sender));
    this.ecov(sender)
    if (error_value === '') {
      console.log(sender)
      this.setState({ loading: true })
      // this.setState({ sender: sender })
      // this.setter(sender);
      // const clone=Object.assign([],[sender,sender])
      // this.setter(JSON.parse(JSON.stringify(sender)));
      //console.log(JSON.stringify(sender))
      this.setState({ loading: false })
      // this.setState({ loading: true })
      // console.log(sender)
      // console.log("sender")
      // this.updateFlow(sender,fs)
      this.ecov(sender)
      // console.log(sender)
      // console.log(JSON.parse(JSON.stringify(sender)))
      // this.setState({ errorMsg: "Flow saved successfully " })
      // this.setState({ showError: true })
    } else {
      //console.log(sender)
      // this.setter(sender);
      this.setState({ loading: false })
      this.setState({ errorMsg: error_value })
      this.setState({ showError: true })
      // alert(error_value)
    }
    // this.setState({ loading: false })

  }

  del_corrector=()=>{
    for (var i = 0; this.state.form_1.length > i; i++) {
      if (typeof this.state.form_1[i].f_id != 'undefined' || this.state.form_1[i].f_id!=null){
        if (this.state.form_1[this.state.form_1[i].f_id].show==false){
          let ids = [...this.state.form_1];
          ids[i].show = false;
          this.setState({ form_1: ids });
        }

      }
    }
  }
  corrector=(id,value)=>{

    for(var i=0;this.state.form_1.length>i;i++){

       for(var f=0;this.state.form_1[i].node_items.length>f;f++){
         if (this.state.form_1[i].node_items[f]!=null && typeof this.state.form_1[i].node_items[f]!=='undefined' && typeof this.state.form_1[i].node_items[f].screen!=='undefined' &&this.state.form_1[i].node_items[f].id===id){
           let ids = [...this.state.form_1];   
           ids[i].node_items[f].screen=value;
           this.setState({ form_1: ids });
         }
    }

   
  }
  for(var f=0;this.state.first_object.node_items.length>f;f++){
       if(typeof this.state.first_object.node_items[f]!=='undefined' && typeof this.state.first_object.node_items[f].screen!=='undefined' &&this.state.first_object.node_items[f].id===id){
           let ids = this.state.first_object   
           ids.node_items[f].screen=value;
           this.setState({ first_object: ids });
         }
        }
}

corrector2=()=>{

  for(var g=0;this.state.form_1.length>g;g++){
    
if(typeof this.state.form_1[g].f_id!=='undefined'  && this.state.form_1[g].show===true && this.state.form_1[this.state.form_1[g].f_id].name==='end'){

    for(var i=0;this.state.form_1.length>i;i++){
   
      if(this.state.form_1[i].show===true){
       
          // console.log( this.state.form_1[i].node_items)
          for(var f=0;this.state.form_1[i].node_items.length>f;f++){
            
              // console.log( this.state.form_1[i].node_items[f])
            if (this.state.form_1[i].node_items[f]!=null && typeof this.state.form_1[i].node_items[f]!=='undefined' && typeof this.state.form_1[i].node_items[f].screen!=='undefined' && this.state.form_1[i].node_items[f].screen===this.state.form_1[g].name){
        
          //     let ids = [...this.state.form_1];   
          //  ids[g].f_id=i;
          //  this.setState({ form_1: ids });
                 let ids = [...this.state.form_1];   
              
           ids[g].f_id=i;
             
           this.setState({ form_1: ids });
          
            }
          }
      }
    }

}

  
  }

}


    // corrector3=(n)=>{

 corrector3=(name)=>{
  //  console.log(name+"s"+your+'sd'+mm)
   var t='h';
  for(var i=0;this.state.form_1.length>i;i++){
  if(this.state.form_1[i].show===true && this.state.form_1[i].name===name ){
t=i;
break;
  }
  }
  if(t!=='h'){
    console.log(name)
    console.log(t)
    // let ids = [...this.state.form_1] ;
  
    //   ids.push({name:'end',show:false,node_items:[],node_option:[],type:'direct_input'})
    // this.setState({ form_1: ids });
   
    // var m = ids2[this.state.form_1[t].f_id].name
    // var op = this.state.form_1[t].f_id
    // ids2[this.state.form_1[t].f_id ].name ='end'
    //        this.setState({ form_1: ids2 });
    //         this.corrector2()
    // let ids23 = [...this.state.form_1];
    // ids23[op].name = m
    // this.setState({ form_1: ids23 });
    // this.state.form_1[t].f
  }
}
deleteNode=(i)=>{
  let t = [...this.state.form_1]
  t[i].show = false
  this.setState({ form_1: t })
  console.log('hello')
}
  removeSub=(i)=>{
  
    let ids = [...this.state.form_1];
    if(ids[i].node_items.length!=0){
       ids[i].show = false;
    // ids[i].name = 'end';
    this.setState({ form_1: ids });
    this.corrector(i, 'end');
    this.corrector2()
    this.del_corrector();
     ids = [...this.state.form_1];
    ids[i].show = true;
    this.setState({ form_1: ids });
    }
   
  }
deleteNode2=(i)=>{
  // this.setState({ selected: i })
  // let obj =this.state.form_1;
  // obj[i].inprop = false
  // this.setState({ form_1: obj })

              let ids = [...this.state.form_1];    
            ids[i].show = false;
            ids[i].name = 'end';

            this.setState({ form_1: ids });
            this.corrector(i, 'end');
            this.corrector2()
            this.del_corrector();
            if(i==this.state.selected){
               this.setState({ sidePane: false })
            }
           

          

}
recurse=(i)=>{
  var show={h:true};
 var color = 'white'
var  color2 = 'black'
///////////////////////

  var error = false
  if (typeof this.state.form_1[i].screen_text === 'undefined') { this.state.form_1[i].screen_text = '' }
  if (this.state.form_1[i].screen_text === '' || this.state.form_1[i].name === '') {
    error = true
    // console.log('name 1')
  }
  if (this.state.form_1[i].name.trim() === '') {
    error = true
    // console.log('name 2')
  }
  var t = false;
  var t2 = false;
  
  {
    this.state.lead.map(item => {

      if (typeof this.state.form_1[i].node_options === 'undefined') {
        let ids = [...this.state.form_1];
        ids[i].node_options = [];
        this.setState({ form_1: ids })
      }
      {/* if( typeof this.state.form_1[i].node_items==='undefined'){
                                                  let ids = [...this.state.form_1]; 
                                    ids[i].node_items = [];
                                                    this.setState({form_1:ids})
                                              } */}
      var t5 = this.state.form_1[i].node_items.filter(item => item !== '');

      t5.map((itm, p) => { if (itm === null) { t5[p] = '' } })
      t5.map((at, u) => {
        if (Object.getOwnPropertyNames(t5[u]).length < 2) {
          t5[u] = '';
        }
      });
      t5 = t5.filter(item => item !== '');

      //console.log(t)
      if (t5.length === 0) {
        error = true
        // console.log('name 3')
      }
      var t5 = this.state.form_1[i].node_options.filter(item => item !== '');

      t5.map((itm, p) => { if (itm === null) { t5[p] = '' } })

      t5 = t5.filter(item => item !== '');

      //console.log(t)
      if (t5.length === 0 && this.state.form_1[i].type === 'options') {
        error = true
        // console.log('name 4')
      }
      this.state.form_1[i].node_items.map((itm, j) => {
        if (this.state.form_1[i].node_items[j] != null && typeof this.state.form_1[i].node_items[j] !== 'undefined'  && this.state.form_1[i].node_items[j].field.trim() === '') {
          t = true;
          // console.log('name 5')
        }
        if (this.state.form_1[i].node_items[j] != null && typeof this.state.form_1[i].node_items[j] !== 'undefined' && this.state.form_1[i].node_items[j].screen === 'end') {
          t2 = true;
          // console.log('name 6')
        }
      })
      this.state.form_1[i].node_options.map((itm, j) => {
        if (typeof this.state.form_1[i].node_options[j] !== 'undefined' && this.state.form_1[i].node_options[j].trim() === '') {
          t = true;
          // console.log('name 7')
        }

      })
      if (t === true) {
        error = true
        // console.log('name 8')
      }
    })
  }
  if (t2 === true) {
    if (typeof this.state.form_1[i].exit_message === 'undefined' || this.state.form_1[i].exit_message.trim() === '') {
      error = true
      console.log('name 9')
    }

  }




/////////////////////////
  if (typeof this.state.form_1[i].from !== 'undefined' && this.state.selected !== 3243423423 && typeof this.state.form_1[this.state.selected]!='undefined' && JSON.stringify(this.state.form_1[this.state.selected].order) === JSON.stringify(this.state.form_1[i].order.slice(0, this.state.form_1[this.state.selected].order.length)) ){
    color ='#BBDEFB'
  //  var color2='white'
  } else{
  }
   if(this.state.selected===i){
     var color ='#f5f5f5'
     var border ='3px solid #039BE5'
  }else{
     var border = '0px solid #2E7D32'
  }
  var g=[]
  for (var b = 0; this.state.form_1.length>b;b++){
    if (JSON.stringify(this.state.form_1[b].order.slice(0, this.state.form_1[b].order.length - 1)) === JSON.stringify(this.state.form_1[i].order.slice(0, this.state.form_1[i].order.length - 1)) && this.state.form_1[i].show === true && this.state.form_1[b].show === true){
   g.push(b)
    }

   
  }
  let t9 = [...this.state.form_1]
  if (typeof t9[i].colapse === 'undefined') {
    t9[i].colapse = false;
     this.setState({ form_1: t9 })
  }
  // t[i].colapse = !t[i].colapse
 
  
  if (this.state.form_1[i].show===true){
    // var TweenOneGroup = TweenOne.TweenOneGroup;
    const onClick = ({ event, props }) => console.log(event, props);
  

    const loadNode = () => {
      let  obj = [...this.state.form_1];
    obj[this.state.form_1.length - 1].inprop = true
    this.setState({ form_1: obj })
    };
    const MyAwesomeMenu = () => (
      <Menu id={i} animation={animation.pop} style={{ width: 80 }}>
        {/* <Item onClick={onClick}>Add Node</Item> */}
        
        {this.state.form_1[i].type != "items" && <Item onClick={()=>{
          let obj = [...this.state.form_1];
          obj[i].type = 'items'
          this.setState({ form_1: obj })
          
        }}>Connector</Item>}
        {this.state.form_1[i].type == "items" && <Item onClick={() => {
          
          let obj = [...this.state.form_1];
          obj[i].type = 'options'
          this.setState({ form_1: obj })
          this.removeSub(i)
        }}>Task</Item>}

      {this.state.form_1[i].type!='items' &&  <Submenu label="Progress">
          <Item onClick={() => {
            let obj = this.state.form_1;
            obj[i]['progress'] = 0
            this.setState({ form_1: obj })
          }}>Backlog</Item>

          <Item onClick={() => {
            let obj = this.state.form_1;
            obj[i]['progress'] = 1
            this.setState({ form_1: obj })
          }}>Inprogress</Item>


          <Item onClick={() => {
            let obj = this.state.form_1;
            obj[i]['progress'] = 2
            this.setState({ form_1: obj })
          }}>Review</Item>

          <Item onClick={() => {
            let obj = this.state.form_1;
            obj[i]['progress'] = 3
            this.setState({ form_1: obj })
          }}>Complete</Item>
         
        </Submenu>}
        {this.state.form_1[i].type == "items" && this.state.form_1[i].node_items.filter(item => item !== '').filter(item => item !== null).length>0 && <Item onClick={()=>{
          let t = [...this.state.form_1]
console.log(this.state)

          if (typeof t[i].colapse === 'undefined') {

            t[i].colapse = false
          }
          t[i].colapse = !t[i].colapse
          this.setState({ form_1: t })
          console.log('hello')

        }}>   {typeof this.state.form_1[i].colapse === 'undefined' || this.state.form_1[i].colapse === false && <font > Colapse</font>}
          {typeof this.state.form_1[i].colapse !== 'undefined' && this.state.form_1[i].colapse === true && <font > Expand</font>}
                                       </Item>}
        <Item onClick={()=>{
           // this.setState({ selected: i })
  let obj =this.state.form_1;
  obj[i].inprop = false
       
  this.setState({ form_1: obj })
  
        }}>Delete</Item>
        <Item onClick={() => {
          this.saveall()

        }}>Save All</Item>
        <Separator />
        <Item >Enable Comment</Item>
        {/* <Item disabled>Comment Color</Item> */}
        <Separator />
        <Submenu label="Comment Color">
          <Item onClick={()=>{
            let obj = this.state.form_1;
            obj[i]['comment_color'] = '#FEFF9C'
            this.setState({ form_1: obj })
          }}>Yellow</Item>
      
            <Item onClick={() => {
              let obj = this.state.form_1;
              obj[i]['comment_color'] = '#FF7EB9'
              this.setState({ form_1: obj })
            }}>Pink</Item>
    
       
            <Item onClick={() => {
              let obj = this.state.form_1;
              obj[i]['comment_color'] = '#A0F7C3'
              this.setState({ form_1: obj })
            }}>Green</Item>
      
            <Item onClick={() => {
              let obj = this.state.form_1;
            obj[i]['comment_color'] = '#75DEE8'
              this.setState({ form_1: obj })
            }}>Blue</Item>
          <Item onClick={() => {
            let obj = this.state.form_1;
            obj[i]['comment_color'] = '#8E98EA'
            this.setState({ form_1: obj })
          }}>Purple</Item>
          </Submenu>
      </Menu>
    );
    return (<div style={{ display: 'flex', flexDirection: 'row', userSelect: "none"}} >
    <MyAwesomeMenu />
   
      <div style={{ display: 'flex', flexDirection: 'row', }} >
     
      {g[0] !== i && 
          <CSSTransition
            // onLoad={() => { loadNode() }}
            in={this.state.form_1[i].inprop}
            timeout={300}
            classNames="dialog"
            unmountOnExit
          // onEnter={() => {
          //   let obj = [...this.state.form_1];
          //   obj[i].inprop = false
          //   this.setState({ form_1: obj })
          // }}
          // onExited={() => {
          //   this.deleteNode2(i)
          // }}
          ><div style={{ height: '100%', width: 2, borderLeft: '1px solid white', marginTop: 32 }}></div></CSSTransition>}
        <CSSTransition
          // onLoad={() => { loadNode() }}
          in={this.state.form_1[i].inprop}
          timeout={300}
          classNames="dialog"
          unmountOnExit
          // onEnter={() => {
          //   let obj = [...this.state.form_1];
          //   obj[i].inprop = false
          //   this.setState({ form_1: obj })
          // }}
          // onExited={() => {
          //   this.deleteNode2(i)
          // }}
        ><div style={{ width: 20, height: 2, borderTop: '1px solid white', marginTop: 32 }}></div></CSSTransition>
      <div style={{ position: 'relative'}}>
          {typeof this.state.form_1[i].colapse !== 'undefined' && this.state.form_1[i].colapse === true &&
          
          <CSSTransition
            // onLoad={() => { loadNode() }}
            in={this.state.form_1[i].inprop}
            timeout={300}
            classNames="alert"
            unmountOnExit
            // onEnter={() => {
            //   let obj = [...this.state.form_1];
            //   obj[i].inprop = false
            //   this.setState({ form_1: obj })
            // }}
            onExited={() => {
            this.deleteNode2(i)
            }}
          ><div style={{ position: 'absolute', top: 6, left: -8, backgroundColor: this.state.form_1[i].colapse ? "#FFE082" : color, border: border, boxShadow: '  0 10px 10px 0 rgba(0,0,0,.19), 0 6px 3px 0 rgba(0,0,0,.23', margin: 10, overflow: 'hidden', borderRadius: 15, height: 50, padding: 8,width: '84%' }}>
</div></CSSTransition> }
          {typeof this.state.form_1[i].colapse !== 'undefined' && this.state.form_1[i].colapse === true && <CSSTransition
            // onLoad={() => { loadNode() }}
            in={this.state.form_1[i].inprop}
            timeout={300}
            classNames="alert"
            unmountOnExit
            // onEnter={() => {
            //   let obj = [...this.state.form_1];
            //   obj[i].inprop = false
            //   this.setState({ form_1: obj })
            // }}
            onExited={() => {
            this.deleteNode2(i)
            }}
          ><div style={{ position: 'absolute', top: 3, left: -4, backgroundColor: this.state.form_1[i].colapse ? "#FFE082" : color, border: border, boxShadow: ' 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 5px 0 rgba(0,0,0,.23)', margin: 10, overflow: 'hidden', borderRadius: 15, height: 50, padding: 8,width: '84%' }}>
        </div></CSSTransition>}
{/*     
        <div 
        onClick={()=>{
           
            window.confirm("Are you sure you wish to delete this node?") &&
            this.deleteNode2(i);
        }}
        
        style={{
          position: 'absolute', right:5, padding: 10, top: -10, margin: 0, zIndex: 20, background: 'transparent', color: 'white', height: 30, width: 30
        }}>


          <CloseIcon />
          {/* {!error ? <Chip label='✓' style={{ color: 'white', backgroundColor: '#388E3C', }} /> : <Chip label='✗' style={{ float: 'right', color: 'white', backgroundColor: '#D32F2F' }} />} */}
         
          {/* <button onClick={()=>{
            let obj = [...this.state.form_1];
            obj[i].inprop = !this.state.form_1[i].inprop
            this.setState({ form_1: obj })
          }}>button</button> */}
          <CSSTransition
            // onLoad={() => { loadNode() }}
            in={this.state.form_1[i].inprop}
            timeout={300}
            classNames="alert"
            unmountOnExit
            // onEnter={() => {
            //   let obj = [...this.state.form_1];
            //   obj[i].inprop = false
            //   this.setState({ form_1: obj })
            // }}
            onExited={() => {
            this.deleteNode2(i)
            }}
          >
      <Tooltip title={this.state.form_1[i].type}>
        <div  className={i} style={{ backgroundColor: color,border:border, boxShadow: ' 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 5px 0 rgba(0,0,0,.23)', position: 'relative', margin: 10, overflow: 'hidden', borderRadius: 15, maxHeight: 80, padding: 8, minWidth: 100,maxWidth:150 }}>
           {/* <div onClick={() => { this.setState({ selected: i }); this.setState({ card_view: true }); this.setState({ sidePane: true }) }} style={{ position: 'absolute', width: 150, height: 100, top: 0, left: 0 ,background:'red'}}></div> */}
           {/* <div style={{ position: 'absolute', width: 150, height: 100, top: 0, left: 0, background: 'red',zIndex:90 }}>
          
        </div> */}
            
        <div onClick={() => { this.setState({ selected: i }); this.setState({ card_view: true }); this.setState({ sidePane: true }) }} style={{ position: 'absolute', right: 0, top: 0, height: 50, width:150, }}>
              <MenuProvider onContextMenu={()=>{
                this.setState({ selected: i })
              }} onClick={() => { this.setState({ selected: i }); this.setState({ card_view: true }); this.setState({ sidePane: true }) }} id={i} style={{display: 'inline-block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', height: 50, width:150, }}>
      
        </MenuProvider>
        </div>
          {/* <div style={{ backgroundColor:'#2E7D32',width:40,height:40,position:'absolute',top:0,left:-20,zIndex:1000}}></div> */}
       {/* <Tooltip title={this.state.form_1[i].type}>   */}

               
                {this.state.form_1[i].progress == 3 && this.state.form_1[i].type != 'items' && <div style={{
                    position: 'absolute', right: 0, padding: 0, top: 0, margin: 0, zIndex: 10, background: 'white', color: 'white', height: 100, width: 30,

                  }}>
                    <div className='glow_1' style={{ background: '#2E7D32', height: 16, width: 16, borderRadius: 8, margin: 5, marginTop: 10 }}></div>


                  </div> }

                {this.state.form_1[i].progress == 2 && this.state.form_1[i].type != 'items' && <div style={{
                  position: 'absolute', right: 0, padding: 0, top: 0, margin: 0, zIndex: 10, background: 'white', color: 'white', height: 100, width: 30,

                }}>
                  <div className='glow_2' style={{ background: 'orange', height: 16, width: 16, borderRadius: 8, margin: 5, marginTop: 10 }}></div>


                </div>}
                {this.state.form_1[i].progress == 1 && this.state.form_1[i].type != 'items' &&
                   <div style={{
                    position: 'absolute', right: 0, padding: 0, top: 0, margin: 0, zIndex: 10, background: 'white', color: 'white', height: 100, width: 30,
                  }} >
                  <div className='glow_3' style={{ background: '#0039cb', height: 16, width: 16, borderRadius: 8, margin: 5, marginTop: 10 }}></div>
                    </div>} 
                {this.state.form_1[i].progress == 0 && this.state.form_1[i].type != 'items' &&
                  <div style={{
                    position: 'absolute', right: 0, padding: 0, top: 0, margin: 0, zIndex: 10, background: 'white', color: 'white', height: 100, width: 30,
                  }} >
                  <div className='glow' style={{ background: '#D32F2F', height: 16, width: 16, borderRadius: 8, margin: 5, marginTop: 10 }}></div>
                  </div>}
                {this.state.form_1[i].type == 'items' &&
                  <div style={{
                    position: 'absolute', right: 0, padding: 0, top: 0, margin: 0, zIndex: 10, background: 'white', color: 'gray', height: 100, width: 30,
                  }} >
                    <div  style={{ background: 'white', height: 16, width: 16, borderRadius: 8, margin: 5, marginTop: 10,fontSize:16,fontWeight:"bold" }}>
                      C
                    </div>
                  </div>}
               
        {/* <div  style={{
            position: 'absolute', right: 0, padding: 10, top: 0, margin: 0, zIndex: 10, background: !error ? '#2E7D32' : '#D32F2F', color: 'white', height: 100, width: 30
        }}>
            
 
            {!error ? <div>✓</div> : <div>✗</div>}
       
       </div> */}

          {/* </Tooltip> */}
        <div  style={{ height: 30, color: 'black', width: '100%', backgroundColor: 'transparent', padding: 5,paddingRight:30 }}>
          
          {/* <h4 style={{ color: color2 }}> */}
            <Typography
              // align="center"
              // className={classes.sugestion}
              color="black"
              style={{  width: '100%', fontSize: '12px', margin: 0, lineHeight: '15px',fontWeight:'bold' }}
              variant="body1"
            >

                {/* <TransitionGroup className="todo-li</TransitionGroup>st"> */}
                {/* <Zoom>  */}
                
                    {this.state.form_1[i].name}
                {/* </Zoom>  */}
                    {/* </TransitionGroup> */}
                </Typography>
       
        
          {/* </h4> */}

          {/* <small style={{ color: color2 }}> */}
          
         <Typography
              // align="center"
              // className={classes.sugestion}
              color="black"
              style={{ width: '100%', fontSize: '11px',  margin: 0, lineHeight: '15px',color:'gray' }}
              variant="body1"
            >
        {this.state.form_1[i].type=='items' ? 'Connector':'Task'}
            </Typography> 
         {/* </small>                                <br /> */}
          {typeof this.state.form_1[this.state.form_1[i].f_id] !== 'undefined' && <div style={{ color: 'gray', fontSize: '12px' }}>
            {/* <hr style={{ border: '0px solid #e5e5e5', marginTop: 10 }} />Parent: {this.state.form_1[this.state.form_1[i].f_id].name}{this.state.form_1[this.state.form_1[i].f_id].name === 'end' && <b style={{ color: 'red', marginLeft: 0 }}></b>}</div>} */}
            <hr style={{ border: '0px solid #e5e5e5', marginTop: 10 }} />Parent:
                                      {/* {this.state.lead.map(itm => {
              if (typeof this.state.form_1[i] !== 'undefined') {
                var nj = this.state.form_1[this.state.form_1[i].f_id].name;
                if (nj !== 'end') {
                  //get the id
                  var s = false
                  this.state.form_1[this.state.form_1[i].f_id].node_items.map(p => {
                    if (typeof p !== 'undefined' && typeof p.screen !== 'undefined' && p.screen === this.state.form_1[i].name) {
                      s = true
                    }
                  })
                  if (s === false) {
                    nj = 'end'


                    for (var g = 0; this.state.form_1.length > g; g++) {
                      if (this.state.form_1[g].show === true) {
                        for (var f = 0; this.state.form_1[g].node_items.length > f; f++) {
                          if (typeof this.state.form_1[g].node_items[f] !== 'undefined' && typeof this.state.form_1[g].node_items[f].screen !== 'undefined' && this.state.form_1[g].node_items[f].screen === this.state.form_1[i].name) {
                            nj = this.state.form_1[g].name;
                          }
                        }
                      }

                    }
                  }
                  //check if items have this.state.form_1[i].
                }
                return (
                  <span> {nj === 'end' ? <b style={{ color: 'red', marginLeft: 0 }}>(Not available)</b> : <font>{nj}</font>}
                  </span>
                )
              }
            })} */}

          </div>
          }


          {/* {typeof this.state.form_1[this.state.form_1[i].f_id] === 'undefined' && <div style={{ color: 'gray', fontSize: '12px' }}>
            <hr style={{ border: '0px solid #e5e5e5', marginTop: 10 }} />Parent: {this.state.first_object.name}</div>} */}
           
       </div>
         
      </div>
          </Tooltip>
         </CSSTransition>
         {/* {loadNode} */}
          {/* </Zoom>  */}
        {/* </ReactCSSTransitionGroup> */}
        {/* {typeof this.state.form_1[i].screen_text!=='undefined' && this.state.form_1[i].screen_text.trim()!=='' &&
      <div style={{ background: 'rgba(0,0,0,0.8)',maxWidth:150, color: 'white', border: '0.0px solid black', padding: 5, borderRadius: 5,fontSize:'11px',margin:3 }} >
          <Typography
              // align="center"
              // className={classes.sugestion}
              color="white"
              style={{ width: '100%', fontSize: '11px',  margin: 0, lineHeight: '15px',color:'white' }}
              variant="body1"
            >
          {this.state.form_1[i].screen_text}
          </Typography>
   </div>} */}
          {this.state.form_1[i].colapse==true && <div style={{height:3}}></div>}
          {typeof this.state.form_1[i].screen_text !== 'undefined' && this.state.form_1[i].screen_text.trim() !== '' &&
            <div style={{ background: this.state.form_1[i].comment_color, maxWidth: 150, color: 'white', border: '0.0px solid black', padding: 5, borderRadius: 5, fontSize: '11px', margin: 3 }} >
              <Typography
                // align="center"
                // className={classes.sugestion}
                color="white"
                style={{ width: '100%', fontSize: '12px', margin: 0, lineHeight: '15px', color: 'black' }}
                variant="body1"
              >
                {this.state.form_1[i].screen_text}
              </Typography>
            </div>}
        </div>
      </div>


  
    {show.h && <div style={{border:'0px solid red',borderLeft:'0px',display:'flex',flexDirection:"row"}}>
      {/* <div style={{ height: '100%', width: 2, borderLeft: '1px solid red', marginTop: 32 }}></div> */}
  { this.state.form_1[i].colapse===false &&   <div >

        {/* <TweenOneGroup> */}

      {this.state.form_1.map((itm,f) => {
      if(typeof v==='undefined'){var v=0}
      
        if (typeof !itm.from !== 'undefined' && itm.from === this.state.form_1[i].order && itm.show === true) {
v++
        
return (
  
               <CSSTransition
            // onLoad={() => { loadNode() }}
            in={this.state.form_1[i].inprop}
            timeout={300}
            classNames="alert"
            unmountOnExit
            // onEnter={() => {
            //   let obj = [...this.state.form_1];
            //   obj[i].inprop = false
            //   this.setState({ form_1: obj })
            // }}
            onExited={() => {
            this.deleteNode2(i)
            }}
          ><div style={{ flexDirection: 'row', display: 'flex' }}>

            {/* <div>


                                      </div> */}
                                      {/* {} */}
         
            {this.recurse(f, v)}
         
           
{/* <LineTo from={i} to={f} /> */}
          </div></CSSTransition> 
      
          )
       
          
        }
      }).reverse()} </div> }
    </div>} 
  </div>)}
}
clearAll=()=>{
  var flowstate = this.state.flowState;
  this.setState({
    menu: true, checkedB: false,
    showError: false, errorMsg: '', flow_code_2: '', step_1_err: false, flow_type: '', flow_desc: '', flow_name: '', addflow: false, search: '', results: true, sender: {}, selected: '', card_view: false, sidePane: false, drag: false,
    first_object: {

      name: 'start_page',
      type: 'items',
      node_items: [],
      external: false,
      method: "get",
      url: '',
      node_options: [],
      next_screen: '',
      short_code: '',
      screen_text: '',


    }, form_1: [], lead: [1], loading: false, order_count: [], error: '', codes: []
  })
  this.setState({ flowState: flowstate });
}
 
render() {
  //  const CustomMenu = () => (
  //   <ul className="menu">
  //     <li>Login</li>
  //     <li>Register</li>
  //     <li>Open Profile</li>
  //   </ul>
  // ); 
/*jshint ignore: start */
  // const onClick = ({ event, props }) => console.log(event, props);
  // const MyAwesomeMenu = () => (
  //   <Menu id='menu_id' animation={animation.pop} style={{width:80}}>
  //     <Item onClick={onClick}>Rename</Item>
  //     <Item onClick={onClick}>Ipsum</Item>
  //     <Separator />
  //     <Item disabled>Dolor</Item>
  //     <Separator />
  //     <Submenu label="Foobar">
  //       <Item onClick={onClick}>Foo</Item>
  //       <Item onClick={onClick}>Bar</Item>
  //     </Submenu>
  //   </Menu>
  // );
    return (

      <div className='' style={{ display: 'flex', flexDirection: 'row', height: '100%', overflow: 'hidden', position: 'relative' }}>
     {console.log(this.state)}
        {/* {AuthNav} */}
        {/* {this.props.updateProject(this.state)} */}
        {/* <ContextMenu menu={() => <CustomMenu>} /> */}
        {/* <div style={{ height: 60, width: '100vw', display: 'flex', flexDirection: 'row', backgroundColor: 'white', zIndex: 1000, position: 'absolute', top: 0, left: 0 }}>
          <div
            onClick={() => {
              this.setState({ timeline: false })
            }}

            style={{ borderBottom: !this.state.timeline ? '5px solid red' : '0', cursor: 'pointer', width: 100, textAlign: 'center', height: 60, }}
            className='menuItm'
          >
            <Typography

              color="white"
              style={{ width: '100%', fontSize: '18px', margin: 0, color: 'black', lineHeight: '55px', fontWeight: !this.state.timeline ? 'bold' : 'normal' }}
              variant="body1"
            >Node tree</Typography>


          </div>
          <div
            onClick={() => {
              this.setState({ timeline: true })
            }}
            className='menuItm' style={{ borderBottom: this.state.timeline ? '5px solid red' : '0', cursor: 'pointer', width: 100, textAlign: 'center', height: 60, }}>
            <Typography

              color="white"
              style={{ width: '100%', fontSize: '18px', margin: 0, color: 'black', lineHeight: '55px', fontWeight: this.state.timeline ? 'bold' : 'normal' }}
              variant="body1"
            >Cards</Typography>


          </div>
          <div className='menuItm' style={{ borderBottom: '0px solid red', cursor: 'pointer', width: 100, textAlign: 'center', height: 60, }}>
            <Typography

              color="white"
              style={{ width: '100%', fontSize: '18px', margin: 0, color: 'black', lineHeight: '55px', }}
              variant="body1"
            >Timeline</Typography>


          </div>
          <div className='menuItm' style={{ borderBottom: '0px solid red', cursor: 'pointer', width: 100, textAlign: 'center', height: 60, }}>
            <Typography

              color="white"
              style={{ width: '100%', fontSize: '18px', margin: 0, color: 'black', lineHeight: '55px', }}
              variant="body1"
            >Calender</Typography>


          </div>
        </div> */}
        
        {this.state.menu && <div style={{
          cursor: "pointer",
          position: 'absolute',
          
          backgroundColor:'#E7EFF7',
          // backgroundImage: `url(${logodark})`,
          // backgroundColor:'#35363A',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          overflow:'hidden',

           top:0,left:0,width:'100%',height:'100vh',zIndex:1000,padding:20,paddingBottom:50,display:'flex',flexDirection:'row',flexWrap:'wrap',overflow:"scroll"
      }}>
    
            {/* <Col md={4}>
              <Card body onClick={() => { 
                
                
                // this.setState({ addflow: true });
                this.setState({ menu: false })
                this.setState({ flowState: 'new' })
                this.getCodes()
              
              }} style={{overflow:'hidden',maxHeight:200,minWidth:250}}>
                <CardTitle className="mt-0">Credit purchase</CardTitle>
                <div style={{ height: 100, textAlign: 'center', padding: 10, width: '100%', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', }}>
                  <Typography

                    color="white"
                    style={{ fontSize: '38px', margin: 0, color: '#252B3B', fontWeight: 'bold' }}
                    variant="body1"
                  >*200#</Typography></div>
                {/* <CardText
                >This shortcode enables you to purchase airtime for any network</CardText> */}
                {/* <Link to="#" className="btn btn-primary waves-effect waves-light">Open</Link>
                <div style={{ height: '100%', position: 'absolute',top:0,left:0, textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center',background:'white' }}>
                  <Typography

                    color="white"
                    style={{ fontSize: '48px', margin: 0, color: '#252B3B', fontWeight: 'bold' }}
                    variant="body1"
                  > <AddIcon size={100} style={{ fontSize: 48, color: '#252B3B' }} /></Typography></div>

              </Card> */}

            {/* </Col> */} 
           
          
            
          

          <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',width:'100%',justifyContent:'space-around'}}>
            
            <Modal
              visible={this.state.addProject}
              closemodal={() => this.setState({ addProject: false })}
              type="bounceInLeft"
            >
              {/* <div onClick={() => { this.setState({ addProject: false }) }} style={{ position: 'absolute', height: '100vh', width: '100vw', top: 0, left: 0, }}></div> */}
              <div style={{padding:10,marginTop:10}}>
                <h3> <Typography

                  // align="center"
                  // className={classes.sugestion}
                  color="white"
                  style={{ width: '100%', fontSize: '20px', margin: 0, color: 'black' }}
                  variant="body1" >Add Project
             </Typography>  </h3>
                <h3> <Typography

                  // align="center"
                  // className={classes.sugestion}
                  color="white"
                  style={{ width: '100%', fontSize: '16px', margin: 0, color: 'gray' }}
                  variant="body1" >Please fill in the details below to create a new flow.
             </Typography>  </h3>
                <Input type='text' placeholder='Flow Name'
                  value={this.state.flow_name}
                  onChange={(e) => {

                    this.setState({ flow_name: e.target.value })
                  }}

                  style={{ width: '100%' }} /><br /><br />
                <Input type='text' placeholder='Description'
                  value={this.state.flow_desc}
                  onChange={(e) => {

                    this.setState({ flow_desc: e.target.value })
                  }}
                  style={{ width: '100%' }} /><br /><br />

</div>

            </Modal>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', justifyContent: 'space-around',alignItems:'center'}}> 
              <Typography
                onClick={() => {
                  this.setState({ menu: false })
                  this.setState({ flowState: 'new' })
                  this.getCodes()
                  //  this.setState({ addProject: true })
                   
                    }}
                color="white"
                style={{ fontSize: '20px', margin: 0, color: '#4442B5', fontWeight: 'bold' }}
                variant="body1"
              >Create Project</Typography>
            </div>
     {this.state.itms.map(item=>{
       return (<MenuCard/>)
     }) 
        }
          </div>

          {this.state.addflow &&
            <div style={{ position: 'fixed', color: 'white', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 100, overflow: 'hidden', display: "flex", justifyContent: 'center', flexDirection: 'row', alignItems: 'center', fontSize: 16 }}>
            <div onClick={() => { this.setState({ addflow: false }) }} style={{ position: 'absolute', height: '100vh', width: '100vw', top: 0, left: 0, }}></div>
              <div style={{ zIndex: 10, width: 350, borderRadius: 0, color: 'black', padding: 0, backgroundColor: 'white', boxShadow: '0 1px 1.5px 0 rgba(0,0,0,.12), 0 1px 1px 0 rgba(0,0,0,.24)' }}>
              <div style={{width:'100%',display:'flex',flexDirection:'row'}}>
                <div onClick={() => { this.setState({ laststep: false }) }} style={{ width: '50%', height: '60px', textAlign: 'center', borderBottom: this.state.laststep != true ?'3px solid #252B3B':''}}>
                  <Typography

                    // align="center"
                    // className={classes.sugestion}
                    color="white"
                    style={{ width: '100%', fontSize: '18px', lineHeight: '60px', margin: 0, color: 'black' }}
                    variant="body1" >Step 1
             </Typography>
</div>
                <div onClick={() => { 
                  if (this.state.flow_type == '') {
                    this.setState({ step_1_err: true })
                  } else {
                    this.setState({ laststep: true })
                    this.setState({ step_1_err: false })
                  }
                
                   }} style={{ width: '50%', height: '60px', textAlign: 'center', borderBottom: this.state.laststep == true ? '3px solid #252B3B' : '' }}>
                  <Typography

                    // align="center"
                    // className={classes.sugestion}
                    color="white"
                    style={{ width: '100%', fontSize: '18px',lineHeight:'60px', margin: 0, color: 'black' }}
                    variant="body1" >Step 2
             </Typography>
                </div>

              </div>
             <div style={{padding:15}}> 
                
          {this.state.laststep!=true ?   <div>   
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Choose type of Flow</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={this.state.flow_type} onChange={(e)=>{
                      this.setState({flow_type:e.target.value})
                    }}>
                      <FormControlLabel value="ussd" control={<Radio />} label="USSD" />
                      <FormControlLabel value="whatsapp" control={<Radio />} label="Whatsapp" />

                    </RadioGroup>
                  </FormControl>
      </div>
:
                <div> 
                    <h3> <Typography

                      // align="center"
                      // className={classes.sugestion}
                      color="white"
                      style={{ width: '100%', fontSize: '16px', margin: 0, color: 'gray' }}
                      variant="body1" >Please fill in the details below to create a new flow.
             </Typography>  </h3>

                    <Input type='text' placeholder='Flow Name' 
                      value={this.state.flow_name}
                      onChange={(e) => {
                       
                        this.setState({ flow_name: e.target.value })
                      }}
                    
                     style={{ width: '100%' }} /><br /><br />
                     <Input type='text' placeholder='Description'
                      value={this.state.flow_desc}
                      onChange={(e) => {

                        this.setState({ flow_desc: e.target.value })
                      }}
                      style={{ width: '100%' }} /><br /><br />
                  
                    {this.state.flow_type!='ussd' &&   <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.checkedB}
                          onChange={()=>{
                            this.setState({ checkedB: !this.state.checkedB})
                          }}
                          name="checkedB"
                          color="primary"
                        />
                      }
                      label="Auto generate shortcode"
                    />}
                 
                    {this.state.checkedB == false && this.state.flow_type=='whatsapp' &&
                    
  <Input type='text' placeholder='Enter Shortcode'
                      value={this.state.flow_code_2}
                      onChange={(e) => {
                       
                        this.setState({ flow_code_2: e.target.value })
                      }}
   style={{ width: '100%' }} />
                  
                    }
                    {this.state.flow_type == 'ussd' &&

                      <Input type='text' placeholder='Enter Shortcode'
                        value={this.state.flow_code_2}
                        onChange={(e) => {

                          this.setState({ flow_code_2: e.target.value })
                        }}
                        style={{ width: '100%' }} />

                    }
                  <br />
                
                  {/* <div style={{color:'red'}}>Please enter the shortcode</div> */}
                  <br />
              </div>}
                {this.state.step_1_err && <div style={{ color: 'red' }}>Please select the flow type</div>}
                {this.state.step_2_err && this.state.laststep && <div style={{ color: 'red' }}>Please fill in all the fields</div>}
                {this.state.step_3_err && this.state.laststep && <div style={{ color: 'red' }}>Please enter a valid ussd</div>}
                {this.state.step_4_err && this.state.laststep && <div style={{ color: 'red' }}>Please enter a valid phone number</div>}
               {this.state.laststep != true ? <Button onClick={() => { 
                  if (this.state.flow_type==''){
                    this.setState({ step_1_err: true }) 
                  }else{
                   this.setState({ laststep: true }) 
                    this.setState({ step_1_err: false }) 
                  }

                  // if (this.state.flow_type=='ussd'){
                  //   this.setState({ checkedB: false }) 
                  // }
                  
                  }} fullWidth style={{ backgroundColor: '#252B3B', color: 'white' }}>Next</Button>
              :
                  <Button onClick={() => { 
                //      this.setState({ menu: false })
                // this.setState({ flowState: 'new' })
                // this.getCodes()
                //     this.setState({ laststep: false })
                //     this.setState({ addflow: false })
                    this.setState({ step_3_err: false })
                    this.setState({ step_2_err: false })
                    this.setState({ step_4_err: false })
                    if (this.state.flow_name == '' || this.state.flow_desc==''){
                      this.setState({ step_2_err: true })
                 
                    }else{
                      if (this.state.flow_type=="ussd"){
                       
                        if (this.state.flow_code_2.substring(0, 1) === '*'.toString() && this.state.flow_code_2.substring(this.state.flow_code_2.length - 1, this.state.flow_code_2.length) === '#'.toString()) {
                          
                     console.log('ussd')
                          console.log(this.state.flow_name)
                          console.log(this.state.flow_desc)

                          console.log(this.state.flow_type)
                          console.log(this.state.flow_code_2)


                                 this.setState({ menu: false })
                this.setState({ flowState: 'new' })
                this.getCodes()
                    this.setState({ laststep: false })
                    this.setState({ addflow: false })
                            let v=this.state.first_object;
                          v.short_code = this.state.flow_code_2
                          this.setState({ first_object:v})

                        }else{
                          this.setState({ step_3_err: true })
                     
                        }
                      }else{
                        if (this.state.checkedB == false && this.state.flow_code_2.substring(0, 1) !== '+'.toString() ) {
  
                          this.setState({ step_4_err: true })
                        }else{

                          console.log('whatsapp')
                          console.log(this.state.flow_name)
                          console.log(this.state.flow_desc)

                          console.log(this.state.flow_type)
                          console.log(this.state.flow_code_2)

                                 this.setState({ menu: false })
                this.setState({ flowState: 'new' })
                this.getCodes()
                    this.setState({ laststep: false })
                    this.setState({ addflow: false })

                          this.setState({ menu: false })
                          this.setState({ flowState: 'new' })
                          this.getCodes()
                          this.setState({ laststep: false })
                          this.setState({ addflow: false })
                          let v = this.state.first_object;
                          v.short_code = this.state.flow_code_2

                          if (this.state.checkedB==true){
                            v.short_code=''
                          }
                          this.setState({ first_object: v })
                        }

                      }
                    }
                 

                  }} fullWidth style={{ backgroundColor: '#252B3B', color: 'white' }}>Finish</Button>
            }
              </div></div>
            </div>

          }

      </div> }
        {/* {!this.state.menu && <div onClick={() => { this.setState({ menu: true }) 
        
         
          this.clearAll();
          this.getCodes()
        }} style={{ cursor: 'pointer', background: '#252B3B', display:"block",textAlign:'center', width: 60,height:50, color: 'white', border: '0.0px solid black', borderRadius: 5, fontSize: '11px', margin: 3,position:'absolute',bottom:20,left:20,zIndex:1000 }} >
            <Typography
              // align="center"
              // className={classes.sugestion}
              color="white"
              style={{ width: '100%', fontSize: '12px', margin: 0, lineHeight: '50px', color: 'white' }}
              variant="body1"
            >
            Back
            </Typography>
          </div>
      } */}

        {/* {!this.state.menu && <div onClick = {() => {
        
          window.confirm("Are you sure you wish to  clear all nodes?") &&
            this.clearAll();
 
        }} style={{ cursor: 'pointer', background: '#252B3B', display: "block", textAlign: 'center', width: 60, height: 50, color: 'white', border: '0.0px solid #252B3B', borderRadius: 5, fontSize: '11px', margin: 3, position: 'absolute', bottom: 20, left: 90, zIndex: 1000 }} >
            <Typography
              // align="center"
              // className={classes.sugestion}
              color="white"
              style={{ width: '100%', fontSize: '12px', margin: 0, lineHeight: '50px', color: 'white' }}
              variant="body1"
            >
               Clear all
            </Typography>
          </div>
      } */}
        {/* {!this.state.menu && <div onClick={() => { 
          // this.setState({ errorMsg:"Saving Successfull"})
          // this.setState({ showError:true })
          // this.setState({ showJson: true })
          console.log(this.state)
          if (this.state.flowState == "new"){
            this.updateScreen("new");
          }else{
            this.updateScreen("update");
          }
          
          // console.log(this.state.form_1)
          // this.setState({ errorMsg: "Flow saved successfully " })
          // this.setState({ showError: true })
          // console.log(this.state.form_1)
        }} style={{ cursor: 'pointer', background: '#252B3B', display: "block", textAlign: 'center', width: 60, height: 50, color: 'white', border: '0.0px solid black', borderRadius: 5, fontSize: '11px', margin: 3, position: 'absolute', bottom: 20, right: 20, zIndex: 1000 }} >
            {this.state.flowState=="new" ? <Typography
            // align="center"
            // className={classes.sugestion}
            color="white"
            style={{ width: '100%', fontSize: '12px', margin: 0, lineHeight: '50px', color: 'white' }}
            variant="body1"
          >
    
            Save
            </Typography> :
            <Typography
              // align="center"
              // className={classes.sugestion}
              color="white"
              style={{ width: '100%', fontSize: '12px', margin: 0, lineHeight: '50px', color: 'white' }}
              variant="body1"
            >

              Update
            </Typography>

          }   
        </div>   }    */}
        {!this.state.menu && this.state.flowState=='update' && <div onClick={() => {
          this.setState({ addflow2: true })   
        }} style={{ cursor: 'pointer', background: '#252B3B', display: "block", textAlign: 'center', width: 60, height: 50, color: 'white', border: '0.0px solid black', borderRadius: 5, fontSize: '11px', margin: 3, position: 'absolute', bottom: 20, right: 100, zIndex: 1000 }} >
          <Typography
            // align="center"
            // className={classes.sugestion}
            color="white"
            style={{ width: '100%', fontSize: '12px', margin: 0, lineHeight: '50px', color: 'white' }}
            variant="body1"
          >
            Options
            </Typography>
        </div>} 
 
        <div style={{
         overflow: 'hidden', flex: 1, height: this.state.mode=='tasktree'? '80vh':'75vh', width: '100vw', userSelect: "none"
          }}>
<div style={{
            position: 'fixed', top: 0, left: 0,height:'100%', filter: 'blur(0px)', overflow: 'scroll', overflowX: 'hidden', 
  width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
            backgroundImage: `url(${logodark})`,
            // backgroundColor:'#35363A',
          backgroundSize: 'cover',
            overflowY: 'hidden',
          backgroundRepeat: 'no-repeat',
          // position:'relative',
          backgroundPosition: 'center',
          paddingBottom:50
}}>
 
</div>
        {this.state.mode=='timeline' && <div style={{ display: 'flex', flexDirection: 'row', padding: 0, paddingTop: 0, width: '100vw',position:'absolute',top:0,left:0,zIndex:100, }} >
              <CardTab />
            </div>
            }  
          <PanZoom 
            boundaryRatioVertical={0.8}
            boundaryRatioHorizontal={0.8}
            enableBoundingBox
            minZoom={0.7}
            maxZoom={1}
            zoomSpeed={0.6}
            // style={{marginTop:60}}
          >
          
          

            {this.state.results && this.state.mode!='timeline' &&
            <div style={{ display: 'flex', padding: 10, flexDirection: 'row', height: '100%', width: '100%', }} >
            {/* <LineTo from='start' to='end' orientation='v'/> */}
              {/* 
           {!this.state.result && <div style={{ display: 'hidden' }}>} */}

              <div >
                <div style={{ border: '0px solid red',backgroundColor: 'transparent', }}>
                {/* <div style={{ width: '100%', backgroundColor: "white", boxShadow: ' 0 1px 1.5px 0 rgba(0,0,0,.12), 0 1px 1px 0 rgba(0,0,0,.24)', marginBottom: 1 }}>
                    <h3 style={{ lineHeight: '40px', marginLeft: '10px', color: '#172B4D' }}>Start</h3></div>*/}
                  <div> 
                    <div className='start' style={{ backgroundColor: 'white', border: '0px', boxShadow: ' 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 5px 0 rgba(0,0,0,.23)', border: this.state.selected === 3243423423 ? '3px solid orange' : '1px' ,position: 'relative', margin: 10, overflow: 'hidden', borderRadius: 15, height: 50, padding: 8, minWidth: 100, maxWidth: 150 }}>
                    {/* <div className='start' style={{ background: 'transparent', position: 'relative', margin: 0, overflow: 'hidden', borderRadius: 3, height: 80, padding: 10, width: 250 }}> */}
                  
                      <div onClick={() => { this.setState({ card_view: false }); this.setState({ sidePane: true }); this.setState({ selected: 3243423423 }); }} style={{ position: 'absolute', userSelect: "none",right: 0, top: 0, height: '100%', width: '100%' }}>

                      </div>
                     
                    
         
          {/* <CloseIcon onClick={() => {
                                    let ids = [...this.state.form_1];     // create the copy of state array
                                    ids[i].show = false;
                                    ids[i].name = 'end';
                                    // this.setState({ card_view: false });
                                    //new value
                                    this.setState({ form_1: ids });
                                      this.corrector( i,'end');
                                        this.corrector2()
                                  }} style={{ float: 'right', marginBottom: 15 }} /> */}
          {/* <br /> */}
                                    {/* ✓'= */}
                        {this.state.lead.map((item, i) => {

                          var error = false
                          if (typeof this.state.first_object.screen_text === 'undefined') { this.state.first_object.screen_text = '' }
                          if (this.state.first_object.screen_text === '' || this.state.first_object.short_code === '') {
                            error = true
                          }
                          if (this.state.first_object.short_code.trim() === '') {
                            error = true
                          }


                          var t5 = this.state.first_object.node_items.filter(item => item !== '');

                          t5.map((itm, p) => { if (itm === null) { t5[p] = '' } })
                          t5.map((at, u) => {
                            if (Object.getOwnPropertyNames(t5[u]).length < 2) {
                              t5[u] = '';
                            }
                          });
                          t5 = t5.filter(item => item !== '');

                          //console.log(t)
                          if (t5.length === 0) {
                            error = true
                          }
                          var t5 = this.state.first_object.node_options.filter(item => item !== '');

                          t5.map((itm, p) => { if (itm === null) { t5[p] = '' } })

                          t5 = t5.filter(item => item !== '');

                          //console.log(t)
                          if (t5.length === 0 && this.state.first_object.type === 'options') {
                            error = true
                          }
                          var t = false;
                          var t2 = false;
                          {
                            this.state.lead.map(item => {


                              this.state.first_object.node_items.map((itm, j) => {
                                if (typeof this.state.first_object.node_items[j] !== 'undefined' && typeof this.state.first_object.node_items[j].field!='undefined' && this.state.first_object.node_items[j].field.trim() === '') {
                                  t = true;
                                }
                                if (typeof this.state.first_object.node_items[j] !== 'undefined' && this.state.first_object.node_items[j].screen === 'end') {
                                  t2 = true;
                                }
                              })
                              this.state.first_object.node_options.map((itm, j) => {
                                if (typeof this.state.first_object.node_options[j] !== 'undefined' && this.state.first_object.node_options[j].trim() === '') {
                                  t = true;
                                }

                              })
                              if (t === true) {
                                error = true
                              }
                            })
                          }
                          if (t2 === true) {
                            if (typeof this.state.first_object.exit_message === 'undefined' || this.state.first_object.exit_message.trim() === '') {
                              error = true
                            }

                          }
                          return (
                            <span>
                              {!error ? <div style={{
                                position: 'absolute', right: 0, padding: 0, top: 0, margin: 0, zIndex: 10, background: 'white', color: 'white', height: 100, width: 30,
                            
                              }}>
                                <div className='glow_1' style={{ background: !error ? '#2E7D32' : '#D32F2F', height: 16, width: 16, borderRadius: 8, margin: 5, marginTop: 10 }}></div>


                              </div> : <div style={{
                                  position: 'absolute', right: 0, padding: 0, top: 0, margin: 0, zIndex: 10, background:'white', color: 'white', height: 100, width: 30,
                              }} >
                                  <div className='glow' style={{ background: !error ? '#2E7D32' : '#D32F2F',height: 16, width: 16, borderRadius: 8,margin:5,marginTop:10}}></div>
                              </div>} </span>
                          )

                        })}
           
            {/* {!error ? <Chip label='✓' ✗style={{ color: 'white', backgroundColor: '#388E3C', }} /> : <Chip label='✗' style={{ float: 'right', color: 'white', backgroundColor: '#D32F2F' }} />} */}

                                    {/* {!error ? <Chip label='✓' style={{ color: 'white', backgroundColor: '#388E3C', }} /> : <Chip label='✗' style={{ float: 'right', color: 'white', backgroundColor: '#D32F2F' }} />} */}
        {/* </div> */}
                      <div style={{ height: 35, color: 'black', width: '100%',minWidth:120, background: 'transparent', padding: 5 }}>
                        {/* <h4 style={{ color: '#172B4D' }}> */}
                          <Typography
                            // align="center"
                            // className={classes.sugestion}
                            color="black"
                            style={{ width: '100%', fontSize: '12px', margin: 0, lineHeight: '15px', fontWeight: 'bold' }}
                            variant="body1"
                          >
                            Start Task 
                          </Typography>
                        {/* </h4> */}
                        {/* <h4 style={{ color: '#172B4D' }}>start_page </h4> */}
                        {/* <Divider/> */}
                        <small style={{ color: 'gray' }}>{this.state.first_object.type=='items' ? 'Connector':'Task'}</small>                                <br />
                        <div style={{ color: 'gray', fontSize: '12px' }}>
                          <hr style={{ border: '0px solid #e5e5e5', marginTop: 10 }} /> </div>

                      </div></div>
                  </div>
                  {/* <div style={{ width: '100%', backgroundColor: "white", boxShadow: ' 0 1px 1.5px 0 rgba(0,0,0,.12), 0 1px 1px 0 rgba(0,0,0,.24)', marginBottom: 1, textAlign: 'center' }}>
                    <h3 style={{ lineHeight: '40px', marginLeft: '10px', color: 'white' }}>Panel</h3></div> */}
                </div>

                {/* <Button color='primary'

                  onClick={() => {

              this.setState({addflow2:true})   
// this.updateScreen();
                  }}
                  fullWidth style={{ marginTop: 20, backgroundColor: '#252B3B', color: 'white' }}>

                  Edit
      </Button> */}
               
                <Button color='primary'

                  onClick={() => {
  //  this.setState({
  //    showError: false, errorMsg: '', search: '', result: true, sender: {}, selected: '', card_view: false, sidePane: false,
  //    first_object: {
  //      name: 'start_page',
  //      type: 'items',
  //      node_items: [],
  //      node_options: [],
  //      next_screen: '',
  //      short_code: '',
  //      screen_text: '',


  //    }, form_1: [], lead: [1], loading: false, order_count: [], error: '', codes: []
  //                   })
                    // this.deleteFlow(this.state.first_object.short_code)
                    // this.setState({ errorMsg: 'This function is not yet available' })
                    //  this.setState({ showError: true })
                    // 

                  }}
                  
                  fullWidth style={{ marginTop: 15,display:'none', backgroundColor: '#F8F8F8', color: 'red', boxShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 5px 0 rgba(0,0,0,.23)' }}>

                  Delete
      </Button>
                {this.state.loading && <div style={{ position: 'absolute', color: 'white', zIndex: 10000, fontSize: 20, fontWeight: 'bold', width: '100%', height: '100%', top: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.0)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  Loading...
      </div>}

              </div>


              {this.state.order_count.map((level, x) => {
                {/* if (item.order.length === (x + 2)) {} */ }
                let r = 0;
                var gh = []
                {
                  this.state.form_1.map((item) => {

                    if (item.order.length === (x + 2) && item.show === true) {
                      gh.push(item)

                    }
                  })
                }
                return (<div>



                  {this.state.first_object.node_items.length > 0 && gh.length > 0 &&
                    (<div style={{ border: '0px solid red', margin: 5, backgroundColor: 'transparent', borderRadius: 3, }}>
                      <div style={{ width: '100%', backgroundColor: "white", marginBottom: 1 }}>
                        {/* <h3 style={{ lineHeight: '40px', marginLeft: '10px', color: '#172B4D' }}>Level {x + 1}</h3> */}
                        </div>

                      {/* <hr style={{border:'0.7px solid #e5e5e5'}}/> */}
                    <div className='scollhide ' style={{  backgroundColor: 'transparent',scrollbarWidth: '10px', scrollbar: 'none' }}>
                        {this.state.form_1.map((item, i) => {
                      r++;
                      if (typeof this.state.form_1[i].screen_text === 'undefined') { this.state.form_1[i].screen_text=''}
                      if (this.state.form_1[i].screen_text === '' || this.state.form_1[i].name === ''){
                      }
                            if(this.state.form_1[i].name.trim()===''){
                          }
                    var t=false;
    var t2=false;
                            {this.state.lead.map(()=>{
                                            
                                               if( typeof this.state.form_1[i].node_options==='undefined'){
                                                  let ids = [...this.state.form_1]; 
                                    ids[i].node_options = [];
                                                    this.setState({form_1:ids})
                                              }
                                                  {/* if( typeof this.state.form_1[i].node_items==='undefined'){
                                                  let ids = [...this.state.form_1]; 
                                    ids[i].node_items = [];
                                                    this.setState({form_1:ids})
                                              } */}
                                                var t5 = this.state.form_1[i].node_items.filter(item => item !== '');

              t5.map((itm, p) => { if (itm === null) { t5[p] = '' } })
              t5.map((at, u) => {
                if (Object.getOwnPropertyNames(t5[u]).length < 2) {
                  t5[u] = '';
                }
              });
              t5 = t5.filter(item => item !== '');

              //console.log(t)
              if (t5.length === 0) {
              }
               var t5 = this.state.form_1[i].node_options.filter(item => item !== '');

              t5.map((itm, p) => { if (itm === null) { t5[p] = '' } })
         
              t5 = t5.filter(item => item !== '');

              //console.log(t)
              if (t5.length === 0 && this.state.form_1[i].type==='options') {
              }
                                              this.state.form_1[i].node_items.map((itm, j) => {
                                                if (this.state.form_1[i].node_items[j] !==null && typeof this.state.form_1[i].node_items[j].field !== 'undefined' && typeof this.state.form_1[i].node_items[j] !== 'undefined'  && this.state.form_1[i].node_items[j].field.trim()==='' ){
                                                  t = true;
                                                }
                                                if (typeof this.state.form_1[i].node_items[j] !== 'undefined' && this.state.form_1[i].node_items[j] !== null && this.state.form_1[i].node_items[j].screen==='end' ){
                                                  t2 = true;
                                                }
                                              })
                                                  this.state.form_1[i].node_options.map((itm, j) => {
                                                if (typeof this.state.form_1[i].node_options[j] !== 'undefined' && this.state.form_1[i].node_options[j].trim()==='' ){
                                                  t = true;
                                                }
                                             
                                              })
                                              if(t===true){
                                            }
                                          })}
                                          if( t2 === true ){
                                            if(typeof this.state.form_1[i].exit_message==='undefined' || this.state.form_1[i].exit_message.trim()===''){
                                            }
                                             
                                          }


                      if (item.order.length === (x + 2) && item.show === true) {
                            return (
                              <div>
                                <div style={{display:'flex',flexDirection:'row'}}>
                                <div className='end' style={{ backgroundColor: 'transparent', boxShadow: ' 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 5px 0 rgba(0,0,0,.23)', position: 'relative', margin: 10, overflow: 'hidden', borderRadius: 15, height: 50, padding: 10, minWidth: 100,maxWidth:150,display:'none' }}>
                                  <div onClick={() => { this.setState({ selected: i }); this.setState({ card_view: true }); this.setState({ sidePane: true })}} style={{ position: 'absolute', right: 0, top: 0, height: '100%', width: '100%' }}>

                                  </div>
                                  <div style={{
                                    position: 'absolute', right: 0,padding:10, top: 0, margin:0 , zIndex: 10, background:'#2E7D32',color:'white',height:100,width:30}}> 
                                  {/* <CloseIcon onClick={() => {
                                    let ids = [...this.state.form_1];     // create the copy of state array
                                    ids[i].show = false;
                                    ids[i].name = 'end';
                                    // this.setState({ card_view: false });
                                    //new value
                                    this.setState({ form_1: ids });
                                      this.corrector( i,'end');
                                        this.corrector2()
                                  }} style={{ float: 'right', marginBottom: 15 }} /> */}
                                    {/* <br /> */}
                                    ✓
                                    {/* {!error ? <Chip label='✓' style={{ color: 'white', backgroundColor: '#388E3C', }} /> : <Chip label='✗' style={{ float: 'right', color: 'white', backgroundColor: '#D32F2F' }} />} */}
                                  </div>
                                  <div style={{ height: 30, color: 'black', width: '100%', backgroundColor: 'white', padding: 5 }}>
                                      <h4>
                                        <Typography
                                          // align="center"
                                          // className={classes.sugestion}
                                          color="black"
                                          style={{ width: '100%', fontSize: '12px', margin: 0, lineHeight: '15px', fontWeight: 'bold' }}
                                          variant="body1"
                                        >
                                          {this.state.form_1[i].name}
                                        </Typography>


                                      </h4>
                                    {/* <h4 style={{ color: '#172B4D' }}>{this.state.form_1[i].name} </h4> */}

                                    <small style={{ color: 'gray' }}>Type: {this.state.form_1[i].type}</small>                                <br />
                                    {typeof this.state.form_1[this.state.form_1[i].f_id] !== 'undefined' && <div style={{ color: 'gray', fontSize: '12px' }}>
                                      {/* <hr style={{ border: '0px solid #e5e5e5', marginTop: 10 }} />Parent: {this.state.form_1[this.state.form_1[i].f_id].name}{this.state.form_1[this.state.form_1[i].f_id].name === 'end' && <b style={{ color: 'red', marginLeft: 0 }}></b>}</div>} */}
                                      <hr style={{ border: '0px solid #e5e5e5', marginTop: 10 }} />Parent:
                                      {this.state.lead.map(()=>{
                                        if (typeof this.state.form_1[i]!=='undefined'){
                                        var nj = this.state.form_1[this.state.form_1[i].f_id].name;
                                                              if(nj!=='end') {
                                                                //get the id
                                                                var s=false
                                                                this.state.form_1[this.state.form_1[i].f_id].node_items.map(p=>{
                                                                  if (typeof p !== 'undefined' && typeof p.screen !== 'undefined' && p.screen === this.state.form_1[i].name){
                                                                    s=true
                                                                  }
                                                                })
                                                                if(s===false){nj='end'
                                                                
                                                                
                                                                  for (var g = 0; this.state.form_1.length > g; g++) {
                                                                    if (this.state.form_1[g].show===true){
                                                                    for (var f = 0; this.state.form_1[g].node_items.length > f; f++) {
                                                                      if (typeof this.state.form_1[g].node_items[f] !== 'undefined' && typeof this.state.form_1[g].node_items[f].screen !== 'undefined' && this.state.form_1[g].node_items[f].screen === this.state.form_1[i].name) {
                                                                        nj = this.state.form_1[g].name;
                                                                      }
                                                                    }
                                                                    }

                                                                  }
                                                                }
                                                                //check if items have this.state.form_1[i].
                                                              }
                                        return(
                                          <span> {nj=== 'end' ? <b style={{ color: 'red', marginLeft: 0 }}>(Not available)</b> : <font>{nj}</font>}
                                        </span>
                                        )
                                        }
                                      })}
                                       
                                        </div>
                                        }


                                    {typeof this.state.form_1[this.state.form_1[i].f_id] === 'undefined' && <div style={{ color: 'gray', fontSize: '12px' }}>
                                      <hr style={{ border: '0px solid #e5e5e5', marginTop: 10 }} />Parent: {this.state.first_object.name}</div>}
                                  </div>



                                  {/* <hr /> */}
                                  {/* Name<br />
            <Input type='text' placeholder='form name' value={this.state.form_1[i].name}
              onChange={(e) => {
                let obj = this.state.form_1;
                obj[i]['name'] = e.target.value.trim()
                this.setState({ form_1: obj })
              }}
            /><br /> */}
                                  <div style={{ display: 'none' }}>
                                    <div style={{ marginTop: 5, marginBottom: 5 }}>
                                      <strong>Type</strong><br />
                                    </div>
                                    <Select onChange={(e) => {

                                      if (this.state.form_1[i]['type'] !== 'items') {
                                        if (typeof this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1] !== 'undefined') {
                                          if (typeof this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1] !== 'undefined') {
                                            var y = this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1].id;
                                            var arr = this.state.form_1[y].node_items;
                                            arr = arr.filter(item => item !== '');
                                            arr.map((itm, p) => { if (itm === null) { arr[p] = '' } })
                                            arr = arr.filter(item => item !== '');
                                            // //////console.log(this.state.first_object.node_items)
                                            //////console.log(arr)
                                            //////console.log([])
                                            if (arr.length === 0 || this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1].screen==='end') {
                                              if (this.state.form_1[i]['type'] !== 'items') {




                                                // let ids2 = this.state.form_1;     // create the copy of state array
                                                // ids2[this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1].id].show = false;                //new value
                                                // this.setState({ form_1: ids2 });

                                                var y = this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1].id;
                                                delete this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1]

                                                let ids = [...this.state.form_1];
                                                ids[i].node_options = [];                //new value
                                                this.setState({ form_1: ids });

                                              }

                                              let obj = this.state.form_1
                                              obj[i].type = e.target.value.trim()
                                              this.setState({ form_1: obj })

                                              if (e.target.value !== 'items') {
                                                let obj2 = [...this.state.form_1]
                                                // if (typeof obj2[i]['node_options']!=='undefined'){
                                                //   obj2[i]['node_options'].push({ field: 'field', screen: 'screen', id: (this.state.form_1.length - 1) })
                                                // }else{
                                                obj2[i]['node_options'] = []
                                                // }
                                                var rt = this.new_object(this.state.form_1.length, this.state.form_1[i].order, (r - 1), this.state.form_1, i)
                                                this.setState({ form_1: rt[0] })
                                                let obj = this.state.form_1;
                                                obj[i]['node_items'].push({ field: 'field', screen: rt[2], id: rt[1] })
                                                this.setState({ form_1: obj })
                                                // this.setState({ form_1: obj2 })
                                              }
                                            } else {
                                              if (this.state.form_1[i]['type'] === 'options') {
                                                e.target.value = 'options'
                                              } else {
                                                e.target.value = 'direct_input'
                                              }
                                              this.setState({ errorMsg: 'This form contains other forms, change next screen to - end' })
                                              this.setState({ showError: true })
                                              // alert('This form contains other forms, or change form type to Items first')
                                            }

                                          } else {
                                            let obj = this.state.form_1
                                            obj[i].type = e.target.value.trim()
                                            this.setState({ form_1: obj })

                                            if (e.target.value !== 'items') {
                                              let obj2 = [...this.state.form_1]
                                              // if (typeof obj2[i]['node_options']!=='undefined'){
                                              //   obj2[i]['node_options'].push({ field: 'field', screen: 'screen', id: (this.state.form_1.length - 1) })
                                              // }else{
                                              obj2[i]['node_options'] = []
                                              // }
                                              var rt = this.new_object(this.state.form_1.length, this.state.form_1[i].order, (r - 1), this.state.form_1, i)
                                              this.setState({ form_1: rt[0] })
                                              let obj = this.state.form_1;
                                              obj[i]['node_items'].push({ field: 'field', screen: rt[2], id: rt[1] })
                                              this.setState({ form_1: obj })
                                              // this.setState({ form_1: obj2 })
                                            }
                                          }
                                        } else {
                                          let obj = this.state.form_1
                                          obj[i].type = e.target.value.trim()
                                          this.setState({ form_1: obj })

                                          if (e.target.value !== 'items') {
                                            let obj2 = [...this.state.form_1]
                                            // if (typeof obj2[i]['node_options']!=='undefined'){
                                            //   obj2[i]['node_options'].push({ field: 'field', screen: 'screen', id: (this.state.form_1.length - 1) })
                                            // }else{
                                            obj2[i]['node_options'] = []
                                            // }
                                            var rt = this.new_object(this.state.form_1.length, this.state.form_1[i].order, (r - 1), this.state.form_1, i)
                                            this.setState({ form_1: rt[0] })
                                            let obj = this.state.form_1;
                                            obj[i]['node_items'].push({ field: 'field', screen: rt[2], id: rt[1] })
                                            this.setState({ form_1: obj })
                                            // this.setState({ form_1: obj2 })
                                          }
                                        }
                                      } else {


                                        if (this.state.form_1[i]['type'] !== 'items') {




                                          let ids2 = this.state.form_1;     // create the copy of state array
                                          ids2[this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1].id].show = false;                //new value
                                          this.setState({ form_1: ids2 });

                                          var y = this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1].id;
                                          delete this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1]

                                          let ids = [...this.state.form_1];
                                          ids[i].node_options = [];                //new value
                                          this.setState({ form_1: ids });

                                        }

                                        if (this.state.form_1[i]['type'] === 'items') {
                                          var arr = this.state.form_1[i].node_items;
                                          arr = arr.filter(item => item !== '');
                                          arr.map((itm, p) => { if (itm === null) { arr[p] = '' } })
                                          arr = arr.filter(item => item !== '');
                                          // //////console.log(this.state.first_object.node_items)
                                          //////console.log(arr)
                                          //////console.log([])
                                          // || this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1].screen==='end'
                                          if (arr.length === 0 ) {
                                            //     let obj = this.state.first_object
                                            // obj['type'] = e.target.value.trim()
                                            // this.setState({ first_object: obj })

                                            let obj = this.state.form_1
                                            obj[i].type = e.target.value.trim()
                                            this.setState({ form_1: obj })

                                            if (e.target.value !== 'items') {
                                              let obj2 = [...this.state.form_1]
                                              // if (typeof obj2[i]['node_options']!=='undefined'){
                                              //   obj2[i]['node_options'].push({ field: 'field', screen: 'screen', id: (this.state.form_1.length - 1) })
                                              // }else{
                                              obj2[i]['node_options'] = []
                                              // }
                                              var rt = this.new_object(this.state.form_1.length, this.state.form_1[i].order, (r - 1), this.state.form_1, i)
                                              this.setState({ form_1: rt[0] })
                                              let obj = this.state.form_1;
                                              obj[i]['node_items'].push({ field: 'field', screen: rt[2], id: rt[1] })
                                              this.setState({ form_1: obj })
                                              // this.setState({ form_1: obj2 })
                                            }
                                          } else {
                                            e.target.value = this.state.form_1[i]['type'];
                                            this.setState({ errorMsg: 'This form contains other forms' })
                                            this.setState({ showError: true })
                                            // alert('Please delete the forms to change the form type')
                                          }
                                        }
                                        //   // //////console.log(this.state.first_object['node_items'][this.state.first_object['node_items'].length - 1].id)


                                        //   var y = this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1].id;
                                        //   delete this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1]


                                        //   let ids2 = this.state.form_1;     // create the copy of state array
                                        //   ids2[y].show = false;                //new value
                                        //   this.setState({ form_1: ids2 });

                                        //   // let obj = this.state.form_1
                                        //   // obj[i]['type'] = e.target.value.trim()
                                        //   // this.setState({ form_1: obj })

                                        //   let ids = this.state.form_1[i];
                                        //   ids.node_options = [];                //new value
                                        //   this.setState({ form_1: ids });
                                        //   // let ids2 = this.state.form_1[this.state.first_object['node_items'][this.state.first_object['node_items'].length - 1].id].show = false;                //new value
                                        //   // this.setState({ form_1: ids2 }); 

                                        // }
                                        // let obj = this.state.form_1
                                        // obj[i]['type'] = e.target.value.trim()
                                        // this.setState({ form_1: obj })

                                        // if (e.target.value === 'options') {
                                        //   let obj2 = this.state.form_1
                                        //   let inst = {
                                        //     name: 'Screen',
                                        //     type: 'direct_input',
                                        //     node_items: [],
                                        //     node_option: [],
                                        //     next_screen: '',
                                        //     short_code: '',
                                        //     show: true,


                                        //   };
                                        //   inst['name'] = 'Form ' + eval(this.state.form_1.length + 1)
                                        //   inst['order'] = [1, this.state.form_1.length + 1];

                                        //   // if (this.state.order_count.length < 2) {

                                        //   //   this.setState({ order_count: [1,1]})
                                        //   // }


                                        //   obj2.push(inst);
                                        //   // this.setState({ level_1: obj2 })
                                        //   this.setState({ form_1: obj2 })

                                        //   let obj = this.state.form_1[i]
                                        //   obj['node_items'].push({ field: 'field', screen: 'screen', id: (this.state.form_1.length - 1) })
                                        //   this.setState({ first_object: obj })
                                        //   // //////console.log(this.state.form_1)
                                        //   // setTimeout(function t(letf=this.state){
                                        //   //////console.log(this.state);
                                        // }

                                      }
                                      // } else {
                                      //   alert('Please delete the forms to change the form type')
                                      // }
                                      this.level_update();
                                    }
                                    }


                                      displayEmpty value={this.state.form_1[i]['type']} style={{ width: 100 }}>
                                      <MenuItem value='items' selected>Items </MenuItem>
                                      <MenuItem value='options'>Options</MenuItem>
                                      <MenuItem value='direct_input' >Raw Input</MenuItem>

                                    </Select><br />


                                    {this.state.form_1[i].type === 'items' &&
                                      (<div><br />
                                      {/* <strong>node items</strong> */}
                                        <br />
                                        <Button
                                          color="primary"
                                          fullWidth
                                          size="small"
                                          // type="submit"
                                          style={{ backgroundColor: '#e5e5e5', marginBottom: 10, border: '0.5px solid #e5e5e5' }}
                                          onClick={() => {
                                            // let obj = this.state.form_1;
                                            // obj[i]['node_items'].push({ field: 'field', screen: 'screen'})
                                            // this.setState({ form_1: obj })
                                            var rt = this.new_object(this.state.form_1.length, this.state.form_1[i].order, (r - 1), this.state.form_1, i)
                                            this.setState({ form_1: rt[0] })
                                            // this.level_update();
                                            // let v = this.new_object(this.state.form_1.length, this.state.form_1[i].order, i);
                                            // if (this.state.order_count.length < v.length) {
                                            //     let x=[];
                                            //   for (var k = 0; v.length>k;k++){
                                            //         x.push(1);
                                            //     }
                                            //     this.setState({ order_count: x})
                                            //   }
                                            let obj = this.state.form_1;
                                            obj[i]['node_items'].push({ field: 'field', screen: rt[2], id: rt[1] })
                                            this.setState({ form_1: obj })
                                            //////console.log(this.state)
                                            this.level_update();
                                              this.corrector2()
                                            //   // //////console.log(this.state.first_object.node_items);
                                          }}
                                        >add node</Button>

                                       
                                        {this.state.form_1[i].node_items.map((item, j) => {
                                          {/* j++; */ }
                                          {/* let ids2 = [...this.state.form_1];     // create the copy of state array
                                    ids2[i].node_items[j].screen = this.state.form_1[item.id].name;                  //new value
                                    this.setState({ form_1: ids2 }); */}
                                          if (this.state.form_1[i].node_items[j]!=null){
                                          return (<div>
                                            {/* <div>{i+1}. </div> */}
                                            <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                                              <div style={{ flex: 1 }}>  <Input type='text' value={this.state.form_1[i].node_items[j].field}
                                                onChange={(e) => {
                                                  let ids2 = [...this.state.form_1];     // create the copy of state array
                                                  ids2[i].node_items[j].field = e.target.value;                  //new value
                                                  this.setState({ form_1: ids2 });
                                                }}
                                                placeholder='field' style={{ width: 100 }} />    </div>
                                              {/* ={this.state.form_1[item.id].name}  */}
                                              {typeof this.state.form_1[item.id] !== 'undefined' ?
                                                <div style={{ flex: 1 }}>

                                                  <Input style={{ width: 100, marginLeft: 10 }} type='text' value={this.state.form_1[item.id].name}


                                                    onChange={(e) => {

                                                      // let obj = this.state.form_1[i].node_items;
                                                      let ids = [...this.state.form_1];     // create the copy of state array
                                                      ids[item.id].name = e.target.value;                  //new value
                                                      this.setState({ form_1: ids });



                                                      let ids2 = [...this.state.form_1];     // create the copy of state array
                                                      ids2[i].node_items[j].screen = e.target.value;                  //new value
                                                      this.setState({ form_1: ids2 });

                                                      // this.setState({ form_1: obj })

                                                    }} placeholder='Form' />
                                                </div> : <div style={{ flex: 1 }}>

                                                  <Input style={{ width: 100, marginLeft: 10 }} disabled type='text' value={this.state.form_1[i].node_items[j].screen}


                                                    onChange={(e) => {

                                                      // let obj = this.state.form_1[i].node_items;
                                                      let ids = [...this.state.form_1];     // create the copy of state array
                                                      ids[item.id].name = e.target.value;                  //new value
                                                      this.setState({ form_1: ids });



                                                      let ids2 = [...this.state.form_1];     // create the copy of state array
                                                      ids2[i].node_items[j].name = e.target.value;                  //new value
                                                      this.setState({ form_1: ids2 });

                                                      // this.setState({ form_1: obj })

                                                    }} placeholder='Form' />
                                                </div>}

                                              <div onClick={() => {
                                                // var arr = this.state.form_1[item.id].node_items;
                                                // for (var t = 0; arr.length > t; t++) {
                                                //   var w = { id: arr[t].id };
                                                //   //////console.log({ id: arr[t].id })
                                                //   //////console.log(arr[t])
                                                //   if (arr[t].toString() === w.toString()) {
                                                //     // //////console.log('hello')
                                                //     delete arr[t]
                                                //   }

                                                // }
                                                // arr = arr.filter(item => item !== '');
                                                // //new
                                                // arr.map((itm, p) => { if (itm === null) { arr[p] = '' } })
                                                // arr = arr.filter(item => item !== '');

                                                // //////console.log(this.state.first_object.node_items)
                                                //////console.log(arr)
                                                //////console.log([])
                                                // if (arr.length === 0) {
                                                // let ids = [...this.state.form_1];     // create the copy of state array
                                                // ids[item.id].show = false;                     //new value
                                                // this.setState({ form_1: ids });



                                                let ids2 = [...this.state.form_1];     // create the copy of state array
                                                delete ids2[i].node_items[j]              //new value
                                                this.setState({ form_1: ids2 });
                                                // } else {
                                                //   this.setState({ errorMsg: 'This form contains other forms, or change its form type to Items first' })
                                                //   this.setState({ showError: true })
                                                //   // alert('This form contains other forms, or change form type to Items first')
                                                // }
                                                    this.corrector2()


                                                // var g=1;
                                                // for (var t = 0; this.state.form_1>t,t++){

                                                // }



                                                //                   var data = $.grep(data, function(e){ 
                                                //      return e.id !== id; 
                                                // });
                                                this.level_update();
                                              }}><CloseIcon /></div>
                                            </div>
                                          </div>)}
                                        })}

                                        <br /></div>)}


                                    {this.state.form_1[i].type === 'options' &&


                                      (<div><br />
                                      {/* <strong>node options</strong> */}
                                        <br />
                                        <Button
                                          color="primary"
                                          fullWidth
                                          size="small"
                                          // type="submit"
                                          style={{ backgroundColor: '#e5e5e5', marginBottom: 10, border: '0.5px solid #e5e5e5' }}

                                          onClick={() => {

                                            // let obj2 = this.state.form_1
                                            // let inst = {
                                            //   name: 'Screen',
                                            //   type: 'direct_input',
                                            //   node_items: [],
                                            //   node_option: [],
                                            //   next_screen: '',
                                            //   short_code: '',
                                            //   show: true,


                                            // };
                                            // inst['name'] = 'Form ' + eval(this.state.form_1.length + 1)
                                            // inst['order'] = [1, this.state.form_1.length + 1];

                                            // if (this.state.order_count.length < 2) {

                                            //   this.setState({ order_count: [1,1]})
                                            // }


                                            // obj2.push(inst);
                                            // this.setState({ level_1: obj2 })
                                            // this.setState({ form_1: obj2 })

                                            let obj = this.state.form_1
                                            // obj[i]['node_options'].push({ field: 'field', screen: 'screen', id: (this.state.form_1.length - 1) })
                                            obj[i]['node_options'].push('')

                                            this.setState({ form_1: obj })
                                            // //////console.log(this.state.form_1)
                                            // setTimeout(function t(letf=this.state){
                                            //////console.log(this.state);
                                            // },3000)
  this.corrector2()

                                          }}
                                        >add task</Button>

                                        {
                                          this.state.form_1[i].node_options.map((item, k) => {
                                            {/* i++; */ }
                                            return (<div>
                                              <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                                                {/* <div>{i+1}. </div> */}
                                                <div>  <Input type='text' value={this.state.form_1[i].node_options[k]}
                                                  onChange={(e) => {

                                                    let ids = [...this.state.form_1];
                                                    ids[i].node_options[k] = e.target.value;                //new value
                                                    this.setState({ form_1: ids });
                                                  }}
                                                  placeholder='field' style={{ width: 240 }} />    </div>
                                                {/* <div > <Input style={{ width: 100, marginLeft: 10 }} type='text' value={this.state.form_1[item.id].name} onChange={(e) => {

                      let ids = this.state.first_object;     // create the copy of state array
                      ids.node_items[i].name = e.target.value;                  //new value
                      this.setState({ first_object: ids });



                      let ids2 = [...this.state.form_1];     // create the copy of state array
                      ids2[item.id].name = e.target.value;                  //new value
                      this.setState({ form_1: ids2 });
                      // let obj = this.state.form_1;

                      // obj[i - 1]['name']=e.target.value;

                      // this.setState({ form_1: obj})

                    }} placeholder='Form' /></div> */}
                                                <div onClick={() => {

                                                  // var arr = this.state.form_1[item.id].node_options;
                                                  // arr = arr.filter(item => item !== '');
                                                  // // //////console.log(this.state.first_object.node_items)
                                                  // //////console.log(arr)
                                                  // //////console.log([])
                                                  // if (arr.length === 0) {
                                                  let ids = [...this.state.form_1];
                                                  delete ids[i].node_options[k];                //new value
                                                  this.setState({ form_1: ids });



                                                  // let ids2 = this.state.form_1;     // create the copy of state array
                                                  // ids2[item.id].show = false;                //new value
                                                  // this.setState({ form_1: ids2 });
                                                  // } else {

                                                  // }
                                                  // create the copy of state array

                                                  // var g=1;
                                                  // for (var t = 0; this.state.form_1>t,t++){

                                                  // }



                                                  //                   var data = $.grep(data, function(e){ 
                                                  //      return e.id !== id; 
                                                  // });
                                                }}><CloseIcon /></div>
                                              </div>

                                            </div>)
                                          })
                                        }

                                        <br />

                                      </div>)}


                                    {this.state.form_1[i].type !== 'items' &&
                                      (<div>
                                        <br />
                                        <strong> next screen</strong><br />
                                        {this.state.form_1[i].node_items.map((item, j) => {
                                          {/* 
                                    let ids = this.state.form_1;     // create the copy of state array
                                    ids[i].node_items[j].screen = this.state.form_1[item.id].name;                  //new value
                                    this.setState({ form_1: ids }); */}

                                          if (typeof item.field !== 'undefined' && typeof this.state.form_1[item.id]!=='undefined') {
                                            {/* i++; */ }
                                            return (<div>
                                              <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                                                {/* <div>{i+1}. </div> */}
                                                {/* <div>  <Input type='text' placeholder='field' style={{ width: 100 }} />    </div> */}
                                                <div > <Input style={{ width: 100 }} type='text' value={this.state.form_1[item.id].name} onChange={(e) => {

                                                  let ids = this.state.form_1;     // create the copy of state array
                                                  ids[i].node_items[j].screen = e.target.value;                  //new value
                                                  this.setState({ form_1: ids });



                                                  // let ids2 = [...this.state.form_1];     // create the copy of state array
                                                  // ids2[item.id].name = e.target.value;                  //new value
                                                  // this.setState({ form_1: ids2 });
                                                  // let obj = this.state.form_1;

                                                  // obj[i - 1]['name']=e.target.value;

                                                  // this.setState({ form_1: obj})

                                                }} placeholder='Form' />

                                                </div>
                                                <div onClick={() => {
                                                  var arr = this.state.form_1[item.id].node_items;
                                                  // for (var t = 0; arr.length > t; t++) {
                                                  //   var w = { id: arr[t].id };
                                                  //   //////console.log({ id: arr[t].id })
                                                  //   //////console.log(arr[t])
                                                  //   if (arr[t].toString() === w.toString()) {
                                                  //     // //////console.log('hello')
                                                  //     delete arr[t]
                                                  //   }

                                                  // }
                                                  arr = arr.filter(item => item !== '');
                                                  //new   
                                                  arr.map((itm, p) => { if (itm === null) { arr[p] = '' } })
                                                  arr = arr.filter(item => item !== '');
                                                  // //////console.log(this.state.first_object.node_items)
                                                  //////console.log(arr)
                                                  //////console.log([])
                                                  if (arr.length === 0) {
                                                    let ids = [...this.state.form_1];     // create the copy of state array
                                                    ids[item.id].show = false;                     //new value
                                                    this.setState({ form_1: ids });



                                                    let ids2 = [...this.state.form_1];
                                                    // create the copy of state array
                                                    ids2[i].node_items[j] = { id: item.id };             //new value
                                                    this.setState({ form_1: ids2 });
                                                  } else {
                                                    this.setState({ errorMsg: 'This form contains other forms, or change its form type to Items first' })
                                                    this.setState({ showError: true })
                                                    // alert('This form contains other forms or change form type to Items first')
                                                  }



                                                  // var g=1;
                                                  // for (var t = 0; this.state.form_1>t,t++){

                                                  // }



                                                  //                   var data = $.grep(data, function(e){ 
                                                  //      return e.id !== id; 
                                                  // });
                                                  this.level_update();
                                                }}><CloseIcon /></div>

                                              </div>

                                            </div>)
                                          }
                                        })}

                                      </div>)
                                    }


                                    <br /><strong>Screen text</strong><br />

                                      <Input type='text' onFocus={() => {
                                        if (this.state.modalDrag == true) {
                                          this.setState({ drag: true })
                                        }


                                      }} onBlur={() => {
                                        if (this.state.modalDrag == true) {
                                          this.setState({ drag: false })
                                        }

                                      }}  placeholder='screen text' style={{ width: '100%' }} value={this.state.form_1[i].screen_text}
                                      onChange={(e) => {
                                        let ids = [...this.state.form_1];
                                        ids[i].screen_text = e.target.value;         //new value
                                        this.setState({ form_1: ids });
                                      }}
                                    /><br />


                                    <br />
                                    {typeof this.state.form_1[this.state.form_1[i].f_id] !== 'undefined' && <div style={{ color: 'gray' }}>
                                      {/* <hr style={{ border: '0px solid #e5e5e5', marginTop: 10 }} />Parent: {this.state.form_1[this.state.form_1[i].f_id].name}{this.state.form_1[this.state.form_1[i].f_id].name === 'end' && <b style={{ color: 'red', marginLeft: 0 }}></b>}</div>} */}
                                      <hr style={{ border: '0px solid #e5e5e5', marginTop: 10 }} />Parent: 
                                      
                                              {this.state.lead.map(() => {
                                                if (typeof this.state.form_1[i] !== 'undefined') {
                                                  var nj = this.state.form_1[this.state.form_1[i].f_id].name;
                                                  if (nj !== 'end') {
                                                    //get the id
                                                    var s = false
                                                    this.state.form_1[this.state.form_1[i].f_id].node_items.map(p => {
                                                      if (typeof p !== 'undefined' && typeof p.screen !== 'undefined' && p.screen === this.state.form_1[i].name) {
                                                        s = true
                                                      }
                                                    })
                                                    if (s === false) {
                                                      nj = 'end'


                                                      for (var g = 0; this.state.form_1.length > g; g++) {
                                                        if (this.state.form_1[g].show === true) {
                                                          for (var f = 0; this.state.form_1[g].node_items.length > f; f++) {
                                                            if (typeof this.state.form_1[g].node_items[f] !== 'undefined' && typeof this.state.form_1[g].node_items[f].screen !== 'undefined' && this.state.form_1[g].node_items[f].screen === this.state.form_1[i].name) {
                                                              nj = this.state.form_1[g].name;
                                                            }
                                                          }
                                                        }

                                                      }
                                                    }
                                                    //check if items have this.state.form_1[i].
                                                  }
                                                  return (
                                                    <span> {nj === 'end' ? <b style={{ color: 'red', marginLeft: 0 }}>(Not available)</b> : <font>{nj}</font>}
                                                    </span>
                                                  )
                                                }
                                              })}
                                       </div>}

                                    {typeof this.state.form_1[this.state.form_1[i].f_id] === 'undefined' && <div style={{ color: 'gray' }}>
                                      <hr />Parent: {this.state.first_object.name}</div>}
                                  </div>


                                </div>

                                
                                <div>
                               <CSSTransition
            // onLoad={() => { loadNode() }}
            in={this.state.form_1[i].inprop}
            timeout={300}
            classNames="alert"
            unmountOnExit
            // onEnter={() => {
            //   let obj = [...this.state.form_1];
            //   obj[i].inprop = false
            //   this.setState({ form_1: obj })
            // }}
            onExited={() => {
            this.deleteNode2(i)
            }}
          >
                                      {this.recurse(i,r)}
                                  </CSSTransition>
                                  {/* sdsdsdsds */}
                                </div>
                                </div>
{/* vdfdfdfd */}
                              </div>)
                          }
                        }).reverse()}

                      </div>
                      {/* <div onClick={() => {
                        // var ff=[];
                        // for(var p=0;(x+1)>0;p++){
                        //   ff.push(1)
                        // }
                        // var rt = this.new_object(this.state.form_1.length, ff, (r - 1), this.state.form_1, qb)
                        // this.setState({ form_1: rt[0] })
                        // this.level_update();
                      }} style={{ width: '100%', backgroundColor: "white", borderTop: '0.4px solid #e5e5e5', marginTop: 0, textAlign: 'center' }}>
                        <h3 style={{ lineHeight: '40px', marginLeft: '10px', color: 'white', fontSize: 18 }}>Panel</h3>
                      </div> */}
                      {/* <hr style={{border:'0.0px solid #e5e5e5'}}/>  */}
                      {/* <small style={{color:'gray',lineHeight:'40px',marginLeft:10}}>Level items</small>  */}
                    </div>)

                  }
                </div>)
              })}

            </div>}
        
       
          </PanZoom>
            {this.state.showError &&
            <div style={{ position: 'fixed', overflow: 'hidden', backgroundColor: 'rgba(0,0,0,0.5)', top: 0, left: 0, width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', zIndex: 1000 }}>
 <div>
              <div style={{ margin: 10, textAlign: 'center', borderRadius: 3, padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minWidth: '250', minHeight: 100, marginTop: 100, background: 'white',maxWidth:450 }}>
                {this.state.errorMsg}

                <button onClick={() => { this.setState({ showError: false }) }} style={{ margin: 15, width: 80, height: 40, color: 'white', border: 0, backgroundColor: '#1565C0' }}>OK</button>
              </div>
</div>

            </div>}


          {this.state.loading &&
            <div style={{ position: 'fixed', color: 'white', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 100, overflow: 'hidden', display: "flex", justifyContent: 'center', flexDirection: 'row', alignItems: 'center', fontSize: 16 }}>
              <CircularProgress color='white' />
            </div>

          }
          
          {/* <div style={{ position: 'absolute', color: 'white', top: 20, left: 20,color:'red'}} >Save</div> */}
           </div>
        {this.state.sidePane && 
        
          <div style={{ position: 'fixed', top: 110, right: 20, height: 0, display: this.state.mode!='tasktree' ? 'none':'block'}}>
          <Draggable disabled={this.state.drag}>
            <div style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', boxShadow: '0 1px 1.5px 0 rgba(0,0,0,.12), 0 1px 1px 0 rgba(0,0,0,.24)'}}>
            <div style={{  backdropFilter: 'blur(5px)', boxShadow: '0 1px 1.5px 0 rgba(0,0,0,.12), 0 1px 1px 0 rgba(0,0,0,.24)', marginBottom: 0, top: 5, right: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', alignItems: "flex-end", color: 'white', height: 100, background:'linear-gradient(-45deg, #64b5f6, #f403d1)'}}>
          <strong style={{margin:10}}>
                  {this.state.settings == false  &&   <Typography
                                          // align="center"
                                          // className={classes.sugestion}
                                          color="white"
                                          style={{ width: '100%', fontSize: '20px', margin: 0, lineHeight: '20px', fontWeight: 'normal' }}
                                          variant="body1"
                                        >    
                    {this.state.card_view ? this.state.form_1[this.state.selected].name : this.state.first_object.name}
          </Typography>}
                  {this.state.settings == true && <Typography
                    // align="center"
                    // className={classes.sugestion}
                    color="white"
                    style={{ width: '100%', fontSize: '20px', margin: 0, lineHeight: '20px', fontWeight: 'normal' }}
                    variant="body1"
                  >
                   Settings
                  </Typography>}
          </strong>
          <div style={{position:'absolute',top:10,right:10}}>
                  {/* <WebAssetIcon size={30} onClick={() => { }} style={{ width:30, height: 30,marginRight:10}}/> */}
                <Button style={{width:36,height:36,borderRadius:18,color:"white"}}> 
 <CloseIcon size={30} onClick={() => { this.setState({ sidePane: false }) }} style={{ width: 30, height: 30 }} />

                </Button>
                 

          </div>
                <div style={{ position: 'absolute', bottom: 5, right: 10 }}>
                  {/* <WebAssetIcon size={30} onClick={() => { }} style={{ width:30, height: 30,marginRight:10}}/> */}
                 
                    {this.state.settings ?  <Button  onClick={() => {

                    this.setState({ drag: false })
                        this.setState({ settings: false })
                      }} style={{ width: 36, height: 36, borderRadius: 18, color: "white" }}><Typography
                      // align="center"
                      // className={classes.sugestion}
                     
                      color="white"
                      style={{ width: '100%', fontSize: '14px', margin: 0, lineHeight: '20px', fontWeight: 'normal' }}
                      variant="body1"
                  >Back</Typography>     </Button>
: 
                     <Button onClick={() => {

                      this.setState({ drag: true })
                        this.setState({ settings: true })
                      }} style={{ width: 36, height: 36, borderRadius: 18, color: "white" }}>
                      <SettingsIcon size={20}  style={{ width: 20, height: 20 }} />    </Button>

                       }   

              

                </div>
          </div>
            <div style={{ padding: 0, background: "rgba(255,255,255,1.7)" ,boxShadow: '0 1px 1.5px 0 rgba(0,0,0,.12), 0 1px 1px 0 rgba(0,0,0,.24)', backdropFilter: 'blur(5px)', borderRadius: 3,height:'100%' }}>

                {/* <div style={{ height: 200, background: 'black', flex: 1 }}> */}

              {/* <div style={{ padding: 5,display:'flex',flexDirection:'row',minWidth: 275, background: "rgba(255,255,255,0.7)", backdropFilter: 'blur(5px)', borderRadius: 3, width: 300 }}> */}

                {this.state.settings == true &&  <div style={{ padding: 5, minWidth: 275, background: "rgba(255,255,255,1.0)", backdropFilter: 'blur(0px)', borderRadius: 3, color: 'black' }}>
                 
                  <FormControlLabel
                    control={<Switch 
                    checked={this.state.modalDrag} onChange={(e)=>{
                      
                        this.setState({ modalDrag:e.target.checked})
                    }} 
                    name="drag" />}
                    label="Enable modal drag"
                  />
                  <Typography
                    // align="center"
                    // className={classes.sugestion}

                    color="white"
                    style={{ width: '100%', fontSize: '14px', margin: 0, lineHeight: '20px', fontWeight: 'normal' }}
                    variant="body1"
                  >Zoom speed</Typography>
                  <Slider defaultValue={30} aria-labelledby="disabled-slider" />
                  <Typography
                    // align="center"
                    // className={classes.sugestion}

                    color="white"
                    style={{ width: '100%', fontSize: '14px', margin: 0, lineHeight: '20px', fontWeight: 'normal' }}
                    variant="body1"
                  >Min zoom</Typography>
                  <Slider  defaultValue={30} aria-labelledby="disabled-slider" />
                  <Typography
                    // align="center"
                    // className={classes.sugestion}

                    color="white"
                    style={{ width: '100%', fontSize: '14px', margin: 0, lineHeight: '20px', fontWeight: 'normal' }}
                    variant="body1"
                  >Max zoom</Typography>
                  <Slider defaultValue={30} aria-labelledby="disabled-slider" />
                        </div>}
                {!this.state.card_view && this.state.settings==false &&
                <div style={{ padding: 5, minWidth: 275, background: "rgba(255,255,255,1.0)", backdropFilter: 'blur(0px)' , borderRadius: 3,color:'black'}}>
          
              {/* <hr /> */}
              {/* Name<br/>
        <Input type='text' placeholder='form name' value={this.state.first_object.name}
        onChange={(e)=>{
         let obj= this.state.first_object
         obj['name']=e.target.value.trim()
          this.setState({ first_object:obj})
        }}
         /><br /> */}
              <div style={{ marginTop: 5, marginBottom: 5 }}>
                <strong>Type</strong><br />
              </div>
              <Select onChange={(e) => {
                // if (this.state.first_object['type'] === 'options') {
                if (this.state.first_object['type'] !== 'items') {
                  if (typeof this.state.first_object['node_items'][this.state.first_object['node_items'].length - 1] !== 'undefined') {

                    var y = this.state.first_object['node_items'][this.state.first_object['node_items'].length - 1].id;
                    var arr = this.state.form_1[y].node_items;
                    arr = arr.filter(item => item !== '');
                    arr.map((itm, p) => { if (itm === null) { arr[p] = '' } })
                    arr = arr.filter(item => item !== '');
                    // //////console.log(this.state.first_object.node_items)
                    //////console.log(arr)
                    //////console.log([])
                    if (arr.length === 0 || this.state.first_object['node_items'][this.state.first_object['node_items'].length - 1].screen==='end') {
                      if (this.state.first_object['type'] !== 'items') {
                        // //////console.log(this.state.first_object['node_items'][this.state.first_object['node_items'].length - 1].id)


                        var y = this.state.first_object['node_items'][this.state.first_object['node_items'].length - 1].id;
                        delete this.state.first_object['node_items'][this.state.first_object['node_items'].length - 1]


                        // let ids2 = this.state.form_1;     // create the copy of state array
                        // ids2[y].show = false;                //new value
                        // this.setState({ form_1: ids2 });

                        let ids = this.state.first_object;
                        ids.node_options = [];                //new value
                        this.setState({ first_object: ids });
                        // let ids2 = this.state.form_1[this.state.first_object['node_items'][this.state.first_object['node_items'].length - 1].id].show = false;                //new value
                        // this.setState({ form_1: ids2 }); 

                      }
                      let obj = this.state.first_object
                      obj['type'] = e.target.value.trim()
                      this.setState({ first_object: obj })

                      if (e.target.value !== 'items') {
                        let obj2 = this.state.form_1
                        let inst = {
                          name: 'Screen',
                          type: 'items',
                          node_items: [],
                          node_options: [],
                          progress: 0,
                          next_screen: '',
                          short_code: '',
                          show: true,


                        };
                        var uf = 'Task ' + eval(this.state.form_1.length + 1);
                        inst['name'] = uf;
                        inst['order'] = [1, this.state.form_1.length + 1];

                        // if (this.state.order_count.length < 2) {

                        //   this.setState({ order_count: [1,1]})
                        // }


                        obj2.push(inst);
                        // this.setState({ level_1: obj2 })
                        this.setState({ form_1: obj2 })

                        let obj = this.state.first_object
                        obj['node_items'].push({ field: 'field', screen: uf, id: (this.state.form_1.length - 1) })
                        this.setState({ first_object: obj })
                        // //////console.log(this.state.form_1)
                        // setTimeout(function t(letf=this.state){
                        //////console.log(this.state);
                      }
                    } else {
                      if (this.state.first_object['type'] === 'options') {
                        e.target.value = 'options'
                      } else {
                        e.target.value = 'direct_input'
                      }
                      this.setState({ errorMsg: 'This form contains other forms, change next screen to - end' })
                      this.setState({ showError: true })
                      // alert('This form contains other forms, or change its form type to Items first')
                    }
                  } else {
                    let obj = this.state.first_object
                    obj['type'] = e.target.value.trim()
                    this.setState({ first_object: obj })

                    if (e.target.value !== 'items') {
                      let obj2 = this.state.form_1
                      let inst = {
                        name: 'Screen',
                        type: 'items',
                        progress:0,
                        node_items: [],
                        node_options: [],
                        next_screen: '',
                        short_code: '',
                        show: true,


                      };
                      var uf = 'Task ' + eval(this.state.form_1.length + 1);
                      inst['name'] = uf;
                      inst['order'] = [1, this.state.form_1.length + 1];

                      // if (this.state.order_count.length < 2) {

                      //   this.setState({ order_count: [1,1]})
                      // }


                      obj2.push(inst);
                      // this.setState({ level_1: obj2 })
                      this.setState({ form_1: obj2 })

                      let obj = this.state.first_object
                      obj['node_items'].push({ field: 'field', screen: uf, id: (this.state.form_1.length - 1) })
                      this.setState({ first_object: obj })
                      // //////console.log(this.state.form_1)
                      // setTimeout(function t(letf=this.state){
                      //////console.log(this.state);
                    }
                  }
                } else {


                  if (this.state.first_object['type'] === 'items') {
                    var arr = this.state.first_object.node_items;
                    arr = arr.filter(item => item !== '');
                    arr.map((itm, p) => { if (itm === null) { arr[p] = '' } })
                    arr = arr.filter(item => item !== '');
                    // //////console.log(this.state.first_object.node_items)
                    //////console.log(arr)
                    //////console.log([])
                    // || this.state.first_object['node_items'][this.state.first_object['node_items'].length - 1].screen==='end'
                    if (arr.length === 0 ) {
                      //     let obj = this.state.first_object
                      // obj['type'] = e.target.value.trim()
                      // this.setState({ first_object: obj })

                      //   for (var g=0; this.state.form_1.length > g; g++) {
                      //     let ids2 = this.state.form_1;     // create the copy of state array
                      //     ids2[g].show = false;   
                      //               //new value
                      //     this.setState({ form_1: ids2 });
                      //   }

                      // }
                      //////console.log(this.state.form_1);
                      // var arr = this.state.first_object.node_items;
                      // arr = arr.filter(item => item !== '');
                      // // //////console.log(this.state.first_object.node_items)
                      // //////console.log(arr)
                      // //////console.log([])
                      // if (arr.length === 0) {
                      if (this.state.first_object['type'] !== 'items') {
                        // //////console.log(this.state.first_object['node_items'][this.state.first_object['node_items'].length - 1].id)


                        var y = this.state.first_object['node_items'][this.state.first_object['node_items'].length - 1].id;
                        delete this.state.first_object['node_items'][this.state.first_object['node_items'].length - 1]


                        let ids2 = this.state.form_1;     // create the copy of state array
                        ids2[y].show = false;                //new value
                        this.setState({ form_1: ids2 });

                        let ids = this.state.first_object;
                        ids.node_options = [];                //new value
                        this.setState({ first_object: ids });
                        // let ids2 = this.state.form_1[this.state.first_object['node_items'][this.state.first_object['node_items'].length - 1].id].show = false;                //new value
                        // this.setState({ form_1: ids2 }); 

                      }
                      let obj = this.state.first_object
                      obj['type'] = e.target.value.trim()
                      this.setState({ first_object: obj })

                      if (e.target.value !== 'items') {
                        let obj2 = this.state.form_1
                        let inst = {
                          name: 'Screen',
                          type: 'items',
                          node_items: [],
                          node_options: [],
                          progress: 0,
                          next_screen: '',
                          short_code: '',
                          show: true,


                        };
                        var uf = 'Task ' + eval(this.state.form_1.length + 1);
                        inst['name'] = uf;
                        inst['order'] = [1, this.state.form_1.length + 1];

                        // if (this.state.order_count.length < 2) {

                        //   this.setState({ order_count: [1,1]})
                        // }


                        obj2.push(inst);
                        // this.setState({ level_1: obj2 })
                        this.setState({ form_1: obj2 })

                        let obj = this.state.first_object
                        obj['node_items'].push({ field: 'field', screen: uf, id: (this.state.form_1.length - 1) })
                        this.setState({ first_object: obj })
                        // //////console.log(this.state.form_1)
                        // setTimeout(function t(letf=this.state){
                        //////console.log(this.state);
                      }
                      // } else {
                      //   alert('Please delete the forms to change the form type')
                      // }
                    } else {
                      e.target.value = this.state.first_object['type'];
                      this.setState({ errorMsg: 'This form contains other forms' })
                      this.setState({ showError: true })
                      // alert('Please delete the forms to change the form type')
                    }
                  }
                }
                this.level_update();
              }} displayEmpty value={this.state.first_object['type']} style={{ width: 150 }}>
              
                <MenuItem value='items' selected>Items </MenuItem>
                <MenuItem value='options'>Options</MenuItem>
                <MenuItem value='direct_input' >Raw Input</MenuItem>

              </Select><br />

                {this.state.first_object['type'] == 'direct_input' && <div >
                  <br />
                  <strong>External Screen</strong><br />
                  <FormControlLabel
                    control={<Checkbox checked={this.state.first_object['external']} onChange={(e) => {

                      let ids = this.state.first_object;
                      ids.external = !this.state.first_object['external'];
                      this.setState({ first_object: ids });

                    }} name="checkedA" />}
                    label="Enable"
                  />
                  <br />

                  {this.state.first_object['external'] == true && <div>    
                  <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <div>
                        <strong>Method</strong>
                    </div>
                      <div>
                          <Select value={this.state.first_object['method']}
                    onChange={(e) => {

                      let ids = this.state.first_object;
                      ids.method = e.target.value;
                      this.setState({ first_object: ids });

                    }}
                    style={{ width: 100,marginLeft:10 }}>
                    <MenuItem value='post' selected>POST </MenuItem>
                    <MenuItem value='get'>GET</MenuItem>
                    {/* <MenuItem value='direct_input' >Raw Input</MenuItem> */}
                  </Select>
                      </div>
                  </div>
                   
                  
                   <br />

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <div>
                        <strong>URL</strong>
                      </div>

                      <div>
                        <Input style={{ width: 150,marginLeft:10 }} type='text' value={this.state.first_object.url}
                          onChange={(e) => {
                            let ids = this.state.first_object;
                            ids.url = e.target.value;
                            this.setState({ first_object: ids });
                          }} placeholder='Enter the Url' />
                      </div>

                      </div>
                
                      
                      </div>}

                </div>}
              {this.state.first_object.type === 'items' &&
                (<div><br />
                {/* <strong>node items</strong> */}
                  <br />
                  <Button
                    color="primary"
                    fullWidth
                    size="small"
                    // type="submit"
                    style={{ backgroundColor: '#e5e5e5', marginBottom: 10, border: '0.5px solid #e5e5e5' }}

                    onClick={() => {

                      let obj2 = this.state.form_1
                      let inst = {
                        name: 'Screen',
                        type: 'items',
                        node_items: [],
                        inprop:false,
                        comment_color: '#FEFF9C',
                        node_option: [],
                        progress: 0,
                        next_screen: '',
                        short_code: '',
                        show: true,


                      };
                      var uf = 'Task ' + eval(this.state.form_1.length + 1)
                      inst['name'] = uf;
                      inst['order'] = [1, this.state.form_1.length + 1];

                      // if (this.state.order_count.length < 1) {

                      //   this.setState({ order_count: [1]})
                      // }


                      obj2.push(inst);
                      // this.setState({ level_1: obj2 })
                      this.setState({ form_1: obj2 })

                      let obj = this.state.first_object
                      obj['node_items'].push({ field: 'field', screen: uf, id: (this.state.form_1.length - 1) })
                      this.setState({ first_object: obj })
                      // //////console.log(this.state.form_1)
                      // setTimeout(function t(letf=this.state){
                      console.log(this.state);

                        this.corrector2()
                      // },3000)

                      this.level_update()
                      // setTimeout(function t(){
                      //  let obj = [...this.state.form_1];
                      //   obj[this.state.form_1.length - 1].inprop = true
                      //   this.setState({ form_1: obj })
                      // },300)
                     
                    }}
                  >+add node</Button>
                  <div style={{ maxHeight: 100, overflowY: 'scroll' }}>
                    {this.state.first_object.node_items.map((item, i) => {
                      {/* let ids = this.state.first_object;     // create the copy of state array
                      ids.node_items[i].screen = this.state.form_1[item.id].name;                  //new value
                      this.setState({ first_object: ids }); */}
                      {/* i++; */ }

                      return (<div>
                        <div style={{ display: 'flex', flexDirection: 'row', width: 260, }}>
                          {/* <div>{i+1}. </div> */}
                          <div style={{ flex: 1 }}> 
                            <Input type='text' onFocus={() => { 
                              if (this.state.modalDrag==true){
                                this.setState({ drag: true }) 
                              }
                              
                  
                              }} onBlur={() => { 
                                if (this.state.modalDrag == true) {
                                  this.setState({ drag: false })
                                }
                                
                                 }} value={this.state.first_object.node_items[i].field} onChange={(e) => {
                              let ids = this.state.first_object;     // create the copy of state array
                              ids.node_items[i].field = e.target.value;                  //new value
                              this.setState({ first_object: ids });



                              // let ids2 = [...this.state.form_1];     // create the copy of state array
                              // ids2[item.id].name = e.target.value;                  //new value
                              // this.setState({ form_1: ids2 });
                              // let obj = this.state.form_1;

                              // obj[i - 1]['name']=e.target.value;

                              // this.setState({ form_1: obj})

                          }} placeholder='field' style={{ flex: 1, maxWidth: 220,marginRight:10 }} />  
                            </div>
                          <div style={{ flex: 1 }}> 
                            <Select  style={{ flex: 1, marginLeft: 10, maxWidth: 100 }} value={this.state.first_object.node_items[i].screen } onChange={(e) => {

                              let ids = this.state.first_object;     // create the copy of state array
                              ids.node_items[i].screen = e.target.value;                  //new value
                              this.setState({ first_object: ids });



                              // let ids2 = [...this.state.form_1];     // create the copy of state array
                              // ids2[item.id].name = e.target.value;                  //new value
                              // this.setState({ form_1: ids2 });
                              // let obj = this.state.form_1;

                              // obj[i - 1]['name']=e.target.value;

                              // this.setState({ form_1: obj})

                            }} displayEmpty style={{ width: 100 }}>
                              <MenuItem value={0} selected>Backlog</MenuItem>
                              <MenuItem value={0} selected>inprogress</MenuItem>
                              {this.state.form_1.map(item => {
                                if (item.show === true && item.name !== 'end') {
                                  return (<MenuItem value={item.name} >{item.name}</MenuItem>)
                                }
                              })}
                              <MenuItem value='end' selected >end</MenuItem>

                            </Select>
                          </div>
                          {/* {this.state.first_object.node_items[i].screen==='end' && <b>end message</b>} */}
                          <div onClick={() => {

                            // var s=0;
                            // var arr4 = this.state.form_1[item.id].node_items
                            // arr4 = arr4.filter(item => item !== '');
                            // arr4 = arr4.filter(item => item !== null);
                            // //////console.log(this.state.form_1[item.id])
                            // //////console.log(arr4)
                            // //////console.log('hello')
                            // for (var d= 0; arr4.length > d; d++) {
                            //   if (typeof arr4[d] !== 'undefined') {
                            //     var w = { id: arr4[d].id };
                            //     var w2 = {};
                            //     // //////console.log({ id: arr4[d].id })
                            //     // //////console.log(arr4[d])
                            //     if (arr4[d].toString() === w.toString() || arr4[d].toString() === w2.toString()) {
                            //       // //////console.log('hello')
                            //       // var j=this.state.form_1[arr[t].id].node_items
                            //       // var j = j.filter(item => item !== '');
                            //       // if (j.length===0){
                            //       delete arr4[d]
                            //       // }

                            //     }
                            //   }


                            // }
                            // arr4 = arr4.filter(item => item !== '');
                            // //////console.log(arr4)
                            // if (arr4.length===0){
                            // var arr = this.state.form_1[item.id].node_items;
                            // for (var t = 0; arr.length > t; t++) {
                            //   if (typeof arr[t]!=='undefined'){
                            //   var w = { id: arr[t].id };
                            //   // //////console.log({ id: arr[t].id })
                            //   // //////console.log(arr[t])
                            //   if (arr[t].toString() === w.toString()) {
                            //     // //////console.log('hello')
                            //     // var j=this.state.form_1[arr[t].id].node_items
                            //     // var j = j.filter(item => item !== '');
                            //     // if (j.length===0){
                            //        delete arr[t]
                            //     }

                            //   }
                            //   }
                            // }
                            // arr = arr.filter(item => item !== '');
                            // arr.map((itm, p) => { if (itm === null) { arr[p] = '' } })
                            // arr = arr.filter(item => item !== '');
                            // //////console.log(this.state.first_object.node_items)
                            //////console.log(arr)
                            // //////console.log([])
                            // if (arr.length === 0) {
                            let ids = this.state.first_object;
                            delete ids.node_items[i];                //new value
                            this.setState({ first_object: ids });


  // this.corrector2()
  //                           let ids2 = this.state.form_1;     // create the copy of state array
  //                           ids2[item.id].show = false;                //new value
  //                           this.setState({ form_1: ids2 });
  //                           } else {
  //                             this.setState({ errorMsg: 'This form contains other forms, or change its form type to Items first' })
  //                             this.setState({ showError: true })
  //                             // alert('This form contains other forms, or change form type to Items first')
  //                           }
  //                           this.level_update();
                            // create the copy of state array

                            // var g=1;
                            // for (var t = 0; this.state.form_1>t,t++){

                            // }


                            // }
                            //                   var data = $.grep(data, function(e){ 
                            //      return e.id !== id; 
                            // });
                          }}><CloseIcon /></div>
                        </div>

                      </div>)
                    })}</div>
 {this.state.lead.map(() => {
                var t = false;

                this.state.first_object.node_items.map((itm, j) => {
                  if (typeof this.state.first_object.node_items[j] !== 'undefined' && this.state.first_object.node_items[j].screen === 'end') {
                    t = true;
                  }
                })
                if (t === true) {

                  return (<div>
                    <br />

                    <div>
                      <strong>End Message</strong><br />
                      <Input type='text' value={this.state.first_object.exit_message} onChange={(e) => {
                        let ids = this.state.first_object;
                        ids.exit_message = e.target.value;         //new value
                        this.setState({ first_object: ids });
                      }} /></div>
                  </div>)
                }
              })}
                  <br /></div>)}


              {this.state.first_object.type === 'options' &&

                (<div>
                {/* <br /> */}
                {/* <strong>node options</strong> */}
                  {/* <br /> */}
                  <Button
                    color="primary"
                    fullWidth
                    size="small"
                    // type="submit"
                    style={{ backgroundColor: '#e5e5e5', marginBottom: 10, border: '0.5px solid #e5e5e5' }}
                    onClick={() => {

                      // let obj2 = this.state.form_1
                      // let inst = {
                      //   name: 'Screen',
                      //   type: 'direct_input',
                      //   node_items: [],
                      //   node_option: [],
                      //   next_screen: '',
                      //   short_code: '',
                      //   show: true,


                      // };
                      // inst['name'] = 'Form ' + eval(this.state.form_1.length + 1)
                      // inst['order'] = [1, this.state.form_1.length + 1];

                      // if (this.state.order_count.length < 2) {

                      //   this.setState({ order_count: [1,1]})
                      // }


                      // obj2.push(inst);
                      // this.setState({ level_1: obj2 })
                      // this.setState({ form_1: obj2 })

                      let obj = this.state.first_object
                      obj['node_options'].push('');

                      // obj['node_options'].push({ field: 'field', screen: 'screen', id: (this.state.form_1.length - 1) })
                      this.setState({ first_object: obj })
                        this.corrector2()
                      // //////console.log(this.state.form_1)
                      // setTimeout(function t(letf=this.state){
                      //////console.log(this.state);
                      // },3000)


                    }}
                  >add task</Button>
                  <div style={{ maxHeight: 100, overflowY: 'scroll' }}>
                    {this.state.first_object.node_options.map((item, i) => {
                      {/* i++; */ }

                      return (<div>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                          {/* <div>{i+1}. </div> */}
                          <div>  <Input type='text' value={this.state.first_object.node_options[i]}
                            onChange={(e) => {
                              let ids = this.state.first_object;
                              ids.node_options[i] = e.target.value;
                              this.setState({ first_object: ids });
                            }}
                            placeholder='field' style={{ width: 240 }} />    </div>
                          {/* <div > <Input style={{ width: 100, marginLeft: 10 }} type='text' value={this.state.form_1[item.id].name} onChange={(e) => {

                      let ids = this.state.first_object;     // create the copy of state array
                      ids.node_items[i].name = e.target.value;                  //new value
                      this.setState({ first_object: ids });



                      let ids2 = [...this.state.form_1];     // create the copy of state array
                      ids2[item.id].name = e.target.value;                  //new value
                      this.setState({ form_1: ids2 });
                      // let obj = this.state.form_1;

                      // obj[i - 1]['name']=e.target.value;

                      // this.setState({ form_1: obj})

                    }} placeholder='Form' /></div> */}
                          <div onClick={() => {

                            // var arr = this.state.form_1[item.id].node_options;
                            // arr = arr.filter(item => item !== '');
                            // // //////console.log(this.state.first_object.node_items)
                            // //////console.log(arr)
                            // //////console.log([])
                            // if (arr.length === 0) {
                            let ids = this.state.first_object;
                            delete ids.node_options[i];                //new value
                            this.setState({ first_object: ids });



                            // let ids2 = this.state.form_1;     // create the copy of state array
                            // ids2[item.id].show = false;                //new value
                            // this.setState({ form_1: ids2 });
                            // } else {

                            // }
                            // create the copy of state array

                            // var g=1;
                            // for (var t = 0; this.state.form_1>t,t++){

                            // }



                            //                   var data = $.grep(data, function(e){ 
                            //      return e.id !== id; 
                            // });
                          }}><CloseIcon /></div>
                        </div>

                      </div>)
                    })}</div>
             
                  <br /></div>)}


              {this.state.first_object.type !== 'items' &&
                (<div>
                  <br />
                  <strong> next screen</strong><br />
                  {this.state.first_object.node_items.map((item, i) => {

                    if (typeof item.field !== 'undefined') {
                      {/* i++; */ }
                      {/* let ids = this.state.first_object;     // create the copy of state array
                        ids.node_items[i].screen = this.state.form_1[item.id].name;                 //new value
                        this.setState({ first_object: ids }); */}
                      return (<div>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                          {/* <div>{i+1}. </div> */}
                          {/* <div>  <Input type='text' placeholder='field' style={{ width: 100 }} />    </div> */}
                          <div >
                            <Select  value={this.state.first_object.node_items[i].screen} onChange={(e) => {
                              
                              let ids = this.state.first_object;     // create the copy of state array
                              ids.node_items[i].screen = e.target.value;                  //new value
                              this.setState({ first_object: ids });

  this.corrector2()

                              // let ids2 = [...this.state.form_1];     // create the copy of state array
                              // ids2[item.id].name = e.target.value;                  //new value
                              // this.setState({ form_1: ids2 });
                              // let obj = this.state.form_1;

                              // obj[i - 1]['name']=e.target.value;

                              // this.setState({ form_1: obj})

                            }} displayEmpty style={{ width: 120 }}>
                              <MenuItem value='start_page' selected>start_page </MenuItem>
                              {this.state.form_1.map(item => {
                                if (item.show === true && item.name !== 'end') {
                                  return (<MenuItem value={item.name} >{item.name}</MenuItem>)
                                }
                              })}
                              <MenuItem value='end' selected >end</MenuItem>

                            </Select>
                  
                          </div>
                          
                  
                          {/* <div onClick={() => {

                            var arr = this.state.form_1[item.id].node_items;
                            // for(var t=0;arr.length>t;t++){
                            //   var w = { id: arr[t].id };
                            //   //////console.log({ id: arr[t].id })
                            //   //////console.log(arr[t])
                            //   if (arr[t].toString() === w.toString()){
                            //     // //////console.log('hello')
                            //    delete arr[t]
                            //   }

                            // }
                            arr = arr.filter(item => item !== '');
                            arr.map((itm, p) => { if (itm === null) { arr[p] = '' } })
                            arr = arr.filter(item => item !== '');
                            // setInterval(function k(){
                            //    //////console.log(arr)
                            // },3000)
                            // //////console.log(this.state.first_object.node_items)
                            // //////console.log(arr+'heelo')
                            // //////console.log([])
                            if (arr.length === 0) {
                              let ids = this.state.first_object;
                              ids.node_items[i] = { id: item.id };               //new value
                              this.setState({ first_object: ids });



                              let ids2 = this.state.form_1;     // create the copy of state array
                              ids2[item.id].show = false;                //new value
                              this.setState({ form_1: ids2 });
                            } else {
                              this.setState({ errorMsg: 'This form contains other forms, or change its form type to Items first' })
                              this.setState({ showError: true })
                              // alert('This form contains other forms, or change form type to Items first')
                            }
                            this.level_update();
                            // create the copy of state array

                            // var g=1;
                            // for (var t = 0; this.state.form_1>t,t++){

                            // }



                            //                   var data = $.grep(data, function(e){ 
                            //      return e.id !== id; 
                            // });
                          }}><CloseIcon /></div> */}
                          {/* <div onClick={() => {

                  var arr = this.state.form_1[item.id].node_items;
                  arr = arr.filter(item => item !== '');
                  // //////console.log(this.state.first_object.node_items)
                  //////console.log(arr)
                  //////console.log([])
                  if (arr.length === 0) {
                    let ids = this.state.first_object;
                    delete ids.node_items[i];                //new value
                    this.setState({ first_object: ids });



                    let ids2 = this.state.form_1;     // create the copy of state array
                    ids2[item.id].show = false;                //new value
                    this.setState({ form_1: ids2 });
                  } else {
                  
                  }
                  // create the copy of state array

                  // var g=1;
                  // for (var t = 0; this.state.form_1>t,t++){

                  // }



                  //                   var data = $.grep(data, function(e){ 
                  //      return e.id !== id; 
                  // });
                }}><CloseIcon /></div> */}
                        </div>

                      </div>)
                    }
                  })}
                  <br/>
                  {typeof this.state.first_object.node_items[this.state.first_object.node_items.length - 1]!='undefined' && this.state.first_object.node_items[this.state.first_object.node_items.length-1].screen === 'end' && 
                  <div>
              <strong>End Message</strong><br />
                <Input type='text' value={this.state.first_object.exit_message} onChange={(e)=>{
                  var h = this.state.first_object;
                  h.exit_message = e.target.value
                  this.setState({ first_object: h })
                }}/></div>}

                </div>)}
              <br />
              <strong>Short code</strong><br />
              <Input type='text'  value={this.state.first_object.short_code}
                onChange={(e) => {
                  var h = this.state.first_object;
                  h.short_code = e.target.value
                  this.setState({ first_object: h })
                }}
                placeholder=' short code' /><br />
              <br /><strong>Comment</strong><br />
                  <Input onFocus={() => {
                    if (this.state.modalDrag == true) {
                      this.setState({ drag: true })
                    }


                  }} onBlur={() => {
                    if (this.state.modalDrag == true) {
                      this.setState({ drag: false })
                    }

                  }} type='text' onChange={(e) => {
                var h = this.state.first_object;
                h.screen_text = e.target.value
                this.setState({ first_object: h })
              }}
                    value={this.state.first_object.screen_text} style={{ width: '100%' }} placeholder='Comment' /><br />
              <br />
              {/* <div style={{ color: 'gray' }}>
                <hr />Start Screen</div> */}
              {/* <Button color="primary"
          fullWidth
          size="large"
          type="submit"
          variant="contained">Submit</Button><br /> */}
            </div>
          }   
                {/* <div style={{ padding: 5, minWidth: 275, background: "rgba(255,255,255,0.0)", backdropFilter: 'blur(0px)', borderRadius: 3, width: 300,height:200 }}>
              {/* <div style={{width:'100%',height:200,background:'black'}}>
                    {/* <ReactPlayer
                      url="https://www.youtube.com/watch?v=ug50zmP9I7s"
                    /> */}
              </div> 
              
                {/* </div> 
           </div> */}
          {/* </div> */}
          {/* //////////////////////////////////////////////////////////// */}
          
          {/* <div style={{background:'black',flex:1}}></div>

        </div>   */}
          
                {this.state.card_view && this.state.settings == false &&
            <div style={{ color: 'black', top: 0, right: 0, width: '100%', height: '100%', zIndex: 100, overflow: 'hidden', fontSize: 16, background: "rgba(255,255,255,1.7)", }}>
              {true && <div>
                {this.state.lead.map((level, x) => {
                  {/* if (item.order.length === (x + 2)) {} */ }
                  let r = 0;
                  var gh = []
                  {
                    this.state.form_1.map((item) => {

                      if (item.order.length === (x + 2) && item.show === true) {
                        gh.push(item)

                      }
                    })
                  }
                  return (<div>



                    {this.state.first_object.node_items.length > 0 && gh.length > 0 &&
                      (<div style={{ border: '0px solid red', margin: 0, borderRadius: 3, }}>
                        {/* <div style={{ width: '100%', backgroundColor: "white", boxShadow: ' 0 1px 1.5px 0 rgba(0,0,0,.12), 0 1px 1px 0 rgba(0,0,0,.24)', marginBottom: 1 }}>
                        <h3 style={{ lineHeight: '40px', marginLeft: '10px', color: '#172B4D' }}>Level {x + 1}</h3></div> */}

                        {/* <hr style={{border:'0.7px solid #e5e5e5'}}/> */}
                        <div className='scollhide' style={{ overflowY: 'scroll', scrollbarWidth: '10px', scrollbar: 'none' }}>

                          {this.state.form_1.map((item, i) => {
                            r++;
                            {/* var error = false
                          if (this.state.form_1[i].screen_text === '') {
                            error = true
                          } */}
                            if (this.state.selected === i) {
                              return (
                                <div>

                                  <div style={{ background: "rgba(255,255,255,1.0)", backdropFilter: 'blur(5px)' , margin: 10, overflow: 'hidden', borderRadius: 3, width: 250, color: 'black' }}>
                                    {/* <div style={{ height: 30, color: 'black', width: '100%', background: 'transparent', padding: 5 }}> */}
                                    {/* {!error ? <Chip label='✓' style={{ float: 'right', color: 'white', backgroundColor: '#388E3C' }} /> : <Chip label='✗' style={{ float: 'right', color: 'white', backgroundColor: '#D32F2F' }} />}<h4 style={{ color: '#172B4D' }}>{this.state.form_1[i].name} </h4> */}

                                    {/* <small style={{ color: 'gray' }}>Type: {this.state.form_1[i].type}</small>                                <br />
                                    {typeof this.state.form_1[this.state.form_1[i].f_id] !== 'undefined' && <div style={{ color: 'gray', fontSize: '12px' }}>
                                      <hr style={{ border: '0px solid #e5e5e5', marginTop: 10 }} />Parent: {this.state.form_1[this.state.form_1[i].f_id].name}</div>}
                                    {typeof this.state.form_1[this.state.form_1[i].f_id] === 'undefined' && <div style={{ color: 'gray', fontSize: '12px' }}>
                                      <hr style={{ border: '0px solid #e5e5e5', marginTop: 10 }} />Parent: {this.state.first_object.name}</div>} */}
                                    {/* </div> */}



                                    {/* <hr /> */}
                                    <div style={{ display: 'flex', flexDirection: 'row' }}><div>
                                      <div style={{ marginTop: 5, marginBottom: 5 }}>
                                        <strong>Name</strong><br />
                                      </div>
                                      <Input type='text' onFocus={() => {
                                        if (this.state.modalDrag == true) {
                                          this.setState({ drag: true })
                                        }


                                      }} onBlur={() => {
                                        if (this.state.modalDrag == true) {
                                          this.setState({ drag: false })
                                        }

                                      }} pplaceholder='form name' style={{ width: 100, marginRight: 10 }} value={this.state.form_1[i].name}
                                        onChange={(e) => {
                                          let obj = this.state.form_1;
                                          obj[this.state.selected]['name'] = e.target.value;
                                          this.setState({ form_1: obj })
                                          this.corrector( i,e.target.value.trim())
                                        }}
                                      />
                                    </div>
                                    <div style={{flex:1}}></div>
                                    <div>
                                      {/* <FormControlLabel
                                        control={<Checkbox name="checkedA" />}
                                        label="Enable Edit"
                                      /> */}
                                        <FormControlLabel
                                      control={<Switch
                                        // checked={state.gilad} onChange={handleChange} 
                                        name="drag" />}
                                      label="Edit"
                                    />
                                      </div>
                                    <div style={{display:'none'}}>
                                        <div style={{ marginTop: 5, marginBottom: 5 }}>
                                          <strong>Type</strong><br />
                                        </div>
                                        <Select style={{ width: 150 }} onChange={(e) => {

                                          if (this.state.form_1[i]['type'] !== 'items') {
                                            if (typeof this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1] !== 'undefined') {
                                              if (typeof this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1] !== 'undefined') {
                                                var y = this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1].id;
                                                console.log('none')
                                                if(y==null){
                                                  y=i
                                                  for (var m = 0; this.state.form_1.length > m; m++){
                                                    console.log(this.state.form_1[m].name)
                                                    if(this.state.form_1[m].name=="end"){
                                                         y=m
                                                   
                                                    }
                                                  }
                                               
                                                }
                                                var arr = this.state.form_1[y].node_items;
                                                arr = arr.filter(item => item !== '');
                                                arr.map((itm, p) => { if (itm === null) { arr[p] = '' } })
                                                arr = arr.filter(item => item !== '');
                                                // //////console.log(this.state.first_object.node_items)
                                                //////console.log(arr)
                                                //////console.log([])
                                                if (arr.length === 0 || this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1].screen==='end') {
                                                  if (this.state.form_1[i]['type'] !== 'items') {




                                                    // let ids2 = this.state.form_1;     // create the copy of state array
                                                    // ids2[this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1].id].show = false;                //new value
                                                    // this.setState({ form_1: ids2 });

                                                    var y = this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1].id;
                                                    delete this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1]

                                                    let ids = [...this.state.form_1];
                                                    ids[i].node_options = [];                //new value
                                                    this.setState({ form_1: ids });

                                                  }

                                                  let obj = this.state.form_1
                                                  obj[this.state.selected].type = e.target.value.trim()
                                                  this.setState({ form_1: obj })

                                                  if (e.target.value !== 'items') {
                                                    let obj2 = [...this.state.form_1]
                                                    // if (typeof obj2[i]['node_options']!=='undefined'){
                                                    //   obj2[i]['node_options'].push({ field: 'field', screen: 'screen', id: (this.state.form_1.length - 1) })
                                                    // }else{
                                                    obj2[i]['node_options'] = []
                                                    // }
                                                    var rt = this.new_object(this.state.form_1.length, this.state.form_1[i].order, (r - 1), this.state.form_1, i)
                                                    this.setState({ form_1: rt[0] })
                                                    let obj = this.state.form_1;
                                                    obj[this.state.selected]['node_items'].push({ field: 'field', screen: rt[2], id: rt[1] })
                                                    this.setState({ form_1: obj })
                                                    // this.setState({ form_1: obj2 })
                                                  }
                                                } else {
                                                  if (this.state.form_1[i]['type'] === 'options') {
                                                    e.target.value = 'options'
                                                  } else {
                                                    e.target.value = 'direct_input'
                                                  }
                                                  this.setState({ errorMsg: 'This form contains other forms, change next screen to - end' })
                                                  this.setState({ showError: true })
                                                  // alert('This form contains other forms, or change form type to Items first')
                                                }

                                              } else {
                                                let obj = this.state.form_1
                                                obj[this.state.selected].type = e.target.value.trim()
                                                this.setState({ form_1: obj })

                                                if (e.target.value !== 'items') {
                                                  let obj2 = [...this.state.form_1]
                                                  // if (typeof obj2[i]['node_options']!=='undefined'){
                                                  //   obj2[i]['node_options'].push({ field: 'field', screen: 'screen', id: (this.state.form_1.length - 1) })
                                                  // }else{
                                                  obj2[i]['node_options'] = []
                                                  // }
                                                  var rt = this.new_object(this.state.form_1.length, this.state.form_1[i].order, (r - 1), this.state.form_1, i)
                                                  this.setState({ form_1: rt[0] })
                                                  let obj = this.state.form_1;
                                                  obj[this.state.selected]['node_items'].push({ field: 'field', screen: rt[2], id: rt[1] })
                                                  this.setState({ form_1: obj })
                                                  // this.setState({ form_1: obj2 })
                                                }
                                              }
                                            } else {
                                              let obj = this.state.form_1
                                              obj[this.state.selected].type = e.target.value.trim()
                                              this.setState({ form_1: obj })

                                              if (e.target.value !== 'items') {
                                                let obj2 = [...this.state.form_1]
                                                // if (typeof obj2[i]['node_options']!=='undefined'){
                                                //   obj2[i]['node_options'].push({ field: 'field', screen: 'screen', id: (this.state.form_1.length - 1) })
                                                // }else{
                                                obj2[i]['node_options'] = []
                                                // }
                                                var rt = this.new_object(this.state.form_1.length, this.state.form_1[i].order, (r - 1), this.state.form_1, i)
                                                this.setState({ form_1: rt[0] })
                                                let obj = this.state.form_1;
                                                obj[this.state.selected]['node_items'].push({ field: 'field', screen: rt[2], id: rt[1] })
                                                this.setState({ form_1: obj })
                                                // this.setState({ form_1: obj2 })
                                              }
                                            }
                                          } else {


                                            if (this.state.form_1[i]['type'] !== 'items') {




                                              let ids2 = this.state.form_1;     // create the copy of state array
                                              ids2[this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1].id].show = false;                //new value
                                              this.setState({ form_1: ids2 });

                                              var y = this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1].id;
                                              delete this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1]

                                              let ids = [...this.state.form_1];
                                              ids[i].node_options = [];                //new value
                                              this.setState({ form_1: ids });

                                            }

                                            if (this.state.form_1[i]['type'] === 'items') {
                                              var arr = this.state.form_1[i].node_items;
                                              arr = arr.filter(item => item !== '');
                                              arr.map((itm, p) => { if (itm === null) { arr[p] = '' } })
                                              arr = arr.filter(item => item !== '');
                                              // //////console.log(this.state.first_object.node_items)
                                              //////console.log(arr)
                                              //////console.log([])
                                              // || this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1].screen==='end'
                                              if (arr.length === 0 ) {
                                                //     let obj = this.state.first_object
                                                // obj['type'] = e.target.value.trim()
                                                // this.setState({ first_object: obj })

                                                let obj = this.state.form_1
                                                obj[this.state.selected].type = e.target.value.trim()
                                                this.setState({ form_1: obj })

                                                if (e.target.value !== 'items') {
                                                  let obj2 = [...this.state.form_1]
                                                  // if (typeof obj2[i]['node_options']!=='undefined'){
                                                  //   obj2[i]['node_options'].push({ field: 'field', screen: 'screen', id: (this.state.form_1.length - 1) })
                                                  // }else{
                                                  obj2[i]['node_options'] = []
                                                  // }
                                                  var rt = this.new_object(this.state.form_1.length, this.state.form_1[i].order, (r - 1), this.state.form_1, i)
                                                  this.setState({ form_1: rt[0] })
                                                  let obj = this.state.form_1;
                                                  obj[this.state.selected]['node_items'].push({ field: 'field', screen: rt[2], id: rt[1] })
                                                  this.setState({ form_1: obj })
                                                  // this.setState({ form_1: obj2 })
                                                }
                                              } else {
                                                e.target.value = this.state.form_1[i]['type'];
                                                this.setState({ errorMsg: 'This form contains other forms'})
                                                this.setState({ showError: true })
                                                // alert('Please delete the forms to change the form type')
                                              }
                                            }
                                            //   // //////console.log(this.state.first_object['node_items'][this.state.first_object['node_items'].length - 1].id)


                                            //   var y = this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1].id;
                                            //   delete this.state.form_1[i]['node_items'][this.state.form_1[i]['node_items'].length - 1]


                                            //   let ids2 = this.state.form_1;     // create the copy of state array
                                            //   ids2[y].show = false;                //new value
                                            //   this.setState({ form_1: ids2 });

                                            //   // let obj = this.state.form_1
                                            //   // obj[i]['type'] = e.target.value.trim()
                                            //   // this.setState({ form_1: obj })

                                            //   let ids = this.state.form_1[i];
                                            //   ids.node_options = [];                //new value
                                            //   this.setState({ form_1: ids });
                                            //   // let ids2 = this.state.form_1[this.state.first_object['node_items'][this.state.first_object['node_items'].length - 1].id].show = false;                //new value
                                            //   // this.setState({ form_1: ids2 }); 

                                            // }
                                            // let obj = this.state.form_1
                                            // obj[i]['type'] = e.target.value.trim()
                                            // this.setState({ form_1: obj })

                                            // if (e.target.value === 'options') {
                                            //   let obj2 = this.state.form_1
                                            //   let inst = {
                                            //     name: 'Screen',
                                            //     type: 'direct_input',
                                            //     node_items: [],
                                            //     node_option: [],
                                            //     next_screen: '',
                                            //     short_code: '',
                                            //     show: true,


                                            //   };
                                            //   inst['name'] = 'Form ' + eval(this.state.form_1.length + 1)
                                            //   inst['order'] = [1, this.state.form_1.length + 1];

                                            //   // if (this.state.order_count.length < 2) {

                                            //   //   this.setState({ order_count: [1,1]})
                                            //   // }


                                            //   obj2.push(inst);
                                            //   // this.setState({ level_1: obj2 })
                                            //   this.setState({ form_1: obj2 })

                                            //   let obj = this.state.form_1[i]
                                            //   obj['node_items'].push({ field: 'field', screen: 'screen', id: (this.state.form_1.length - 1) })
                                            //   this.setState({ first_object: obj })
                                            //   // //////console.log(this.state.form_1)
                                            //   // setTimeout(function t(letf=this.state){
                                            //   //////console.log(this.state);
                                            // }

                                          }
                                          // } else {
                                          //   alert('Please delete the forms to change the form type')
                                          // }
                                          this.level_update();
                                        }
                                        }


                                          displayEmpty value={this.state.form_1[i]['type']} style={{ width: 120 }}>
                                          <MenuItem value='items' selected>Items </MenuItem>
                                        
                                       <MenuItem value='options'>Options
                                          
                                          </MenuItem>
                                          <MenuItem value='direct_input' >Raw Input</MenuItem>

                                        </Select>
                                      </div></div>

                                    {/* <div style={{ display: 'block' }}> */}
                                    <br />
                                    {this.state.form_1[i]['type'] == 'direct_input' && <div >
                                      <br />
                                      <strong>External Screen</strong><br />
                                      <FormControlLabel
                                        control={<Checkbox checked={this.state.form_1[i]['external']} onChange={(e) => {

                                          let ids = [...this.state.form_1];
                                          ids[i].external = !this.state.form_1[i]['external'];
                                          this.setState({ form_1: ids });

                                        }} name="checkedA" />}
                                        label="Enable"
                                      />
                                      <br />
                                      {this.state.form_1[i]['external'] == true && <div>
                                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                          <div>
                                            <strong>Method</strong>
                                          </div>
                                          <div>
                                            <Select value={this.state.form_1[i]['method']}
                                              onChange={(e) => {

                                                let ids = [...this.state.form_1];
                                                ids[i].method = e.target.value;
                                                this.setState({ form_1: ids });

                                              }}
                                              style={{ width: 120,marginLeft:10 }}>
                                              <MenuItem value='post' selected>POST </MenuItem>
                                              <MenuItem value='get'>GET</MenuItem>
                                              {/* <MenuItem value='direct_input' >Raw Input</MenuItem> */}
                                            </Select>
                                          </div>
                                          </div>
                                      <br />
                                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                          <div>
                                            <strong>URL</strong>
                                          </div>
                                          <div>
                                            <Input style={{ width: 150, marginLeft: 10 }} type='text' value={this.state.form_1[i].url}
                                              onChange={(e) => {
                                                let ids = [...this.state.form_1];
                                                ids[i].url = e.target.value;
                                                this.setState({ form_1: ids });
                                              }} placeholder='Enter the Url' />  
                                          </div>
                                          </div>
                                            </div>}

                                    </div>}
                                    {this.state.form_1[i].type!='items' && 
                                        <div style={{display:'flex',flexDirection:'row'}}>

                                      <div onClick={()=>{
                                        let ids = [...this.state.form_1];
                                        if (ids[i].progress == 1) {
                                          ids[i].progress = 0;
                                        } else {
                                          ids[i].progress = 1;

                                        }
                                        this.setState({ form_1: ids });
                                      
                                        
                                        }} style={{ width: 80, height: 30, borderTopLeftRadius: 15, borderBottomLeftRadius: 15, border: '0.5px solid #e5e5e5', textAlign: 'center', lineHeight: '30px', fontSize: 12, cursor: 'pointer',backgroundColor:this.state.form_1[i].progress==1 ? '#e5e5e5':'white' }} className="project_progress">Inprogress</div>
                                      <div onClick={() => { 
                                        let ids = [...this.state.form_1];
                                        if (ids[i].progress == 2) {
                                          ids[i].progress = 0;
                                        } else {
                                          ids[i].progress = 2;

                                        }
                                        this.setState({ form_1: ids });
                                       }} style={{ width: 80, height: 30, border: '0.5px solid #e5e5e5', textAlign: 'center', lineHeight: '30px', fontSize: 12, cursor: 'pointer', backgroundColor: this.state.form_1[i].progress == 2? '#e5e5e5' : 'white'  }} className="project_progress">Review</div>
                                      <div onClick={() => {
                                        let ids = [...this.state.form_1];
                                        if (ids[i].progress==3){
                                           ids[i].progress = 0;
                                        }else{
                                          ids[i].progress = 3;

                                        }
                                       
                                        this.setState({ form_1: ids });
                                         }} style={{ width: 80, height: 30, borderTopRightRadius: 15, borderBottomRightRadius: 15, border: '0.5px solid #e5e5e5', textAlign: 'center', lineHeight: '30px', fontSize: 12, cursor: 'pointer', backgroundColor: this.state.form_1[i].progress == 3 ? '#e5e5e5' : 'white'}} className="project_progress">Complete</div>
                                        </div>}
                                    {/* <FormControlLabel
                                      control={<Switch
                                        // checked={state.gilad} onChange={handleChange} 
                                        name="drag" />}
                                      label="Show nodes"
                                    /> */}
                                    {this.state.form_1[i].type === 'items' &&
                                      (<div>
                                      {/* <strong>node items</strong> */}
                                      
                                        <Button
                                          color="primary"
                                          fullWidth
                                          size="small"
                                          // type="submit"
                                        style={{ backgroundColor: '#linear-gradient(-45deg, #64b5f6, #f403d1)', marginBottom: 10, border: '0.5px solid #e5e5e5' }}
                                          onClick={() => {
                                            // let obj = this.state.form_1;
                                            // obj[i]['node_items'].push({ field: 'field', screen: 'screen'})
                                            // this.setState({ form_1: obj })
                                            var rt = this.new_object(this.state.form_1.length, this.state.form_1[i].order, (r - 1), this.state.form_1, i)
                                            this.setState({ form_1: rt[0] })

                                            // let v = this.new_object(this.state.form_1.length, this.state.form_1[i].order, i);
                                            // if (this.state.order_count.length < v.length) {
                                            //     let x=[];
                                            //   for (var k = 0; v.length>k;k++){
                                            //         x.push(1);
                                            //     }
                                            //     this.setState({ order_count: x})
                                            //   }
                                            let obj = this.state.form_1;
                                            obj[this.state.selected]['node_items'].push({ field: 'field', screen: rt[2], id: rt[1] })
                                            
                                            this.setState({ form_1: obj })
                                            //////console.log(this.state)
                                              this.corrector2()
                                            this.level_update();

                                            
                                            //   obj = [...this.state.form_1];
                                      
                                            // obj[this.state.form_1.length - 1].inprop = true
                                            // this.setState({ form_1: obj })
                                            // setTimeout(function t() {
                                            //   let obj = [...this.state.form_1];
                                            //   obj[this.state.form_1.length - 1].inprop = true
                                            //   this.setState({ form_1: obj })
                                            // }, 300)
                                            //   // //////console.log(this.state.first_object.node_items);
                                          }}
                                        >add node</Button>

                                     

                                        <div style={{ maxHeight: 100, overflowY: 'scroll' }}>
                                          {this.state.form_1[i].node_items.map((item, j) => {
                                            {/* j++; */ }
                                            {/* let ids2 = [...this.state.form_1];     // create the copy of state array
                                    ids2[i].node_items[j].screen = this.state.form_1[item.id].name;                  //new value
                                    this.setState({ form_1: ids2 }); */}
                                            if (this.state.form_1[i].node_items[j]!=null){
                                            return (<div>
                                              {/* <div>{i+1}. </div> */}
                                              <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                                                <div style={{ flex: 1 }}>  <Input type='text' onFocus={() => {
                                                  if (this.state.modalDrag == true) {
                                                    this.setState({ drag: true })
                                                  }


                                                }} onBlur={() => {
                                                  if (this.state.modalDrag == true) {
                                                    this.setState({ drag: false })
                                                  }

                                                }} value={this.state.form_1[i].node_items[j].field}
                                                  onChange={(e) => {
                                                    let ids2 = [...this.state.form_1];     // create the copy of state array
                                                    ids2[i].node_items[j].field = e.target.value;                  //new value
                                                    this.setState({ form_1: ids2 });
                                                  }}
                                                  placeholder='field' style={{ width: 100 }} />    </div>
                                                {/* ={this.state.form_1[item.id].name}  */}
                                                {typeof this.state.form_1[item.id] !== 'undefined' ?
                                                  <div style={{ flex: 1 }}>
                                                    <Select  style={{ flex: 1, marginLeft: 10, maxWidth: 100 }} value={this.state.form_1[i].node_items[j].screen} onChange={(e) => {

                                                      // let ids = [...this.state.form_1];     // create the copy of state array
                                                      // ids[item.id].name = e.target.value;
                                                      // // ids[item.id].f_id = item.id;                  //new value
                                                      // this.setState({ form_1: ids });

                                                      // this.state.form_1[i].f_id].name
 this.corrector3(this.state.form_1[i].node_items[j].screen)
                                                      let ids2 = [...this.state.form_1];     // create the copy of state array
                                                      ids2[i].node_items[j].screen = e.target.value;                  //new value
                                                      this.setState({ form_1: ids2 });
                                                      // let obj = this.state.form_1;
 this.corrector2(e.target.value,i)
                                                      // obj[i - 1]['name']=e.target.value;

                                                      // this.setState({ form_1: obj})

                                                    }} displayEmpty style={{ width: 100 }}>
                                                      {/* <MenuItem value='start_page' selected>start_page </MenuItem> */}
                                                      {this.state.form_1.map((item,g) => {
                                                        if (item.show === true && item.name !== 'end') {
                                                          {/* if(i!=g){ */}
                                                             return (<MenuItem value={item.name} >{item.name}</MenuItem>)
                                                          {/* } */}
                                                         
                                                        }
                                                      })}
                                                      <MenuItem value='end' selected >end</MenuItem>

                                                    </Select>

                                                  </div> : <div style={{ flex: 1 }}>

                                                    <Input style={{ width: 100, marginLeft: 10 }} disabled type='text' value={this.state.form_1[i].node_items[j].screen}


                                                      onChange={(e) => {

                                                        // let obj = this.state.form_1[i].node_items;
                                                        let ids = [...this.state.form_1];     // create the copy of state array
                                                        ids[item.id].name = e.target.value;                  //new value
                                                        this.setState({ form_1: ids });



                                                        let ids2 = [...this.state.form_1];     // create the copy of state array
                                                        ids2[i].node_items[j].name = e.target.value;                  //new value
                                                        this.setState({ form_1: ids2 });

                                                        // this.setState({ form_1: obj })

                                                      }} placeholder='Form' />
                                                  </div>}

                                                <div onClick={() => {
                                                  // var arr = this.state.form_1[item.id].node_items;
                                                  // arr = arr.filter(item => item !== '');
                                                  // arr = arr.filter(item => item !== null);
                                                  // for (var t = 0; arr.length > t; t++) {
                                                  //   var w = { id: arr[t].id };
                                                  //   //////console.log({ id: arr[t].id })
                                                  //   //////console.log(arr[t])
                                                  //   if (arr[t].toString() === w.toString()) {
                                                  //     // //////console.log('hello')
                                                  //     delete arr[t]
                                                  //   }

                                                  // }
                                                  // arr = arr.filter(item => item !== '');
                                                  // //new
                                                  // arr.map((itm, p) => { if (itm === null) { arr[p] = '' } })
                                                  // arr = arr.filter(item => item !== '');

                                                  // // //////console.log(this.state.first_object.node_items)
                                                  // //////console.log(arr)
                                                  // //////console.log([])
                                                  // if (arr.length === 0) {
                                                  // let ids = [...this.state.form_1];     // create the copy of state array
                                                  // ids[item.id].show = false;                     //new value
                                                  // this.setState({ form_1: ids });



                                                  let ids2 = [...this.state.form_1];     // create the copy of state array
                                                  delete ids2[i].node_items[j]              //new value
                                                  this.setState({ form_1: ids2 });
                                                  // } else {
                                                  //   this.setState({ errorMsg: 'This form contains other forms, or change its form type to Items first' })
                                                  //   this.setState({ showError: true })
                                                  //   // alert('This form contains other forms, or change form type to Items first')
                                                  // }

                                                      this.corrector2()

                                                  // var g=1;
                                                  // for (var t = 0; this.state.form_1>t,t++){

                                                  // }



                                                  //                   var data = $.grep(data, function(e){ 
                                                  //      return e.id !== id; 
                                                  // });
                                                  this.level_update();
                                                }}><CloseIcon /></div>
                                              </div>
                                            </div>)}
                                          })}
                                          
                                         
                                          
                                          </div>
                                           {this.state.lead.map(()=>{
                                              var t=false;
                                            
                                              this.state.form_1[i].node_items.map((itm, j) => {
                                                if (this.state.form_1[i].node_items[j]!=null && typeof this.state.form_1[i].node_items[j] !== 'undefined' && this.state.form_1[i].node_items[j].screen==='end'){
                                                  t = true;
                                                }
                                              })
                                              if(t===true){

                                            return(<div>
                                              <br />
                                           
                                                <div>
                                                  <strong>End Message</strong><br />
                                                <Input type='text' onFocus={() => {
                                                  if (this.state.modalDrag == true) {
                                                    this.setState({ drag: true })
                                                  }


                                                }} onBlur={() => {
                                                  if (this.state.modalDrag == true) {
                                                    this.setState({ drag: false })
                                                  }

                                                }}  value={this.state.form_1[i].exit_message} onChange={(e) => {
                                                    let ids = [...this.state.form_1];
                                                    ids[i].exit_message = e.target.value;         //new value
                                                    this.setState({ form_1: ids });
                                                  }} /></div>
                                            </div>)}
                                          })}

                                        <br /></div>)}


                                    {this.state.form_1[i].type === 'options' &&


                                      (<div>
                                      {/* <br /> */}
                                      {/* <strong>node options</strong> */}
                                        <br />
                                        <Button
                                          color="primary"
                                          fullWidth
                                          size="small"
                                          // type="submit"
                                          style={{ backgroundColor: '#e5e5e5', marginBottom: 10, border: '0.5px solid #e5e5e5' }}

                                          onClick={() => {

                                            // let obj2 = this.state.form_1
                                            // let inst = {
                                            //   name: 'Screen',
                                            //   type: 'direct_input',
                                            //   node_items: [],
                                            //   node_option: [],
                                            //   next_screen: '',
                                            //   short_code: '',
                                            //   show: true,


                                            // };
                                            // inst['name'] = 'Form ' + eval(this.state.form_1.length + 1)
                                            // inst['order'] = [1, this.state.form_1.length + 1];

                                            // if (this.state.order_count.length < 2) {

                                            //   this.setState({ order_count: [1,1]})
                                            // }


                                            // obj2.push(inst);
                                            // this.setState({ level_1: obj2 })
                                            // this.setState({ form_1: obj2 })

                                            let obj = this.state.form_1
                                            // obj[i]['node_options'].push({ field: 'field', screen: 'screen', id: (this.state.form_1.length - 1) })
                                            obj[this.state.selected]['node_options'].push('')

                                            this.setState({ form_1: obj })
                                              this.corrector2()
                                            // //////console.log(this.state.form_1)
                                            // setTimeout(function t(letf=this.state){
                                            //////console.log(this.state);
                                            // },3000)


                                          }}
                                        >add task</Button>
                                        <div style={{ maxHeight: 100, overflowY: 'scroll' }}>
                                          {
                                            this.state.form_1[i].node_options.map((item, k) => {
                                              {/* i++; */ }
                                              return (<div>
                                                <div style={{ display: 'flex', flexDirection: 'row', width: '90%' }}>
                                                  {/* <div>{i+1}. </div> */}
                                                  <div>  <Input type='text' value={this.state.form_1[i].node_options[k]}
                                                    onChange={(e) => {

                                                      let ids = [...this.state.form_1];
                                                      ids[i].node_options[k] = e.target.value;                //new value
                                                      this.setState({ form_1: ids });
                                                    }}
                                                    placeholder='field' style={{ width: 220 }} />    </div>
                                                  {/* <div > <Input style={{ width: 100, marginLeft: 10 }} type='text' value={this.state.form_1[item.id].name} onChange={(e) => {

                      let ids = this.state.first_object;     // create the copy of state array
                      ids.node_items[i].name = e.target.value;                  //new value
                      this.setState({ first_object: ids });



                      let ids2 = [...this.state.form_1];     // create the copy of state array
                      ids2[item.id].name = e.target.value;                  //new value
                      this.setState({ form_1: ids2 });
                      // let obj = this.state.form_1;

                      // obj[i - 1]['name']=e.target.value;

                      // this.setState({ form_1: obj})

                    }} placeholder='Form' /></div> */}
                                                  <div onClick={() => {

                                                    // var arr = this.state.form_1[item.id].node_options;
                                                    // arr = arr.filter(item => item !== '');
                                                    // // //////console.log(this.state.first_object.node_items)
                                                    // //////console.log(arr)
                                                    // //////console.log([])
                                                    // if (arr.length === 0) {
                                                    let ids = [...this.state.form_1];
                                                    delete ids[i].node_options[k];                //new value
                                                    this.setState({ form_1: ids });



                                                    // let ids2 = this.state.form_1;     // create the copy of state array
                                                    // ids2[item.id].show = false;                //new value
                                                    // this.setState({ form_1: ids2 });
                                                    // } else {

                                                    // }
                                                    // create the copy of state array

                                                    // var g=1;
                                                    // for (var t = 0; this.state.form_1>t,t++){

                                                    // }



                                                    //                   var data = $.grep(data, function(e){ 
                                                    //      return e.id !== id; 
                                                    // });
                                                  }}><CloseIcon /></div>
                                                </div>

                                              </div>)
                                            })
                                          }</div>

                                        <br />

                                      </div>)}


                                    {this.state.form_1[i].type !== 'items' && false &&
                                      (<div>
                                        <br />
                                        <strong> next screen</strong><br />
                                        {this.state.form_1[i].node_items.map((item, j) => {
                                          {/* 
                                    let ids = this.state.form_1;     // create the copy of state array
                                    ids[i].node_items[j].screen = this.state.form_1[item.id].name;                  //new value
                                    this.setState({ form_1: ids }); */}

                                          if (typeof item.field !== 'undefined') {
                                            {/* i++; */ }
                                            return (<div>
                                              <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                                                {/* <div>{i+1}. </div> */}
                                                {/* <div>  <Input type='text' placeholder='field' style={{ width: 100 }} />    </div> */}
                                                <div >
                                                  <Select  value={this.state.form_1[i].node_items[j].screen } onChange={(e) => {
                                                    //      let ids2 = [...this.state.form_1];     // create the copy of state array
                                                    // ids2[item.id].name = ids2[i].node_items[j].screen ;
                                                    // // ids2[item.id].f_id = item.id;  
                                                    // //new value
                                                    // this.setState({ form_1: ids2 });
                                                  
                                                    let ids = this.state.form_1;     // create the copy of state array
                                                    ids[i].node_items[j].screen = e.target.value;                  //new value
                                                    this.setState({ form_1: ids });
    // this.corrector2(e.target.value,i)


                                                    // let ids2 = [...this.state.form_1];     // create the copy of state array
                                                    // ids2[item.id].name = e.target.value;
                                                    // // ids2[item.id].f_id = item.id;  
                                                    // //new value
                                                    // this.setState({ form_1: ids2 });
                                                    // let obj = this.state.form_1;

                                                    // obj[i - 1]['name']=e.target.value;

                                                    // this.setState({ form_1: obj})

                                                  }} displayEmpty style={{ width: 120 }}>
                                                    <MenuItem value='start_page' selected>start_page </MenuItem>
                                                    {this.state.form_1.map((item,g) => {
                                                      if (item.show === true && item.name !== 'end' && g!=i) {
                                                        return (<MenuItem value={item.name} >{item.name}</MenuItem>)
                                                      }
                                                    })}
                                                    <MenuItem value='end' selected >end</MenuItem>

                                                  </Select>
                                                  {/* <Input style={{ width: 100 }} type='text'  placeholder='Form' /> */}

                                                </div>
                                                {/* <div onClick={() => {
                                                  var arr = this.state.form_1[item.id].node_items;
                                              
                                                  arr = arr.filter(item => item !== '');
                                                  //new   
                                                  arr.map((itm, p) => { if (itm === null) { arr[p] = '' } })
                                                  arr = arr.filter(item => item !== '');
                                                  // //////console.log(this.state.first_object.node_items)
                                                  //////console.log(arr)
                                                  //////console.log([])
                                                  if (arr.length === 0) {
                                                    let ids = [...this.state.form_1];     // create the copy of state array
                                                    ids[item.id].show = false;                     //new value
                                                    this.setState({ form_1: ids });



                                                    let ids2 = [...this.state.form_1];
                                                    // create the copy of state array
                                                    ids2[i].node_items[j] = { id: item.id };             //new value
                                                    this.setState({ form_1: ids2 });
                                                  } else {
                                                    this.setState({ errorMsg: 'This form contains other forms, or change its form type to Items first' })
                                                    this.setState({ showError: true })
                                                    // alert('This form contains other forms or change form type to Items first')
                                                  }



                                                  this.level_update();
                                                }}><CloseIcon /></div> */}

                                              </div>

                                            </div>)
                                          }
                                        })}
                                      {/* <br /> */}
                                      {typeof this.state.form_1[i].node_items[this.state.form_1[i].node_items.length - 1]!="undefined" && this.state.form_1[i].node_items[this.state.form_1[i].node_items.length - 1].screen === 'end' && false &&
                                        <div>
                                          <strong>End Message</strong><br />
                                        <Input type='text' onFocus={() => {
                                          if (this.state.modalDrag == true) {
                                            this.setState({ drag: true })
                                          }


                                        }} onBlur={() => {
                                          if (this.state.modalDrag == true) {
                                            this.setState({ drag: false })
                                          }

                                        }} value={this.state.form_1[i].exit_message} onChange={(e)=>{
                                          let ids = [...this.state.form_1];
                                          ids[i].exit_message = e.target.value;         //new value
                                          this.setState({ form_1: ids });
                                        }}/></div>}

                                      </div>)
                                    }


                                    {/* <br /> */}
                                    <strong>Comment</strong><br />

                                    <Input type='text' onFocus={() => {
                                      if (this.state.modalDrag == true) {
                                        this.setState({ drag: true })
                                      }


                                    }} onBlur={() => {
                                      if (this.state.modalDrag == true) {
                                        this.setState({ drag: false })
                                      }

                                    }} placeholder='Comment' style={{ width: '100%' }} value={this.state.form_1[i].screen_text}
                                      onChange={(e) => {
                                        let ids = [...this.state.form_1];
                                        ids[i].screen_text = e.target.value;         //new value
                                        this.setState({ form_1: ids });
                                      }}
                                    /><br />


                                    <br />
                                    {/* {typeof this.state.form_1[this.state.form_1[i].f_id] !== 'undefined' && <div style={{ color: 'gray' }}>
                                      <hr />Parent: {this.state.form_1[this.state.form_1[i].f_id].name}</div>}
                                    {typeof this.state.form_1[this.state.form_1[i].f_id] === 'undefined' && <div style={{ color: 'gray' }}>
                                      <hr />Parent: {this.state.first_object.name}</div>} */}
                                    {/* </div> */}


                                  </div>

                                </div>)
                            }else{
                              return (
                                <div></div>
                               )
                            }
                          })}

                        </div>
                        {/* <div style={{ width: '100%', backgroundColor: "white", borderTop: '0.4px solid #e5e5e5', marginTop: 0, textAlign: 'center' }}>
                        <h3 style={{ lineHeight: '40px', marginLeft: '10px', color: '#172B4D', fontSize: 18 }}>Add Items</h3></div>
                      */}

                        {/* <hr style={{border:'0.0px solid #e5e5e5'}}/>  */}
                        {/* <small style={{color:'gray',lineHeight:'40px',marginLeft:10}}>Level items</small>  */}
                      </div>)

                    }
                  </div>)
                })}

              </div>}
              {/* <ScreenCard data={this.state.selected} main_state={this.state} style={{zIndex:1000}}/> */}

            </div>

          }
            </div>
   </Draggable>
          
          </div>}
        {this.state.addflow2 &&
          <div style={{ position: 'fixed', color: 'white', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 100, overflow: 'hidden', display: "flex", justifyContent: 'center', flexDirection: 'row', alignItems: 'center', fontSize: 16 }}>
            <div onClick={() => { this.setState({ addflow2: false }) }} style={{ position: 'absolute', height: '100vh', width: '100vw', top: 0, left: 0, }}></div>
            <div style={{ zIndex: 10, width: 350, borderRadius: 3, color: 'black', padding: 15, backgroundColor: 'white', boxShadow: '0 1px 1.5px 0 rgba(0,0,0,.12), 0 1px 1px 0 rgba(0,0,0,.24)' }}>
              <h3>

                <Typography
                  // align="center"
                  // className={classes.sugestion}
                  color="white"
                  style={{ width: '100%', fontSize: '18px', margin: 0, color: 'gray' }}
                  variant="body1" >Options
             </Typography>  </h3>
             {/* <br /> */}
            {/*   <Input type='text' placeholder='Flow Name' style={{ width: '100%' }} /><br /><br />
              <Input type='text' placeholder='Enter Shortcode' style={{ width: '100%' }} /><br /><br />
              <Input type='text' placeholder='Description' style={{ width: '100%' }} /><br /><br />
              <FormControl component="fieldset">
                <FormLabel component="legend">Choose type of Flow</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" color="primary" >
                <FormControlLabel value="female" control={<Radio />} label="USSD" />
                <FormControlLabel value="male" control={<Radio/>} label="Whatsapp" />

                </RadioGroup>
              </FormControl> */}
            {/* <Button onClick={() => { this.setState({ addflow2: false }) }} fullWidth style={{ backgroundColor: '#252B3B', color: 'white' }}>Edit current flow</Button> */}
          
            <Button onClick={() => { 
              
              // this.setState({flowState:"new"})
              this.updateScreen("new");
              // this.setState({ flowState: "update" })
      

              this.setState({ addflow: true }) 
              
              }} fullWidth style={{ backgroundColor: '#252B3B', color: 'white',marginTop:10 }}>Create new flow from current</Button>

            <Button color='primary'

              onClick={() => {
                //  this.setState({
                //    showError: false, errorMsg: '', search: '', result: true, sender: {}, selected: '', card_view: false, sidePane: false,
                //    first_object: {
                //      name: 'start_page',
                //      type: 'items',
                //      node_items: [],
                //      node_options: [],
                //      next_screen: '',
                //      short_code: '',
                //      screen_text: '',


                //    }, form_1: [], lead: [1], loading: false, order_count: [], error: '', codes: []
                //                   })
                // this.deleteFlow(this.state.first_object.short_code)
                // this.setState({ errorMsg: 'This function is not yet available' })
                 this.setState({ menu: true })
                this.setState({ addflow2: false })
                // 

              }}

              fullWidth style={{ marginTop: 15, display: 'block', backgroundColor: '#F8F8F8', color: 'red', boxShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 5px 0 rgba(0,0,0,.23)' }}>

              Delete Flow
      </Button>
            </div>
          </div>

        }
     
{this.state.addflow2 &&
          <div style={{ position: 'fixed', color: 'white', top: 0, left: 0, width: '100%', height: '100%', zIndex: 100, overflow: 'hidden', display: "flex", justifyContent: 'center', flexDirection: 'row', alignItems: 'center', fontSize: 16 }}>
            <div onClick={() => { this.setState({ addflow2: false }) }} style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,0.3)', height: '100vh', width: '100vw', top: 0, left: 0, }}></div>
            <div style={{ zIndex: 10, width: 350, borderRadius: 3, color: 'black', padding: 15, backgroundColor: 'white', boxShadow: '0 1px 1.5px 0 rgba(0,0,0,.12), 0 1px 1px 0 rgba(0,0,0,.24)' }}>
              <h3>

                <Typography
                  // align="center"
                  // className={classes.sugestion}
                  color="white"
                  style={{ width: '100%', fontSize: '18px', margin: 0, color: 'gray' }}
                  variant="body1" >Options
             </Typography>  </h3>
             {/* <br /> */}
              {/* <Input type='text' placeholder='Flow Name' style={{ width: '100%' }} /><br /><br />
              <Input type='text' placeholder='Enter Shortcode' style={{ width: '100%' }} /><br /><br />
              <Input type='text' placeholder='Description' style={{ width: '100%' }} /><br /><br />
              <FormControl component="fieldset">
                <FormLabel component="legend">Choose type of Flow</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" color="primary" >
                <FormControlLabel value="female" control={<Radio />} label="USSD" />
                <FormControlLabel value="male" control={<Radio/>} label="Whatsapp" />

                </RadioGroup>
              </FormControl> */}
            {/* <Button onClick={() => { this.setState({ addflow2: false }) }} fullWidth style={{ backgroundColor: '#252B3B', color: 'white' }}>Edit current flow</Button> */}
            {/* <Button onClick={() => {


              // this.setState({ flowState: "new" })
              // this.updateScreen("new");
              // this.setState({ flowState: "update" })

              this.setState({ addflow: true });
              this.setState({ addflow2: false })

            }} fullWidth style={{ backgroundColor: '#252B3B', color: 'white', marginTop: 10 }}>Edit</Button> */}
            <Button onClick={() => {
              
        
              // this.setState({ flowState: "new" })
              this.updateScreen("new");
              // this.setState({ flowState: "update" })


              this.setState({ addflow2: false }) 
               
               }} fullWidth style={{ backgroundColor: '#252B3B', color: 'white',marginTop:10 }}>Create new flow from current</Button>

            <Button color='primary'

              onClick={() => {
                //  this.setState({
                //    showError: false, errorMsg: '', search: '', result: true, sender: {}, selected: '', card_view: false, sidePane: false,
                //    first_object: {
                //      name: 'start_page',
                //      type: 'items',
                //      node_items: [],
                //      node_options: [],
                //      next_screen: '',
                //      short_code: '',
                //      screen_text: '',


                //    }, form_1: [], lead: [1], loading: false, order_count: [], error: '', codes: []
                //                   })
                // this.deleteFlow(this.state.first_object.short_code)
                // this.setState({ errorMsg: 'This function is not yet available' })
                //  this.setState({ menu: true })
                // this.setState({ addflow2: false })
                window.confirm("Are you sure you wish to delete this flow?") &&
                this.deleteFlow2(this.state.flowCode)

             
              }}

              fullWidth style={{ marginTop: 15, display: 'block', backgroundColor: '#F8F8F8', color: 'red', boxShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 5px 0 rgba(0,0,0,.23)' }}>

              Delete Flow
      </Button>
            </div>
          </div>

        }
    

      </div>

    )
/*jshint ignore: end */
  }
} const mapStateToProps = state => ({
  project: state.project,
  user: state.user

}) 
const mapDispatchToProps = dispatch => ({
  updateToken: token => dispatch({ type: 'UPDATE_TOKEN', token: token }),
  updateAuth: status => dispatch({ type: 'UPDATE_AUTH', status: status }),
  updateProject: project => dispatch({ type: 'UPDATE_PROJECT', project: project })
}) 

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
