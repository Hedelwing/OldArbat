import React from "react"
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from "react-yandex-maps"

export default ({ width = "100%", height = "340px", zoom = 15 }) => (
  <YMaps>
    <Map
      width={width}
      height={height}
      defaultState={{
        center: [55.748730, 37.598722],
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
