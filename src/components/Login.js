import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Login=({handleChange})=>{

    const paperStyle={padding :20,height:'50vh',width:300, margin:"0 auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    function changeBackground1(e) {
        // .target.style.background = 'red';
        e.target.style.border = '1px solid #ffd700';
      }
      function changeBackground2(e) {
        e.target.style.border = ' 1px solid white';
      }
    return(
        <Grid>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2 >Sign In</h2>
                </Grid>
                <form>
                <TextField label='Username'  placeholder='Enter username' fullWidth required type="email" onMouseEnter={changeBackground1} onMouseLeave={changeBackground2}/>
                <TextField label='Password' placeholder='Enter password' style={{marginTop:'10px'}} type='password' fullWidth required onMouseEnter={changeBackground1} onMouseLeave={changeBackground2}/>
             
                <Button type='submit' color='primary' variant="contained" style={btnstyle} style={{marginTop:'40px'}} fullWidth>Sign in</Button>
             
                </form>
            </Paper>
        </Grid>
    )
}

export default Login