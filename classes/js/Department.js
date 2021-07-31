const cTable = require('console.table');

class Department{
constructor(NAME)
{
    this.NAME=NAME;
}

//get Department Name
getDeptName()
{
    return this.NAME;
}
// VIEW AL DEPARTMENTS
ViewDepartment(connection)
{
    let sqlQuery =`Select id AS ID,name as DEPARTMENT from department`;
    connection.query(sqlQuery, (err, res) => {
    if (err) throw err;
    console.table(res);
});
}

//Add new Department
AddDepartment(connection,Name)
{
    let sqlQuery=`INSERT INTO department (name) VALUES (?);`
    connection.query(sqlQuery, Name,(err, res) => {
        if (err) throw err;});
    }
 
 DeleteDepartment(connection,name) 
 {
  let sqlQuery= `DELETE FROM DEPARTMENT WHERE name=?`;
  connection.query(sqlQuery,name,(err,res)=>
  {
    if (err) throw err;
  })
 }  
    }


module.exports=Department;