import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import User from './User';

class Users extends Component {
    render(props) {
        return (
            <Container>
                <Row>
                    {
                        this.props.usersData.map((user)=>{
                            return (
                                <User userInfo={user} 
                                key={user.id} 
                                deleteUser={this.props.deleteUser}
                                editUser={this.props.editUser}/>
                            )
                        })
                    }
                </Row>
            </Container>
        );
    }
}

export default Users;
