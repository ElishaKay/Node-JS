var request = require("request");
request('https://github.com', function(error, response, body){
  if (!error && response.statusCode === 200){
    console.log(body);
  }
});