import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import basketballLogo from './basketball.svg';
import baseballLogo from './baseball.svg';
import footballLogo from './football.svg';
import Register from './Register';
import Login from './Login';

class App extends Component {
  state = {
    openRegisterModal: false,
    openLoginModal: false
  }

  openRegisterModal = () => {
    this.setState({openRegisterModal: true})
  }

  openLoginModal = () => {
    this.setState({openLoginModal: true})
  }

  closeRegisterModal = () => {
    this.setState({openRegisterModal: false})
  }

  closeLoginModal = () => {
    this.setState({openLoginModal: false})
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'transparent',
      color: 'white'
    };

    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="Fantasy Sports Ultimate"
            iconElementRight={
              <FlatButton
                label="Sign In"
                style={buttonStyle}
                onClick={this.openLoginModal}
              />
            }
            iconElementLeft={
              <FlatButton
                label="Register"
                style={buttonStyle}
                onClick={this.openRegisterModal}
              />
            }
            style={{position:"fixed"}}
          />
          <div style={{padding: "155px 0px 155px 0px"}}>
            This is the ultimate fantasy sports site
          </div>
          <div>
            {this.state.openLoginModal ? <Login open={this.state.openLoginModal} handleClose={this.closeLoginModal}/> : null}
            {this.state.openRegisterModal ? <Register open={this.state.openRegisterModal} handleClose={this.closeRegisterModal}/> : null}
          </div>
          <div>
            <Card>
              <h1>I love my Lulu honey bear boo boo</h1>
              <img style={{marginLeft: '100px'}} src={baseballLogo} />
              <img style={{marginLeft: '100px'}} src={basketballLogo} />
              <img style={{marginLeft: '100px'}} src={footballLogo} />
            </Card>
          </div>
          <div style={{padding: "155px 0px 155px 0px"}}></div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
