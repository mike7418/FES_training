// JavaScript source code
//console.log('Hello World!'.length)

function welcomePersonToFES(name) {
    console.log('Welcome to FES, ' + name + '!');
}

welcomePersonToFES('Alice');

function addTwoNumbers(a, b) {
    return a + b;
}

console.log(addTwoNumbers(5, 7)); // Output: 12

let users = [
    {
        username: 'Mike',
        email: 'parksmike@dwx.com',
        password: 'password123',
        subscriptionStatus: 'VIP',
        discordId: 'Mike#1234',
        lessonsCompleted: [0, 1, 2, 3, 4, 5],
    }
];

function login(email, password) {
    for (let i = 0; i < users.length; ++i) {
        if (users[i].email === email && users[i].password === password) {
            console.log('Login successful! Welcome, ' + users[i].username + '!');
            register(users);
        }
    }
}

login('parksmike@dwx.com', 'password123');

const emailRef = document.querySelector('.email');
function register(users) {
    console.log(users.pop());
}

async function main() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    console.log(data);
    emailRef.innerHTML = data.email;
}

main();
