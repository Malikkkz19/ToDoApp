import React, { useState } from 'react'

const data = [
    {
        _id: 'qwerty1',
        title: 'Finish the first project',
        isComplete: false,
    },
    {
        _id: 'qwerty2',
        title: 'Read the book',
        isComplete: false,
    },
    {
        _id: 'qwerty3',
        title: 'Recording new video',
        isComplete: true,
    },
]


const Home = () => {
    const [todos, setTodos] = useState(data);
    return (
        <div classname='text-white w-4/5 mx-auto'>
            <h1 className='text-gray-300 text-2xl font-bold text-center'>To-Do React App</h1>
            {todos.map(todo => {
                       
            }
            )}
        </div>
    )
}

export default Home;