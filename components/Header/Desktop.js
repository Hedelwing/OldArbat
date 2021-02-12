import { Typography, Box, Link, IconButton } from "@material-ui/core"
import React from "react"
import RouterLink from "next/link"
import { VK, Instagram, Logo } from "../"
import createStyles from './createDesktopStyles'

export default function DesktopMenu({ menuLinks }) {
  const styles = createStyles()

  return <>
    <header className={styles.header}>

      <Box flexBasis='27.5%' alignItems='center' justifyContent='flex-start'>
        <RouterLink href='/' passHref>
          <Link underline='none'>
            <Logo className={styles.logo} />
          </Link>
        </RouterLink>
      </Box>

      <nav className={styles.nav} itemScope itemType="http://schema.org/SiteNavigationElement">
        <Box display="flex" justifyContent="center" component="ul" p={0}>
          {menuLinks.map(({ link, name }, key) => (
            <Box key={key} className={styles.navItem} component="li">
              <RouterLink href={link} passHref>
                <Link underline="none" itemProp="url" className={styles.menuLink}>
                  <Typography itemProp="name" color="inherit" variant="button">{name}</Typography>
                </Link>
              </RouterLink>
            </Box>
          ))}
        </Box>
      </nav>

      <Box display="flex" flexBasis='27.5%' alignItems="center" justifyContent="flex-end">

        <Link color="primary" style={{ fontWeight: 'bold' }} href="tel:+74956911546">
          +7 (495) 691-15-46
          </Link>

        <Box pl={1}>
          <IconButton
            size="small"
            component="a"
            href="https://vk.com/staryjarbat"
            target="_blank"
            rel="noopener"
          >
            <VK htmlColor="#33bfff" />
          </IconButton>
        </Box>

        <IconButton
          size="small"
          component="a"
          href="https://www.instagram.com/teatr_staryj_arbat/"
          rel="noopener"
          target="_blank"
        >
          <Instagram htmlColor="#dd33fa" />
        </IconButton>

      </Box>

    </header>
  </>
}