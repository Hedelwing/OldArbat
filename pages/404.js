import { Box, Button, Container, Typography } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'

const Page404 = () => <Box flex={1}>
    <Container maxWidth="lg">
        <Box pt={5} pb={3}>
            <Typography variant="h1" align='center' gutterBottom>
                404
            </Typography>
            <Typography variant="h5" align='center' gutterBottom>
                Запрашиваемая вами страница не существует.
            </Typography>
            <Box display="flex" justifyContent="center" pt={4}>
                <Link href="/" passHref>
                    <Button variant="outlined">
                        На главную
                    </Button>
                </Link>
            </Box>
        </Box>
    </Container>
</Box>

export default Page404