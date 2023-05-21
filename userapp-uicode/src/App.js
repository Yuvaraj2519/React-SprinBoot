import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react';
import api from './component/axios';

function App(){

  const [users, setUsers] = useState();

  const getUsers = async() =>{

      try{
          const response = await api.get("/allUsers");
          console.log(response.data);
          setUsers(response.data)
      }
      catch(err){
          console.log(err);
      }
      
  }

  useEffect(()=>{
      getUsers();
  },[])

  return(
      <div className='App'>
        <div className='container'>
          <div className='card'>
            <div className='card-title'>
            <h2>User Detail</h2>
            </div>
            <div className='card-body'>
              <table className='table table-bordered'>
                <thead className='bg-dark text-white'>
                  <tr>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>EMAIL</td>
                    <td>Phone</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map(item =>(
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  );
}


export default App;
