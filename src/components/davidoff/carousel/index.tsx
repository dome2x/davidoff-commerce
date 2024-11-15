'use client';

import { Button } from '@components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

const carouselItems = [
  {
    title: 'White Band Collection',
    subtitle: "It's how we put them together",
    image:
      'https://cdn.builder.io/api/v1/image/assets%2F8d037472ddea4270ba7fee1b930ca367%2F4281b4e02b8a43748ffaef8574e195bb',
    buttons: [
      { text: 'discover', href: '/discover/white-band-collection' },
      { text: 'shop now', href: '/shop/cigars/white-band-collection' }
    ]
  },
  {
    title: 'Black Band Collection',
    subtitle: 'Exceptional cigars with distinct flavours',
    image:
      'https://cdn.builder.io/api/v1/image/assets%2F8d037472ddea4270ba7fee1b930ca367%2F7cbb120010b7449e845e4862039c4981',
    buttons: [
      { text: 'discover', href: '/discover/black-band-collection' },
      { text: 'shop now', href: '/shop/cigars/black-band-collection' }
    ]
  },
  {
    title: 'Winston Churchill Series',
    subtitle: 'Inspired by a great iconic aficionado',
    image:
      'https://cdn.builder.io/api/v1/image/assets%2F8d037472ddea4270ba7fee1b930ca367%2F6aa89c3ab6dc4495baa4bce5bb12c2ce',
    buttons: [
      { text: 'discover', href: '/discover/winston-churchill-collection' },
      { text: 'shop now', href: '/shop/cigars/winston-churchill' }
    ]
  }
  // Add more items as needed
];

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8">
      <h2 className="mb-2 text-center text-sm font-semibold tracking-wider text-gray-500">
        DIVE DEEP INTO OUR COLLECTIONS
      </h2>
      <div className="mb-6 h-px w-full bg-amber-300"></div>
      <h1 className="mb-8 text-center text-3xl font-light text-gray-800 md:text-4xl">
        DAVIDOFF CIGARS & ACCESSORIES
      </h1>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="relative min-w-0 flex-[0_0_100%] overflow-hidden"
              style={{
                transform: `scale(${
                  index === selectedIndex
                    ? 1
                    : index === (selectedIndex + 1) % carouselItems.length ||
                      index === (selectedIndex - 1 + carouselItems.length) % carouselItems.length
                    ? 0.8
                    : 0.6
                })`,
                opacity:
                  index === selectedIndex
                    ? 1
                    : index === (selectedIndex + 1) % carouselItems.length ||
                      index === (selectedIndex - 1 + carouselItems.length) % carouselItems.length
                    ? 0.5
                    : 0,
                transition: 'all 0.4s ease'
              }}
            >
              <div className="relative h-[500px] overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  width={800}
                  height={500}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="mb-2 text-3xl font-light md:text-4xl">{item.title}</h3>
                  <p className="mb-4 text-sm">{item.subtitle}</p>
                  <div className="flex space-x-4">
                    {item.buttons.map((button, buttonIndex) => (
                      <Button
                        key={buttonIndex}
                        variant={buttonIndex === 0 ? 'outline' : 'default'}
                        className={`px-6 py-2 text-xs ${
                          buttonIndex === 0
                            ? 'border-white text-white hover:bg-white hover:text-black'
                            : 'bg-amber-500 text-black hover:bg-amber-600'
                        }`}
                        asChild
                      >
                        <a href={button.href}>{button.text}</a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <Button
          onClick={scrollPrev}
          variant="ghost"
          className="p-2 hover:bg-transparent"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-8 w-8 text-gray-500" />
        </Button>
        <div className="flex justify-center space-x-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === selectedIndex ? 'bg-amber-500' : 'bg-gray-300'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <Button
          onClick={scrollNext}
          variant="ghost"
          className="p-2 hover:bg-transparent"
          aria-label="Next slide"
        >
          <ChevronRight className="h-8 w-8 text-gray-500" />
        </Button>
      </div>
    </div>
  );
}
