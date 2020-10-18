import {combineReducers} from 'redux'

import token from './token'
import user from './user'
import authStatus from './authStatus'
import events from './events'
import project from './project'
import receipts from './receipts'
import payments from './payments'
import sidebarShow from './sidebarShow'
export default combineReducers({ token, user, authStatus, events, project, receipts, payments, sidebarShow})
