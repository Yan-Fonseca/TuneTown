import {initializeApp} from 'firebase/app'


const config = {
    apiKey: "AIzaSyAA1FMvpZBCI4j7K-QgAGiQWtytjuduAb4",
    authDomain: "tunetown-176ca.firebaseapp.com",
    projectId: "tunetown-176ca",
    storageBucket: "tunetown-176ca.appspot.com",
    messagingSenderId: "354615473690",
    appId: "1:354615473690:web:d91229b53ba3d484f783a3"
}

const firebaseapp = initializeApp(config);

const db = firebaseapp.firestore();
const userCollection = db.collection('usuários');

export const createUser = user => {
    return userCollection.add(user);
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