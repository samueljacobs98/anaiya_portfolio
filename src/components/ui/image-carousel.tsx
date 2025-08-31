import React, {
  ComponentProps,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import type { Image as TImage } from "@/lib/domain/image";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

const DEFAULT_OPTIONS: EmblaOptionsType = {
  containScroll: false,
  align: "center",
};

export function ImageCarousel({
  images,
  options = DEFAULT_OPTIONS,
}: {
  images: TImage[];
  options?: EmblaOptionsType;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="w-full space-y-3">
      <div
        ref={emblaRef}
        className="
          relative
          overflow-hidden
          w-full
          h-64 sm:h-72 md:h-80 lg:h-96
        "
      >
        <div className="flex h-full">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative h-full w-full flex-[0_0_100%]"
            >
              <Image
                src={image.path}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority={image.priority}
                className={[
                  "object-contain object-center",
                  "transition-opacity duration-500",
                  image.dropShadow ? "drop-shadow-xl" : "",
                ].join(" ")}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full items-center justify-center gap-3">
        <ActionButton
          side="left"
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="
          inline-flex items-center justify-center
          rounded-full border border-white/20 bg-white/70 backdrop-blur
          hover:bg-white
          dark:border-neutral-700 dark:bg-neutral-800/70 dark:hover:bg-neutral-800
          shadow-md
          h-10 w-10
          disabled:opacity-50 disabled:cursor-not-allowed
          "
        />
        <div className="flex items-center gap-2 rounded-full bg-black/10 px-2 py-1 backdrop-blur-sm dark:bg-white/10">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={[
                "h-2.5 w-2.5 rounded-full transition-all",
                index === selectedIndex
                  ? "bg-black dark:bg-neutral-200 w-6"
                  : "bg-black/60 dark:bg-neutral-300/60",
              ].join(" ")}
            />
          ))}
        </div>
        <ActionButton
          side="right"
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="
            inline-flex items-center justify-center
            rounded-full border border-white/20 bg-white/70 backdrop-blur
            hover:bg-white
            dark:border-neutral-700 dark:bg-neutral-800/70 dark:hover:bg-neutral-800
            shadow-md
            h-10 w-10
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        />
      </div>
    </div>
  );
}

function usePrevNextButtons(emblaApi: EmblaCarouselType | undefined) {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState<boolean>(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState<boolean>(true);

  const onPrevButtonClick = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((api: EmblaCarouselType | undefined) => {
    setPrevBtnDisabled(!api?.canScrollPrev());
    setNextBtnDisabled(!api?.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
}

export function ActionButton({
  children,
  className = "",
  side,
  ...restProps
}: ComponentProps<typeof Button> & { side: "left" | "right" }) {
  return (
    <Button
      type="button"
      className={cn("!size-5 !bg-black/10", className)}
      variant="outline"
      size="icon"
      {...restProps}
      aria-label="Next"
    >
      {side === "right" ? <ChevronRight /> : <ChevronLeft />}
      {children}
    </Button>
  );
}

function useDotButton(emblaApi: EmblaCarouselType | undefined) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((api: EmblaCarouselType | undefined) => {
    setScrollSnaps(api?.scrollSnapList() ?? []);
  }, []);

  const onSelect = useCallback((api: EmblaCarouselType | undefined) => {
    setSelectedIndex(api?.selectedScrollSnap() ?? 0);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return { selectedIndex, scrollSnaps, onDotButtonClick };
}

function DotButton({
  children,
  className,
  ...restProps
}: {
  onClick: () => void;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      {...restProps}
      aria-label="Go to slide"
    >
      {children}
    </button>
  );
}
