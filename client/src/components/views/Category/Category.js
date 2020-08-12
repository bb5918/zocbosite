/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Alert } from 'antd';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import CategoryDetail from './CategoryDetail';


function Category(props) {
    const user = useSelector(state => state.user)

    if (user.userData && !user.userData.isAuth) {
        return (
            <Alert
                message="Informational Notes"
                description="로그인 후 이용하실 수 있습니다"
                type="info"
                showIcon
            />
        )
    } else {
        return (
            <CategoryDetail />
        )
    }
}

export default withRouter(Category);

