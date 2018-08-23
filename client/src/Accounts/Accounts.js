import React from 'react';

class Account extends React.Component {
  // async componentDidMount() {
  //   console.log('getting authURLs');
  //   try {
  //     if (this.props.authToken) {
  //       await this.props.handleLogin(this.props.authToken);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }

  render() {
    return (
      <div className="Account">
        <h3>You are in the Account Page</h3>
      </div>
    );
  }
}
export default Account;
