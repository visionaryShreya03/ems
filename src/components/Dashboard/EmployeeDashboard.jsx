import React from 'react';
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  //console.log(data.id)
  return (
    <div>
      <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumbers taskCounts={props.data.taskCounts} />
        <TaskList data={props.data} updateTaskStatus={props.updateTaskStatus} />
      </div>
    </div>
  )
}

export default EmployeeDashboard;
