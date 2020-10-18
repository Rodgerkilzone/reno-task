const project = (state =null, action) => {
  // console.log(action)

  if (action.type === 'UPDATE_PROJECT') {
    state = action.project;
    // console.log(state)
    return state
  }
  else {
    return state
  }

}

export default project;