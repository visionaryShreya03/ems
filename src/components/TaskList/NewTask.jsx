import React from 'react';

const NewTask = ({ data, updateTaskStatus }) => {
  const title = data.title || data.taskTitle;
  const description = data.description || data.taskDescription;
  const date = data.date || data.taskDate;

  return (
    <div className='h-full w-[300px] flex-shrink-0 p-5 bg-yellow-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
        <h4 className='text-sm'>{date}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{title}</h2>
      <p className='text-sm mt-2'>
        {description}
      </p>
      <div className='mt-6'>
        <button
          className='bg-blue-500 rounded font-medium py-1 px-2 text-xs'
          onClick={() => updateTaskStatus(data.id, 'active')}
        >
          Accept Task
        </button>
      </div>
    </div>
  )
}

export default NewTask;

