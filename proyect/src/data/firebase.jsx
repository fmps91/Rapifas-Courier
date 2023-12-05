

//Rapicourier
  const firebaseConfig = {
    apiKey: "AIzaSyBeocea8foBTEwkezrgudIcGMQ7NnHgs2E",
    authDomain: "rapicourier-fd256.firebaseapp.com",
    projectId: "rapicourier-fd256",
    storageBucket: "rapicourier-fd256.appspot.com",
    messagingSenderId: "284289082978",
    appId: "1:284289082978:web:e0e66a356ad8d2920a533b",
    measurementId: "G-4316T6CJL4"
  };
  
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  // Get a list of cities from your database
  async function getTask() {
    const taskCol = collection(db, 'tasks');
    const taskSnapshot = await getDocs(taskCol);
    const taskList = taskSnapshot.docs.map(doc => doc.data());
    return taskList;
  }

  async function postTask() {
    const tasks = collection(db, 'tasks');
    await addDoc(tasks,{"nombre":"miguel","apellido":"parra"});
  }

  export { getTask,postTask }