import React from 'react';

const StudentProfile = ({ student }) => {
    return (
        <div className="student-profile">
            <h2>Student Profile</h2>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Phone:</strong> {student.phone}</p>
            <p><strong>Address:</strong> {student.address}</p>
            <p><strong>Course:</strong> {student.course}</p>
            <p><strong>Enrollment Date:</strong> {student.enrollmentDate}</p>
            <p><strong>Profile Picture:</strong></p>
            {student.profilePicture && <img src={student.profilePicture} alt={`${student.name}'s profile`} />}
        </div>
    );
};

export default StudentProfile;