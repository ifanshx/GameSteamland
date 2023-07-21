import Image from "next/image";
import React from "react";

type CoinImageProps = {
  imageSrc: string;
  alt: string;
  isFlipping: boolean;
};

const CoinImage: React.FC<CoinImageProps> = ({ imageSrc, alt, isFlipping }) => {
  return (
    <div className="w-40 h-40 mx-auto">
      <Image
        src={imageSrc}
        alt={alt}
        width={100}
        height={100}
        className={`w-40 h-40 mx-auto ${isFlipping ? "animate-flip2" : ""}`}
        priority
      />
    </div>
  );
};

export default CoinImage;
