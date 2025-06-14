"use client"

import { useEffect } from "react"

export function ActiveSectionObserver() {
  useEffect(() => {
    // Get all section elements
    const sections = document.querySelectorAll("section[id]")
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]')

    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the id of the section that is currently in view
            const id = entry.target.getAttribute("id")

            // Remove active class from all links
            navLinks.forEach((link) => {
              link.classList.remove("active-section")
            })

            // Add active class to the corresponding link
            const correspondingLink = document.querySelector(`nav a[href="#${id}"]`)
            if (correspondingLink) {
              correspondingLink.classList.add("active-section")
            }
          }
        })
      },
      { rootMargin: "-30% 0px -70% 0px" }, // Adjust these values to control when the active class changes
    )

    // Observe all sections
    sections.forEach((section) => {
      observer.observe(section)
    })

    // Clean up
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return null
}
