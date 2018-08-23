import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  handleLogout = async () => {
    try {
      await this.props.handleLogout();
      // this.setState({ success: true });
    } finally {
      // this.setState({ success: false });
    }
  };

  // Display the Home, Users, Widgets and Logout links if the user is authenticated.
  // navbarLinks = () => {
  //   let navbarLinks;
  //   if (this.props.loggedIn) {
  //     navbarLinks = (
  //       <ul>
  //         <li>
  //           <Link to="/"> Home </Link>
  //         </li>
  //         <li>
  //           <Link to="/users"> Account </Link>
  //         </li>
  //         <li>
  //           <Link to="/widgets"> Widgets </Link>
  //         </li>
  //         <li>
  //           <button onClick={this.handleLogout}>Logout</button>
  //         </li>
  //       </ul>
  //     );
  //   }
  //   return navbarLinks;
  // };

  // Redirect if the success (logout) is true.
  render() {
    return (
      <header>
        <nav>
          <div>
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/users"> Account </Link>
              </li>
              <li>
                <Link to="/widgets"> Widgets </Link>
                <button onClick={this.handleLogin}>Login</button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

Navbar.propTypes = {
  handleLogout: PropTypes.func,
  loggedIn: PropTypes.bool
};

Navbar.defaultProps = {
  handleLogout: null,
  loggedIn: null
};

export default Navbar;
