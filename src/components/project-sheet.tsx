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
import { Logo } from "./logo";
import { motion } from "motion/react";

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
            <Logo as="h2" />
          </SheetHeader>
          <div className="p-4">
            <SheetTitle className="text-6xl font-bold font-playful">
              {project?.name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8 + index * 0.05,
                    ease: "easeInOut",
                  }}
                  style={{ display: "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </SheetTitle>
          </div>
        </SheetContent>
      )}
    </_Sheet>
  );
}
