/*
  Ce fichier contient les variables de configuration
  reliées à Firebase et ses produits.
*/

// Configuration Firebase (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyBVNZayndvVPJI-c0dOF-KA6BuGYjd2s98",
  authDomain: "pvt-h21-pilon-marc.firebaseapp.com",
  databaseURL: "https://pvt-h21-pilon-marc-default-rtdb.firebaseio.com",
  projectId: "pvt-h21-pilon-marc",
  storageBucket: "pvt-h21-pilon-marc.appspot.com",
  messagingSenderId: "218748352260",
  appId: "1:218748352260:web:82998eebde20cec87f0251"
};
export default firebaseConfig;

// Nom de la collection principale
export const utilRef = "utilisateurs-ex5";
// Nom de la sous-collection
export const dossRef = "dossiers";