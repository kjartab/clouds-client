<template>
  <div id='map'></div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
console.dir(mapboxgl)

export default {
  data () {
    return {}
  },
  mounted () {
    this.createMap()
  },
  methods: {
    createMap: function () {
      mapboxgl.accessToken = 'pk.eyJ1Ijoia2phcnRhYiIsImEiOiJjajFhaDJjeWYwMDM2MzNuNW9qaHY1Y2ljIn0.GXGL6PYl_oEw4kRmQw5uCQ'

      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/kjartab/cj1t888ks002y2rpft8wv3d3w',
        minzoom: 1.3,
        center: [-74.0073, 40.7124], // Manhattan
        zoom: 16
      })

      this.map.addControl(new mapboxgl.Navigation())
    }
  }
}
</script>

<style>
#map {
  position:absolute;
  width: 100%;
  height: 100%;
}
</style>
