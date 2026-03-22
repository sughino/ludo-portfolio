'use client'

import { useEffect } from "react"
import { triggerPrint } from "../printCV"

export default function KonamiCV() {

  useEffect(() => {

    const KONAMI_CODE = [
      "arrowup",
      "arrowup",
      "arrowdown",
      "arrowdown",
      "arrowleft",
      "arrowright",
      "arrowleft",
      "arrowright",
      "b",
      "a"
    ]

    let currentIndex = 0

    const handleKeyDown = (e: KeyboardEvent) => {
        const key = e.key.toLowerCase()

        if (key === KONAMI_CODE[currentIndex]) {
            currentIndex++

            if (currentIndex === KONAMI_CODE.length) {
              currentIndex = 0
              triggerPrint()
            }

        } else {
            currentIndex = 0
        }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }

  }, [])

  return null
}