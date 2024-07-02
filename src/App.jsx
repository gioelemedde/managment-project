import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectSideBar from "./components/ProjectSideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selctedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectState((prev) => {
      const newTask = {
        text:text,
        projectId: prev.selctedProjectId,
        id: Math.random(),
      };
      return {
        ...prev,
       tasks: [newTask,...prev.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((pre) => {
      return {
        ...pre,
        tasks: pre.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((pre) => {
      return {
        ...pre,
        selctedProjectId: id,
      };
    });
  }

  function handleDeleteProject(id) {
    setProjectState((pre) => {
      return {
        ...pre,
        selctedProjectId: undefined,
        projects: pre.projects.filter(
          (project) => project.id !== pre.selctedProjectId
        ),
      };
    });
  }

  function handeStartAddProject() {
    setProjectState((pre) => {
      return {
        ...pre,
        selctedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prev) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prev,
        selctedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }

  console.log(projectState);

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selctedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelet={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selctedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectState.selctedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handeStartAddProject} />;
  }
  return (
    <main className=" h-screen my-8 flex gap-8 ">
      <ProjectSideBar
        onStartAddProject={handeStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selctedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
