import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Field, reduxForm } from 'redux-form';
import InputTextField from './InputTextField';

const validate = values => {
  const errors = {};
  const requiredFields = [
    'userName',
    'password'
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  return errors
}

const Login = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const actions = [
    <FlatButton
      label="Cancel"
      onClick={props.handleClose}
    />,
    <FlatButton
      label="Submit"
      primary={true}
      disabled={pristine || submitting}
    />
  ];

  return (
    <MuiThemeProvider>
      <div>
        <Dialog
          title="Login"
          actions={actions}
          modal={false}
          open={props.open}
          onRequestClose={props.handleClose}
        >
        <form onSubmit={handleSubmit}>
          <div>
            <Field name="userName" type="input" component={InputTextField} label="Username" />
          </div>
          <div>
            <Field name="password" type="password" component={InputTextField} label="Password" />
          </div>
        </form>
        </Dialog>
      </div>
    </MuiThemeProvider>
  )
}

export default reduxForm({
  form: 'LoginForm',
  validate
})(Login);
