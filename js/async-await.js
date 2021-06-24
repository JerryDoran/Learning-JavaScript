const users = [
  { id: 1, firstName: 'Steve' },
  { id: 2, firstName: 'Tony' },
  { id: 3, firstName: 'Natasha' },
];

const articles = [
  { userId: 1, articles: ['one', 'two', 'three'] },
  { userId: 2, articles: ['four', 'five'] },
  { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] },
];

// Using the '.then method'
// getUser('Steve')
//   .then((user) => getArticles(user.id))
//   .then((articles) => console.log(articles))
//   .catch((err) => console.log(err));

// Using async-await method
const getData = async () => {
  try {
    const user = await getUser('Natasha');
    const articles = await getArticles(user.id);
    console.log(articles);
  } catch (error) {
    console.log(error);
  }
};

getData();

function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.firstName === name);

    if (user) {
      return resolve(user);
    } else {
      reject(`No such user with name : ${name}`);
    }
  });
}

function getArticles(id) {
  return new Promise((resolve, reject) => {
    const userArticles = articles.find((user) => user.userId === id);

    if (userArticles) {
      return resolve(userArticles.articles);
    } else {
      reject(`Wrong Id`);
    }
  });
}

// const example = async () => {
//   return 'hello';
// };

// async function someFunc() {
//   const result = await example();
//   console.log(result);
// }

// console.log(example());
// someFunc();
