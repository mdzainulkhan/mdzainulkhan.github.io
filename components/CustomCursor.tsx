'use client'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState({ x: -100, y: -100 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      const target = e.target as HTMLElement
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' || target.tagName === 'A')
    }
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => setTrail({ x: pos.x, y: pos.y }), 80)
    return () => clearTimeout(timeout)
  }, [pos])

  return (
    <>
      <div
        style={{
          position: 'fixed', top: pos.y - 6, left: pos.x - 6,
          width: isPointer ? 14 : 12, height: isPointer ? 14 : 12,
          background: '#00D4FF', borderRadius: '50%',
          pointerEvents: 'none', zIndex: 9999,
          transition: 'width 0.2s, height 0.2s',
          mixBlendMode: 'screen',
        }}
      />
      <div
        style={{
          position: 'fixed', top: trail.y - 18, left: trail.x - 18,
          width: isPointer ? 44 : 36, height: isPointer ? 44 : 36,
          border: '1px solid rgba(0,212,255,0.5)',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 9998,
          transition: 'all 0.12s ease, width 0.2s, height 0.2s',
        }}
      />
    </>
  )
}
