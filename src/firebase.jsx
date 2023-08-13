import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, setDoc } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4aNAdEuMOnh-_BfsNqHAl5Mc-11HjzCY",
  authDomain: "todoist-a55d6.firebaseapp.com",
  projectId: "todoist-a55d6",
  storageBucket: "todoist-a55d6.appspot.com",
  messagingSenderId: "410855995120",
  appId: "1:410855995120:web:b314f178122d8e3a77f435",
  measurementId: "G-5MJL1C5JWY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const tasksRef = collection(db, 'tasks');
const projectsRef = collection(db, 'projects');

export const addTask = (object) => {
  setDoc(tasksRef, object);
}

export const addProject = (object) => {
  setDoc(projectsRef, object);
}

export async function readProjects () {
  return await getDocs(projectsRef);
}

export function readTasks () {
  return getDocs(tasksRef);
}