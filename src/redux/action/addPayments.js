import { UPDATE_PAYMENTS } from './actionTypes';
export const addPayments = (payments) => ({
    type: UPDATE_PAYMENTS,
    payments: payments
})