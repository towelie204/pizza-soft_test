import { Route } from 'react-router-dom';
import './App.css';
import EmployeesList from './components/EmployeesList/EmployeesList';
import FilterForm from './components/FilterForm/FilterForm';
import ProfileContainer from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <header>
      </header>

      <main className="mainContainer">
        <FilterForm />
        <Route path='/employee' render={() => <EmployeesList />} />
        <Route path='/profile/:personId' render={() => <ProfileContainer />} />
      </main>
    </div>
  );
}

export default App;
