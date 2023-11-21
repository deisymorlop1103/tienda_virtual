import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

firebase.initializeApp(firebaseConfig);

//++++++++++++++++++++++++++++++++++++++
function signInWithGoogle() {
  // Obtenemos el proveedor de autenticación de Google.
  const provider = firebase.auth.getProvider('google');

  // Solicitamos la autorización del usuario.
  provider.signInWithPopup().then((result) => {
    // Si la autorización se realizó correctamente, obtenemos el token de ID del usuario.
    const token = result.credential.idToken;

    // Usamos el token de ID para iniciar la sesión del usuario.
    const user = firebase.auth().signInWithCustomToken(token);

    // Si la sesión se inició correctamente, mostramos un mensaje de éxito.
    if (user) {
      alert('Iniciaste sesión con éxito');
    }
  }).catch((error) => {
    // Si ocurrió un error, mostramos un mensaje de error.
    alert(error);
  });
}
