// A Promise in JS is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data Fetched Successfully");
      } else {
        reject("Error Fetching Data");
      }
    }, 2000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
