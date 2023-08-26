import React from 'react';
import { render } from '@testing-library/react';
import { test } from 'vitest';
import { ProjectsProvider, SelectedProjectProvider, TasksProvider, useProjectsValue, useSelectedProjectValue, useTasksValue } from '../context';

test('tasks context provides the expected defaults', () => {
  const TestComponent = () => {
    const { tasks } = useTasksValue();
    console.log(tasks);
    return <div>{tasks.join(', ')}</div>;
  };

  render(
    <TasksProvider>
      <TestComponent />
    </TasksProvider>
  );

});

test('testing projects provider', () => {
  const TestComonent = () => {
    const {projects} = useProjectsValue();
    console.log(projects);

    return <div>{projects.join(', ')}</div>;
  }

  render(
    <ProjectsProvider>
      <TestComonent />
    </ProjectsProvider>
  )
})

test('testing selected project provider', () => {
  const TestComonent = () => {
    const {selectedProject} = useSelectedProjectValue();
    console.log(selectedProject);

    return <div>{selectedProject}</div>;
  }

  render(
    <SelectedProjectProvider>
      <TestComonent />
    </SelectedProjectProvider>
  )
})
