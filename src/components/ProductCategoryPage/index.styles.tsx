import { style } from 'typestyle'
import { px, margin, percent, padding } from 'csx'

export const layout = style({
  maxWidth: px(1200),
  margin: margin(px(20), 'auto', px(0))
})

export const productGrid = style({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
  gridGap: px(24),
  alignItems: 'center',
  padding: px(24),
  gridAutoRows: `minmax(300px, auto)`,
  $nest: {
    '> div': {
      height: percent(100)
    }
  }
})

export const metaData = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: padding(px(24), px(24), px(0))
})

export const cartAlert = style({
  maxWidth: px(300)
})
