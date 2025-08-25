"use client";

import { useQueryState } from "nuqs";
import {
  Sheet as _Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { getProjectById } from "@/lib/assets/projects";
import { useEffect, useState } from "react";
import { Project } from "@/lib/domain/project";

export function ProjectSheet() {
  const [projectId, setProject] = useQueryState("project");
  const [dImage, setDImage] = useQueryState("d_image");

  const project = projectId
    ? getProjectById(projectId) ?? undefined
    : undefined;

  const handleResetQueryState = () => {
    setProject(null);
    setDImage(null);
    window.history.pushState({}, "", "/");
  };

  return (
    <Sheet
      project={project}
      defaultImage={dImage}
      resetQueryState={handleResetQueryState}
    />
  );
}

function Sheet({
  project,
  defaultImage,
  resetQueryState,
}: {
  project?: Project;
  defaultImage: string | null;
  resetQueryState: () => void;
}) {
  const [open, setOpen] = useState(!!project);

  useEffect(() => {
    setOpen(!!project);
  }, [project]);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    if (!open) {
      setTimeout(() => {
        resetQueryState();
      }, 320);
    }
  };

  return (
    <_Sheet open={open} onOpenChange={handleOpenChange}>
      {project && (
        <SheetContent side="left" className="w-[70vw] !max-w-[1000px]">
          <SheetHeader>
            <h2 className="lowercase font-bold text-4xl font-playful text-[#95d7ef]">
              Anaiya
            </h2>
            <SheetTitle>{project?.name}</SheetTitle>
          </SheetHeader>
        </SheetContent>
      )}
    </_Sheet>
  );
}
