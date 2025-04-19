"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"

const images = [
  {
    src: "/gallery-1.jpg",
    alt: "Food rescue volunteers distributing meals",
  },
  {
    src: "/gallery-2.jpg",
    alt: "Food collection from a local restaurant",
  },
  {
    src: "/gallery-3.jpg",
    alt: "Community food distribution event",
  },
  // Add more images as needed
]

export function Gallery() {
  return (
    <section id="gallery" className="container section-padding">
      <div className="text-center mb-16">
        <h2 className="heading-2 mb-4">Our Impact in Pictures</h2>
        <p className="paragraph max-w-2xl mx-auto">
          See how we're making a difference in our community through food rescue and redistribution.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Card className="border-0">
                  <div className="relative w-full">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1280}
                        height={720}
                        className="object-cover w-full h-full"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
} 