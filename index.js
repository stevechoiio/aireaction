const axios = require("axios");

// Make a request for a user with a given ID

var url =
  "https://newsapi.org/v2/top-headlines?" +
  "country=us&" +
  "apiKey=93bc667139474bf9ae258967e944529a";

axios
  .get(url)
  .then(function(response) {
    // handle success
    console.log(response);
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  })
  .finally(function() {
    // always executed
  });

axios.post(
  "https://www.googleapis.com/blogger/v3/blogs/blogId/posts/",
  {
    kind: "blogger#post",
    blog: {
      id: "8070105920543249955"
    },
    title: "A new post",
    content: "With <b>exciting</b> content..."
  },
  {
    headers: {
      Authorization: "Bearer " + varToken,
      "Content-Type": "application/json"
    }
  }
);
