import {initializeApp} from 'firebase/app'
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { query, where, getDocs } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyAA1FMvpZBCI4j7K-QgAGiQWtytjuduAb4",
    authDomain: "tunetown-176ca.firebaseapp.com",
    projectId: "tunetown-176ca",
    storageBucket: "tunetown-176ca.appspot.com",
    messagingSenderId: "354615473690",
    appId: "1:354615473690:web:d91229b53ba3d484f783a3"
}

const firebaseapp = initializeApp(config);

const auth = getAuth(firebaseapp);
const db = firebaseapp.firestore();
const userCollection = db.collection('usuários');

// Métodos de manipulação no firebase:

export const registerUser = (email,senha) => {
    return createUserWithEmailAndPassword(auth,email,senha);
}

export const createUserData = user => {
    return userCollection.add(user);
}

export const signInUser = (email,senha) => {
    return signInWithEmailAndPassword(auth,email,senha);
}

export const signOutUser = () => {
    return signOut(auth);
}

export const getUser = async id => {
    const user = await userCollection.doc(id).get();
    return user.exist ? user.data() : null;
}

export const updateUser = (id,user) => {
    return userCollection.doc(id).update(user);
}

export const deleteUser = id => {
    return userCollection.doc(id).delete();
}

export const fetchData = async (parametros) => {
    let q = userCollection(db, "usuários");
    for (const campo in parametros) {
        const valor = parametros[campo];
        if (valor != "") {
            q = query(q, where(campo, "==", valor));
        }
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot;
};
