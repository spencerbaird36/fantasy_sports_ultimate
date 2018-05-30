import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Field, reduxForm } from 'redux-form';
import InputTextField from './InputTextField';
import { Redirect } from 'react-router-dom';

const validate = values => {
  const errors = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'age',
    'password'
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required!'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidate = (values) => {
  return sleep(2000).then(() => {
    return <Redirect to='/league_hub' />
  })
}

const Register = props => {
  const { handleSubmit, invalid } = props;
  const actions = [
    <FlatButton
      label="Cancel"
      onClick={props.handleClose}
    />,
    <FlatButton
      label="Submit"
      primary={true}
      disabled={invalid}
    />
  ];

  return (
    <MuiThemeProvider>
      <div>
        <Dialog
          title="Enter registrations details"
          actions={actions}
          modal={false}
          open={props.open}
          onRequestClose={props.handleClose}
        >
        <form onSubmit={handleSubmit}>
          <div>
            <Field name="firstName" component={InputTextField} label="First Name" />
          </div>
          <div>
            <Field name="lastName" component={InputTextField} label="Last Name" />
          </div>
          <div>
            <Field name="email" component={InputTextField} label="Email" />
          </div>
          <div>
            <Field name="age" component={InputTextField} label="Age" />
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
  form: 'RegisterForm',
  enableReinitialize: true,
  validate,
  asyncValidate
})(Register);
