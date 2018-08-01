import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const Tests = props => (
	<div className="singleStudentTests">
		<li>{props.tests.chapter_1_test}</li>
		<li>{props.tests.chapter_2_test}</li>
		<li>{props.tests.chapter_3_test}</li>
		<li>{props.tests.chapter_4_test}</li>
		<li>{props.tests.chapter_5_test}</li>
		<li>{props.tests.chapter_6_test}</li>
		<li>{props.tests.chapter_7_test}</li>
		<li>{props.tests.chapter_8_test}</li>
		<li>{props.tests.chapter_9_test}</li>
		<li>{props.tests.chapter_10_test}</li>
	</div>
);

const Student = props => (
	<div className="singleStudent">
		<div className="studentInfo">
			<div className="studentName">
				<div className="studentFirstName">
					{props.firstName} 
				</div>
				<div className="studentLastName">
					{props.lastName}
				</div>
			</div>
			<div className="studentAverage">{props.student.studentAverage}</div>
		</div>
		<div className="testScores"><Tests tests={props.student} /></div>
		<ReactMarkdown source={props.children} />
	</div>
);

Student.propTypes = {
	studentId: PropTypes.string.isRequired,
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
};

export default Student;