import React, { Component } from "react";
import TeamUserAvatar from "./team/TeamUserAvatar";
import { Link } from "react-router-dom";
import { Menu} from "semantic-ui-react";

const styleNav = {
   backgroundColor: '#4484CE',
   color: 'white'
}

class NavBar extends Component {
  render() {
    const { loggedIn, user, logOut, teamName } = this.props;
    return (
      <div className="nav-bar">
        {loggedIn ? (
          <Menu fixed style={styleNav} inverted widths={3} size='massive'>
            <Menu.Item >
              <Link to="/login" onClick={logOut}>
                Log Out
              </Link>
            </Menu.Item>
            <Menu.Item fitted as='image'>
              <img circular src={user.img_url} />
              {user.username}
            </Menu.Item>
            <Menu.Item >
              {teamName} 
              {/* Team Name: <strong style={{color: 'black'}} > {teamName}</strong> */}
            </Menu.Item>
          </Menu>
        ) : null}
      </div>
    );
  }
}

export default NavBar;
