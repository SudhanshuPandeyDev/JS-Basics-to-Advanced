// async and await do make asynchronous code look and behave more like synchronous code.

function fetchPostData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post Data Fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Comment Data Fetched");
    }, 2000);
  });
}

async function getBlogData() {
  try {
    console.log("fetching data...");
    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);
    console.log(postData);
    console.log(commentData);
    console.log("fetch complete..");
  } catch (error) {
    console.log("error fetching blog data", error);
  }
}

getBlogData();
