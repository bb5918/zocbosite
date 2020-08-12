import { Layout, Drawer } from 'antd'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import React, { Suspense } from 'react';
import Auth from "../hoc/auth";

// pages for this product

import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import UploadExamPage from "./views/UploadExamPage/UploadExamPage"
import DetailExamPage from "./views/DetailExamPage/DetailExamPage"
import Category from './views/Category/Category'
import UploadProblemPage from './views/DetailExamPage/NewSections/UploadProblemPage'
import CommentPage from './views/DetailExamPage/NewSections/CommentPage'

const { Content, Sider } = Layout;


function App() {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Suspense fallback={(<div>Loading...</div>)}>
        <NavBar />

        <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route exact path="/register" component={Auth(RegisterPage, false)} />
            <Route exact path="/exam/upload" component={Auth(UploadExamPage, true)} />
            <Route exact path="/exam/:examId" component={Auth(DetailExamPage, true)} />
            <Route exact path="/exam/:examId/upload" component={Auth(UploadProblemPage, true)} />
            <Route exact path="/exam/:examId/:problemId" component={Auth(CommentPage, true)} />
          </Switch>
        </div>


        <Footer />
      </Suspense>
    </div>


  );
}

export default App;
