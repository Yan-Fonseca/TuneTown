import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, query, where, getDocs, addDoc, getDoc, doc, updateDoc, deleteDoc, limit } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, deleteObject, uploadBytesResumable } from "firebase/storage";

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
const calendarCollection = collection(db, 'calendarios');
const storage = getStorage(firebaseApp, "gs://tunetown-176ca.appspot.com");

// Métodos de manipulação no firebase:

export const registerUser = (email, senha) => {
    return createUserWithEmailAndPassword(auth, email, senha);
}

export const createUserData = user => {
    return addDoc(userCollection, user);
}

export const createUserCalendar = calendar => {
    return addDoc(calendarCollection, calendar);
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

export const uploadFileToFirebase = (file,email) => {
  return new Promise((resolve, reject) => {
    email = email.replace(".com","");

    const fileName = isImageOrVideo(file.name)+ '/' + email + '_' + file.name;
    
    const storageRef = ref(storage, fileName);

    // Fazer o upload do arquivo para o Firebase Storage
    const uploadTask = uploadBytesResumable(storageRef,fileName);
    
    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Progresso do upload:', progress);
      },
      error => {
        reject(error);
      },
      () => {
        // Quando o upload for concluído, obter a URL do arquivo e resolver a Promise com a URL
          getDownloadURL(uploadTask.snapshot.ref)
          .then(url => {
            resolve(url);
          })
          .catch(error => {
            reject(error);
          });
      }
    );
  });
}

function isImageOrVideo(fileName) {
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];
  const videoExtensions = ['mp4', 'mov', 'avi', 'mkv'];

  // Extrai a extensão do nome do arquivo
  const fileExtension = fileName.split('.').pop().toLowerCase();

  // Verifica se a extensão corresponde a uma imagem
  if (imageExtensions.includes(fileExtension)) {
    return 'image';
  }

  // Verifica se a extensão corresponde a um vídeo
  if (videoExtensions.includes(fileExtension)) {
    return 'video';
  }

  return 'unknown';
}

export const deleteFileFromFirebase = async (fileURL) => {
  
  // Obter a referência do arquivo no storage do Firebase
  const storageRef = ref(storage, fileURL);

  // Excluir o arquivo
  deleteObject(storageRef).then(() => {
    alert('imagem do trabalho excluída!');
  }).catch((error) => {
    alert('Erro ao deletar imagem no Banco de dados: ' + error);
  })

}

export const updateUserDataByEmail = async (userData, email) => {
    const querySnapshot = await getDocs(userCollection);
    const userDocRef = querySnapshot.docs.find((doc) => doc.data().email === email);
    if (userDocRef) {
      await updateDoc(userDocRef.ref, userData);
    } else {
      console.log('Documento do usuário não encontrado');
    }
}

export const updateCalendarData = async (calendarData) => {
    const userId = auth.currentUser.email;
    const querySnapshot = await getDocs(calendarCollection);
    const calendarDocRef = querySnapshot.docs.find((doc) => doc.data().email === userId);
    if (calendarDocRef) {
      await updateDoc(calendarDocRef.ref, calendarData);
    } else {
      console.log('Documento do calendário não encontrado');
    }
}

export const getCurrentUserEmail = () => {
    return auth.currentUser.email;
}

export const getBestUsers = async () => {
    const q = query(userCollection, where("avaliacaoMedia", ">=", 4.0), limit(16));
    const querySnapshot = await getDocs(q);
    const usersData = querySnapshot.docs.map((doc) => doc.data());
  
    return [...usersData];
  };

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

export const getUserCalendarByEmail = async (email) => {
    const q = query(calendarCollection, where("email", "==", email));
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

export const fetchDataName = async (name) => {
    
    let q = query(userCollection, where("nome", "==", name))
    const querySnapshot = await getDocs(q);
    const usersData = querySnapshot.docs.map((doc) => doc.data());

    return usersData;
};

