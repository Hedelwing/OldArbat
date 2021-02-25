import React from "react"
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from "react-yandex-maps"

const YMap = ({ width = "100%", height = "240px", zoom = 14 }) => (
  <YMaps>
    <Map
      width={width}
      height={height}
      defaultState={{
        center: [55.748620, 37.598922],
        zoom,
      }}
    >
      <Placemark
        geometry={[55.749607, 37.598264]}
        options={{
          preset: "islands#violetTheaterIcon",
        }}
      />

      <FullscreenControl />

      <ZoomControl />

    </Map>
  </YMaps>
)

export default YMap