import axios from 'axios';
import React from "react";
import { Link, } from 'react-router-dom';
import { Button, Card, Header,  } from 'semantic-ui-react';

class Departments extends React.Component {
  state = {departments: []} ;

  // make get request
  // update state
  componentDidMount() {
    axios.get("/api/departments")
    .then( res => {
      this.setState({ departments: res.data, });
    });
  };

  updateDepartment = (name, id) => {
    axios.put(`api/departments/${id}`, {id, name} )
    .then( res => {
      const departments = this.state.departments.map(department => {
        if (department.id === id)
        return res.data;
        return department;
      });
      this.setState({ departments, })
    });
  };

  deleteDepartment = (id) => {
    axios.delete(`/api/departments/${id}`)
      .then( res => {
        this.setState({ departments: this.state.departments.filter(department =>
        department.id !== id), })
      });
  };

  renderDepartments = () => {
    const { departments, } = this.state;

    if (departments.length <= 0)
    return <h2> No Departments </h2>
  return departments.map( department => (
    <Card>
      <Card.Content>
        <Card.Header> {department.name} </Card.Header>
      </Card.Content>
      <Card.Content extra>
        <div className="ui three buttons">
        <Button as={Link} to={`/departments/${department.id}`} basic color="blue">
          View
          </Button>
        <Button as={Link} to={`/departments/${department.id}/edit`} basic color="blue">
          Edit
          </Button>
        <Button basic color="red" onClick={() => this.deleteDepartment(department.id)}>
          Delete
          </Button>
          </div>
      </Card.Content>
    </Card>
  ));
};

  render () {
    return (
      <div>
        <Header as="h1"> Departments </Header>
        <Button as={Link} basic color="green" to="/departments/new">
          New Department
          </Button>
          <br />
          <br />
        <Card.Group>
          { this.renderDepartments() }
        </Card.Group>
        </div>
    );
  };
};

export default Departments;