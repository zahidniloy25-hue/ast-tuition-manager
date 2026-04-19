import React, { useState } from 'react';

const StudentArchive = () => {
    const [archivedStudents, setArchivedStudents] = useState([
        { id: 1, name: 'Ali Ahmed', archiveDate: '2026-03-15', reason: 'Completed Course' }
    ]);

    const restoreStudent = (id) => {
        alert(`Student with ID ${id} has been restored`);
        setArchivedStudents(archivedStudents.filter(s => s.id !== id));
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Student Archive</h1>
            <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-500 text-white">
                    <tr>
                        <th className="border p-3">Student Name</th>
                        <th className="border p-3">Archive Date</th>
                        <th className="border p-3">Reason</th>
                        <th className="border p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {archivedStudents.map(student => (
                        <tr key={student.id}>
                            <td className="border p-3">{student.name}</td>
                            <td className="border p-3">{student.archiveDate}</td>
                            <td className="border p-3">{student.reason}</td>
                            <td className="border p-3">
                                <button onClick={() => restoreStudent(student.id)} className="bg-green-500 text-white px-3 py-1 rounded">Restore</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentArchive;