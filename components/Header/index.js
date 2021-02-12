import { Hidden } from "@material-ui/core"
import React from "react"
import Desktop from "./Desktop"
import Mobile from "./Mobile"

const menuLinks = [{
  name: "Главная",
  link: "/"
}, {
  name: "Афиша",
  link: "/poster/"
}, {
  name: "Репертуар",
  link: "/plays/"
}, {
  name: "В лицах",
  link: "/troupe/"
}, {
  name: "Контакты",
  link: "/contacts/"
}]

function Header() {
  return <>
    <Hidden mdUp>
      <Mobile menuLinks={menuLinks} />
    </Hidden>
    <Hidden smDown>
      <Desktop menuLinks={menuLinks} />
    </Hidden>
  </>
}

export default React.memo(Header)