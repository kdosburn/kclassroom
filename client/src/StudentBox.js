import React, { Component } from 'react';
import StudentList from './StudentList';
import DATA from './data';
import './StudentBox.css';

const ExamList = (props) => {
	console.log('PROPS', props)
	const examNodes = props.exams.map(exam => (
		<div>
			<div className="examNamesContainer">
				<div className="examNames">
					<li>{exam.exam_name} <br /> {exam.exam_date} </li>
				</div>
			</div>
		</div>
	));
	return (
		<div className="examRow" > 
			{ examNodes }
		</div>
	);
};

class StudentBox extends Component {
	constructor() {
		super();
		this.state = { 
			data: [],
			exams: [],
			error: null,
			firstName: '',
			lastName: ''
		};
	}

	componentDidMount() {
		this.loadStudentsFromServer();
		this.loadExamsFromServer();
	}

	loadStudentsFromServer = () => {
		fetch('/api/averages')
			.then(data => data.json())
			.then((res) => {
				if(!res.success) this.setState({ error: res.error });
				else this.setState({ data: res.data });
			});
	}

	loadExamsFromServer = () => {
		fetch('/api/exams')
			.then(data => data.json())
			.then((res) => {
				if(!res.success) this.setState({ error: res.error });
				else this.setState({ exams: res.data });
			});
	}

	render() {
		return (
			<div>
				<div className="topBar"><img src="./images/codeSpark_logo.png" /></div>
				<div className="container">
					<div className="contentContainer">
						<h2> STUDENTS: </h2>
						<ExamList exams={this.state.exams} />
						<StudentList data={this.state.data} />
					</div>
				</div>
			</div>
		);
	}

}

export default StudentBox;