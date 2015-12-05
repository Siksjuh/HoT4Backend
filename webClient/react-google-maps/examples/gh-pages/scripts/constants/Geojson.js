// http://en.wikipedia.org/wiki/GeoJSON

export default {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": 0,
      "geometry": {
        "type": "Point",
        "coordinates": [-70.2685546875, 24.886436490787712]
      },
      "properties": {
        "zoom": 4,
        "mapTypeId": "terrain"// google.maps.MapTypeId.TERRAIN
      }
    },
    {
      "type": "Feature",
      "id": 1,
      "geometry": {
        "type": "Point",
        "coordinates": [-70.2685546875, 24.886436490787712]
      },
      "properties": {
        "title": "The Bermuda Triangle!"
      }
    },
    {
      "type": "Feature",
      "id": 2,
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [-122.214897, 37.772323], [-157.821856, 21.291982], [178.431, -18.142599], [153.027892, -27.46758]
        ]
      },
      "properties": {
        "geodesic": true,
        "strokeColor": "#FF0000",
        "strokeOpacity": 1.0,
        "strokeWeight": 2
      }
    },
    {
      "type": "Feature",
      "id": 3,
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-80.190262, 25.774252], [-66.118292, 18.466465], [-64.75737, 32.321384], [-80.190262, 25.774252],
            [-80.190262, 25.774252]
          ]
        ]
      },
      "properties": {
        "title": "Bermuda Triangle",
        "strokeColor": "#FF0000",
        "strokeOpacity": 0.8,
        "strokeWeight": 2,
        "fillColor": "#FF0000",
        "fillOpacity": 0.35,
      }
    }
  ]
};
