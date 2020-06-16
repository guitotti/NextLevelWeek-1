//importar a dependência do SQLite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operações no BD

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar objeto de BD para as operações
//método serialize > rodar uma sequência de códigos  

db.serialize(() => {
    //com comandos SQL:
    
    //criar tabela 
    /*db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT, 
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)*/

    //inserir dados na tabela
    /*const query = `
        INSERT INTO places(
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `*/


    //Exemplo de cadastro:
    
    /*const values = [
        "https://images.unsplash.com/photo-1481761289552-381112059e05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1461&q=80",
        "Papersider",
        "Guilherme Gemballa, Jd. América",
        "N° 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos eletrônicos, Lâmpadas"
    ]*/

    /*
    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        } 

        console.log("Cadastrado com sucesso!")
        console.log(this)
    }*/

    //db.run(query, values, afterInsertData)

    //consultar dados da tabela
    /*db.all(`SELECT name FROM places`, function(err, rows) {
    if(err) {
        return console.log(err)
    }

    console.log("Aqui estão os seus registros")
    console.log(rows)
    })*/

    //deletar dado da tabela
    /*db.run(`DELETE FROM places WHERE id = ?`, [5], function (err) {
        if(err) {
            return console.log(err)
        }

        console.log("Registro deletado com sucesso")
    })*/

})