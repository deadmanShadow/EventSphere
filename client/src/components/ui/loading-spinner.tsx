import clsx from "clsx";
import { motion } from "framer-motion";

type LoadingSpinnerProps = {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
};

const sizeMap = {
  sm: "h-6 w-6 border-2",
  md: "h-10 w-10 border-4",
  lg: "h-16 w-16 border-[6px]",
};

export default function LoadingSpinner({
  size = "md",
  text = "Loading...",
  className,
}: LoadingSpinnerProps) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center gap-3",
        className
      )}
      role="status"
      aria-busy="true"
    >
      {/* Spinner */}
      <motion.div
        className={clsx(
          "rounded-full border-primary/30 border-t-primary shadow-md",
          sizeMap[size]
        )}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />

      {/* Pulse text */}
      {text && (
        <motion.span
          className="text-sm font-medium text-muted-foreground"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          {text}
        </motion.span>
      )}
    </div>
  );
}
