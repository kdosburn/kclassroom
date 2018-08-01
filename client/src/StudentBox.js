import React, { Component } from 'react';
import StudentList from './StudentList';
import DATA from './data';
import './StudentBox.css';

class StudentBox extends Component {
	constructor() {
		super();
		this.state = { 
			data: [],
			error: null,
			firstName: '',
			lastName: ''
		};
	}

	componentDidMount() {
		this.loadStudentsFromServer();
	}

	loadStudentsFromServer = () => {
		fetch('/api/averages')
			.then(data => data.json())
			.then((res) => {
				console.log(res.data);
				if(!res.success) this.setState({ error: res.error });
				else this.setState({ data: res.data });
			});
	}

	render() {
		return (
			<div className="container">
				<div className="students">
					<h2> STUDENTS: </h2>
					<StudentList data={this.state.data} />
				</div>
			</div>
		);
	}

}

export default StudentBox;