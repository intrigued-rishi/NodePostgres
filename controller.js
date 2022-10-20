const { pool } = require('./postgres');

module.exports.insertData = async (req,res)=>{
    try {
        const {id,name,age,phone} = req.body;
        await pool.query(`
            INSERT INTO user_table (user_id, name, age, phone) VALUES (${id}, '${name}', ${age}, ${phone});
        `);  
        res.status(200).json({message:"Data Inserted successfully!"});
    } catch (error) {
        console.log(error.stack);
        res.status(500).json({message:"Error in Inserting data!",error});
    }
}

module.exports.getData = async (req,res)=>{
    try {
        const user_data = await pool.query(`SELECT * FROM user_table`);
        res.status(200).json({status_code:200,data:user_data.rows});
    } catch (error) {
        console.log(error.stack);
        res.json({status_code:500,message:"Error in fetching data!",error});
    }
}