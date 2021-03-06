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

function getAllitemfromproductlist(){
    return new Promise(function(resolve,reject){

        connection.query(`SELECT * FROM item`,
        function(err,rows,cols){
            if(err){
                reject(err);
            }else{
                resolve(rows);
                
            }
        })

    })
    
}
function insertinproductlist(title,description,price,img){
    return new Promise(function(resolve,reject){
        connection.query(`INSERT INTO item (title,description,price) VALUES(?,?,?)`,
        [title,description,price],
        function(err,res){
                if(err){
                    reject(err);
                }else{
                    console.log('success');
                    
                    resolve();
                    
                }
            })
    })
}
function getalltitles(){
    return new Promise(function(resolve,reject){
        connection.query(`SELECT title from item `,
        function(err,rows,cols){
                if(err){
                    reject(err);
                }else{
                    console.log('success');
                    
                    resolve(rows);
                    
                }
            })
    })
}
exports=module.exports={
    insertinproductlist,
    getAllitemfromproductlist,
    getalltitles
}

