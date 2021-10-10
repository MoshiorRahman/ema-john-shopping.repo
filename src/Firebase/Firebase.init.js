import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";


const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/*
Steps for authentication
------------------------
Step-1: Initial Setup
1. firebase: create projects
2. create web app
3. get condiguration
4. initialize firebase
5. Enable auth method

--------------------------
Step-2: Setup Components
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register

---------------------------
Step-3:Set auth system
1. Set up sign in method
2. Setup sign out method
3. user State
4. Special observer
5. return necessary methods and states from useFirebase

-----------------------------
Step-4:Create auth context hook (useAuth)
1. create a auth context
2. create context provider
3. set context Provider context value
4. use auth provider
5. create useAuth hook

------------------------------
Step-5: Create Private route
1. create private Route
2. Set private route

-------------------------------
Step-6: Redirect after login
1. after login redirect user to their desired destination
*/