const team = [
    { name: "ฟ้า", role: "PO", tasksDone: 5 },
    { name: "ต้น", role: "Dev", tasksDone: 8 },
    { name: "มายด์", role: "SM", tasksDone: 3 },
    { name: "เจ", role: "Dev", tasksDone: 6 },
];

// ข้อ 1: map
const names = team.map(
    member => `${member.name} (${member.role})`
);

console.log(names);


// ข้อ 2: filter เฉพาะ Dev
const devs = team.filter(
    member => member.role === "Dev"
);

console.log(devs);


// ข้อ 3: reduce รวม tasksDone
const totalTasks = team.reduce(
    (total, member) => total + member.tasksDone,
    0
);

console.log(totalTasks);


// ข้อ 4: filter + reduce เฉพาะ Dev
const devTasks = team
    .filter(member => member.role === "Dev")
    .reduce((total, member) => total + member.tasksDone, 0);

console.log(devTasks);