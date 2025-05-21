import { cn } from "@/utils/cn";

interface Props {
  text: string;
  className?: string;
}

export default function Title({ text, className }: Props) {
  return (
    <h3
      className={cn(
        "bg-pra-accent font-bold w-fit mb-5 md:mb-10 duration-300",
        className
      )}
    >
      {text}
    </h3>
  );
}
