// Promise chaining is a technique used to call .then() multiple times in sequence to handle the result of a promise

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${data} and processed`);
    }, 1000);
  });
}

function saveData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${data} and saved`);
    }, 1000);
  });
}

// Using promise chaining
fetchData()
  .then(processData)
  .then(saveData)
  .then((result) => {
    console.log(result); // Outputs: "Data fetched and processed and saved"
  })
  .catch((error) => {
    console.error("Error:", error);
  });
