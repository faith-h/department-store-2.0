import axios from 'axios';
import React from 'react';
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
      this.setState({ items: res.data });
    });
  };

  deleteItem = (id) => {
    axios.delete(`/api/departments/${id}/items/${this.state.items.id}`)
      .then( res => {
        this.setState({ items: this.state.items.filter(item =>
        item.id !== id), })
      });
  };

  renderItems = () => {
    const { items, } = this.state;


    // left off here filling in functionality for items
    // have yet to complete edit for departmentts (makes new department instead)

    return items.map( item => (
      <Card>
      <Card.Content>
        <Card.Header> { item.name } </Card.Header>
        <Card.Meta> ${ item.price } </Card.Meta>
        <Card.Description> { item.desc } </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui three buttons">
        <Button basic color="blue">
          Edit
        </Button>
        <Button basic color="red" onClick={ () => this.deleteItem() }>
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
          <Button as={Link} basic color="green" to={`/api/departments/${this.state.department.id}/items`}>
          New Item
          </Button>
          <br />
          <br />
          <Card.Group>
            {this.renderItems()}
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