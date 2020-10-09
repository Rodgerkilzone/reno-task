const events = (state = [], action) => {
    // console.log(action)

    if (action.type === "UPDATE_EVENTS") {
        state = action.events;
        // console.log(state)
        return state
    }
    else {
        return state
    }

}

export default events;