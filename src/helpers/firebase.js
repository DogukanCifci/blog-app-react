import { initializeApp } from "firebase/app";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDmhD42P3U2DvWn34T96ue_1V0pnvWhjYY",
  authDomain: "blog-app-bdac3.firebaseapp.com",
  databaseURL: "https://blog-app-bdac3-default-rtdb.firebaseio.com",
  projectId: "blog-app-bdac3",
  storageBucket: "blog-app-bdac3.appspot.com",
  messagingSenderId: "323407458796",
  appId: "1:323407458796:web:a3d61b20671ec8395b90c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

//To Create New User

export const createUser = async (email, password, userName) => {
  try {
    //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      userName
    );
    console.log("YENI KULLANICI OLUSTURULDU");
  } catch (error) {
    alert(error.message);
  }
};
