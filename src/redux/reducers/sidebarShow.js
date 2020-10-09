const initialState = {
  sidebarShow: 'responsive'
}

const sidebarShow = (state = {}, action) => {

    if (action.type === "SHOW_SIDEBAR") {
        return action.sidebarShow
    }else{
        return state
    }
   
}


export default sidebarShow;