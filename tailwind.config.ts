import { withShurikenUI } from '@shuriken-ui/tailwind'
import colors from 'tailwindcss/colors'

export default withShurikenUI({
  content: [],
  theme: {
    extend: {
      colors: {
        primary: colors.orange,
        secondary: colors.orange[500],
        background: colors.amber,
        text: colors.gray,
        accent: colors.orange[600],
      },
      spacing: {
        sidebar: '250px',
      },
    },
  },
})
