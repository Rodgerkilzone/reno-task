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
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Input, MenuItem, Select, Typography, Chip, Slider, Switch, Divider, Avatar } from '@material-ui/core';
// fake data generator
const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}-${new Date().getTime()}`,
        content: `item ${k + offset}`
    }));

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
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    // width: 250,
    overflow:'scroll',
    height:'75vh'
});

function QuoteApp() {
    const [state, setState] = useState([getItems(10), getItems(5, 10)]);

    function onDragEnd(result) {
        const { source, destination } = result;

        // dropped outside the list
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
        <div>
            <button
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
      </button>
            <div style={{ display: "flex" }}>
                <DragDropContext onDragEnd={onDragEnd}>
                    {state.map((el, ind) => {
                        var color = ''
                        var title = ''
                        if (ind == 0) {
                            title = 'Backlog'
                            color = 'red'
                        } else if (ind == 1) {
                            title = 'Inprogress'
                            color = 'purple'
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
                        <Droppable key={ind} droppableId={`${ind}`}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}
                                    {...provided.droppableProps}
                                >
                                    {el.map((item, index) => {
                                        var border=''
                                        if (ind == 0){
                                            border = '4px solid red'
                                        } else if (ind == 1){
                                            border = '4px solid purple'
                                        } else if (ind == 2){
                                            border = '4px solid orange'
                                        }else{
                                            border = '4px solid green'
                                        }
                                        return(
                                    
                                        <Draggable
                                            key={item.id}
                                            draggableId={item.id}
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
                                                    style={{ borderTop:border, background: 'white', padding: 8, margin: 4, boxShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 5px 0 rgba(0,0,0,.23)', minWidth: '18vw', ...provided.draggableProps.style}}
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
                                                            style={{ fontSize: '18x', margin: 0 }}
                                                            variant="body1"
                                                        >     Marketing Strategy</Typography>
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
                                                                style={{ fontSize: '14x', margin: 0, color:'gray'}}
                                                                variant="body1"
                                                            > Inprogress</Typography>
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
                                    )})}
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
