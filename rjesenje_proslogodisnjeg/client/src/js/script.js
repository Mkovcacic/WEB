import $ from "jquery";
import { Modal } from "bootstrap";

const prettyDate = (dateStr) => {
    const formatter = new Intl.DateTimeFormat("en-US", {
        dateStyle: "short",
        timeStyle: "short"
    });
    return formatter.format(new Date(dateStr));
}

const getTodos = (callb) => {
    $.get("/api/todos", (res) => {
        callb(res);
    });
}

const renderTableRows = (todos) => {
    let tbody = $("#todoTable tbody");
    tbody.empty();
    for (const todo of todos) {
        let tr = $(`
            <tr>
                <td>${todo.description}</td>
                <td>${prettyDate(todo.date)}</td>
                <td class='text-center'>${ todo.completed ? '<i class="bi bi-check-circle-fill text-success"></i>' : '<i class="bi bi-x-circle-fill text-danger"></i>' }</td>
            </tr>
        `);

        let td = $(`
            <td class='text-center' style='cursor: pointer'><i class="bi bi-pencil-square text-secondary"></i></td>
        `);
        td.on("click", () => { openEditModal(todo) });
        
        tr.append(td);
        tbody.append(tr);
        
    }
}

const submit = () => {
    const description = $("#editModal form #description").val();
    const date = $("#editModal form #date").val();
    const completed = $("#editModal form #completed").prop("checked");
    const id = $("#editModal form #id").val();
    const todo = { description, date, completed, id };
    $.ajax({
        method: "PUT",
        url: "/api/todos",
        data: JSON.stringify(todo),
        dataType: 'json',
        contentType: 'application/json',
        success: (res) => {
            getTodos(renderTableRows);
            myModal.hide();
        }
    })
}

window.submit = submit;

const myModal = new Modal(document.getElementById('editModal'));

const hide = () => {
    myModal.hide();
}
window.hide = hide;

const openEditModal = (todo) => {
    const { description, date, completed, id } = todo;
    $("#editModal form #description").val(description);
    $("#editModal form #date").val(date);
    $("#editModal form #completed").prop("checked", completed);
    $("#editModal form #id").val(id);
    myModal.show();

}


$(() => {
    getTodos(renderTableRows);
});