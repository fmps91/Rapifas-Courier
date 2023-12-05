import { useEffect, useState } from 'react';
//import viteLogo from '../public/vite.svg'
import {db} from './data/configFirebase'
import './App.css'


/* const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getTasks() {
  const taskCol = collection(db, 'tasks');
  const taskSnapshot = await getDocs(taskCol);
  const taskList = taskSnapshot.docs.map(doc => doc.data());
  return taskList;
} */

/* async function postTasks() {
  const tasks = collection(db, 'tasks');
  await addDoc(tasks,{"nombre":"miguel","apellido":"parra"});
} */



async function App() {
  //const [count, setCount] = useState(0);
  /* const Task = {
    nombre: '',
    apellido: false,
    id:null,  
  }; */
  //const [ tasks, setTasks ] = useState<Task>([])

const initvl={tasks:[]}


 const [data1, setData1]=useState(initvl)
 /*  setTasks(firebaseApp
    .firestore()
    .collection('tasks')); */
  //const tasks = useFirestoreCollection(tasksRef).docs.map(d => ({id: d.id, ...d.data()})); */
  
  

  /* const taskCol = collection(db, 'tasks');
  const taskSnapshot = await getDocs(taskCol);

  
  const tasks = taskSnapshot.docs.map(doc => doc.data());
  console.log(tasks)
 */

  useEffect(() => {
  
    getData();
    
  },[])

  const getData =async()=>{
    try {
      const data=await db.collection('tasks').get().then(data=>{
        console.log(data);
        return data.docs.map(doc => doc.data());
      })
      
      setData1({...data1,tasks:data})
    } catch (error) {
      console.log(error);
    }
  };
  /* setTasks([
    {"id":'1',"nombre":"carlos","apellido":"torres"},
    {"id":'2',"nombre":"cesar","apellido":"villa"}
  ]) */

  //tasks.push({"id":'1',"nombre":"carlos","apellido":"torres"});
  //tasks.push({"id":'2',"nombre":"cesar","apellido":"villa"});
  return (
    <>

      <h1>My favorite color is {color}!</h1>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <ul>
        {(data1.tasks??[]).map((task) => (
          <li key={task.nombre}>{task.nombre}.........{task.apellido}</li>
        ))}
      </ul>
      
    </>
  )
}

export default App
