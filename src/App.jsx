import { ProjectsProvider, SelectedProjectProvider, TasksProvider } from "./context"
import { Main } from "./components/layout/Main";
import React from "react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TasksProvider>
        <SelectedProjectProvider>
          <ProjectsProvider>
            <Main />
          </ProjectsProvider>
        </SelectedProjectProvider>
      </TasksProvider>
    </LocalizationProvider>
    
  )
}

export default App;
