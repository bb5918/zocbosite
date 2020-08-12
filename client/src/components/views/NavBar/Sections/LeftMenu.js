import React from 'react';
import { Menu } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import { useSelector } from "react-redux";


function LeftMenu(props) {
  const user = useSelector(state => state.user)

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <Link to="/">홈</Link>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="create">
          <Link to="/">홈</Link>
        </Menu.Item>
        <Menu.Item key="exam">
          <Link to="/exam">족보</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(LeftMenu);