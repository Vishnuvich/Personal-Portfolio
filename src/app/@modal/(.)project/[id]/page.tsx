import React from "react";
import ProjectModal from "../../../../components/ProjectModal";
import { getProjectBySlug } from "../../../../actions/project-action";

export default async function ProjectModalPage({ params: { id } }: { params: { id: string } }) { 
  const projectData = await getProjectBySlug(id)
  return (
    <>
      <ProjectModal data={projectData} />
    </>
  );
}