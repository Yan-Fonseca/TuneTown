import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, query, where, getDocs, addDoc, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyAA1FMvpZBCI4j7K-QgAGiQWtytjuduAb4",
    authDomain: "tunetown-176ca.firebaseapp.com",
    projectId: "tunetown-176ca",
    storageBucket: "tunetown-176ca.appspot.com",
    messagingSenderId: "354615473690",
    appId: "1:354615473690:web:d91229b53ba3d484f783a3"
};

const firebaseApp = initializeApp(config);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const userCollection = collection(db, 'usuários');

// Métodos de manipulação no firebase:

export const registerUser = async (email, senha) => {
    return await createUserWithEmailAndPassword(auth, email, senha);
};

export const createUserData = async (user) => {
    return await addDoc(userCollection, user);
};

export const signInUser = async (email, senha) => {
    return await signInWithEmailAndPassword(auth, email, senha);
};

export const signOutUser = async () => {
    return await signOut(auth);
};

export const getUser = async (id) => {
    const userDoc = await getDoc(doc(userCollection, id));
    return userDoc.exists() ? userDoc.data() : null;
};

export const updateUser = async (id, user) => {
    return await updateDoc(doc(userCollection, id), user);
};

export const deleteUser = async (id) => {
    return await deleteDoc(doc(userCollection, id));
};
  

export const fetchData = async (parametros) => {
    let q = userCollection;
    for (const campo in parametros) {
        const valor = parametros[campo];
        if (valor !== "") {
            q = query(q, where(campo, "==", valor));
        }
    }

    const querySnapshot = await getDocs(q);
    const usersData = querySnapshot.docs.map((doc) => doc.data());

    return usersData;
};
