const payments = (state = [], action) => {

    if (action.type === "UPDATE_PAYMENTS") {
        state = action.payments;

        return state
    }
    else {
        return state
    }

}

export default payments;