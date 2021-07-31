const cTable = require('console.table');
class Role{
    constructor(id,title,salary,did)
    {
        this.id=id;
        this.title=title;
        this.salary=salary;
        this.did=did;
    }
    getID()
    {
        return this.id;
    }
    getTitle()
    {
        return this.title;
    }
    getSalary()
    {
        return this.salary;
    }
    getDid()
    {
        return this.did;
    }


}
module.exports=Role;