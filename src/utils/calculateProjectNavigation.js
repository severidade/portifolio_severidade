export default function calculateProjectNavigation( slug_current, projectList ) {

  const currentIndex = projectList.findIndex((project) => project.slug === slug_current);
  const totalProjects = projectList.length;

  const previousIndex = currentIndex === 0 ? totalProjects - 1 : currentIndex - 1;
  const nextIndex = currentIndex === totalProjects - 1 ? 0 : currentIndex + 1;

  const previousProject = projectList[previousIndex];
  const nextProject = projectList[nextIndex];

  return {
    previousProject,
    nextProject,
  };
}