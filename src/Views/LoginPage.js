import React, { Component } from 'react';
import { connect } from 'react-redux';

import Section from '../components/Section';
import Main from '../components/Main';

import { loginUser } from '../redux/auth/auth-operations';

class LoginPage extends Component {
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
      <Section>
        <Main>
          <h1>Login Page</h1>

          <form onSubmit={this.handleSubmit} autoComplete="off">
            <label>
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>

            <label>
              Password
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </label>

            <button type="submit">Login</button>
          </form>
        </Main>
      </Section>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: loginUser,
};

export default connect(null, mapDispatchToProps)(LoginPage);
