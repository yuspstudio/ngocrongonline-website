"use client";
import { cn } from "@/app/lib/utils";


interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn("max-w-[120rem] mx-auto md:px-[1.75rem] px-4", className)}
    >
      {children}
    </div>
  );
};

export default Container;
