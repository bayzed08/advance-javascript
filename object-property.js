const students = [
    { id: 11, uname: "rafiq", job: "carpenter" },
    { id: 22, uname: "bayzed", job: "writer" },
    { id: 33, uname: "manir", job: "Halloween" }
];

output = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i].uname;
//     console.log(element);
//     output.push(element);
// }
const stuname = students.map(n => n.uname);
const stId20 = students.filter(n => n.id > 20);
const stId20One = students.find(n => n.id == 33);
console.log(stuname);
console.log(stId20);
console.log(stId20One);