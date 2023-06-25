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

export const registerUser = (email, senha) => {
    return createUserWithEmailAndPassword(auth, email, senha);
}

export const createUserData = user => {
    return addDoc(userCollection, user);
}

export const signInUser = async (email, senha) => {
    const { user } = await signInWithEmailAndPassword(auth, email, senha);
    return user.uid;
};

export const signOutUser = async () => {
    return await signOut(auth);
}

export const getUser = async id => {
    const userDoc = await getDoc(doc(userCollection, id));
    return userDoc.exists() ? userDoc.data() : null;
}

export const updateUser = (id, user) => {
    return updateDoc(doc(userCollection, id), user);
}

export const deleteUser = id => {
    return deleteDoc(doc(userCollection, id));
}

export const updateUserData = async (userData) => {
    const userId = auth.currentUser.email;
    const querySnapshot = await getDocs(userCollection);
    const userDocRef = querySnapshot.docs.find((doc) => doc.data().email === userId);
    if (userDocRef) {
      await updateDoc(userDocRef.ref, userData);
    } else {
      console.log('Documento do usuário não encontrado');
    }
}

export const getCurrentUserEmail = () => {
    return auth.currentUser.email;
}

export const getUserDocumentByEmail = async (email) => {
    const q = query(userCollection, where("email", "==", email));
    const querySnapshot = await getDocs(q);
  
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      return userDoc.data();
    } else {
      return null;
    }
  }

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
