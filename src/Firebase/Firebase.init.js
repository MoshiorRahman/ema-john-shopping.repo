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
Step-2:
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register

---------------------------
Step-3:
1. Set up sign in method
2. Setup sign out method
3. user State
4. Special observer
5. return necessary methods and states from useFirebase

-----------------------------
Step-4:
1. create a auth context
2. create context provider
3. use auth provider
4. create useAuth hook
*/