import React from 'react';

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showEdit: false,
            userName: props.userName,
            id: props.id
        };
        this.onRemoveClick = this.onRemoveClick.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onTextBoxChange = this.onTextBoxChange.bind(this);
    }

	render() {
        var margin = {
            margin: "0 10px"
        };

		return (
			<div className="user">
                {!this.state.showEdit 
                    ? <button onClick={this.onEditClick} style={margin}><i className="fa fa-edit" /></button>
                    : <button onClick={this.onSaveClick} style={margin}><i className="fa fa-save" /></button>
                }
                {!this.state.showEdit
                    ? <span>{this.state.id}. {this.state.userName}</span>
                    : <input type="text" value={this.state.userName} onChange={this.onTextBoxChange} />
                }
                <button onClick={this.onRemoveClick} style={margin}><i className="fa fa-close" /></button>
			</div>
		);
	}

    onRemoveClick() {
        this.props.removeUser(this.state.id);
    }

    onEditClick() {
        this.setState({
            showEdit: true
        });
    }

    onTextBoxChange(e) {
        this.setState({
            userName: e.target.value,
        });
    }

    onSaveClick() {
        this.props.editUser({
            id: this.state.id,
            name: this.state.userName
        });

        this.setState({
            showEdit: false
        });
    }
}