This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Need to:

Connect this front-end to this: https://github.com/marcusjensen15/jwt-flashcard-app-backend
Logout function will occur on the frontend, not the backend. 

# To Dos

Check out this resource, it walks through a lot of the following tasks below:

https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/

1. Make login call to backend API. Store token and change state var isLoggedIn to true. We can maybe protect routes with this by making sure the user is logged in when trying to go to other areas of the app.

2. If login fails, it would be nice to have the accurate error message response instead of just '400 Error' (Incorrect password, act does not exist, etc)

3. Push to '/train' only if login is successful. Otherwise return back to login and display correct error message.

4. JWT token appears to be the exact same every time. figure out why this is.

5. Store the sucessfull log-in token as a state variable, when making requests to the api, we will need to include this var as a header value in each request.

6. On logout, set token value to null. User can now only access a couple routes without being logged in. 
