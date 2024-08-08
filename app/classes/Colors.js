import GSAP from 'gsap'

// export const COLOR_CADET_BLUE = '#B2B8C3'
// export const COLOR_CONTESSA = '#C97164'
export const COLOR_QUARTER_SPANISH_WHITE = '#F9F1E7'
export const COLOR_BRIGHT_GREY = '#37384C'

class Colors {
    change ({ backgroundColor, color }) {
        // console.log('document.documentElement', document.documentElement)
        GSAP.to(document.documentElement, {
            backgroundColor,
            color,
            duration: 1.5
        })
    }
}

export const colorsChanger = new Colors()
