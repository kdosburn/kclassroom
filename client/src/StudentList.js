import React from 'react';
import PropTypes from 'prop-types';
import Student from './Student';

const StudentList = (props) => {
	const studentNodes = props.data.map(student => (
		<Student student={student} firstName={student.firstName} lastName={student.lastName} key={student.studentId} id={student.StudentId}  >
			testing {student.firstName} {student.lastName} 
		</Student>
	));
	return (
		<div> 
			{ studentNodes }
		</div>
	);
};

StudentList.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		studentId: PropTypes.string,
		firstName: PropTypes.string,
		lastName: PropTypes.string,
	})),
};

StudentList.defaultProps = {
	data: [],
};

export default StudentList;