class Department{
constructor()
{

}
    ViewDepartment(connection)
{
    let sqlQuery =`Select * from Department`;
    connection.promise().query(sqlQuery, function(err, res)  {
    if (err) throw err;
    return res;
});
}
}

module.exports=Department;