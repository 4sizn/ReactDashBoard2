import React from 'react';
import {Header, Authentication} from 'components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home, Login, Register} from 'containers';

//Redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk'; //비동기 처리 미들웨어 - AJAX와 별도 action 구현

const store = createStore(reducers, applyMiddleware(thunk));     
class App extends React.Component {
    render(){
        //TODO: 인증절차 고려해서 만들기 글 3번쨰부터 시작
        //let re = /(login|register)/;
        //let isAuth = re.test(this.props.location.path);
        return (
            <Provider store = {store}>
            <Router>
                <div>
                {/* {isAuth ? undefined : <Header></Header>} */}
                <Header></Header>
                {this.props.children}
                <Switch>
                    <Route exact path='/' component={Home}/>                    
                    <Route path ='/login' component={Login}/>
                    <Route path = '/register' component={Register}/>
                </Switch>
                </div>
                </Router>
                </Provider>
            );
    }
}

export default App;
