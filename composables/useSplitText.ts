export function useSplitText(elements: string) {
  const text = document.querySelectorAll(elements)

  if(!text.length) return

  const row = new SplitText(text, {
    type: "lines",
    tag: "span",
  })

  gsap.set(row.lines, {
    overflow: "hidden",
    display: "block",
    marginBottom: "-0.15em",
    marginTop: "-0.02em",

  })

  const { lines } = new SplitText(row.lines, {
    type: "lines",
    tag: "span",
    linesClass: "line-anim"
  })

  gsap.set(lines, {
    paddingBottom: "0.15em",
    paddingTop: "0.02em",
    willChange: "transform",
    display: "block",
  })

  return lines
}
