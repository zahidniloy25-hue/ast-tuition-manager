import React, { useState } from 'react';

const StudentManagement = () => {
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const addStudent = () => {
    if (studentName) {
      setStudents([...students, studentName]);
      setStudentName('');
    }
  };

  const editStudent = (index) => {
    setStudentName(students[index]);
    setEditingIndex(index);
  };

  const updateStudent = () => {
    const updatedStudents = [...students];
    updatedStudents[editingIndex] = studentName;
    setStudents(updatedStudents);
    setStudentName('');
    setEditingIndex(null);
  };

  const deleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div>
      <h1>Student Management</h1>
      <input
        type="text"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        placeholder="Enter student name"
      />
      <button onClick={editingIndex !== null ? updateStudent : addStudent}>
        {editingIndex !== null ? 'Update' : 'Add'} Student
      </button>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student}
            <button onClick={() => editStudent(index)}>Edit</button>
            <button onClick={() => deleteStudent(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentManagement;
