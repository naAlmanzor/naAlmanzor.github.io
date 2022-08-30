var APP_DATA = {
  "scenes": [
    {
      "id": "0-01_1f_outside",
      "name": "Outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.0903492753214294,
        "pitch": 0.029448980098568,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": -2.980141424130851,
          "pitch": 0.1662936628701388,
          "rotation": 6.283185307179586,
          "target": "1-02_1f_main-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-02_1f_main-entrance",
      "name": "Main Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.32531539474919313,
        "pitch": 0.24095475606620553,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": -2.7760566674958316,
          "pitch": 0.5071470307990058,
          "rotation": 0,
          "target": "0-01_1f_outside"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "CHED Virtual Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
