import React, {useState}  from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOpenIcon from '@material-ui/icons/LockOpen';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container maxWidth="sm" className="Login-form">
      <h1>Login</h1>
        <Card variant="outlined">
          <CardContent>
            <form noValidate autoComplete="off">
              <Grid item xs={12}>
                <TextField 
                  className="input-text" 
                  id="Login-form-username" 
                  label="username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="input-text"
                  id="Login-form-password"
                  label="password"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </Grid>
              <Button
                className="Login-button"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<LockOpenIcon />}
                // onClick={() => {
                //   this.props.onAddTodo(this.state.title, this.state.body)
                // }}
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
    </Container>
  );
}

export default Login;