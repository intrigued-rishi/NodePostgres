const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.user,
  database: process.env.db,
  password: process.env.pwd,
  port: 5432,
  host: "localhost",
});

async function createTable(){
    await pool.query(
        `CREATE TABLE IF NOT EXISTS user_table
        (
            user_id numeric(10,0) NOT NULL,
            name character varying(50) COLLATE pg_catalog."default" NOT NULL,
            age numeric(3,0) NOT NULL,
            phone character varying(20) COLLATE pg_catalog."default",
            CONSTRAINT user_table_pkey PRIMARY KEY (user_id)
        );`
    );
}

createTable();


module.exports = { pool };