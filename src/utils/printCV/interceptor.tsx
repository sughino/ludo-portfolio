'use client'

import { useEffect } from "react"

export default function PrintCVInterceptor() {

  useEffect(() => {

    const handlePrint = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "p") {
        e.preventDefault()

        const iframe = document.createElement("iframe")

        iframe.style.position = "fixed"
        iframe.style.width = "0"
        iframe.style.height = "0"
        iframe.style.border = "0"
        iframe.src = "/cv/Ludo-cv.pdf"

        document.body.appendChild(iframe)

        iframe.onload = () => {
          iframe.contentWindow?.focus()
          iframe.contentWindow?.print()

          setTimeout(() => {
            document.body.removeChild(iframe)
          }, 1000)
        }
      }
    }

    window.addEventListener("keydown", handlePrint)

    return () => {
      window.removeEventListener("keydown", handlePrint)
    }

  }, [])

  return null
}