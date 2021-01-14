var connection = require('../connection')

exports.readTodo = function(req, res) {
    var query = 'select * from todo;'
    connection.query(query, (err, results) => {
        if(err){
            throw err
        }
        else{
            res.send({
                message: 'success',
                data: results.rows
            })
        }
    })
}

exports.createTodo = function(req, res) {
    var activity = req.body.activity
    var query = `insert into todo (activity) values ('${activity}');`
    connection.query(query, (err, results) => {
        if(err){
            throw err
        }
        else{
            res.send({
                message: 'New todos successfully posted'
            })
        }
    })
}

exports.deleteTodo = function(req, res) {
    var id = req.params.id
    var query = `delete from todo where id_todo = ${id}`
    connection.query(query, (err, results) => {
        if(err){
            throw err
        }
        else{
            res.send({
                message: 'Your activity has successfully deleted'
            })
        }
    })
}