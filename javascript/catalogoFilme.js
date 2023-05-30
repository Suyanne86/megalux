// const sql = require('mssql/msnodesqlv8')
// //data base configuration

// var config={
//     user: '',
//     password:'',
//     database: 'testdb', //your database here 
//     server: 'BRJ112J8MQ\\SQLEXPRESS',
//     driver: 'msnodessqlv8',
//     options: {
//         trustedConnectuion:true
//     }
// }

// //connect to databese
// sql.connect(config,function(err){
//     if(err){
//         console.log(err);
//     }
//     //create the request object 
//     var request = new sql.Request();
//     //database query
//     request.query('select * from empTable', function(err, recordSet){
//         if(err){
//             console.log(err)
//         }else{
//             console.log(recordSet)
//         }
//     });
// });
