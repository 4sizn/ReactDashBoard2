import React from 'react';
import {Header} from 'components'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home, Login, Register} from 'containers';

class App extends React.Component {
    render(){
        //let re = /(login|register)/;
        //let isAuth = re.test(this.props.location.path);
        return (
            <Router>
                <div>
                {/* {isAuth ? undefined : <Header></Header>} */}
                <Header></Header>
                {this.props.children}
                <Switch>
                    <Route exact path='/' component={Home}/>                    
                    <Route path ='/login' component={Login}/>
                    <Route path = 'Register' component={Register}/>
                </Switch>
                </div>
                </Router>
        );
    }
}

export default App;
