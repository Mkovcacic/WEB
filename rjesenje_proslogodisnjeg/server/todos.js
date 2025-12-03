const crypto = require("crypto");

const todos = [
    { description: "Finish writing the project proposal", date: "2024-12-03T09:00:00", completed: false, id: crypto.randomUUID() },
    { description: "Review and merge pull requests", date: "2024-12-01T15:00:00", completed: true, id: crypto.randomUUID() },
    { description: "Prepare slides for the seminar", date: "2024-12-04T10:30:00", completed: false, id: crypto.randomUUID() },
    { description: "Update the department website", date: "2024-12-02T14:00:00", completed: false, id: crypto.randomUUID() },
    { description: "Debug the robotics navigation module", date: "2024-12-05T16:00:00", completed: false, id: crypto.randomUUID() },
    { description: "Submit research paper to the journal", date: "2024-12-06T23:59:59", completed: false, id: crypto.randomUUID() },
    { description: "Organize files and clean up local repositories", date: "2024-12-07T12:00:00", completed: false, id: crypto.randomUUID() },
    { description: "Test the embedded system prototype", date: "2024-12-03T17:00:00", completed: false, id: crypto.randomUUID() },
    { description: "Respond to pending emails", date: "2024-12-01T18:00:00", completed: true, id: crypto.randomUUID() },
    { description: "Plan the curriculum for next semester", date: "2024-12-08T11:00:00", completed: false, id: crypto.randomUUID() }
];

module.exports = todos;