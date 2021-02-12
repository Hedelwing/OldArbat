import { Box } from '@material-ui/core'
import React from 'react'
import { Drama } from '../Icons'
import { CameraAlt } from '@material-ui/icons'
import createStyles from './createStyles'

const SpecialImage = ({ image, width = 400, ratio = { width: 4, height: 3 }, alt }) => {
    const styles = createStyles()
    const padding = `${100 / ratio.width * ratio.height}%`

    return <Box width={width} maxWidth="100%" p={2}>
        <Box height={0} paddingBottom={padding} position='relative' fontSize={56} lineHeight={0}>
            <Box position='absolute' zIndex='10' bottom={-12} left={-16}>
                <Drama className={styles.mask} />
            </Box>
            <Box component='figure' display='flex' fontSize={72} alignItems='center' justifyContent='center' className={styles.image}>
                {image
                    ? <img src={image} alt={alt} />
                    : <CameraAlt />
                }
            </Box>
        </Box>
    </Box>
}

export default SpecialImage