import React, { useState } from 'react';

const AttendanceSystem = () => {
    const [attendance, setAttendance] = useState({});
    const [alert, setAlert] = useState('');
    const [threshold, setThreshold] = useState(3); // Number of absences for alert

    const markAttendance = (studentId, status) => {
        setAttendance(prev => {
            const updatedAttendance = { ...prev, [studentId]: status }; 
            const absences = Object.values(updatedAttendance).filter(s => s === 'absent').length;
            if (absences >= threshold) {
                setAlert(`Alert: ${absences} consecutive absences!`);
            } else {
                setAlert('');
            }
            return updatedAttendance;
        });
    };

    return (
        <div>
            <h1>Attendance System</h1>
            {alert && <div style={{ color: 'red' }}>{alert}</div>}
            <div>
                <h2>Mark Attendance</h2>
                {Object.keys(attendance).map(studentId => (
                    <div key={studentId}>
                        <span>Student {studentId}: </span>
                        <button onClick={() => markAttendance(studentId, 'present')}>Present</button>
                        <button onClick={() => markAttendance(studentId, 'absent')}>Absent</button>
                    </div>
                ))}
                {/* Add more functionality such as listing students, etc. */}
            </div>
        </div>
    );
};

export default AttendanceSystem;