"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    // Function to handle smooth scrolling
    const handleSmoothScroll = (e: MouseEvent) => {
      // Check if the clicked element is an anchor link with a hash
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
        e.preventDefault()

        // Get the target element
        const targetElement = document.querySelector(anchor.hash)

        if (targetElement) {
          // Get header height for offset (accounting for fixed header)
          const header = document.querySelector("header")
          const headerHeight = header ? header.offsetHeight : 0

          // Calculate position with offset
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.scrollY - headerHeight - 20 // Extra 20px padding

          // Smooth scroll to the element
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }
    }

    // Add event listener to document for all anchor clicks
    document.addEventListener("click", handleSmoothScroll)

    // Clean up event listener
    return () => {
      document.removeEventListener("click", handleSmoothScroll)
    }
  }, [])

  return null
}
