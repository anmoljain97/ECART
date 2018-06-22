const mysql=require('mysql2');

const connection =mysql.createConnection(
    {
        host:'localhost',
        database:'ecom',
        user:'root',
        password:'123',
        insecureAuth:true
    }
)

connection.query(
    `CREATE TABLE IF NOT EXISTS cart (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(50) NOT NULL,
        description VARCHAR(1000) NOT NULL,
        price INTEGER NOT NULL,
        quantity INTEGER NOT NULL
    ) `,
    function(err,results){
        if(err){
            console.log(err);
            
        }else{
            console.log("successfully created");
        }
        connection.close();
    }

)