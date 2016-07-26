import React from 'react';
import User from './user.jsx';

export default class UsersList extends React.Component {
	render() {
		var usersNodes = this.props.users.map(user => {
			return (
				<User userName={user.name} key={user.id} id={user.id} removeUser={this.props.removeUser} editUser={this.props.editUser} />
			);
		});

		return (
			<div className="usersList">
				{usersNodes}
			</div>
		);
	}
}
