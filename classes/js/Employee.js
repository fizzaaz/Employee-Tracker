const cTable = require('console.table');

class Employee
{
constructor(id,fn,ln,rid,mid)
{
this.id=id;
this.fn=fn;
this.ln=ln;
this.rid=rid;
this.mid=mid;
}
ViewEmployee(connection)
{
    let sqlQuery =`Select e.id AS ID,CONCAT(e.first_name,' ', e.last_name) AS NAME, 
    CONCAT(m.first_name,' ',m.last_name) AS MANAGER,
    r.title AS TITLE, r.salary AS SALARY, d.name AS DEPARTMENT
    from employee e LEFT JOIN employee m ON  m.id=e.manager_id
    inner JOIN role r inner JOIN Department d ON r.id=e.role_id AND d.id=r.department_id ORDER BY E.ID ASC`;
    connection.query(sqlQuery, (err, res) => {
    if (err) {throw err}
     console.table(res);
})
}
addEmployee(connection,Name)
{
    let sqlQuery=`INSERT INTO department (name) VALUES (?);`
    connection.query(sqlQuery, Name,(err, res) => {
        if (err) throw err;});
}
}
module.exports=Employee;