import React from 'react';
import { useSelectedProjectValue, useTasksValue } from '../../context';
import { selectTasks } from '../../helpers';

// eslint-disable-next-line react/prop-types
export const Content = ({showAddTask, setShowAddTask}) => {
    let {tasks} = useTasksValue();
    let {selectedProject} = useSelectedProjectValue();
    
    let selectedTasks = selectTasks(tasks, selectedProject);


    return (
        <div className='grow basis-40'>
            <ul>
                {
                    selectedTasks.map((task) => {
                        return (
                            <li key={task.content}>
                                {task.content}
                            </li>
                        )
                    })
                }
            </ul>

            <button onClick={() => {
                setShowAddTask(!showAddTask);
                }}>Add Task</button>
        </div>
    )
}
