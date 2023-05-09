import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LoginComponent extends Component {
    handleClick = (role) => {
        this.props.history.push('/songs', { role });
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleClick('admin')}>Admin</button>
                <button onClick={() => this.handleClick('user')}>User</button>
            </div>
        )
    }
}

export default withRouter(LoginComponent);