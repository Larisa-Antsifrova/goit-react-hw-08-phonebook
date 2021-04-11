import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';

import { loginUser } from '../../redux/auth/auth-operations';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Email"
          inputProps={{
            type: 'email',
            name: 'email',
            value: email,
            onChange: this.handleChange,
          }}
        />

        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Password"
          inputProps={{
            type: 'password',
            name: 'password',
            value: password,
            onChange: this.handleChange,
          }}
        />

        <button type="submit">Login</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: loginUser,
};

export default connect(null, mapDispatchToProps)(LoginForm);
