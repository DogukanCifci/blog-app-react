import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

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
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

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
      password,
      userName
    );
    console.log("YENI KULLANICI OLUSTURULDU");
    navigate("/");
    setUser({
      userName: userName,
      email: email,
    });
  } catch (error) {
    alert(error.message);
  }
};

//Login with Email and Password
export const signIn = async (email, password, navigate, user, setUser) => {
  try {
    //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
    console.log("Logged in successfully!");
    setUser({
      userName: "Dogukan",
      email: email,
    });
  } catch (error) {
    console.log(error.message);
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
      console.log("Logged in successfully with google!");
      setUser({
        userName: result.user.displayName,
        email: result.user.email,
      });
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
};
