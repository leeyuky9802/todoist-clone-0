import React from "react";
import { useProjectsValue } from "../context";

// eslint-disable-next-line react/prop-types
export const AddProject = ({showAddProject, setShowAddProject}) => {
    const {projects, setProjects, newId, setNewId} = useProjectsValue();
    return (
    <>
    <form onSubmit={(e) =>{
        e.preventDefault();
        const projectNameValue = e.target.elements.projectName.value;
        setProjects([
            ...projects,
            {
                name: projectNameValue,
                id: newId
            }
        ]);
        setNewId(newId + 1);

        setShowAddProject(!showAddProject);
        
    }}>
        <label htmlFor="projectName">Project Name:</label>
        <br/>
        <input type="text" id="projectName"/>
        <input type="submit" value="Create"></input>
    </form>
    </>
    )
    
}