import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../helpers/toastNotify";
//=====IMPORT KISIM BITIMI
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
export const firebase = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebase);

//To Create New User

export const createUser = async (
  email,
  password,
  userName,
  navigate,
  setUser
) => {
  try {
    //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    toastSuccessNotify("Yeni Kullanici Olusturuldu!");
    navigate("/");
    setUser({
      userName: userCredential.user.displayName
        ? userCredential.user.displayName
        : userCredential.user.email.split("@")[0],
      email: email,
    });
  } catch (error) {
    toastErrorNotify(error.message.split("/")[1].split(")")[0].toUpperCase());
  }
};

//Login with Email and Password
export const signIn = async (email, password, navigate, user, setUser) => {
  try {
    //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    console.log("Logged in successfully!", userCredential);
    toastSuccessNotify("Logged in successfully!");
    setUser({
      userName: userCredential.user.displayName
        ? userCredential.user.displayName
        : userCredential.user.email.split("@")[0],
      email: email,
    });
  } catch (error) {
    toastErrorNotify(error.message.split("/")[1].split(")")[0].toUpperCase());
  }
};

//Google ile Giris Yapabilmek Icin
export const signInWithGoogle = (setUser, navigate) => {
  //? Google ile giriş yapılması için kullanılan firebase metodu
  const provider = new GoogleAuthProvider();
  //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
      toastSuccessNotify("Logged in successfully with google!");
      setUser({
        userName: result.user.displayName,
        email: result.user.email,
      });
    })
    .catch((error) => {
      // Handle Errors here.
      toastErrorNotify(error.message.split("/")[1].split(")")[0].toUpperCase());
    });
};

//LOGOUT KISMI
export const logOut = (setUser, navigate) => {
  signOut(auth);
  setUser({});
  toastSuccessNotify("Logged out successfully!");
  navigate("/login");
};

//FORGOT PASSWORD KISIM
export const forgotPassword = (email) => {
  //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      toastWarnNotify("Please check your mail box");
    })
    .catch((error) => {
      toastErrorNotify(error.message.split("/")[1].split(")")[0].toUpperCase());
    });
};

export const userObserver = (setCurrentUser) => {
  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user observer calisiyor ", user);
      const { email, displayName, photoURL } = user;
      setCurrentUser({
        email,
        userName: displayName ? displayName : email.split("@")[0],
        photoURL,
      });
    } else {
      console.log("user logged out");
      setCurrentUser({});
    }
  });
};
