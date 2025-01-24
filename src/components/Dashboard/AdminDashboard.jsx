import React from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

const AdminDashboard = (props) => {
  return ( 
  <div className='h-screen w-full p-10'>
    <Header changeUser={props.changeUser}/>
    <CreateTask setUserData={props.setUserData} userData={props.userData} />
    <AllTask data={props.userData} />

  </div>

   )
}
 
export default AdminDashboard;