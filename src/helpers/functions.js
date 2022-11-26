import { firebase } from "./firebase";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import { useState, useEffect } from "react";
import { toastErrorNotify, toastSuccessNotify } from "./toastNotify";

// Firebase Veri Ekleme
export const AddTechnologie = (title, imageUrl, explain, date, user) => {
  const db = getDatabase(firebase);
  const technologieRef = ref(db, "technologies/");
  const newTechnologieRef = push(technologieRef);
  console.log(user);
  set(newTechnologieRef, {
    username: user ? user.userName : user.email.split("@")[0],
    title: title,
    imageUrl: imageUrl,
    text: explain,
    date: date,
  });
  toastSuccessNotify("Added Successfully");
};

// Firebasedan Veri Çekme
export const MyUseFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contactList, setContactList] = useState();
  useEffect(() => {
    const db = getDatabase(firebase);
    const technologieRef = ref(db, "technologies/");

    onValue(technologieRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];
      console.log("DATA :", data);
      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setContactList(userArray);
      setIsLoading(false);
    });
  }, []);

  return { isLoading, contactList };
};

// Veriyi Silme

export const DeleteTechnologie = (id) => {
  const db = getDatabase(firebase);
  remove(ref(db, "technologies/" + id));
  toastErrorNotify("Deleted Successfully");
};

// Veriyi Değiştirme

export const UpdateTechnologie = (info) => {
  const db = getDatabase(firebase);
  // const technologieRef = ref(db, "technologies/");
  const updates = {};

  updates["technologies/" + info.id] = info;

  return update(ref(db), updates);
};
