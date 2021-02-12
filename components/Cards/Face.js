import { CardMedia, Box, Typography, CardContent } from '@material-ui/core'
import React from 'react'
import Base from './Base'

const Face = ({ slug, image, name }) => {
    return <Base href='/troupe/[slug]' as={`/troupe/${slug}`}>
        <Box display="flex">
            <Box width='100%'>
                <CardMedia style={{ height: 320, width: '100%', objectFit: 'cover' }} image={image} />
                <CardContent>
                    <Typography style={{ fontWeight: 'bold' }} color="primary" align="center">
                        {name}
                    </Typography>
                </CardContent>
            </Box>
        </Box>
    </Base>
}

export default Face