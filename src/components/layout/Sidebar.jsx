import React from 'react';
import { collatedTasks } from '../../constants/initialValues';
import { useProjectsValue, useSelectedProjectValue } from '../../context';
import { CollatedTasks } from '../CollatedTasks';

// eslint-disable-next-line react/prop-types
export const Sidebar = ({showAddProject, setShowAddProject}) => {
  const {setSelectedProject} = useSelectedProjectValue();
  const {projects} = useProjectsValue();

  return (
    <div className='basis-80 flex flex-col h-full'>
      <div key="collated-taskgroup" className='p-1.5'>
        <ul className='grid grid-cols-2'>
          {
            collatedTasks.map((taskg) => {
              return (<CollatedTasks id={taskg.id} key={taskg.id} handleClick={() => setSelectedProject(taskg.id)} name={taskg.name} icon={<taskg.icon />}/>
            )})
          }
        </ul>
        
      </div>

      <div key="projectlist" className='p-1.5'>
        <h1 className='text-2xl'>Projects</h1>
        <ul>
          {
            projects.map((project) => {
              return (<li key={project.projectId}>
                <button onClick={() => setSelectedProject(project.projectId)}>
                {project.name}
                </button>
              </li>)
            })
          }
        </ul>
      </div>

      <button className='mt-auto' onClick={() => {
        setShowAddProject(!showAddProject);
      }}>Add Project</button>
    </div>
  )
};
