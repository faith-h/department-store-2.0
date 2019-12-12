import axios from 'axios';
import React from 'react';
import { Form, Header, } from 'semantic-ui-react';

// left off here, all that's left to do is get edit working for items

class ItemForm extends React.Component {
  defaultValues = { name: "", desc: "", price: "", };
  state = { ...this.defaultValues, };

  handleChange = (e) => {
    const {target: {name, value, } } = e; //destructuring
    this.setState({ [name]: value, });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, } = this.props.match.params;
    const item = { ...this.state, };
    axios.post(`/api/departments/${id}/items`, item)
    .then( res => {
      this.props.history.push(`/${id}}/items`);
    });
    this.setState({ ...this.defaultValues, });
  };

  render () {
    const { name, price, desc } = this.state; // destructuring

    return (
      <div>
        <Header as="h1"> New Item </Header>
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
            <Form.Input
            label="Description"
            placeholder="Description"
            name="desc"
            value={desc}
            required
            onChange={this.handleChange}
            />
            <Form.Input
            label="Price"
            placeholder="Price"
            name="price"
            value={price}
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


export default ItemForm;