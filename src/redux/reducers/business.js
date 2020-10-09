const business = (state ={
  '_id': '',
  'business': {
    '_id': '',
    'name': '',
    'email': '',
    'password': '',
    'date': '',
    '__v': null
  },
  'name': '',
  'email': '',
  'location': '',
  'phone_no': '',
  'paybill_no': '',
  'date': '',
  '__v': null
}, action) => {
  // console.log(action)

  if (action.type === 'UPDATE_BUSINESS') {
    state = action.business;
    // console.log(state)
    return state
  }
  else {
    return state
  }

}

export default business;