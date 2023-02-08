var numbers = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
]

console.log(numbers)
console.log(numbers[1])
console.log(numbers[1][2])

var users = [
    { id: 1, name: 'User1', email: 'user1@test.com', tel: '03-1111-2222'},
    { id: 2, name: 'User2', email: 'user2@test.com', tel: '03-2111-2222'},
    { id: 3, name: 'User3', email: 'user3@test.com', tel: '03-3111-2222'}
]
console.log(users)

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// 1から1000まで足した合計値
var sum = 0
for (let i = 1; i <= 1000; i++) {
    sum += i
}
console.log(sum)

console.log('---- for of ----')
for (const user of users) {
    console.log(user.id)
    console.log(user.name)
    console.log(user.email)
    console.log(user.tel)
}

console.log('---- for in ----')
for (const key in users) {
    console.log(users[key].id)
    console.log(users[key].name)
    console.log(users[key].email)
    console.log(users[key].tel)
}