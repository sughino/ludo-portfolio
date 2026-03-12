'use client'

import { createContext, useContext } from 'react'
import { useIsTouchDevice } from '@/hooks/isTouchDevice'

const DeviceContext = createContext<boolean>(false)

export function DeviceProvider({ children }: { children: React.ReactNode }) {
  const isTouch = useIsTouchDevice()
  return (
    <DeviceContext.Provider value={isTouch}>
      {children}
    </DeviceContext.Provider>
  )
}

export function useIsTouch() {
  return useContext(DeviceContext)
}