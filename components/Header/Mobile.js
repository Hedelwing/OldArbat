import React, { useState } from "react"
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  Divider,
  Link,
  Button,
} from "@material-ui/core"
import { Call, Menu, Close } from "@material-ui/icons"
import RouterLink from "next/link"
import { VK, Instagram, Logo } from "../"
import createStyles from './createMobileStyles'

export default function MobileMenu({ menuLinks }) {
  const [isOpen, setIsOpen] = useState(false)
  const styles = createStyles()

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <>

      <header className={styles.toolbar}>
        <Box width="100%" display="flex" justifyContent="space-between">
          <RouterLink href='/' passHref>
            <Link underline='none'>
              <Logo className={styles.logo} />
            </Link>
          </RouterLink>

          <IconButton color="inherit" onClick={open} aria-label="Меню">
            <Menu />
          </IconButton>

        </Box>
      </header>

      <Drawer anchor="right" open={isOpen} onClose={close}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          minWidth="300px"
          alignItems="center"
        >
          <Box p={1} alignSelf="flex-end">
            <IconButton aria-label="Закрыть меню" onClick={close}>
              <Close />
            </IconButton>
          </Box>
          <Box mb={1} width="100%">
            <Divider variant="middle" />
          </Box>
          <Box
            margin="auto 0"
            display="flex"
            flexDirection="column"
            alignSelf="stretch"
          >
            {menuLinks.map(({ link, name }, key) => (
              <RouterLink key={key} href={link} passHref>
                <Button aria-label={name} onClick={close}>
                  {name}
                </Button>
              </RouterLink>
            ))}
          </Box>
          <Box mb={1} width="100%">
            <Divider variant="middle" />
          </Box>
          <Box p={1} display="flex" alignItems="center" mb={1}>
            <Call />
            <Box ml={1}>
              <Link color="textPrimary" href="tel:+74956911546">
                +7 (495) 691-15-46
              </Link>
            </Box>
          </Box>
          <Typography variant="subtitle1">Мы в социальных сетях:</Typography>
          <Box p={1}>
            <IconButton
              component="a"
              aria-label="Ссылка на ВКонтакте"
              href="https://vk.com/staryjarbat"
              rel="noopener"
              target="_blank"
            >
              <VK htmlColor="#2196f3" />
            </IconButton>
            <IconButton
              component="a"
              aria-label="Ссылка на Инстаграм"
              href="https://www.instagram.com/teatr_staryj_arbat/"
              rel="noopener"
              target="_blank"
            >
              <Instagram htmlColor="#9c27b0" />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  )
}
