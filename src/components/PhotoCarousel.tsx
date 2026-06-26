'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

export interface CarouselPhoto {
  src: string
  alt: string
  objectClass?: string
}

interface PhotoCarouselProps {
  photos: CarouselPhoto[]
  height?: string
}

export function PhotoCarousel({
  photos,
  height = 'clamp(200px, 38vh, 420px)',
}: PhotoCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const multiPhoto = photos.length > 1

  return (
    <div className="relative w-full overflow-hidden" style={{ height }}>
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {photos.map((photo, i) => (
            <div key={i} className="relative h-full w-full flex-none">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className={`object-cover ${photo.objectClass ?? 'object-center'}`}
                priority={i === 0}
                draggable={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 960px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />

      {multiPhoto && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-5 top-1/2 z-10 -translate-y-1/2 select-none font-mono text-sm text-white/60 transition-colors hover:text-white"
            aria-label="Previous photo"
          >
            ←
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-5 top-1/2 z-10 -translate-y-1/2 select-none font-mono text-sm text-white/60 transition-colors hover:text-white"
            aria-label="Next photo"
          >
            →
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={`h-2 w-2 rounded-full border border-white/70 transition-colors ${
                  i === selectedIndex ? 'bg-white/80' : 'bg-transparent'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
