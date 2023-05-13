import React, { Component } from 'react';
import { Container ,Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Users';
import AddForm from './components/AddForm';

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      users :[
        {
          name: "Adama",
          email: "traore@gmail.com",
          gen: 32,
          id: "sadsd"
        },
        {
          name: "Felicia",
          email: "felicia459@gmail.com",
          gen: 24,
          id: "qwert"
        }
      ]
    }
  }
  addNewUser = (user) => {
    user.id = Math.random().toString()
    this.setState({
      users:[...this.state.users, user]
    })
  }
  deleteUser = (id) => {
    let undeletedUsers = this.state.users.filter(user => user.id !== id);
    this.setState({
      users: undeletedUsers
    })
  };
  editUser = (id, UpdatedUser) =>{
    this.setState ({
     users: this.state.users.map(user=> user.id===id ? UpdatedUser : user)
    })
  }
  render() {
    return (
      <>
       <Container fluid style={{marginTop:'2rem'}}>
        <Row>
          <Col md="4"> 
          <AddForm addUser={this.addNewUser}/>
          </Col>
          <Col md="8"> 
          <Users usersData= {this.state.users} deleteUser={this.deleteUser} editUser={this.editUser}/>
          </Col>
        </Row>
        </Container> 
      </>
    );
  }
}

export default App;
