## Get Started
To run this project, do the following:
1. Download the project files
2. Navigate to this directory from the command line interface.
3. Go to [https://console.developers.google.com/](https://console.developers.google.com/). Go to the Library tab, search for Youtube Data API v3, and enable the Youtube Data API v3. Next, in the Credentials tab, click Create credentials and copy your API Key. For more information visit [https://developers.google.com/youtube/v3/getting-started](https://developers.google.com/youtube/v3/getting-started)  
4. Add a file called ‘.env’ on your root folder with key/pairs entries and paste the API key in the appropriate value.
```
API_KEY={YOUR_YOUTUBE_API_KEY}
```
3. Install dependencies and run the backend node server by typing
```
npm install
npm start
```
4. Navigate to the react app by typing
```
cd ./frontend
```
5. Install dependencies and run the frontend node server by typing
```
npm install
npm start
```
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Optional: Run tests in backend and frontend by navigating to the designated folder and typing the following into the terminal
```
npm test
```


## Product Requirements
1. It should be a full stack web application created using React and Express.
2. Your code for interfacing with the third-party API (iTunes Search API) should
be handled by the back-end of your application.
3. The front-end of your application should provide an attractive user interface
that allows users to enter search criteria. The user should be able to enter a search term and also select the type of media they want to search for (e.g. movie, podcast, music, audiobook, short film, TV show, software, ebook or all). The results of the search should be attractively displayed. A user should be able to create a list of their favourite content. The user should be able to remove an item from their list of favourites. The list of the user’s favourite content should also be attractively displayed. The list of favourite content need not be remembered when the user navigates away from or leaves your web application.
4. The UI should be attractive, easy to use and intuitive.
5. You should ensure that your application has been appropriately tested. You
should include at least one snapshot test and appropriate unit tests for both
the front-end and back-end of the application.
6. Use H​ elmet​ to help you secure your Express app.
7. Your mentor should be able to launch your app by typing ‘npm start’ from
the command line interface.
8. The file structure of the project should be well organized and easy to
understand and use.
9. Your code should be well documented with appropriate comments. The
code should also be easy to read adhering to ​Google’s style guide about
indentation, meaningful variable and component names etc.
10. The project should include a file called “readme.md” which includes:
a. An explanation of how to use the app.
b. Clear instructions that an end user will be able to follow to install, test
and run your app on their local machine.