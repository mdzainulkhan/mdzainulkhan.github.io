'use client'
import { useEffect, useState } from 'react'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [lag, setLag] = useState({ x: -100, y: -100 })
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    let raf: number
    let target = { x: -100, y: -100 }
    let current = { x: -100, y: -100 }

    const onMove = (e: MouseEvent) => {
      target = { x: e.clientX, y: e.clientY }
      setPos({ x: e.clientX, y: e.clientY })
      const el = e.target as HTMLElement
      setHovering(
        el.tagName === 'A' || el.tagName === 'BUTTON' ||
        window.getComputedStyle(el).cursor === 'pointer'
      )
    }
    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    const animate = () => {
      current.x += (target.x - current.x) * 0.1
      current.y += (target.y - current.y) * 0.1
      setLag({ x: current.x, y: current.y })
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    raf = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div style={{
        position: 'fixed',
        left: pos.x - 5, top: pos.y - 5,
        width: clicking ? 8 : 10, height: clicking ? 8 : 10,
        borderRadius: '50%',
        background: '#00C6FF',
        pointerEvents: 'none', zIndex: 99999,
        mixBlendMode: 'screen',
        transition: 'width 0.15s, height 0.15s',
      }} />
      <div style={{
        position: 'fixed',
        left: lag.x - (hovering ? 22 : 18), top: lag.y - (hovering ? 22 : 18),
        width: hovering ? 44 : 36, height: hovering ? 44 : 36,
        borderRadius: '50%',
        border: `1.5px solid ${hovering ? 'rgba(139,92,246,0.7)' : 'rgba(0,198,255,0.45)'}`,
        pointerEvents: 'none', zIndex: 99998,
        transition: 'width 0.2s, height 0.2s, border-color 0.2s',
        backdropFilter: hovering ? 'blur(2px)' : 'none',
      }} />
    </>
  )
}
