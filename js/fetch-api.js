const url = 'https://www.course-api.com/react-tours-projects';

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// using async-await

const getTours = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const msg = `There was an error "${response.status} ${response.statusText}"`;
      throw new Error(msg);
    }
    const data = await response.json();
    // return data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const btn = document.querySelector('.btn');
btn.addEventListener('click', getTours);
