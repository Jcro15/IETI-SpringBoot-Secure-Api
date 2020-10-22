import React, {Component} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import TodoApp from './components/TodoApp';
import Login from './components/Login';
import {BrowserRouter as Router, Link, Route,Switch,withRouter} from 'react-router-dom'
import axios from 'axios';



export class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
            <div className="App">
                    <Switch>
                    <Route exact path="/login" component={()=>{
                        return localStorage.getItem("isLoggedIn")==="true"?<TodoApp />:<Login/>
                    }}/>
                    <Route path="/" component={()=>{
                        return localStorage.getItem("isLoggedIn")==="true"?<TodoApp />:<Login/>
                    }}/>
                    </Switch>
                
            </div>
        </Router>
        );
    }
}