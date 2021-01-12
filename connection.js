const { Client } = require("pg");

const client = new Client({

    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    ssl: true,
});
console.log(process.env.PG_USER)
client.connect((err) => {
    if(err){
        throw err
    }
    let createTodoTable = `CREATE TABLE IF NOT EXISTS TODO(id_todo SERIAL NOT NULL PRIMARY KEY, 
        activity varchar(200) not null
        );`;
    
    client.query(createTodoTable, (err, results, fields) => {
        if (err) {
            throw err;
        }
        var val = [];
        var setValue = (value) => {
            val = value;
        };
        let query = `SELECT * FROM TODO;`;
        client.query(query, (err, results) => {
            if (err) {
                throw err;
            }
            setValue(results);
            var string = JSON.stringify(val);
            var users = JSON.parse(string);
    
            if (users.rowCount === 0) {
                let createTodo = `INSERT INTO TODO(activity) 
                        VALUES ('playing football');`;
                client.query(createTodo, function (error, results) {
                    if (error) {
                        console.log(error);
                    }
                });
            }
        });
    });
})

module.exports = client;