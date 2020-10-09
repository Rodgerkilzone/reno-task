import { UPDATE_RECEIPTS } from './actionTypes';
export const addReceipts = (receipts) => ({
    type: UPDATE_RECEIPTS,
    receipts: receipts
})