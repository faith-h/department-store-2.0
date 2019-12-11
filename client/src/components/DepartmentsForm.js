import axios from 'axios';
import React from 'react';
import { Form, Header, } from 'semantic-ui-react';

class DepartmentsForm extends React.Component {
  defaultValues = { name: "", };
  state = { ...this.defaultValues, };

  handleChange = (e) => {
    const {target: {name, value, } } = e; //destructuring
    this.setState({ [name]: value, });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.props.match.params.id){
      axios.put(`/api/departments/${this.props.match.params.id}`, this.state)
      .then( res => {
        this.props.history.push(`/departments/${this.props.match.params.id}`)
      });
    } else {
    const department = { ...this.state, };
    axios.post("/api/departments", department)
    .then( res => {
      this.props.history.push("/departments");
    });
    this.setState({ ...this.defaultValues, });
  };
};

  render () {
    const { name } = this.state; // destructuring

    return (
      <div>
        <Header as="h1"> New Department </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
            label="Name"
            placeholder="Name"
            name="name"
            value={name}
            required
            onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button color="basic blue"> Submit </Form.Button>
        </Form>
      </div>
    );
  };
};

export default DepartmentsForm;