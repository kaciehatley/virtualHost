import React, { Component } from 'react';
import { Form, Image, Grid } from 'semantic-ui-react';
import Logo from "./signup.png";
import "./style.css";
import { StyledButton, StyledSegment } from "./styledComponents.js";
import API from '../../utils/API';
import validateForm from './validate';
import Passport from "./GoogleAuth";
import queryString from "query-string";

class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formdata: {},
      returned: {},
    };
  }

  // change window location without using a hook

  handleInputChange = (event) => {
    if (event.target.name === "username") {
      event.target.value = event.target.value.toLowerCase();
    }
    const { name, value } = event.target;
    this.setState({...this.state, formdata: {...this.state.formdata, [name]: value }});
  };

  componentDidMount = () => {
    var query = queryString.parse(window.location.search);
    if (query.token) {
      window.localStorage.setItem("jwt", query.token);
    }
  }

  // need to redirect not using a hook

  signupSuccess = () => {
    setTimeout(() => (
      window.location = ("http://localhost:3000/mydashboard/" + this.state.returned._id)
      // console.log(this.state.returned._id)
      ), 2000);
  };
  
  handleFormSubmit = async(event) => {
    event.preventDefault();
    const isValid = validateForm(this.state.formdata);
    if (isValid === true) {
      const newObj = {
        username: this.state.formdata.username,
        first_name: this.state.formdata.first_name,
        last_name: this.state.formdata.last_name,
        password: this.state.formdata.pass1,
        email: this.state.formdata.email
      }
      let newUser = await API.signupUser(newObj);
      if (newUser.status === 200) {
        console.log(`Hello ${newUser.data.first_name} ${newUser.data.last_name}`);
        this.setState({...this.state, returned: newUser.data });
        this.signupSuccess();
      }
      else {
        console.log(`Error ${newUser.status}: ${newUser.statusText}`)
      }
    }
  };
        
  render() {
    return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
       <Grid.Column id="container">
        <Form size='large'>
          <StyledSegment stacked>
            <Image id="logo" src={Logo} />
            <div id="formContainer">
              <Form.Input 
                fluid icon='user' 
                iconPosition='left' 
                placeholder='Username (Required)'
                name='username'
                onChange={this.handleInputChange}  
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password (Required)'
                type='password'
                name='pass1'
                onChange={this.handleInputChange}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password (Required)'
                type='password'
                name='pass2'
                onChange={this.handleInputChange}
              />
              <Form.Input 
                fluid icon='mail outline' 
                iconPosition='left' 
                placeholder='Email Address (Required)'
                name='email'
                onChange={this.handleInputChange}
              />
              <Form.Input 
                fluid icon='male'
                iconPosition='left' 
                placeholder='First Name (Required)'
                name="first_name"
                onChange={this.handleInputChange}
              />
                <Form.Input 
                fluid icon='male' 
                iconPosition='left' 
                placeholder='Last Name (Required)'
                name="last_name"
                onChange={this.handleInputChange}
                />
                <StyledButton fluid size='large' onClick={this.handleFormSubmit}>
                  Join the Community
                </StyledButton>
              </div>
            </StyledSegment>
          </Form>
          <Passport />
          <StyledButton className="bottom">
            Continue As Guest
          </StyledButton>
        </Grid.Column>
      </Grid>
    );
  }
};

export default SignupForm;