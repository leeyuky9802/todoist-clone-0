import React, { useContext, useState, createContext } from "react";
import PropTypes from 'prop-types';

export const SelectedProjectContext = createContext();

export const SelectedProjectProvider = ({children}) => {
    const [selectedProject, setSelectedProject] = useState(0);


    return (
        <SelectedProjectContext.Provider value = {{selectedProject, setSelectedProject}}>
            {children}
        </SelectedProjectContext.Provider>
    )

}

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);

SelectedProjectProvider.propTypes = {
    children: PropTypes.node.isRequired,
};