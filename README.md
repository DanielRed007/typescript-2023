# How to setup a NodeJS Server Using Typescript & NodeJS 

Prequisites

1. NodeJS v14 & npm
2. Code Editor

Follow the next steps:

Create the folder to sotre your server. Go to your terminal, select the project location and type:

    mkdir typescript-starter
    cd typescript-starter

Create a package.json file wit thefault values by typing:

    npm init -y
    
Add Typescript as a npm dev dependency. By Adding Typescript, we can benefit by getting tips on type safety and auto-completion on basic NodeJS and Javascript API's

    npm install typescript --save-dev

Now we create a tsconfig.json : 

    {
      "compilerOptions": {
        "target": "es5",                          
        "module": "commonjs",                    
        "lib": ["es6"],                     
        "allowJs": true,
        "outDir": "build",                          
        "rootDir": "src",
        "strict": true,         
        "noImplicitAny": true,
        "esModuleInterop": true,
        "resolveJsonModule": true
      }
    }
    
The rootDir option is the folder for original typescript files that will be compiled. outDir option tells Typescript where to store the compiled code, between many rules available for TS setup we can find enforcing types or error notation, or the "any" type implicit

Create a src folder:

    mkdir src
    touch src/index.ts
    // add some code ex: console.log("Hello world!")
    
We can also add nodemon to watch changes on our code and enable automatic reloading, very useful.


    npm install --save-dev ts-node nodemon
    
Create a nodemon.json file and add:

    {
      "watch": ["src"],
      "ext": ".ts,.js",
      "ignore": [],
      "exec": "npx ts-node ./src/index.ts"
    }

Then, in the package.json file, in the script property we add:

    "start:dev": "npx nodemon"
    
try
    
    npm run start:dev 

and you server should be ready to start. 
 
PD: Remember to create a .env file locally, to store your environment variables.
