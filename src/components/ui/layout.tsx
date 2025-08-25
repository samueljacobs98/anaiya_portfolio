"use client";

import { cn } from "@/lib/utils";
import { DraggableContainer } from "./draggable-container";

export function Column({
  className,
  offset,
  children,
}: {
  className?: string;
  offset?: number;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-y-[6rem]", className)}>
      {offset && <div style={{ height: `${offset}rem` }} />}
      {children}
    </div>
  );
}

export function Layout({
  children,
  columns = 12,
}: {
  columns?: number;
  children: React.ReactNode;
}) {
  return (
    <DraggableContainer>
      <div
        className="grid gap-x-[5rem] px-12 py-6"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(10vw, 1fr))` }}
      >
        {children}
      </div>
    </DraggableContainer>
  );
}
