import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import basketballLogo from './basketball.svg';
import baseballLogo from './baseball.svg';
import footballLogo from './football.svg';
import Plx from 'react-plx';

class App extends Component {

  render() {
    const buttonStyle = {
      backgroundColor: 'transparent',
      color: 'white'
    };

    const baseballdata = [
      {
        start: 0,
        end: 200,
        easing: 'ease',
        properties: [
          {
            startValue: 0,
            endValue: 180,
            property: "rotate"
          }
        ]
      },
    ];

    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="Fantasy Sports Ultimate"
            iconElementRight={<FlatButton label="Sign In" style={buttonStyle} />}
            iconElementLeft={<FlatButton label="Register" style={buttonStyle} />}
            style={{position:"fixed"}}
          />
          <div style={{padding: "155px 0px 155px 0px"}}>
            This is the ultimate fantasy sports site
          </div>
          <div>
            <Card>
              <Plx
                parallaxData={baseballdata}
              >
                <img style={{marginLeft: '200px'}} src={baseballLogo} />

              </Plx>
              <Plx
                parallaxData={baseballdata}
              >
                <img style={{marginLeft: '200px'}} src={basketballLogo} />
              </Plx>
              <Plx
                parallaxData={baseballdata}
              >
                <img style={{marginLeft: '200px'}} src={footballLogo} />
              </Plx>
            </Card>

          </div>
          <div style={{padding: "155px 0px 155px 0px"}}></div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
