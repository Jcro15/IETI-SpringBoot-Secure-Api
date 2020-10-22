import React, {Component} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import AddIcon from '@material-ui/icons/Add';
import { withStyles} from '@material-ui/core/styles';
import { Fab, Modal } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import DialogContent from '@material-ui/core/DialogContent';
import NewTask from './NewTask'
import axios from 'axios';
import { withRouter } from 'react-router-dom'









const useStyles =theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
      fab2: {
        position: 'fixed',
        bottom: theme.spacing(10),
        right: theme.spacing(2),
      }
})


 class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {open:false,items:[]};
        this.handleModal=this.handleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.axios = axios.create({
            baseURL: 'http://localhost:8080/api/',
            timeout: 1000,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem("token")}
        });
    }

    componentDidMount() {
       this.axios.get("/tasks")
            .then(res => {
                console.log(res.data)
                var tasksl=[]
                res.data.forEach(function (task) {
                    task.dueDate=moment(task.dueDate,'YYYY-MM-DD')
                    tasksl.push(task)    
                });
            this.setState({items: tasksl});
            
            }).catch(res=> {
                localStorage.setItem("isLoggedIn",false)
                this.props.history.push("/login")
            })
    }


    render() {
        const { classes } = this.props;
        return (
            <div className="App">
                <br/>
                <br/>
                <TodoList todoList={this.state.items}/>
                <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.handleModal}>
                <AddIcon />
                </Fab> 
                <Modal open={this.state.open}
                onClose={this.handleModal}
                >
                <NewTask handleSubmit={this.handleSubmit}/>
                </Modal>

            </div>
        );
    }

    

    handleModal(){
        this.setState(prevstate=>({
            open: !prevstate.open
        }))
    }

    handleSubmit(task) {
        this.axios.post("/tasks",task )
            .then(res=> console.log(res))
            .catch(res=> {
                localStorage.setItem("isLoggedIn",false)
                this.props.history.push("/login")
            })
        this.setState(prevState => ({
            items: prevState.items.concat(task)
          }));
        this.handleModal()
    }
}

export default withRouter(withStyles(useStyles, { withTheme: true })(TodoApp))




