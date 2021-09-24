import React from "react"
import SwiperCore, { Navigation, Autoplay, A11y, Lazy } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Head from "next/head"
import Lightbox from "react-image-lightbox"
import useStyles from "./galeryStyles"
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation, Autoplay, Lazy, A11y])

export default function Galery({ images }) {
    const [openIndex, setOpen] = React.useState(null)
    const { img } = useStyles()

    const prevIndex = (openIndex + images.length - 1) % images.length
    const nextIndex = (openIndex + 1) % images.length

    return <>
        <Head>
            <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@zhyabs1314/react-image-lightbox@5.0.8/style.css" />
        </Head>

        <Swiper
            autoplay={{
                delay: 3000,
            }}
            navigation
            slidesPerView={1}
            lazy
            breakpoints={{
                720: {
                    slidesPerView: 2,
                },
                1240: {
                    slidesPerView: 3,
                }
            }}
            spaceBetween={8}
        >
            {images.map(({ thumbnail }, i) => (
                <SwiperSlide key={i}>
                    <img
                        className={`swiper-lazy ${img}`}
                        data-src={thumbnail}
                        alt={`Изображение ${i + 1}`}
                        onClick={() => setOpen(i)}
                    />
                </SwiperSlide>
            ))}
        </Swiper>

        {openIndex !== null && <Lightbox
            mainSrc={images[openIndex].url}
            nextSrc={images[nextIndex].url}
            prevSrc={images[prevIndex].url}
            onCloseRequest={() => setOpen(null)}
            onMovePrevRequest={() => setOpen(prevIndex)}
            onMoveNextRequest={() => setOpen(nextIndex)}
        />}
    </>
}
