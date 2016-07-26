import React from 'react';
import UserAdd from './userAdd.jsx';
import UsersList  from './userList.jsx';

export default class UsersBox extends React.Component {
	constructor() {
		super();
		this.state = {
			users: []
		};

        this.addUser = this.addUser.bind(this);
        this.removeUser = this.removeUser.bind(this);
        this.editUser = this.editUser.bind(this);
	}
	render() {
		return (
			<div>
				<h1> Users: </h1>
				<UserAdd addHandler={this.addUser} />
				<UsersList users={this.state.users} removeUser={this.removeUser} editUser={this.editUser} />
			</div>
		);
	}

	addUser(user) {
        var users = this.state.users;
        var newId = -1;
        if (users.length === 0) {
            newId = 0;
        } else {
            var lastUser = users[users.length - 1];
            newId = lastUser.id + 1;
        }  
		users.push({
            id: newId,
            name: user
        });

        this.setState({
            users: users
        });
	}	

    removeUser(id) {
        this.setState({
            users: this.state.users.filter(u => u.id !== id)
        });
    }

    editUser(user) {
        var currentUser = this.state.users.find(u => u.id === user.id)
        currentUser.name = user.name;

        this.setState({
            users: this.state.users
        });
    }
}