import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class EditUser extends Component {
    constructor (props){
        super(props)
        this.state={
            name:this.props.userInfo.name,
            email:this.props.userInfo.email,
            gen:this.props.userInfo.gen,
            id:this.props.userInfo.id
        }
    }
    handleChange = (e)=>{
        e.preventDefault();
        this.setState  ({[e.target.name]: e.target.value,});
        console.log(this.state);
    }
    handleSubmit = (e)=> {
       e.preventDefault() 
        console.log(this.state)
        this.setState({
            name:"",
            email: "",
            gen:""
        })
        this.props.editUser(this.state.id, this.state)
        this.props.closeModal()

    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" name='name' onChange={this.handleChange} value={this.state.name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"name='email' onChange={this.handleChange} value={this.state.email} />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Gen</Form.Label>
                        <Form.Control type="number" placeholder="Gen" name='gen' onChange={this.handleChange} value={this.state.gen}/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default EditUser;
