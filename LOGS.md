# Project logs
Below is a compiled list of any errors I encountered during development of this project. I include the error message, summary of the issue, and the solution of how to resolve (along with any relevant online threads and/or articles that were helpful for troubleshooting). Keeping logs of these common errors will help speed up my development process as I build more projects. 

## Errors

### `dotenv` Module not found: Can't resolve 'fs'

Attempted to call the .env variable from the client in my React app. However, dotenv is meant for server-side usage only. If you want to use it
with the client while testing use something like the dotenv-webpack (and save that to 
devDependencies), because in production I believe whatever hosting
platform you are using you would load up your environment variables. Also, don't forget to add .env file to .gitignore to keep sensitive information hidden from a public repo. [Thread](https://github.com/motdotla/dotenv/issues/233)

### `regeneratorRuntime` is not defined with async/await functions
This is an issue for babel (a js compiler you can use to make sure any shiny new js syntax will be transpiled to vanilla js for nodejs/older browsers). All I needed was to npm install the plugin @babel/transform-runtime (adding it to my babel 'plugins' inside my package.json) and the error was cleared. [Thread](https://github.com/babel/babel/issues/8829)


### `babel` can only have one configuration config in your environment setup
Not exactly an error per se, but I defined both a .babelrc.json ***and*** package.json files with a "babel" key. I only need one of these. [Thread](https://babeljs.io/docs/en/configuration)
