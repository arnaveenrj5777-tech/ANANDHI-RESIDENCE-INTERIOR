var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "FOYER",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6118079801959126,
          "pitch": 0.5554000993222932,
          "rotation": 1.5707963267948966,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
      "name": "LIVING ROOM",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.055088680188793,
          "pitch": 0.29673639775971417,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -2.371079704970933,
          "pitch": 0.24405195747802466,
          "rotation": 1.5707963267948966,
          "target": "2-dinning-area"
        },
        {
          "yaw": -2.533798076050749,
          "pitch": 0.2918365888403578,
          "rotation": 0.7853981633974483,
          "target": "3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dinning-area",
      "name": "DINNING AREA",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3609397251943243,
          "pitch": 0.30934611645329113,
          "rotation": 4.71238898038469,
          "target": "1-living-room"
        },
        {
          "yaw": 1.7937441152462883,
          "pitch": 0.17623030557228425,
          "rotation": 1.5707963267948966,
          "target": "0-foyer"
        },
        {
          "yaw": -3.096156340982777,
          "pitch": 0.6071858880318448,
          "rotation": 0,
          "target": "3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "KITCHEN",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3709290439566537,
          "pitch": 0.23172903261810873,
          "rotation": 0,
          "target": "1-living-room"
        },
        {
          "yaw": 2.130198997016138,
          "pitch": 0.35716269956868096,
          "rotation": 4.71238898038469,
          "target": "2-dinning-area"
        },
        {
          "yaw": 2.7512038238578658,
          "pitch": 0.31544547104732956,
          "rotation": 0.7853981633974483,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
