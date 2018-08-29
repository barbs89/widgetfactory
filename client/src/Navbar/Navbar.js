import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Client Portal
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  Account
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/widgets">
                  Widgets
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

// import React from 'react';
// import PropTypes from 'prop-types';

// class Navbar extends React.Component {
//   // Handle the logout by calling the logout API.
//   // If successful, set the success state to true to cause a rerender into a redirect.
//   // Then set success to false to prevent a second redirect.
//   handleLogout = async () => {
//     try {
//       await this.props.handleLogout();
//       this.setState({ success: true });
//     } finally {
//       this.setState({ success: false });
//     }
//   };

//   // Display the Home, Listing, Settings, and Logout links if the user is authenticated

//   // Redirect if the success (logout) is true.
//   render() {
//     // return this.state.success ? (
//     //   <Redirect to="/" />
//     // ) : (
//     //   <header>
//     //     <nav>
//     //       <h2> Realista </h2>
//     //       {this.navbarLinks()}
//     //     </nav>
//     //     {this.props.loggedIn && <p>Logged In</p>}
//     //   </header>
//     // );
//     return (
//       <header>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/"> Home </Link>
//             </li>
//             <li>
//               <Link to="/users"> Account </Link>
//             </li>
//             <li>
//               <Link to="/widgets"> Widgets </Link>
//             </li>
//             <li>
//               <button onClick={this.handleLogout}>Logout</button>
//             </li>
//           </ul>
//         </nav>
//       </header>
//     );
//   }
// }

// Navbar.propTypes = {
//   handleLogout: PropTypes.func,
//   loggedIn: PropTypes.bool
// };

// Navbar.defaultProps = {
//   handleLogout: null,
//   loggedIn: null
// };

// export default Navbar;
// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const Navbar = (props) => {
// //   const logoutLink = (
// //     <Link
// //       onClick={props.handleLogout}
// //       className="navlink"
// //       to="/"
// //       style={{ textDecoration: 'none', color: '#908F8F' }}
// //     >
// //       Logout
// //     </Link>
// //   );

// //   const loginLink = (
// //     <Link
// //       className="navlink"
// //       to="/"
// //       style={{ textDecoration: 'none', color: '#908F8F' }}
// //     >
// //       Login
// //     </Link>
// //   );
// //   const settingsLink = (
// //     <Link
// //       className="navlink"
// //       to="/settings"
// //       style={{ textDecoration: 'none', color: '#908F8F' }}
// //     >
// //       Settings
// //     </Link>
// //   );
// //   const listingLink = (
// //     <Link
// //       className="navlink"
// //       to="/listing"
// //       style={{ textDecoration: 'none', color: '#908F8F' }}
// //     >
// //       Listing
// //     </Link>
// //   );

// //   const loggedInLinks = (
// //     <div>
// //       {logoutLink}
// //       {settingsLink}
// //       {listingLink}
// //     </div>
// //   );

// //   return (
// //     <div className="navbar">{props.loggedIn ? loggedInLinks : loginLink}</div>
// //   );
// // };

export default Navbar;
