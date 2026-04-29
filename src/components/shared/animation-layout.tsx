"use client";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { ReactElement, useRef } from "react";

interface AnimationLayoutProps {
  children: ReactElement;
  className: string;
  isInviewState: { trueState: string; falseState: string };
}

const AnimationLayout: React.FC<AnimationLayoutProps> = ({
  children,
  className,
  isInviewState = {
    trueState: "",
    falseState: "",
  },
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={cn(
        className,
        isInView ? isInviewState.trueState : isInviewState.falseState
      )}
    >
      {children}
    </div>
  );
};

export default AnimationLayout;
