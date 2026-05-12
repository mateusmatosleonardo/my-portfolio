import Image from "next/image";

interface TechItemProps {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  invert?: boolean;
}

export default function TechItem(props: TechItemProps) {
  return (
    <div className="flex w-full h-[5rem] rounded-lg border border-dark-gray">
      <div className="flex items-center justify-center w-[5rem] h-[5rem] border-r border-dark-gray">
        <Image
          src={props.image}
          width={30}
          height={30}
          alt={props.alt}
          className={props.invert ? "invert" : ""}
        />
      </div>
      <div className="flex-1 flex flex-col justify-center px-4">
        <p className="text-[0.92rem]">{props.title}</p>
        <p className="text-[0.80rem] leading-[1.2rem] text-default-gray">
          {props.subtitle}
        </p>
      </div>
    </div>
  );
}
