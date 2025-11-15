"use client";

import React, { useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import bannersData from "@/lib/banners.json";

const BannerView = (props) => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const banners = bannersData;

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
      opts={{ align: "center" }}
      className="w-full" // Removed hidden sm:block to show on all devices
    >
      <CarouselContent>
        {banners?.length
          ? banners.map((slide, index) => (
              <CarouselItem key={index} className="w-full">
                <div className="relative w-full h-[90vh]">
                  <img
                    src={slide?.web_view_image?.asset?.url}
                    alt={slide?.web_view_image?.alt || "website banner"}
                    title={slide?.web_view_image?.alt || "website banner"}
                    className="w-full h-full object-fill"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))
          : null}
      </CarouselContent>
    </Carousel>
  );
};

export default BannerView;
