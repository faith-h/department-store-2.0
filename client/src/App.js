import About from './components/About';
import Departments from './components/Departments';
import DepartmentsForm from './components/DepartmentsForm';
import DepartmentView from './components/DepartmentView';
import Home from './components/Home';
import ItemForm from './components/ItemForm';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import React from 'react';
import { Container, } from 'semantic-ui-react';
import {Route, Switch} from 'react-router-dom';

const App = () => (
  <>
  <Navbar />
  <Container>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/departments" component={Departments} />
      <Route exact path="/departments/new" component={DepartmentsForm} />
      <Route exact path="/departments/:id" component={DepartmentView} />
      <Route exact path="/departments/:id/edit" component={DepartmentsForm} />
      <Route exact path="/departments/:id/items" component={DepartmentView} />
      <Route exact path="/api/departments/:id/items/new" component={ItemForm} />
      <Route exact path="/departments/:id/items/:id/edit" component={ItemForm} />
      <Route component={NoMatch}/>
    </Switch>
  </Container>
  </>
);

export default App;
