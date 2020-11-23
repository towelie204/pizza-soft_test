import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ProfileContainer from './components/Profile/Profile';
import MainPage from './components/StartPage/StartPage';
import { fetchEmployeesTable } from './__data__/actionCreators';

function App(props) {
  useEffect(() => {
    props.fetchEmployeesTable();
  });

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <MainPage />} />
        <Route path='/profile/:personId' render={() => <ProfileContainer />} />
      </Switch>
    </div>
  );
}

export default connect(null, { fetchEmployeesTable })(App);
