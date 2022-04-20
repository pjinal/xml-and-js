## Project 2- Jinal Patel(N01495566)
======

Steps: 
- 1. Created a ``` project-2 ``` folder
- 2. In the terminal, change the directory from root folder to project-2 and run ``` npm init -y `'`, which created package.json file
- 3. Installed browserify by using the command: ``` npm i browserify ```, which created package-lock.json file
- 4. As we had to create large json file, I got to know about the website, where we could generate random data named ``` mockaroo.com ``` , downloaded the file and added it to src/data/MOCK_DATA.json with 210 enteries in it.
- 5. Created a controller under ``` src/controller/people.js ``` 
- 6. After this, I created a ``` render.js ``` file which contains all the handlers for the form inside the root (project-2) folder.
- 7. Altered the package.json with the build , to build bundle inside the dist folder, complied it using browserify as follows:
```

{
  "name": "project-2",
  "version": "1.0.0",
  "description": "",
  "main": "render.js",
  "scripts": {
    "build": "browserify render.js -o dist/bundle.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "browserify": "^17.0.0"
  }
}

```
- 8.  Created an index.html file to  create a table and load the data dynamically using the controller
- 9. Run the program, follow the below steps: 
 	 + Install dependencies using ``` npm i ```
	 + Build App using ``` npm run build ```
- 10. We can check the server where we can run our html file using the command prompt by ``` http-server ```
- 11. Run the ``` index.html ``` file to the local server.
- 12. Deployed it to netlify.
