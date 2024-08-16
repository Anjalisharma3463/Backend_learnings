const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end(); //Ends the response (res.end()) to send the response back to the client

//     Yes, it's important to call res.end() in your Node.js HTTP server code. Here's why:

// Purpose of res.end():
// Ending the Response: res.end() signals that you've finished sending data for the response and that the server can consider the response complete.
// Sending the Response to the Client: Until you call res.end(), the server will keep the connection open, waiting for more data to be written to the response. The client (e.g., a browser) won’t receive the full response until res.end() is called.
// What Happens If You Don't Call res.end()?
// Response Never Ends: If you forget to call res.end(), the client will continue waiting for the response to finish. This can lead to the connection hanging indefinitely.
// Potential Timeouts: Most clients (browsers, for example) will eventually time out if the server doesn’t complete the response. This results in a poor user experience and potentially failed requests.
// Resources Remain Tied Up: The server might keep the connection open, consuming resources that could have been freed up, potentially affecting the performance of your server.
  }
  //we give an entry point in configuration file coz someone will iiinstall or want to run th  code so he or she dont want to guess what is a entry poiint . they will  npm  start or somethings.
  //npm install nodemon --save -> it installl this by production dependenies...this package will be used and we will wrok twit hthis.
  //npm install nodemon -g -> it willl be installed globallaly to 
  // npm install nodemon --save-dev -> t will insalled into ths project not globally.
  // if we workin g agin on project or deleted tha package thant do npm install it will install all dependines .
  //nodemon will help us to run the servver without ctrl+c and node app.js. whateven change we will do , itwill refelcet that tohrought npm start.

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString(); //chunk is a piece of the data being sent by the client. It's a Buffer object, which is a raw binary representation of the data.
      
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  // jab koi bhi condiiton met naa ho jese /message but get method.
  res.setHeader('Content-Type', 'text/html'); 
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);

// I showed that nodemon app.js would not work in the terminal or command line because we don't use local dependencies there but global packages.

// You could install nodemon globally if you wanted (this is NOT required though - because we can just run it locally): npm install -g nodemon would do the trick. Specifically the -g flag ensures that the package gets added as a global package which you now can use anywhere on your machine, directly from inside the terminal or command prompt.
