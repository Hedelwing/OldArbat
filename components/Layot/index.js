import React from "react"
import { Link, Typography, Breadcrumbs, Box, Container } from "@material-ui/core"
import RouterLink from "next/link"
import SpecialTitle from "../SpecialTitle"

const Layot = ({ navItems = [], current, children }) =>
    <Container maxWidth="lg">

        
        <Box py={3}>
            <Breadcrumbs separator="›" arial-label="Breadcrumb">
                {navItems.map(({ name, link }, i) =>
                    <RouterLink key={i} href={link} passHref>
                        <Link color="primary">{name}</Link>
                    </RouterLink>
                )}
                <Typography color="textPrimary" component="span">{current}</Typography>
            </Breadcrumbs>
        </Box>


        <Box textAlign="center" pb={3}>
            <SpecialTitle component='h1' title={current} />
        </Box>


        <Box pb={3}>
            {children}
        </Box>

    </Container>

export default Layot