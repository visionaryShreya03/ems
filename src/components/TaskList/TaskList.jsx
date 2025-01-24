import React, { useState } from 'react';
import AcceptedTask from './AcceptTask';
import NewTask from './NewTask';
import FailedTask from './FailedTask';
import CompletedTask from './CompleteTask';

const TaskList = ({ data, updateTaskStatus }) => {
    return (
        <div id='taskList' className='h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap '>
            {data.tasks.map((elem, idx) => {
                if(elem.active){
                    return <AcceptedTask key={idx} data={elem} updateTaskStatus={updateTaskStatus}/>
                }
                if(elem.newTask){
                    return <NewTask key={idx} data={elem} updateTaskStatus={updateTaskStatus}/>
                }
                if(elem.completed){
                    return <CompletedTask key={idx} data={elem} updateTaskStatus={updateTaskStatus}/>
                }
                if(elem.failed){
                    return <FailedTask key={idx} data={elem} updateTaskStatus={updateTaskStatus}/>
                }
            })}
        </div>
    );
}

export default TaskList;
