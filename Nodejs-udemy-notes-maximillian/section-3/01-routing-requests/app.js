// Event-Driven Architecture: The server uses an event-driven architecture, meaning it listens for events (like incoming requests) and triggers the corresponding code when those events occur.


const http = require('http');

// http: This module allows Node.js to create a web server. It's built into Node.js, so you don't need to install it separately.

const fs = require('fs');
// a requestlistern in create server as an argument is a function that executes every incoming request. 
 // now this function requestlisterner will recievve two arguments . first is request of type incomingmessage . it will contatin data about request. and second is response is a response objects that nodejs  that will help us to send data using respons. it also gives us which we will use to return a respons to whoever sent a request.
// but we dont need to create this function reqlistener explicity. we can use (anonymounns (function)) it by name of function in createserver function as a argument or can use arrow function also. THIS IS event-driven architecture that nodejs use.
// nodejs will call or eexecute this function whenever a request comes on c server.
// createserver function returns a server and using const to store it coz we will create ths server only once.  

//listen starts a process where nodejs will keep running this to listen incoming request not will  quot.//
// listen take  some  arguments:- first is port on which you want to listen. In porduction we will not fill this posrt , it will take this to port 80 by default here but on default we will tht is on local machineu (3000 (safe) or can use 80). 
// we want our server keep running for incoming request. 
// when we did log tha request and open localhost:3000 on website then without html rendineg it gave some code in whch we log the request. these we re some request. cursor will point to old line not to new without proces.eit witout quitting server . if we do this process.eit people pwill not be apble to reach the web page... 
// we always want that our  server will keep running and we also want that but we  can  also stop that using process.exit or ctrl+c in terminal) athen it will log somem request from the page butt still we will get some reqest in terminal and then cursor will point to new line not to previous .   
//the functtion inside createserccer is event listener for request . its event loop. it will keep running as long as there are event listenrers registerd.   
 const server = http.createServer((req, res) => {
  const url = req.url;
  // req.url: This property gives the URL that was requested by the client.
// req.method: This property gives the HTTP method used for the request (e.g., GET, POST).
  const method = req.method;

  
  if (url === '/') { // req.url me /elog krege then it means whatever after localhost:3000/
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
    // The form's action="/message" tells the browser to send the data to the /message URL when the form is submitted using the POST method.
    // res.end(): This method signals that the response is complete and can be sent back to the client.
  }

  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY');
    res.statusCode = 302;
    res.setHeader( 'Location', '/'); // redirect to / url or home page
    return res.end();   //return res.end(): This ends the response.
    // res.statusCode = 302: This sets the HTTP status code to 302, which indicates a redirect.
// res.setHeader('Location', '/'): This sets a header that tells the browser to redirect to the / URL.
  }
  //if any url then it will work
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
// server.listen(3000): This starts the server on port 3000. The server will keep running, listening for incoming requests on this port.