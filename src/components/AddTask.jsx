import React, { useRef, useState } from "react";
import { useProjectsValue, useTasksValue } from "../context";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Timestamp } from "firebase/firestore";

// eslint-disable-next-line react/prop-types
export const AddTask = ({showAddTask, setShowAddTask}) => {
    const {tasks, setTasks} = useTasksValue();
    const [isSchedule, setIsScheduled] = useState(false);
    const {projects} = useProjectsValue();
    const projectIdPicker = useRef();
    const [date, setDate] = useState(dayjs());

    return (
        <form onSubmit={(e) =>{
            e.preventDefault();
            const taskContent = e.target.elements.taskContent.value;
            setTasks([
                ...tasks,
                {
                    content: taskContent,   
                    projectId: parseInt(projectIdPicker.current.options[projectIdPicker.current.selectedIndex].dataset.projectId),
                    isCompleted: false,
                    scheduled: isSchedule,
                    dueDate: isSchedule ? Timestamp.fromDate(date.toDate()):null
                }
            ]);
    
            setShowAddTask(!showAddTask);
            
        }}>
            <label htmlFor="taskContent">Task Content:</label>
            <input type="text" id="taskContent"/>

            <label htmlFor="selectProject">Select Project:</label>
            <select id="selectProject" ref={projectIdPicker}>
                {projects.map((project) => {
                    return <option key={project.projectId} data-project-id={project.projectId}>
                        {project.name}
                    </option>
                })}
            </select>

            {isSchedule && <DatePicker value={date} onChange={(newValue) => setDate(newValue)} />}

            <label htmlFor="isSchedule">Schedule</label>
            <input type="checkbox" id="isSchedule" onChange={() => setIsScheduled(!isSchedule)}/>

            <input type="submit" value="Create"></input>
        </form>
    )
}