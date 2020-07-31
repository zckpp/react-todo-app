import React, {useState}  from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { connect } from 'react-redux';
import { userLogin } from '../components/thunks';
import { getLoginErrorMessage } from '../components/selectors';

function Login({ errorMessage, onUserLogin }) {
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
              <p><span className='errorMessage'>{errorMessage}</span></p>
              <Button
                className="Login-button"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<LockOpenIcon />}
                onClick={() => onUserLogin(username, password)}
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
    </Container>
  );
}

const mapStateToProps = state => ({
  errorMessage: getLoginErrorMessage(state),
});

const mapDispatchToProps = dispatch => ({
	onUserLogin: (username, password) => dispatch(userLogin(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);