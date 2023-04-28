import {
  getFirestore,
  collection,
  writeBatch,
  doc,
  query,
  getDocs,
} from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBQAQJRbR0NycHi0wT8rAjYkvVk8wQErhI",
  authDomain: "shreehari-ent.firebaseapp.com",
  projectId: "shreehari-ent",
  storageBucket: "shreehari-ent.appspot.com",
  messagingSenderId: "435765764955",
  appId: "1:435765764955:web:5e5b28c1e14a28ff12b07e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("Added products to the database successfully!!!!");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);
  return querySnapShot.docs.map((docSnapShot) => {
    return docSnapShot.data();
  });
};
