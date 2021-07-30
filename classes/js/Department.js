class Department{
constructor (id,name)
{
this.id=id;
this.name=name;
}
ViewDepartment(connection)
{
    let sqlQuery =`Select * from Department`;
    connection.promise().query(sqlQuery, (err, res) => {
    if (err) throw err;
});
return res;

}
}

module.exports=Department;