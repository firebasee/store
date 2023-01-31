import { Carousel } from "@mantine/carousel";
import { AspectRatio } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React, { useRef } from "react";

interface Props {
  images: string[];
  auto?: boolean;
}

const ImageSlider: React.FC<Props> = ({ images, auto = false }) => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <Carousel
      plugins={auto ? [autoplay.current] : []}
      onMouseEnter={auto ? autoplay.current.stop : undefined}
      onMouseLeave={auto ? autoplay.current.reset : undefined}
    >
      {images.map((image, i) => (
        <Carousel.Slide key={i}>
          <AspectRatio sx={{ position: "relative" }} ratio={1920 / 1080}>
            <Image
              src={image}
              alt={image}
              fill
              style={{ objectFit: "contain", backgroundPosition: "center" }}
            />
          </AspectRatio>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
