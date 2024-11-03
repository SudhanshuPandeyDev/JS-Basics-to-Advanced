// async makes a function return a Promise.
// await pauses the execution of the function until the Promise is resolved.

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "sudhanshu", url: "https://sudhanshu.com" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData();
    console.log("User Data Fetched Successfully");
    console.log("User Data : ", userData);
  } catch (error) {
    console.log("Error Fetching Data", error);
  }
}

getUserData();
