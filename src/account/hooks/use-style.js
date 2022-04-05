import { useMediaQuery, useTheme } from '@material-ui/core'
import { useDesktopStyle } from './use-desktop-style'
import { useMobileStyle } from './use-mobile-style'

export const useStyle = () => {
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

    const desktopStyle = useDesktopStyle()
    const mobileStyle = useMobileStyle()

    return isDesktop ? desktopStyle : mobileStyle
}
