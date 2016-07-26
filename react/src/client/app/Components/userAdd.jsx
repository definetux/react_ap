import React from 'react';

export default class UserAdd extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: ""
        };

        this.onTextBoxChange = this.onTextBoxChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

	render() {
		return (
			<div>
				<span> Enter user name: </span>
				<input type="text" value={this.state.userName} onChange={this.onTextBoxChange}></input>
				<button onClick={this.onButtonClick}>Add</button>
			</div>
		);
	}

    onTextBoxChange(e) {
        this.setState({userName: e.target.value});
    }

    onButtonClick() {
        this.props.addHandler(this.state.userName);
    }
}