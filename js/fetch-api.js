const url = 'https://www.course-api.com/react-tours-project';

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// using async-await

const getTours = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

console.log(getTours());
