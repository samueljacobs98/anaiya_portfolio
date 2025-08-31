"use client";

import { useQueryState } from "nuqs";
import { Sheet as _Sheet, SheetContent, SheetTitle } from "./ui/sheet";
import { getProjectById } from "@/lib/assets/projects";
import { useEffect, useState } from "react";
import { Project } from "@/lib/domain/project";
import { motion } from "motion/react";
import { ImageCarousel } from "./ui/image-carousel";
import { ScrollArea } from "./ui/scroll-area";
import Image from "next/image";

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
          <ScrollArea className="h-full">
            <div className="flex flex-col items-start gap-12 p-4">
              <SheetTitle className="sticky top-0 z-10 text-6xl font-bold font-playful text-anaiya bg-background py-4 w-full">
                {project?.name.split("").map((char, index) => (
                  <motion.span
                    key={`${project.id}-char-${index}`}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + index * 0.05,
                      ease: "easeInOut",
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
                <div className="w-full h-12 bg-gradient-to-b from-background to-transparent absolute bottom-0 left-0 translate-y-full" />
              </SheetTitle>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
                className="w-full"
              >
                <ImageCarousel
                  images={project.getImages()}
                  options={{ loop: true, align: "center" }}
                />
              </motion.div>
              <div className="flex flex-col gap-4">
                {project.content.map((content) =>
                  content.type === "text" ? (
                    <div key={content.id}>
                      <p>{content.text}</p>
                    </div>
                  ) : (
                    <Image
                      key={content.id}
                      className="max-w-lg"
                      src={content.path}
                      alt={content.alt}
                      width={content.width}
                      height={content.height}
                    />
                  )
                )}
              </div>
            </div>
          </ScrollArea>
        </SheetContent>
      )}
    </_Sheet>
  );
}
