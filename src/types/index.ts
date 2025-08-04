import { ReactNode } from "react";

interface BaseClass {
  className?: string;
  children?: ReactNode;
}

export interface MaxWidthWrapperProps extends BaseClass {}

export interface StepProps {
  step: number;
  headline: string;
  children: ReactNode;
}
