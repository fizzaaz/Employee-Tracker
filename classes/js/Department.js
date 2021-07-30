const server = require("../../server");

class Department{
constructor()
{
    
}
ViewDepartment(connection)
{
    let sqlQuery =`Select * from department`;
    connection.query(sqlQuery, (err, res) => {
    if (err) throw err;
    console.log(res)
    console.log(server);
    subHeader("All Departments",res)
});
}
}

module.exports=Department;