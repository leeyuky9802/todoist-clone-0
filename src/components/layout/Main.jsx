import React, { useState } from "react"; // Make sure to import useState
import { AddProject } from "../AddProject";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";
import { AddTask } from "../AddTask";

export const Main = () => {
    const [showAddProject, setShowAddProject] = useState(false);
    const [showAddTask, setShowAddTask] = useState(false);

    return (
        <>
            { showAddProject && <AddProject
                showAddProject={showAddProject} 
                setShowAddProject={setShowAddProject}/>}
            { showAddTask && <AddTask 
                showAddTask={showAddTask}
                setShowAddTask={setShowAddTask}/>}
            <div className="flex h-full">
                <Sidebar 
                    showAddProject={showAddProject} 
                    setShowAddProject={setShowAddProject}/>
                <Content 
                    showAddTask={showAddTask}
                    setShowAddTask={setShowAddTask}/>
            </div>
            
        </>
    );
}