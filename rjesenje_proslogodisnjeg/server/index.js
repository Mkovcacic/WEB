const express = require("express");
const app = express();

let todos = require("./todos");

app.get("/api/todos", (req, res) => {
    res.send(todos);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.put("/api/todos", (req, res) => {
    const todo = req.body;
    console.log(todo);
    for (let i in todos)
        if (todos[i].id === todo.id)
            todos[i] = todo;

    res.send({ message: "Modified" });
});

app.listen(3000);