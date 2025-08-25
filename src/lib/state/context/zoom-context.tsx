"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const ScaleContext = createContext<{
  scale: number;
  scaleMin: number;
  scaleMax: number;
} | null>(null);

const ZoomControlsContext = createContext<{
  setScale: (scale: number) => void;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
  atZoomMin: boolean;
  atZoomMax: boolean;
} | null>(null);

export function ScaleProvider({
  initialScale = 1,
  scaleStep = 0.1,
  scaleMin = 0.1,
  scaleMax = 10,
  children,
}: {
  initialScale?: number;
  scaleStep?: number;
  scaleMin?: number;
  scaleMax?: number;
  children: React.ReactNode;
}) {
  const [scale, setScale] = useState(initialScale);

  const resetZoom = useCallback(() => {
    setScale(initialScale);
  }, [setScale, initialScale]);

  const zoomIn = useCallback(() => {
    setScale((scale) => Math.min(scale + scaleStep, scaleMax));
  }, [setScale, scaleStep, scaleMax]);

  const zoomOut = useCallback(() => {
    setScale((scale) => Math.max(scale - scaleStep, scaleMin));
  }, [setScale, scaleStep, scaleMin]);

  const atZoomMin = useMemo(() => scale <= scaleMin, [scale, scaleMin]);
  const atZoomMax = useMemo(() => scale >= scaleMax, [scale, scaleMax]);

  return (
    <ScaleContext.Provider value={{ scale, scaleMin, scaleMax }}>
      <ZoomControlsContext.Provider
        value={{
          zoomIn,
          zoomOut,
          setScale,
          resetZoom,
          atZoomMin,
          atZoomMax,
        }}
      >
        {children}
      </ZoomControlsContext.Provider>
    </ScaleContext.Provider>
  );
}

export function useScale() {
  const scale = useContext(ScaleContext);

  if (!scale) {
    throw new Error("useScale must be used within a ScaleProvider");
  }

  return scale;
}

export function useZoomControls() {
  const zoomControls = useContext(ZoomControlsContext);

  if (!zoomControls) {
    throw new Error("useScaleControls must be used within a ScaleProvider");
  }

  return zoomControls;
}
