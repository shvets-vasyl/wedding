import { gsap } from "gsap"
import {
  ScrollTrigger,
  ScrollToPlugin,
  CustomEase,
  SplitText,
} from "gsap/all"

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(
    ScrollTrigger,
    ScrollToPlugin,
    CustomEase,
    SplitText,
  )

  CustomEase.create("default-ease", "0.24, 1, 0.36, 1")
  CustomEase.create("button", "0.625, 0.05, 0, 1")
})
