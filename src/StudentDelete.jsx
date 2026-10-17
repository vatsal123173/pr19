import React, { useState } from 'react'

const StudentDelete = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Man', course: 'BCA' },
    { id: 2, name: 'Luna', course: 'BBA' },
    { id: 3, name: 'Omkar', course: 'BSc' }
  ])

  const handleDelete = (id) => {
    setStudents(
      students.filter((student) => student.id !== id)
    )
  }

  return (
    <div className="mx-auto mt-10 max-w-lg rounded-lg bg-white p-6 shadow-lg">
      <h1 className="mb-5 text-center text-2xl font-bold text-blue-600">
        Student Management
      </h1>

      <h2 className="mb-3 text-xl font-bold">
        Student List
      </h2>

      {students.length === 0 && (
        <p className="text-gray-500">No students found.</p>
      )}

      {students.map((student) => (
        <div
          key={student.id}
          className="mb-3 flex items-center justify-between rounded border p-3"
        >
          <div>
            <h3 className="font-bold">{student.name}</h3>
            <p className="text-gray-600">
              Course: {student.course}
            </p>
          </div>

          <button
            onClick={() => handleDelete(student.id)}
            className="rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default StudentDelete