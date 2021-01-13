module.exports = (app) => {
    var todo = require('./controller/todos')
    var weather = require('./controller/weather')
    var fetch = require('node-fetch')

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

    app.get('/api/weather', async (req,res) => {
        let url = "https://www.nea.gov.sg/api/Weather4DayOutlook/GetData/1610557200"
        const fetch_api = await fetch(url)
        const json = await fetch_api.json()
        res.json(json)
    })
}