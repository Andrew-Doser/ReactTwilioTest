import React from "react";
import PropTypes from "prop-types";
import API from './utils/API';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { TextField } from '@material-ui/core';
import { Card } from "shards-react";
import { Button } from '@material-ui/core';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.clicked = this.SendVerificationCode.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { 
      code: '',
    };

  }
  handleChange = (e) => {
    this.setState({value: e.target.value});
  }



  render() {
    const { name, avatar, email, phoneNumber, isLoading } = this.props;

    const userDetails = (
      <div>
        <img
          className="img-thumbnail rounded-circle mx-auto mb-2 shadow-sm"
          src={avatar}
          alt={name}
          style={{ width: "100px", height: "100px" }}
        />
        <h4 className="mb-0">{name}</h4>
        <span className="text-muted">{email}</span>
        <br/>
        <span className="text-muted">{phoneNumber}</span>
        <br/>
        <Button onClick={() => this.SendVerificationCode(String(phoneNumber))}>Send Text</Button>
        <br/>
        <TextField
            id="Verification"
            type="number"
            label="6 digit"
            helperText="Verification Code"
            variant="outlined"
            value={this.state.value}
            onChange={e => this.handleChange(e)}
         />
         <Button onClick={(e) => this.onSubmit(e)}>Verify Code</Button>
        <br/>
      </div>
    );

    const loadingMessage = <span className="d-flex m-auto">Loading...</span>;

    return (
      <Card
        className="mx-auto mt-4 text-center p-5"
        style={{ maxWidth: "300px", minHeight: "250px" }}
      >
        {isLoading ? loadingMessage : userDetails}
      </Card>
    );
  }
  onSubmit = (e) => {
    
    this.VerifyCode('5035019827', this.state.value);
    // alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
  }

  async SendVerificationCode(phoneNumber){
    var qs = require('qs');
    console.log('test');
    try {
      const response = await API.post(
        '/api/sendsms/',
        qs.stringify({
          'sms': phoneNumber,
        })
      );
      console.log('Returned Data:', response);
    } catch (e) {
      console.log(`Axios failed: ${e}`);
    }
  }
  async VerifyCode(phoneNumber, code){
    var qs = require('qs');
    console.log('test');
    try {
      const response = await API.post(
        '/api/verifysms/',
        qs.stringify({
          'sms': phoneNumber,
          'code': code,
        })
      );
      console.log('Returned Data:', response);
    } catch (e) {
      console.log(`Axios failed: ${e}`);
    }
  }
}

User.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  isLoading: PropTypes.bool
};

export default User;
