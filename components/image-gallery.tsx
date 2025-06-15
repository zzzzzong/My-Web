"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Your actual photos - graduation first as requested
const galleryImages = [
  {
    src: "/images/graduation.jpg",
    alt: "Graduation Day",
    caption: "Graduation ceremony - a proud moment!",
  },
  {
    src: "/images/guitar.jpg",
    alt: "Playing Guitar",
    caption: "Music time - playing acoustic guitar",
  },
]

export function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [hoverSide, setHoverSide] = useState<"left" | "right" | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollToImage = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const imageWidth = container.scrollWidth / galleryImages.length
      container.scrollTo({
        left: imageWidth * index,
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length
    scrollToImage(nextIndex)
  }

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
    scrollToImage(prevIndex)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const width = rect.width
    const threshold = width * 0.15 // 15% from each edge

    if (x < threshold) {
      setHoverSide("left")
    } else if (x > width - threshold) {
      setHoverSide("right")
    } else {
      setHoverSide(null)
    }
  }

  return (
    <div className="relative w-full max-w-[600px] mx-auto">
      {/* Main Gallery Container */}
      <div
        className="relative overflow-hidden rounded-xl bg-muted/20 group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false)
          setHoverSide(null)
        }}
        onMouseMove={handleMouseMove}
      >
        {/* Scrollable Images Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {galleryImages.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full snap-center">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Left Navigation Area */}
        <div
          className={`absolute left-0 top-0 w-1/6 h-full z-20 flex items-center justify-center cursor-pointer transition-all duration-300 ${
            isHovered && hoverSide === "left" ? "bg-black/30" : "bg-transparent"
          }`}
          onClick={prevImage}
        >
          <ChevronLeft
            className={`h-8 w-8 text-white drop-shadow-lg transition-all duration-300 ${
              isHovered && hoverSide === "left" ? "opacity-100 scale-110" : "opacity-0 scale-90"
            }`}
          />
        </div>

        {/* Right Navigation Area */}
        <div
          className={`absolute right-0 top-0 w-1/6 h-full z-20 flex items-center justify-center cursor-pointer transition-all duration-300 ${
            isHovered && hoverSide === "right" ? "bg-black/30" : "bg-transparent"
          }`}
          onClick={nextImage}
        >
          <ChevronRight
            className={`h-8 w-8 text-white drop-shadow-lg transition-all duration-300 ${
              isHovered && hoverSide === "right" ? "opacity-100 scale-110" : "opacity-0 scale-90"
            }`}
          />
        </div>
      </div>

      {/* Progress Bars */}
      <div className="flex justify-center gap-2 mt-4">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToImage(index)}
            className="relative w-12 h-1 bg-white/30 rounded-full overflow-hidden hover:bg-white/40 transition-colors duration-200"
          >
            <div
              className={`absolute left-0 top-0 h-full bg-white rounded-full transition-all duration-200 ease-out ${
                currentIndex === index ? "w-full" : "w-0"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Caption */}
      {galleryImages[currentIndex]?.caption && (
        <p className="text-center text-sm text-muted-foreground mt-3">{galleryImages[currentIndex].caption}</p>
      )}
    </div>
  )
}
