import React, { useState } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {useMutation} from "react-fetching-library";
import { check } from "../App"
import { Redirect } from "react-router-dom"

//api request ->
const loginAction = (username, password) => {
  return {
    method: 'GET',
    endpoint: "login?username=" + username +  "&password=" + password 
  
    //GET password and username     
    //Return true or false
   
  }
}

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const loginMutation = useMutation(loginAction);

  const handleSubmit = async () => {
    const { error: mutateError } = await loginMutation.mutate(username, password);

    if (mutateError) {
        console.error(mutateError)
        return
    }
    localStorage.setItem("uname", username)
    localStorage.setItem("pw", password)
  };

  return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='blue' textAlign='center'>
          <i className="fa fa-teqplay" /> Log-in to your account
        </Header>
        <Form size='large'  >
          <Segment stacked>
            <Form.Input 
             fluid icon='user'
             iconPosition='left'
             placeholder='Username'
             id="uname"
             value={username}
             onChange={event => {setUsername(event.target.value)}}
           
            />
            <Form.Input
              
              fluid
              icon='lock'
              iconPosition='left'
              type="password"
              placeholder='Password'
              id='pw'
              value={password}
              onChange={event => {setPassword(event.target.value)}}
             
 
            />
  
            <Button color='orange' fluid size='large' onClick={handleSubmit} href="../" >
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
}