import React, { Component } from 'react';
import StudentList from './StudentList';
import DATA from './data';
import './StudentBox.css';

const TestHeader = props => (
	<div className="singleStudent">
		<div className="studentInfo">
			<div className="studentName">	
			</div>
			<div className="studentAverage">
			</div>
		</div>
		<div className="testNamesContainer">
			<div className="testNames">
				<li>Chaper 1 Test<br/> January 1</li>
				<li>Chaper 2 Test<br/> January 10</li>
				<li>Chaper 3 Test<br/> January 19</li>
				<li>Chaper 4 Test<br/> January 28</li>
				<li>Chaper 5 Test<br/> February 6</li>
				<li>Chaper 6 Test<br/> February 15</li>
				<li>Chaper 7 Test<br/> February 24</li>
				<li>Chaper 8 Test<br/> March 4</li>
				<li>Chaper 9 Test<br/> March 13</li>
				<li>Chaper 10 Test<br/> March 22</li>
			</div>
		</div>
	</div>
);

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
				if(!res.success) this.setState({ error: res.error });
				else this.setState({ data: res.data });
			});
	}

	render() {
		return (
			<div>
				<div className="topBar"><img src="./images/codeSpark_logo.png" /></div>
				<div className="container">
					<div className="contentContainer">
						<h2> STUDENTS: </h2>
						<TestHeader />
						<StudentList data={this.state.data} />
					</div>
				</div>
			</div>
		);
	}

}

export default StudentBox;