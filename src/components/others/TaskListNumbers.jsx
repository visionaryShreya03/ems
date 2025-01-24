import React from "react";

const TaskListNumbers = ({ taskCounts }) => {

    return (
        <div className='flex mt-10 justify-between gap-5 screen'>
            <div className='py-6 px-9 rounded-xl w-[45%] bg-blue-400'>
                <h2 className='text-3xl font-bold'>{taskCounts.newTask}</h2>
                <h3 className='text-xl mt-0.5 font-medium'>New Task</h3>
            </div>
            <div className='py-6 px-9 rounded-xl w-[45%] bg-green-400'>
                <h2 className='text-3xl font-bold'>{taskCounts.completed}</h2>
                <h3 className='text-xl mt-0.5 font-medium'>Completed Task</h3>
            </div>
            <div className='py-6 px-9 rounded-xl w-[45%] bg-yellow-400'>
                <h2 className='text-3xl font-bold text-black'>{taskCounts.active}</h2>
                <h3 className='text-xl mt-0.5 font-medium text-black'>Accepted Task</h3>
            </div>
            <div className='py-6 px-9 rounded-xl w-[45%] bg-red-400'>
                <h2 className='text-3xl font-ibold'>{taskCounts.failed}</h2>
                <h3 className='text-xl mt-0.5 font-medium'>Failed Task</h3>
            </div>
        </div>
    );
}

export default TaskListNumbers;
