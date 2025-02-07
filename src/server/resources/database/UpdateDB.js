const {Pool} = require("pg")
const fs = require("fs")

// Instalar a biblioteca pg || npm install -save pg
// Se atentar as configurações do DB antes de executar o script.
// Esse script só executa para a base <bureauto> já criada.
const config = {
    host: "localhost",
    user: "postgres",
    password: "postgres",
    database: "bureauto",
    port: 5432
}

const pool = new Pool(config)

const sql_ddl_bureauto = fs.readFileSync("./2021-10-08-ddl-bureauto.sql").toString()

pool.connect(async function(err, client, done) {
    if (err) {
        console.error("Can not connect to the DB" + err)
    }

    await client.query(sql_ddl_bureauto, function(err, result) {
        if(err) {
            console.error("error: ", err)
            process.exit(1)
        }
        console.log("Success on execut ddl project.")
        process.exit(0)
    })
})