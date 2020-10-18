/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-eval */
/* eslint-disable no-use-before-define */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-redeclare */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from 'react-redux'
import { addProject } from '../../redux/action/addProject';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Input, MenuItem, Select, Typography, Chip, Slider, Switch, Divider, Avatar } from '@material-ui/core';
// fake data generator
const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}-${new Date().getTime()}`,
        content: `item ${k + offset}`
    })
    
    );

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    // padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    // background: isDragging ? "lightgreen" : "grey",
    background:'white',
    boxShadow: '0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 5px 0 rgba(0, 0, 0, .23)',
    // borderRadius:'3px',
    borderTop:'4px solid red',
    // height:100,
    padding:8,

    // styles we need to apply on draggables
    ...draggableStyle
});
const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "rgba(170, 212, 225,0.4)" : "rgba(211, 211, 211,0.4)",
    padding: grid,
    flex: 1,
    minWidth:'19vw',
    overflow:'scroll',
    height:'75vh',
    paddingBottom:50,
    margin:4,
});

function QuoteApp() {

    const [project, setProject] = useState(useSelector(state => state.project))
  var a=[{empty:true}]
    for (let index = 0; index < project.form_1.length; index++) {
     
        if (project.form_1[index].progress==0){
            project.form_1[index]['id'] = index
             a.push(project.form_1[index])
        }   
  }
    var b = [{ empty: true }]
    for (let index = 0; index < project.form_1.length; index++) {

        if (project.form_1[index].progress == 1) {
            project.form_1[index]['id'] = index
            b.push(project.form_1[index])
        }
    }
    var c = [{ empty: true }]
    for (let index = 0; index < project.form_1.length; index++) {

        if (project.form_1[index].progress == 2) {
            project.form_1[index]['id'] = index
            c.push(project.form_1[index])
        }
    }
    
    var d = [{ empty: true }]
 
    for (let index = 0; index < project.form_1.length; index++) {

        if (project.form_1[index].progress == 3) {
            project.form_1[index]['id'] = index
            d.push(project.form_1[index])
        }
    }
    

    const [state, setState] = useState([a,b,c,d] );
// setState([project.form_1]);
    console.log(state)
    function onDragEnd(result) {
        const { source, destination } = result;

        // dropped outside the list
//         var c = state[destination.droppableId];
//         for (let index = 0; index <c.length; index++) {
//             // if (c[index]['name'] + '-' + c[index]['id']==result.droppableId){
//             console.log(c[index]['name'] + '-' + c[index]['id'])
// //   }
    
// }
    
// var h=
        if (!destination) {
            return;
        }
        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;

        if (sInd === dInd) {
            const items = reorder(state[sInd], source.index, destination.index);
            const newState = [...state];
            newState[sInd] = items;
            setState(newState);
        } else {
            const result = move(state[sInd], state[dInd], source, destination);
            const newState = [...state];
            newState[sInd] = result[sInd];
            newState[dInd] = result[dInd];

            setState(newState.filter(group => group.length));
        }
    }

    return (
        <div style={{ width: '100%',}}>
            {/* <button
                type="button"
                onClick={() => {
                    setState([...state, []]);
                }}
            >
                Add new group
      </button>
            <button
                type="button"
                onClick={() => {
                    setState([...state, getItems(1)]);
                }}
            >
                Add new item
      </button> */}
            <div style={{ display: "flex",}}>
                <DragDropContext onDragEnd={onDragEnd}>
                    {state.map((el, ind) => {
                        var color = ''
                        var title = ''
                        if (ind == 0) {
                            title = 'No Status'
                            color = 'gray'
                        } else if (ind == 1) {
                            title = 'Inprogress'
                            color = '#0039cb'
                        } else if (ind == 2) {
                            title = 'Review'
                            color = 'orange'
                        } else {
                            title = 'Complete'
                            color = 'green'
                        }
                        return(
                        <div>
                            <div style={{borderRadius:3,background:color,width:100,margin:5}}>
                                 <Typography

                                        color="white"
                                        style={{ fontSize: '18x', margin: 0,lineHeight:'20px',color:'white',padding:5 }}
                                        variant="body1"
                                    >{title}</Typography>
                            </div>
                                <Droppable key={ind} droppableId={`${ind}`} className='hidebar'>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}
                                    {...provided.droppableProps}
                                            className='hidebar'
                                >
                                    {el.map((item, index) => {
                                        var border=''
                                        if (ind == 0){
                                            border = '4px solid red'
                                        } else if (ind == 1){
                                            border = '4px solid #0039cb'
                                        } else if (ind == 2){
                                            border = '4px solid orange'
                                        }else{
                                            border = '4px solid green'
                                        }
                                        var progress=''
                                        if(item.progress==0){
                                            progress='No status'
                                        } else if (item.progress == 1){
                                            progress = 'In Progress'
                                        } else if (item.progress == 2) {
                                            progress = 'Review'
                                        } else  {
                                            progress = 'Complete'
                                        }
                                        if (item.empty== true){
                                            return(<div></div>)
                                        }else{
                                        return(
                                    
                                        <Draggable
                                                key={item.name+'-'+item.id}
                                                draggableId={item.name + '-' + item.id}
                                            index={index}
                                        >
                                       
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={getItemStyle(
                                                        snapshot.isDragging,
                                                        provided.draggableProps.style
                                                    )}
                                                    style={{ borderLeft:border, background: 'white', padding: 8, margin: 4, boxShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 5px 0 rgba(0,0,0,.23)', minWidth: '18vw', ...provided.draggableProps.style}}
                                                >


                                                     <div
                                                        style={{
                                                            // display: "flex",
                                                            // justifyContent: "space-around"
                                                        }}
                                                    >
                                                        {/* {item.content} */}
                                                   
                                                        <Typography

                                                            color="white"
                                                                style={{ fontSize: '18x', margin: 0, color:'#303C54',fontWeight:'bold' }}
                                                            variant="body1"
                                                        >    {item.name}</Typography>
                                                         <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  style={{ height: 28, width: 28, margin: 3}} />
                                                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"  style={{ height: 28, width: 28, margin: 3 }}  />
                                                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"  style={{ height: 28, width: 28, margin: 3}} />
                                                            <div style={{ height: 28, width: 28, borderRadius: 14, background: '#BDBDBD', display: 'flex', flexDirection: 'row', margin: 3, alignItems: 'center', justifyContent: 'center' }}>
                                                                <strong style={{ color: 'red' }}><Typography

                                                                    color="white"
                                                                    style={{ fontSize: '14px', margin: 0, color: 'blue', }}
                                                                    variant="body1"
                                                                >+3</Typography></strong>
                                                            </div>

                                                        </div>
                                                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                                                            <Typography

                                                                color="gray"
                                                                style={{ fontSize: '12x', margin: 0, color:color}}
                                                                variant="body1"
                                                                > {title}</Typography>
</div>
                                                        {/* <button
                                                            type="button"
                                                            onClick={() => {
                                                                const newState = [...state];
                                                                newState[ind].splice(index, 1);
                                                                setState(
                                                                    newState.filter(group => group.length)
                                                                );
                                                            }}
                                                        >
                                                            delete
                            </button> */}
                                                    </div> 
                                                </div>
                                            )}
                                        </Draggable>
                                    )}})}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable></div>
                    )})}
                </DragDropContext>
            </div>
        </div>
    );
}
export default QuoteApp
// const rootElement = document.getElementById("root");
// ReactDOM.render(<QuoteApp />, rootElement);
