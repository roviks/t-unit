import React, { useState } from "react";

type ImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const Image = (props: ImageProps) => {
  const [src, setSrc] = useState(props.src);

  const onError = () => {
    setSrc(
      "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png"
    );
  };

  return <img {...props} src={src} onError={onError} />;
};

export default Image;
