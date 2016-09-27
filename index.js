// import React from 'react'
// import { render } from 'react-dom'
// import App from './modules/App'
// render(<App/>, document.getElementById('app'))

import React from 'react'
import {render} from 'react-dom'
import {Router,Route,browserHistory,IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import App from './container/App'
// import Contact from './modules/Contact'
// import Loan from './modules/Loan'
// import PBasic from './modules/PBasic'
// import Basic from './modules/Basic'
import PageContent from './modules/PageContent'
import configureStore from './configureStore/configureStore'
let store= configureStore()

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={PageContent}/>
                <Route path="/:key" component={PageContent}></Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);

