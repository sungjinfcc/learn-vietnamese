import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
} from "firebase/firestore/lite";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const initializeFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDq-6S-9SeNZf_kikGKvXx2SyUtkTu5hEQ",
    authDomain: "learnvietnamese-5fce8.firebaseapp.com",
    projectId: "learnvietnamese-5fce8",
    storageBucket: "learnvietnamese-5fce8.appspot.com",
    messagingSenderId: "575739507516",
    appId: "1:575739507516:web:bda75ccc7b094459d76439",
    measurementId: "G-V3Y6MR7VNK",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  function signInWithGoogle() {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const { user } = result;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const { email } = error.customData;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        alert(errorCode, errorMessage, email, credential);
      });
  }

  function logOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        alert("error signing out");
      });
  }

  async function getDataList(colName) {
    const myCol = collection(db, colName);
    const colSnapshot = await getDocs(myCol);
    const dataList = colSnapshot.docs.map((document) => document.data());
    return dataList;
  }

  async function getDocumentByUID(colName, uid) {
    const myCol = collection(db, colName);
    const myQuery = query(myCol, where("uid", "==", uid));
    const querySnapshot = await getDocs(myQuery);

    if (!querySnapshot.empty) {
      const documentSnapshot = querySnapshot.docs[0];
      const documentData = documentSnapshot.data();
      return documentData;
    }

    return null;
  }

  async function getRequests(uid) {
    const myCol = collection(db, "request");
    const myQuery = query(myCol, where("uid", "==", uid));
    const querySnapshot = await getDocs(myQuery);

    if (!querySnapshot.empty) {
      const documentDataArray = querySnapshot.docs.map((documentSnapshot) =>
        documentSnapshot.data()
      );
      return documentDataArray;
    }

    return null;
  }

  async function addData(colName, data, isUser = false, isFeedback = false) {
    const myCol = collection(db, colName);
    if (isUser) {
      const myQuery = query(myCol, where("uid", "==", data.uid));
      const querySnapshot = await getDocs(myQuery);

      if (querySnapshot.empty) {
        try {
          const docRef = await addDoc(myCol, data);
          alert("새 회원 데이터 등록: ", docRef.id);
        } catch (error) {
          alert("새 회원 데이터 등록 실패: ", error);
        }
      } else {
        // alert("Document with the same UID already exists.");
      }
    } else if (isFeedback) {
      try {
        const docRef = await addDoc(myCol, data);
        alert("문의가 접수되었습니다.");
      } catch (error) {
        alert("잠시 후 다시 접수해주세요.");
      }
    } else {
      // register form
      try {
        const docRef = await addDoc(myCol, data);
        alert("등록 되었습니다.");
      } catch (error) {
        alert("잠시 후 다시 등록해주세요.");
      }
    }
  }

  return {
    app,
    db,
    auth,
    getDataList,
    getDocumentByUID,
    getRequests,
    addData,
    signInWithGoogle,
    logOut,
  };
};

export default initializeFirebase;
