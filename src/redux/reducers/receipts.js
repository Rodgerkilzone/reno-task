const receipts = (state = [], action) => {
  
    if (action.type === "UPDATE_RECEIPTS") {
        state = action.receipts;
      
        return state
    }
    else {
        return state
    }

}

export default receipts;