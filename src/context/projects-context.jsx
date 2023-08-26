import React, { useContext, useState, createContext } from "react";
import PropTypes from 'prop-types';
import { initProjects } from "../constants/initialValues";

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState(initProjects);
    const [newId, setNewId] = useState(6);

    return (
        <ProjectsContext.Provider value = {{projects, setProjects, newId, setNewId}}>
            {children}
        </ProjectsContext.Provider>
    )
}

export const useProjectsValue = () => useContext(ProjectsContext);

ProjectsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};