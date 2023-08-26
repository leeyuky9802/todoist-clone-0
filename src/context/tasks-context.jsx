import React, { useContext, useState, createContext } from "react";
import PropTypes from 'prop-types';
import { initTasks } from "../constants/initialValues";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState(initTasks);

    return (
        <TasksContext.Provider value = {{tasks, setTasks}}>
            {children}
        </TasksContext.Provider>
    )
}

export const useTasksValue = () => useContext(TasksContext);

TasksProvider.propTypes = {
    children: PropTypes.node.isRequired,
};