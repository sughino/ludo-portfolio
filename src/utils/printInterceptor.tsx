'use client'

import { useEffect } from "react"
import { triggerPrint } from "./printCV"

export default function PrintCVInterceptor() {

  useEffect(() => {

    const handlePrint = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "p") {
        e.preventDefault()

        triggerPrint()
      }
    }

    window.addEventListener("keydown", handlePrint)

    return () => {
      window.removeEventListener("keydown", handlePrint)
    }

  }, [])

  return null
}