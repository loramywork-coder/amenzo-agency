"use client";

import * as React from "react";
import { useEffect, useRef } from "react";

interface FuzzyTextProps {
  children: React.ReactNode;
  fontSize?: number | string;
  fontWeight?: string | number;
  fontFamily?: string;
  color?: string;
  enableHover?: boolean;
  baseIntensity?: number;
  hoverIntensity?: number;
  scrollIntensity?: number;
  className?: string;
}

const FuzzyText = React.forwardRef<HTMLCanvasElement, FuzzyTextProps>(
  (
    {
      children,
      fontSize = "clamp(2rem, 8vw, 8rem)",
      fontWeight = 900,
      fontFamily = "inherit",
      color = "#FFFFFF",
      enableHover = true,
      baseIntensity = 0.18,
      hoverIntensity = 0.5,
      scrollIntensity = 0.8,
      className,
    },
    ref
  ) => {
    const innerRef = useRef<HTMLCanvasElement | null>(null);
    const canvasRef = (ref as React.RefObject<HTMLCanvasElement>) || innerRef;
    const scrollProgressRef = useRef<number>(0);

    useEffect(() => {
      let animationFrameId: number;
      let isCancelled = false;
      const canvas = canvasRef.current as
        | (HTMLCanvasElement & { cleanupFuzzyText?: () => void })
        | null;
      if (!canvas) return;

      if (canvas.cleanupFuzzyText) {
        canvas.cleanupFuzzyText();
      }

      const init = async () => {
        if (document.fonts?.ready) {
          await document.fonts.ready;
        }
        if (isCancelled) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const computedFontFamily =
          fontFamily === "inherit"
            ? window.getComputedStyle(canvas).fontFamily || "sans-serif"
            : fontFamily;

        const fontSizeStr =
          typeof fontSize === "number" ? `${fontSize}px` : fontSize;
        let numericFontSize: number;
        if (typeof fontSize === "number") {
          numericFontSize = fontSize;
        } else {
          const temp = document.createElement("span");
          temp.style.fontSize = fontSize;
          document.body.appendChild(temp);
          const computedSize = window.getComputedStyle(temp).fontSize;
          numericFontSize = parseFloat(computedSize);
          document.body.removeChild(temp);
        }

        const text = React.Children.toArray(children).join("");

        const offscreen = document.createElement("canvas");
        const offCtx = offscreen.getContext("2d");
        if (!offCtx) return;

        offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
        offCtx.textBaseline = "alphabetic";
        if ("letterSpacing" in offCtx) {
          (offCtx as unknown as { letterSpacing: string }).letterSpacing = "0.02em";
        }
        const metrics = offCtx.measureText(text);

        const actualLeft = metrics.actualBoundingBoxLeft ?? 0;
        const actualRight = metrics.actualBoundingBoxRight ?? metrics.width;
        const actualAscent =
          metrics.actualBoundingBoxAscent ?? numericFontSize;
        const actualDescent =
          metrics.actualBoundingBoxDescent ?? numericFontSize * 0.2;

        const textBoundingWidth = Math.ceil(actualLeft + actualRight);
        const tightHeight = Math.ceil(actualAscent + actualDescent);

        const extraWidthBuffer = Math.ceil(numericFontSize * 0.08) + 10;
        const offscreenWidth = textBoundingWidth + extraWidthBuffer;

        offscreen.width = offscreenWidth;
        offscreen.height = tightHeight;

        const xOffset = extraWidthBuffer / 2;
        offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
        offCtx.textBaseline = "alphabetic";
        if ("letterSpacing" in offCtx) {
          (offCtx as unknown as { letterSpacing: string }).letterSpacing = "0.02em";
        }
        offCtx.fillStyle = color;
        offCtx.fillText(text, xOffset - actualLeft, actualAscent);

        const horizontalMargin = Math.min(40, Math.ceil(numericFontSize * 0.4));
        const verticalMargin = 0;
        canvas.width = offscreenWidth + horizontalMargin * 2;
        canvas.height = tightHeight + verticalMargin * 2;
        ctx.translate(horizontalMargin, verticalMargin);

        const interactiveLeft = horizontalMargin + xOffset;
        const interactiveTop = verticalMargin;
        const interactiveRight = interactiveLeft + textBoundingWidth;
        const interactiveBottom = interactiveTop + tightHeight;

        let isHovering = false;
        const fuzzRange = 30;

        const run = () => {
          if (isCancelled) return;
          ctx.clearRect(
            -fuzzRange,
            -fuzzRange,
            offscreenWidth + 2 * fuzzRange,
            tightHeight + 2 * fuzzRange
          );
          let intensity = baseIntensity;
          if (isHovering) {
            intensity = hoverIntensity;
          } else if (scrollProgressRef.current > 0) {
            intensity =
              baseIntensity +
              (scrollIntensity - baseIntensity) * scrollProgressRef.current;
          }
          for (let j = 0; j < tightHeight; j++) {
            const dx = Math.floor(
              intensity * (Math.random() - 0.5) * fuzzRange
            );
            ctx.drawImage(
              offscreen,
              0,
              j,
              offscreenWidth,
              1,
              dx,
              j,
              offscreenWidth,
              1
            );
          }
          animationFrameId = window.requestAnimationFrame(run);
        };

        run();

        const isInsideTextArea = (x: number, y: number) =>
          x >= interactiveLeft &&
          x <= interactiveRight &&
          y >= interactiveTop &&
          y <= interactiveBottom;

        const handleMouseMove = (e: MouseEvent) => {
          if (!enableHover) return;
          const rect = canvas.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          isHovering = isInsideTextArea(x, y);
        };

        const handleMouseLeave = () => {
          isHovering = false;
        };

        const handleTouchMove = (e: TouchEvent) => {
          if (!enableHover) return;
          e.preventDefault();
          const rect = canvas.getBoundingClientRect();
          const touch = e.touches[0];
          const x = touch.clientX - rect.left;
          const y = touch.clientY - rect.top;
          isHovering = isInsideTextArea(x, y);
        };

        const handleTouchEnd = () => {
          isHovering = false;
        };

        const handleScroll = () => {
          const scrollY = window.scrollY;
          const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;
          scrollProgressRef.current = Math.min(
            scrollY / Math.max(maxScroll * 0.3, 1),
            1
          );
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        if (enableHover) {
          canvas.addEventListener("mousemove", handleMouseMove);
          canvas.addEventListener("mouseleave", handleMouseLeave);
          canvas.addEventListener("touchmove", handleTouchMove, {
            passive: false,
          });
          canvas.addEventListener("touchend", handleTouchEnd);
        }

        const cleanup = () => {
          window.cancelAnimationFrame(animationFrameId);
          window.removeEventListener("scroll", handleScroll);
          if (enableHover) {
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
            canvas.removeEventListener("touchmove", handleTouchMove);
            canvas.removeEventListener("touchend", handleTouchEnd);
          }
        };

        (canvas as HTMLCanvasElement & { cleanupFuzzyText?: () => void }).cleanupFuzzyText = cleanup;
      };

      init();

      return () => {
        isCancelled = true;
        window.cancelAnimationFrame(animationFrameId);
        if (canvas && canvas.cleanupFuzzyText) {
          canvas.cleanupFuzzyText();
        }
      };
    }, [
      children,
      fontSize,
      fontWeight,
      fontFamily,
      color,
      enableHover,
      baseIntensity,
      hoverIntensity,
      scrollIntensity,
      canvasRef,
    ]);

    return <canvas ref={canvasRef} className={className} />;
  }
);

FuzzyText.displayName = "FuzzyText";

export default FuzzyText;
