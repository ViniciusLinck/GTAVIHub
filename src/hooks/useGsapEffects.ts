import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

export function useGsapEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      return undefined
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        '.gsap-hero',
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 1.05, ease: 'power3.out', stagger: 0.12 },
      )

      gsap.utils.toArray<HTMLElement>('.gsap-reveal').forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 42 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 86%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })

      gsap.utils.toArray<HTMLElement>('.gsap-parallax').forEach((element) => {
        gsap.to(element, {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('.media-lane').forEach((lane, index) => {
        gsap.to(lane, {
          xPercent: index % 2 === 0 ? -9 : 9,
          ease: 'none',
          scrollTrigger: {
            trigger: lane,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })
    })

    return () => context.revert()
  }, [])
}
