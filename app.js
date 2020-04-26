const user = {
    firstName: 'Veronika',
    age: 22,
    isAdmin: true,
    email: 'veronika__kozhina@gmail.com',
    'user-address': {
        city: 'odessa'
    },
    skills: ['html', 'css', 'js']
};

let value;
let prop = 'email';

value = user.firstName;
value = user['isAdmin'];
value = user['user-address'];
value = user['user-address'].city;
value = user['user-address']['city']; //analog value = user['user-address'].city;

value = user[prop]; //veronika__kozhina@gmail.com
value = user[prop][0]; //v

value.firstName = 'Veronika';

value = user.firstName;

user.info = 'Some info';

user['user-address'].city = 'Lviv';
user['user-address'].contry = 'Ukraine';

console.log(value);

console.log(user);
