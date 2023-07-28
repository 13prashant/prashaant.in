interface Props {
  text: string;
  className?: string;
}

export default function Title({ text, className }: Props) {
  return (
    <h3 className={`${className} bg-pra-accent font-bold w-fit mb-5 md:mb-10`}>
      {text}
    </h3>
  );
}
