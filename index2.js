const Schema = require("./employees_pb");
const fs = require("fs");

const moemen = new Schema.Employee();
moemen.setId(1);
moemen.setName("Moemen");
moemen.setSalary(1000);


const aya = new Schema.Employee();
aya.setId(2);
aya.setName("Aya");
aya.setSalary(2000);


const rick = new Schema.Employee();
rick.setId(2);
rick.setName("rick");
rick.setSalary(5000);

const employees = new Schema.Employees();
employees.addEmployees(moemen)
employees.addEmployees(aya)
employees.addEmployees(rick)

const bytes = employees.serializeBinary();
console.log("binary " + bytes);
fs.writeFileSync("binarydata", bytes)

// deserialize
const employees2 = Schema.Employees.deserializeBinary(bytes);
console.log(employees2.toString());