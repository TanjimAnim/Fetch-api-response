const axios = require("axios").default;
function fetchAPI() {
  axios
    .get("https://gorest.co.in/public/v1/users", {
      auth: {
        token:
          " d7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3",
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchAPI();
