"use client";

import { ComponentProps } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useZoomControls } from "@/lib/state/context";

function ZoomButton({
  className,
  children,
  ...props
}: ComponentProps<typeof Button>) {
  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn("size-8 cursor-pointer border border-stone-300", className)}
      {...props}
    >
      {children}
    </Button>
  );
}

function ZoomInButton({
  className,
  disabled,
  ...props
}: ComponentProps<typeof Button>) {
  const { zoomIn, atZoomMax } = useZoomControls();

  return (
    <ZoomButton
      className={cn("size-8 cursor-pointer", className)}
      onClick={zoomIn}
      disabled={disabled || atZoomMax}
      {...props}
    >
      <PlusIcon />
    </ZoomButton>
  );
}

function ZoomOutButton({
  className,
  disabled,
  ...props
}: ComponentProps<typeof Button>) {
  const { zoomOut, atZoomMin } = useZoomControls();

  return (
    <ZoomButton
      className={cn("size-8 cursor-pointer", className)}
      onClick={zoomOut}
      disabled={disabled || atZoomMin}
      {...props}
    >
      <MinusIcon />
    </ZoomButton>
  );
}

export function ZoomControls() {
  return (
    <div className="flex gap-2">
      <ZoomOutButton />
      <ZoomInButton />
    </div>
  );
}
