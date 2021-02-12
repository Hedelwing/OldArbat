import React from "react"
import {
    Typography,
    Grid,
    IconButton,
    Link,
    Box,
} from "@material-ui/core"
import { Call } from "@material-ui/icons"
import { Map, VK, Instagram, Metro as MetroSign, Layot, Youtube, SEO } from "../../components"
import { contactsJsonLD } from "../../ulits"

const Metro = ({ color, titleAccess, name }) => <Box display="flex" alignItems="center" mb={1}>
    <MetroSign htmlColor={color} titleAccess={titleAccess} />
    <Box ml={1}>
        <Typography variant="subtitle1">{name}</Typography>
    </Box>
</Box>


const Contacts = ({ url }) => <Layot current="Контакты" navItems={[{ name: "Главная", link: "/" }]} >

    <SEO
        title="Контакты"
        description="Контактная информация театральной студии «Старый Арбат». Как пройти до нашего театрального дома"
        url={url}
    >
        <script src="//yastatic.net/taxi-widget/ya-taxi-widget.js" />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(contactsJsonLD)
            }}
        />
    </SEO>

    <Box pb={4}>
        <Grid spacing={3} container>
            <Grid
                item
                xs={12}
                spacing={3}
                container
                alignItems="center"
                justify="space-between"
            >
                <Grid xs={12} sm="auto" item>
                    <Typography variant="h5" gutterBottom>
                        Театральная студия «Старый Арбат»
                    </Typography>
                    <Typography variant="body1">
                        119019, г. Москва, Филипповский переулок, дом 11, стр. 2.
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm="auto"
                    dangerouslySetInnerHTML={{
                        __html: `<div class="ya-taxi-widget" data-use-location="true" data-size="xs" data-theme="normal" data-title="Вызвать такси"  data-point-a="" data-point-b="37.598268,55.749577" data-ref="https%3A%2F%2Fcodesandbox.io%2F" data-proxy-url="https://3.redirect.appmetrica.yandex.com/route?start-lat={start-lat}&amp;start-lon={start-lon}&amp;end-lat={end-lat}&amp;end-lon={end-lon}&amp;ref={ref}&amp;appmetrica_tracking_id=1178268795219780156"></div>`,
                    }}
                />
            </Grid>
        </Grid>
    </Box>

    <Box pb={4} maxWidth={720} mx="auto">
        <Map />
    </Box>

    <Box pb={4}>

        <Typography variant="h5" align='center' style={{ textTransform: 'uppercase' }} gutterBottom>
            Связь с нами:
        </Typography>

        <Grid container spacing={3} mb={2}>

            <Grid item xs={12} sm={8}>
                <Typography variant="subtitle1" gutterBottom>
                    Телефон:
                    </Typography>
                <Box display="flex" fontWeight='bold' alignItems="center">
                    <Call />
                    <Box ml={1}>
                        <Link color="primary" href="tel:+74956911546">
                            +7 (495) 691-15-46
                        </Link>
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1">Социальные сети:</Typography>
                <IconButton
                    component="a"
                    href="https://vk.com/staryjarbat"
                    target="_blank"
                    rel="noopener"
                >
                    <VK htmlColor="#2196f3" />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://www.instagram.com/teatr_staryj_arbat/"
                    rel="noopener"
                    target="_blank"
                >
                    <Instagram htmlColor="#9c27b0" />
                </IconButton>
            </Grid>

        </Grid>
    </Box>

    <Box id='how_to_get' display="flex" flexDirection="column" justifyContent="center">

        <Typography variant="h5" align='center' style={{ textTransform: 'uppercase' }} gutterBottom>
            Как до нас добраться?
        </Typography>

        <Metro name="Кропоткинская" color="#EF161E" titleAccess="Сокольническая линия метро" />

        <Typography variant="body2" gutterBottom>
            Выход к Гоголевскому бульвару. Идти по нечетной стороне, свернуть
            налево во второй переулок (Сивцев Вражек), затем в первый переулок
            направо (Филипповский). Дом 11, стр. 2 находится слева, на нем вывеска
            синяя. Вход со двора.
        </Typography>

        <Box py={2} maxWidth={720} mx="auto">
            <Youtube caption="Идем в театр «Старый Арбат» от Кропоткинской" src="https://www.youtube.com/embed/OLXBLwgMi-0" />
        </Box>

        <Metro name="Арбатская" color="#0078BE" titleAccess="Филёвская линия метро" />

        <Typography variant="body2" gutterBottom>
            На выходе идти в потоке прямо, спуститься в подземный переход, в нем
            прямо, к ресторану "Прага", свернуть налево, идти мимо цветочного
            магазина и кафе "Subway", свернуть направо (в Малый Афанасьевский
            пер.), пройти мимо "Ароматного Мира" и "Братьев Караваевых", свернуть
            налево в Филипповский переулок. Дом 11, стр. 2 находится справа, на
            нем вывеска синего цвета. Вход со двора.
        </Typography>

        <Box py={2} maxWidth={720} mx="auto">
            <Youtube caption="Идем в театр «Старый Арбат» от Арбатской" src="https://www.youtube.com/embed/Mesp6SMBbXE" />
        </Box>

        <Metro name="Арбатская" color="#00BFFF" titleAccess="Арбатско-Покровская линия метро" />

        <Typography variant="body2" gutterBottom>
            Выйдя из метро, повернуть налево, перейти на светофоре дорогу,
            свернуть направо, перейти Гоголевский бульвар в двух местах (ориентир
            - памятник Гоголю), идти прямо мимо "Ароматного Мира" и "Братьев
            Караваевых", свернуть налево в Филипповский переулок. Дом 11, стр.2
            находится справа, на нем - вывеска синего цвета. Вход со двора.
        </Typography>

    </Box>

</Layot >

export default Contacts

export async function getStaticProps(ctx) {
    return {
        props: {
            url: `${process.env.THEATER}contacts`
        }
    }
}