const employees = [];

employees.push({
    "id": 1,
    "name": "moemen",
    "salary": 1000
})

const ahmed = {
    "id": 2,
    "name": "ahmed",
    "salary": 2000
};

employees.push(ahmed);

employees.push({
    "id": 3,
    "name": "aya",
    "salary": 3000
})

console.log(JSON.stringify(employees));