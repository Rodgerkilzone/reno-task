import {combineReducers} from 'redux'

import token from './token'
import user from './user'
import authStatus from './authStatus'
import events from './events'
import business from './business'
import receipts from './receipts'
import payments from './payments'
import sidebarShow from './sidebarShow'
export default combineReducers({ token, user, authStatus, events, business, receipts, payments, sidebarShow})
