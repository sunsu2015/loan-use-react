/**
 * Created by sunsu on 2016/9/20.
 */
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from '../reducer/reducer'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(createStore)

export default function configureStore() {
    return createStoreWithMiddleware(reducer)
}