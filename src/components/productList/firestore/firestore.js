// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query, 
  where,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzvX-b88ivyNXrakDswydG0KY8SymeET4",
  authDomain: "cursoreact-d3077.firebaseapp.com",
  projectId: "cursoreact-d3077",
  storageBucket: "cursoreact-d3077.appspot.com",
  messagingSenderId: "801869882674",
  appId: "1:801869882674:web:4850aaa8569f214532a32b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getAllProducts() {
  const mycollection = collection(db, "zapatillas");
  let snapShotDB = await getDocs(mycollection);
  let dataDocs = snapShotDB.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });

  return dataDocs;
}

export async function GetProductById(idItem) {
  const document = doc(db, "zapatillas", idItem);
  let snapShotDB = await getDoc(document);
  const docFormateado= { ...snapShotDB.data(), id: snapShotDB.id}
  return docFormateado;

}
export async function getProductByCategory(cat) {
  const mycollection = collection(db, "zapatillas");
  const queryCategory = query(mycollection, where('category', '==', cat))
  const respuesta = await getDocs(queryCategory);
  let dataDocs = respuesta.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });

  return dataDocs;
}
//

// Initialize Firebase

export default db
