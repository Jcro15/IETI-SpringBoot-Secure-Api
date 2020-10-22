import React, {Component} from 'react';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import { Redirect } from 'react-router-dom';
import { withStyles} from '@material-ui/core/styles';


import { InputLabel,Button, TextField,Select, FormControl } from '@material-ui/core';



const useStyles =theme => ({
    paper: {
        margin:'auto',
        position:'fixed',
        top:0,
        bottom:0,
        left:0,
        right:0,
        width: 300,
        height: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      }
    
})

class NewTask extends Component {

    constructor(props) {
        super(props);
        this.state = {text: '', state:'', dueDate: moment(),responsibleName:'',responsibleEmail:''};
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);

        
    }


    render() {
        const { classes } = this.props;
        return (  
            <div  className={classes.paper}  style={{textAlign:"center"} } tabIndex="-1">

            <form onSubmit={this.handleSubmit}>
                <h3>New TODO</h3>

                <TextField
                    id="text"
                    label="Task"
                    name="text"
                    onChange={this.handleChange}
                    value={this.state.text}>
                </TextField>
                <br/>
                <TextField
                    id="responsibleN"
                    label="Name"
                    name="responsibleName"
                    onChange={this.handleChange}
                    value={this.state.responsibleName}>
                </TextField>
                <br/>

                <TextField
                    id="responsibleE"
                    label="Email"
                    name="responsibleEmail"
                    onChange={this.handleChange}
                    value={this.state.responsibleEmail}>
                </TextField>
                <br/>
                <FormControl>
                <InputLabel htmlFor="label-state">
                    State:
                </InputLabel>

                <Select
                    native
                    value={this.state.state}
                    name="state"
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'state',
                        id: 'label-state',
                    }}
                    >
                    <option aria-label="None" value="" />    
                    <option value={"Activo"}>Activo</option>
                    <option value={"Pendiente"}>Pendiente</option>
                    <option value={"Terminado"}>Terminado</option>
                </Select>
                <br/>



                </FormControl>
                
                <br/>
                <TextField
                    id="due-date"
                    label= "Due-Date"
                    type="date"
                    onChange={this.handleDateChange}
                    defaultValue={this.state.dueDate.format('YYYY-MM-DD')}
                />
                <br/>
                <br/>

                <Button type="submit"
                            variant="contained"
                            color="primary"
                            className="submit">
                    Add 
                </Button>
            </form>
            </div>             
            
             
        );
    }
    handleChange(e) {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});
      }

    handleDateChange(e) {
        this.setState({
            dueDate: moment(e.target.value,'YYYY-MM-DD')
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.state.length || !this.state.dueDate||!this.state.responsibleEmail.length||!this.state.responsibleName)
            return;

        const newItem = {
            text: this.state.text,
            state: this.state.state,
            dueDate: this.state.dueDate,
            responsible: {name: this.state.responsibleName, email:this.state.responsibleEmail}

        };
        this.setState(prevState => ({
            text: '',
            state: '',
            dueDate: moment(),
            redirect:true,
            responsibleEmail:'',
            responsibleName:''
        }));
        this.props.handleSubmit(newItem)
    }



}

export default withStyles(useStyles, { withTheme: true })(NewTask);
