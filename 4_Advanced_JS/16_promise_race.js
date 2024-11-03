// Promise.race() resolves/rejects based on the first settled promise (whether it resolves or rejects doesn't matter, only the timing does).

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 Resolved");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 Resolved");
  }, 1000);
});

Promise.race([promise1, promise2])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
