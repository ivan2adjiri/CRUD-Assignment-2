import React, { Component } from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';
import EditUser from './EditUser';

class User extends Component {
  state = {
    show: false
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleDelete = (e) => {
    e.preventDefault();
    this.props.deleteUser(this.props.userInfo.id);
  };

  handleEdit = () => {
    // Implement the handleEdit function here
  };

  render() {
    const { userInfo } = this.props;
    const { show } = this.state;

    return (
      <>
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditUser userInfo={this.props.userInfo} editUser={this.props.editUser} closeModal={this.handleClose}/>
          </Modal.Body>
          
        </Modal>

        <Col md="4" style={{ marginBottom: '1rem' }}>
          <Card>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                Codetrain User
              </Card.Subtitle>
              <Card.Title>{userInfo.name}</Card.Title>
              <Card.Text>
                <p>Email: {userInfo.email}</p>
                <p>Gen:{userInfo.gen}</p>
              </Card.Text>
              <Card.Link onClick={() => this.setState({ show: true })}>
               <Button size='sm'>
                Edit
                </Button>
              </Card.Link>
              <Card.Link href="#">
                <Button
                  variant="danger"
                  size="sm"
                  onClick={this.handleDelete}
                >
                  Delete
                </Button>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default User;
