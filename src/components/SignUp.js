import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Signup = () => {
    const paperStyle = { padding: 20, width: 300, height:'50vh',margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    function changeBackground1(e) {
        // .target.style.background = 'red';
        e.target.style.border = '1px solid #ffd700';
      }
      function changeBackground2(e) {
        e.target.style.border = ' 1px solid white';
      }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        </Avatar>
                    <h2 style={headerStyle} >Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name" required onMouseEnter={changeBackground1} onMouseLeave={changeBackground2}/>
                    <TextField fullWidth label='Email' placeholder="Enter your email" type="email" required onMouseEnter={changeBackground1} onMouseLeave={changeBackground2}/>
                 
                    <TextField fullWidth label='Password' placeholder="Enter your password" required onMouseEnter={changeBackground1} onMouseLeave={changeBackground2}/>
              
                    <Button type='submit' variant='contained' color='primary' style={{margin:'20px 0',width:'100%'}}>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;