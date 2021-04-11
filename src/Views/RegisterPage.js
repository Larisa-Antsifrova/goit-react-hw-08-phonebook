import React, { Component } from 'react';
import { connect } from 'react-redux';
import Section from '../components/Section';
import Main from '../components/Main';
import { registerUser } from '../redux/auth/auth-operations';

class RegisterPage extends Component {
  state = {
    name: '',
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
    const { name, email, password } = this.state;

    return (
      <Main>
        <Section>
          <h1>Registration Page</h1>

          <form onSubmit={this.handleSubmit} autoComplete="off">
            <label>
              Name
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>

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

            <button type="submit">Register</button>
          </form>
        </Section>
      </Main>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: registerUser,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
