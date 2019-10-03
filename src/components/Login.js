import React, { useState } from 'react';
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react'

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  async function doLogin () {
    try {

      localStorage.setItem("uname", username)
      localStorage.setItem("pw", password)

      window.location.href = window.location.origin
    }
    catch (err) {
      console.error(err)
    }
  }

  return(

    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450}}>
        <Header as='h2' color='blue' textAlign='center'>
          <i className="fa fa-teqplay" /> 
          Log-in to your account
        </Header>
        <Form inverted size='large' >
          <Segment inverted stacked >
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
            <Button color='orange' fluid size='large' onClick={doLogin} href="../" >
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
}