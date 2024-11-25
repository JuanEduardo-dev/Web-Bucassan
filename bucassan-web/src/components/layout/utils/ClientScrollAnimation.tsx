"use client";

import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ClientScrollAnimationProps {
  children: ReactNode;
}

export function ClientScrollAnimation({ children }: ClientScrollAnimationProps) {
  useScrollAnimation();
  return <>{children}</>;
}