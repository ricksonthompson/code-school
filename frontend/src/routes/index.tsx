import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SingIn';
import SignUp from '../pages/SignUp';

import Modules from '../pages/Modules';
import VideoPlayer from '../pages/Modules/VideoPlayer';


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/modules/:courseName" component={VideoPlayer} isPrivate />
      <Route path="/modules" component={Modules} isPrivate />
    </Switch>
  );
};

export default Routes;
