interface User {
    id: number,
    name: string,
    email: string
}

interface Employee extends User {
    salary: number,
    department : string
}

const employee1 : Employee = {
    id: 3245,
    name: 'Litan',
    email: 'contact@litanmolla.com',
    salary: 30000,
    department: 'Web'
}

console.log(employee1)