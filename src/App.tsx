import { useEffect } from 'react'
import Lenis from 'lenis'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Story } from './components/Story'
import { Signatures } from './components/Signatures'
import { FeaturedPizookie } from './components/FeaturedPizookie'
import { Gallery } from './components/Gallery'
import { Visit } from './components/Visit'
import { Footer } from './components/Footer'

export default function App() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) return

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })

    // Route in-page anchor clicks through Lenis for smooth section scrolling.
    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null
      if (!anchor) return
      const id = anchor.getAttribute('href')
      if (!id || id === '#') return
      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el as HTMLElement, { offset: -72 })
    }
    document.addEventListener('click', onAnchorClick)

    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('click', onAnchorClick)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Signatures />
        <FeaturedPizookie />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
