const path = require('path');

module.exports = path.dirname(process.mainModule.filename);
// process.mainModule.filename: This part accesses the filename of the main module in Node.js. The process object provides information about the current Node.js process, and mainModule refers to the main module of your application

// process.mainModule.filename gives you the full path of the main module file that Node.js executed.

// module.exports: This is a special object in Node.js modules that is used to expose functionality from one module to another. Whatever you assign to module.exports will be available for other modules to require.



// If you run node app.js in the terminal, process.mainModule.filename will give you the full path to app.js.
// So, when you use path.dirname(process.mainModule.filename), it extracts the directory where that main file (app.js or any other file you ran) is located.