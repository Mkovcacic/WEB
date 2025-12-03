const express = require("express");

let { todos,random_id } = require("./data");

const port = 3000;

let app = express();

app.use(express.static("../client"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/todos", (req, res) => {
    res.send(todos);
});

app.post("/api/todos", (req, res) => {
    let todo = req.body;
    todo.done = todo.done === "true";
    todo.id = random_id();


    todos.push(todo);

    res.send({ message: "Ok", todo });
});

app.put("/api/todos/:id", (req, res) => {
    
    for (let i = 0; i < todos.length; ++i) {
        if (todos[i].id === req.params.id) {
            todos[i].done = !todos[i].done;
        }
    }

    res.send({ message: "Done" });
});

app.delete("/api/todos/:id", (req, res) => {
    todos = todos.filter(item => item.id !== req.params.id);
    res.send({ message: "Done" });
});


app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
});