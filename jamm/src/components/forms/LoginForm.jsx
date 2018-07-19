import React, {Component} from "react";
import {Form,Button} from 'react-bootstrap';


class LoginForm extends Component {
    state = {
        data:{
            username:'',
            password:''
        },
        loading:false,
        errors:{}
    };

    onChange = e => this.setState({ // "e" for event. inside state we need to change "data" .spread data! (saves data first)
        data:{...this.state.data, [e.target.name]: e.target.value}
    });

    render() {
        const { data } = this.state; // pulling data from this state
        return (
            <Form>
                <Form.Field>
                    <label htmlFor="username">Username</label>
                    <input
                        type="username"
                        id="username"
                        name="username"
                        placeholder="example@example.com"
                        value={data.email} 
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label htmlFor="password">Password</label>
                    <input
                        type="username"
                        id="username"
                        name="username"
                        placeholder="What's your Pet's Name ?"
                        value={data.email} 
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        );
    }
}

export default LoginForm;

