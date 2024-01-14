'use client'

import {NextUIProvider} from '@nextui-org/react'

export function NextUIContextProvider({children}) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}