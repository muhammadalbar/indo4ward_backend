module.exports = (app) => {
    var todo = require('./controller/todos')

    // Get initial api
    app.get('/api', async (req,res) => {
        res.json({
            message: "Welcome to indo4ward API"
        })
    })

    // Get todo api
    app.route('/api/todo')
        .get(todo.readTodo)
    app.route('/api/create-todo')
        .post(todo.createTodo)
    app.route('/api/delete-todo/:id')
        .delete(todo.deleteTodo)
}