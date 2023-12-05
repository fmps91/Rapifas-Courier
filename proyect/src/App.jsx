import { useEffect, useState } from "react";
import { db } from "./data/config_firebase";

const App = () => {
  const initVls = {
    tasks: [],
  };
  const [values, setValues] = useState(initVls);

  useEffect(() => {
    const action = async () => getData();
    action();
  }, []);

  const getData = async () => {
    try {
      const resp = await db
        .collection("tasks")
        .get()
        .then((data) => {
          return data.docs.map((vl) => vl.data());
        })
        .catch((e) => {
          console.log(e);
          return [];
        });
      setValues({ ...values, tasks: resp });
    } catch (error) {
      console.log(error);
      setValues({ ...values, tasks: [] });
      return [];
    }
  };
  return (
    <div>
      <h1>Tareas</h1>
      <ul>
        {values?.tasks.map((task, index) => (
          <li key={index}>{task.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

// import { useEffect, useState } from "react";
// import "./App.css";
// import { db } from "./data/config_firebase";

// /* const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Get a list of cities from your database
// async function getTasks() {
//   const taskCol = collection(db, 'tasks');
//   const taskSnapshot = await getDocs(taskCol);
//   const taskList = taskSnapshot.docs.map(doc => doc.data());
//   return taskList;
// } */

// /* async function postTasks() {
//   const tasks = collection(db, 'tasks');
//   await addDoc(tasks,{"nombre":"miguel","apellido":"parra"});
// } */
// /*  setTasks(firebaseApp
//     .firestore()
//     .collection('tasks')); */
// //const tasks = useFirestoreCollection(tasksRef).docs.map(d => ({id: d.id, ...d.data()})); */

// /* const taskCol = collection(db, 'tasks');
//   const taskSnapshot = await getDocs(taskCol);

//   const tasks = taskSnapshot.docs.map(doc => doc.data());
//   console.log(tasks)
//  */
// //const [count, setCount] = useState(0);
// const Task = {
//   nombre: '',
//   apellido: false,
//   id:null,
// };
// const [ tasks, setTasks ] = useState<Task>([])
// async function App() {
//   // const initvl = { tasks: [] };

//   // const [values, setValues] = useState(initvl);

// useEffect(() => {
//   const action = async () => getData();
//   action();
// }, []);

// const getData = async () => {
//   try {
//     const resp = await db
//       .collection("tasks")
//       .get()
//       .then((data) => {
//         console.log("data firebase:", data);
//         return data.docs.map((vl) => vl.data());
//       })
//       .catch((e) => {
//         console.log(e);
//         return [];
//       });
//     console.log("resp fb: ", resp);
//     setValues({ ...values, tasks: resp });
//   } catch (error) {
//     console.log(error);
//     setValues({ ...values, tasks: [] });
//     return [];
//   }
// };

//   /* setTasks([
//     {"id":'1',"nombre":"carlos","apellido":"torres"},
//     {"id":'2',"nombre":"cesar","apellido":"villa"}
//   ]) */

//   //tasks.push({"id":'1',"nombre":"carlos","apellido":"torres"});
//   //tasks.push({"id":'2',"nombre":"cesar","apellido":"villa"});
//   return (
//     <div>Hellow</div>
//     // <>
//     //   {/* <h1>My favorite color is {color}!</h1> */}

//     //   <ul>
//     //     {/* {(values.tasks ?? []).map((task) => (
//     //       <li key={task.nombre}>
//     //         {task.nombre}.........{task.apellido}
//     //       </li>
//     //     ))} */}
//     //   </ul>
//     // </>
//   );
// }

// export default App;
