import React, { Component } from 'react';
import {Form, FormGroup, Input, Label, Button, Container,Row, Col} from 'reactstrap';


// src/components/organisms/Form/index.js
export default class Form2 extends Component {
    state={
        email:'',
        password:'',
        class:''
    }
    cliked=() =>{
        window.alert('I/m cliked')
    }
    handleChange=(event)=> {
        console.log(event);
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log('state',this.state)
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={{size:4, offset:4}}></Col>
            <Form on Submit={this.onSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" name="email" id="email" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" name="password" id="password" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="select">Select</Label>
                    <Input type="select" name="select" id="select" onChange={this.handleChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </Input>
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
            </Row>
            </Container>
        )
    }
}
