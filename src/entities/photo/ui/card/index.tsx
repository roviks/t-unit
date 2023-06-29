import Image from "../../../../shared/ui/image";
import { PhotoCardProps } from "./types";

export const PhotoCard = (props: PhotoCardProps) => {
  return (
    <div className="photo-card flex flex-col justify-center items-center">
      <Image src={props.url} className="rounded-2xl  bg-slate-600" />
      <div className="px-4">
        <p className="font-sans text-lg text-ellipsis max-w-xs line-clamp-1">
          {props.title}
        </p>
      </div>
    </div>
  );
};
