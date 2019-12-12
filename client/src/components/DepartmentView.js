import axios from 'axios';
import React from 'react';
// import Items from './Items';
import { Link, } from 'react-router-dom';
import { Header, Button, Segment, Card, } from 'semantic-ui-react';

class DepartmentView extends React.Component {
  state= { department: {}, items: [], };

  componentDidMount() {
    const { id, } = this.props.match.params;

    // department object
    axios.get(`/api/departments/${id}`)
    .then( res => {
      this.setState({ department: res.data, });
    });

    //items array
    axios.get(`/api/departments/${id}/items`)
    .then( res => {
      this.setState({ items: res.data, });
    });
  };

  updateItem = (id) => {
    debugger;
    axios.put(`/api/departments/${this.state.department.id}/items/${this.state.item.id}`, )
    .then( res => {
      const items = this.state.items.map(item => {
        if (item.id === id)
        return res.data;
        return item;
      });
      this.setState({ items, })
    });
  };

  deleteItem = (id) => {
    axios.delete(`/api/departments/${this.state.department.id}/items/${id}`)
    .then( res => {
        this.setState({ items: this.state.items.filter(item =>
        item.id !== id), })
      });
  };

  renderItems = () => {
    return this.state.items.map( item => (
      <Card key={item.id}>
      <Card.Content>
        <Card.Header> { item.name } </Card.Header>
        <Card.Meta> ${ item.price } </Card.Meta>
        <Card.Description> { item.desc } </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
        <Button basic color="blue" as={Link} to={`/departments/${this.state.department.id}/items/${item.id}/edit`} >
          Edit
        </Button>
        <Button basic color="red" onClick={ () => this.deleteItem(item.id) } >
          Delete
        </Button>
        </div>
      </Card.Content>
    </Card>
    ));
  };

  render() {
    const { name, } = this.state.department;

    return (
      <div>
        <Segment>
          <Header as="h1">{name}</Header>
          <Button as={Link} basic color="green" to={`/api/departments/${this.state.department.id}/items/new`}>
          New Item
          </Button>
          <br />
          <br />
          <Card.Group>
            { this.renderItems() }
            {/* <Items items={this.state.items}  delete={this.deleteItem()} /> */}
          </Card.Group>
        </Segment>
        <Button
        color="black"
        onClick={this.props.history.goBack}
        >
          Back
        </Button>
      </div>
    );
  };
};

export default DepartmentView;