import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import '../firebase'
import { addProject, addTask, readProjects, readTasks } from '../firebase';

export const FirebaseContext = createContext();
export const FirebaseProvider = ({ children }) => {
    let functions = {
        addTask: addTask,
        addProject: addProject,
        readTasks: readTasks,
        readProjects: readProjects
    }
  return (
    <FirebaseContext.Provider value={functions}>
      {children}
    </FirebaseContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFirebaseFunction = () => useContext(FirebaseContext);

FirebaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};