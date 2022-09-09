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
         "yaw": -3.078651988601841,
         "pitch": 0.020046075221763715,
         "fov": 1.3860279694857303
       },

       "entranceHotspots":[
        {
          "yaw": -2.9925828797760023,
          "pitch": -0.1079431985984461,
          "rotation": 0,
          "target": "1-02_1f_main-entrance",
        }
       ],
       "linkHotspots": [],
       "infoHotspots": []
     },
     {
       "id": "1-02_1f_main-entrance",
       "name": "Main Entrance",
       "floor": 2,
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
         "yaw": 0.20494332195288223,
         "pitch": 0.01122411620151098,
         "fov": 1.3860279694857303
       },
       "entranceHotspots":[],
       "linkHotspots": [
         {
          "yaw": -2.7395573010713807,
          "pitch": 0.5873647216994655,
          "rotation": 0,
          "target": "0-01_1f_outside",
          "perspective": 500
         },
         {
           "yaw": 0.046131549595525456,
           "pitch": 0.3391765100864603,
           "rotation": 0,
           "target": "3-03_1f_lobby-center",
           "perspective": 500
         }
       ],
       "infoHotspots": [
         {
           "yaw": 1.0030102336653925,
           "pitch": -0.3718919045371525,
           "title": "Sample Info",
           "text": "This is a Qr Image",
           "perspective": 500
         }
       ]
     },
     {
       "id": "2-02_1f_main-entrance-reversed",
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
         "yaw": -2.935990295170779,
         "pitch": 0.3940501835692345,
         "fov": 1.3860279694857303
       },
       "entranceHotspots":[],
       "linkHotspots": [
         {
           "yaw": -2.7395573010713807,
           "pitch": 0.5873647216994655,
           "rotation": 0,
           "target": "0-01_1f_outside",
           "perspective": 500
         },
         {
           "yaw": 0.039092003765624384,
           "pitch": 0.34585731793744046,
           "rotation": 0,
           "target": "3-03_1f_lobby-center",
           "perspective": 500
         }
       ],
       "infoHotspots": [
         {
           "yaw": 1.003048916953631,
           "pitch": -0.38434638365872154,
           "title": "Sample Info",
           "text": "This is a QR Code"
         }
       ]
     },
     {
       "id": "3-03_1f_lobby-center",
       "name": "Lobby",
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
         "yaw": 3.0990511794352553,
         "pitch": 0.19127548983660958,
         "fov": 1.3860279694857303
       },
       "entranceHotspots":[
        {
          "yaw": -0.1900511262581297,
          "pitch": 0.4131406758173686,
          "rotation": 0,
          "target": "2-02_1f_main-entrance-reversed"
        },
        {
          "yaw": 2.6122882008821104,
          "pitch": 0.1289998681155069,
          "rotation": 0,
          "target": "6-05_1f_records-entrance"
        }
        ],
       "linkHotspots": [
         {
           "yaw": 3.018108412137508,
           "pitch": 0.3650013297908039,
           "rotation": 0,
           "target": "5-04_1f_lobby-corner",
           "perspective": 500
         }
       ],
       "infoHotspots": [
         {
           "yaw": -1.5547279662748785,
           "pitch": -0.18069876998386647,
           "title": "Sample",
           "text": "Sample<div><br></div>"
         },
         {
           "yaw": 1.3345362945410386,
           "pitch": -0.12316665319798759,
           "title": "Sample",
           "text": "Sample<div><br></div>"
         }
       ]
     },
     {
       "id": "4-03_1f_lobby-center-reversed",
       "name": "Lobby",
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
         "yaw": -0.017228932030045385,
         "pitch": 0.0023783479076655567,
         "fov": 1.3860279694857303
       },
       "entranceHotspots":[
          {
           "yaw": -0.1977494635378143,
           "pitch": 0.40029507654535834,
           "rotation": 0,
           "target": "2-02_1f_main-entrance-reversed",
          },
          {
            "yaw": 2.619936987858619,
            "pitch": 0.10179377778197818,
            "rotation": 0,
            "target": "6-05_1f_records-entrance",
          }
        ],
       "linkHotspots": [
         {
           "yaw": 2.9919386937932426,
           "pitch": 0.37338659441437727,
           "rotation": 0,
           "target": "5-04_1f_lobby-corner",
           "perspective": 200
         },
       ],
       "infoHotspots": []
     },
     {
       "id": "5-04_1f_lobby-corner",
       "name": "Lobby (Corner)",
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
         "yaw": -0.8760848251946065,
         "pitch": 0.31533421382147075,
         "fov": 1.3860279694857303
       },
       "entranceHotspots":[
        {
          "yaw": -1.1795377961493116,
          "pitch": 0.2004702356141774,
          "rotation": 0,
          "target": "13-10_1f_administration-entrance",
        },
        {
          "yaw": 1.6004737037496817,
          "pitch": 0.24814424836103655,
          "rotation": 0,
          "target": "6-05_1f_records-entrance",
        }
       ],
       "linkHotspots": [
         {
           "yaw": -0.05997264710148805,
           "pitch": 0.5,
           "rotation": 0.48,
           "target": "4-03_1f_lobby-center-reversed",
           "perspective": 365
         },
         {
           "yaw": -1.5558965615488987,
           "pitch": 0.19247369597525186,
           "rotation": 0,
           "target": "10-08_1f_hallway-center",
           "perspective": 0
         }
       ],
       "infoHotspots": [
         {
           "yaw": -2.7224178040347464,
           "pitch": 0.10603776137863896,
           "title": "Sample",
           "text": "Sample"
         },
         {
           "yaw": 1.0605471922804615,
           "pitch": -0.18495530854154119,
           "title": "Sample",
           "text": "Sample<br>"
         }
       ]
     },
     {
       "id": "6-05_1f_records-entrance",
       "name": "Records (Entrance)",
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
         "yaw": -0.5820616094131257,
         "pitch": -0.004756695815334666,
         "fov": 1.3860279694857303
       },
       "entranceHotspots":[
        {
          "yaw": -3.04680694416151,
          "pitch": 0.11757843174422433,
          "rotation": 0,
          "target": "13-10_1f_administration-entrance",
        }
      ],
       "linkHotspots": [
         {
           "yaw": -1.1774642265754718,
           "pitch": 0.15044588226278677,
           "rotation": 5.497787143782138,
           "target": "7-06_1f_records-front-side",
         },
         {
           "yaw": -0.656726542485579,
           "pitch": 0.1518060217797501,
           "rotation": 0.7853981633974483,
           "target": "8-07_1f_records-back-side",
           
         },
         {
           "yaw": 3.0762763805463464,
           "pitch": 0.0145881356174241,
           "rotation": 0,
           "target": "10-08_1f_hallway-center",
           
         },
         {
           "yaw": -2.4557386951214983,
           "pitch": 0.4549299251197816,
           "rotation": 1.5707963267948966,
           "target": "4-03_1f_lobby-center-reversed",
           
         }        
       ],
       "infoHotspots": []
     },
     {
       "id": "7-06_1f_records-front-side",
       "name": "Front",
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
         "yaw": 1.8137539721450597,
         "pitch": 0.11400586043259153,
         "fov": 1.3860279694857303
       },
       "entranceHotspots":[
        {
          "yaw": 1.658729439745855,
          "pitch": 0.03399651259120695,
          "rotation": 0,
          "target": "9-05_1f_records-entrance-reversed",
        }
       ],
       "linkHotspots": [
         {
           "yaw": 0.9017259041037935,
           "pitch": 0.4111406895751628,
           "rotation": 4.71238898038469,
           "target": "8-07_1f_records-back-side",
           
         }
       ],
       "infoHotspots": []
     },
     {
       "id": "8-07_1f_records-back-side",
       "name": "Back",
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
         "yaw": 2.5147732693446194,
         "pitch": 0.24589551600355364,
         "fov": 1.3860279694857303
       },
       "entranceHotspots":[
        {
          "yaw": 2.3698171976940117,
          "pitch": 0.11024081355432713,
          "rotation": 0,
          "target": "9-05_1f_records-entrance-reversed",
        }
      ],
       "linkHotspots": [
         {
           "yaw": -3.016228165203838,
           "pitch": 0.10318829976044697,
           "rotation": 0,
           "target": "7-06_1f_records-front-side",
           "perspective": 500
         }
       ],
       "infoHotspots": []
     },
     {
       "id": "9-05_1f_records-entrance-reversed",
       "name": "Exit",
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
         "yaw": -3.1373453424009305,
         "pitch": 0.1878894847056074,
         "fov": 1.3860279694857303
       },
       "entranceHotspots":[
        {
          "yaw": -3.0520408168755395,
          "pitch": 0.09662996649865008,
          "rotation": 0,
          "target": "13-10_1f_administration-entrance", 
        }],
       "linkHotspots": [
         {
           "yaw": 3.0745868261884475,
           "pitch": 0.0145881356174241,
           "rotation": 0,
           "target": "10-08_1f_hallway-center",
           "perspective": 500
         },
         {
           "yaw": -2.429645044897555,
           "pitch": 0.49095711723487945,
           "rotation": 1.5707963267948966,
           "target": "4-03_1f_lobby-center-reversed",
           "perspective": 500
         }
       ],
       "infoHotspots": []
     },
     {
       "id": "10-08_1f_hallway-center",
       "name": "Hallway",
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
         "yaw": 0.04760763086738251,
         "pitch": 0.07204370057140252,
         "fov": 1.3860279694857303
       },
       "entranceHotspots":[
        {
          "yaw": 2.4763559710025973,
          "pitch": 0.2847440873173692,
          "rotation": 0,
          "target": "13-10_1f_administration-entrance",
        },
        {
          "yaw": 3.1325540036244313,
          "pitch": 0.0563488492134514,
          "rotation": 0,
          "target": "6-05_1f_records-entrance",
        }
       ],
       "linkHotspots": [
         {
           "yaw": 0.05445781295897234,
           "pitch": 0.22685749976279368,
           "rotation": 0,
           "target": "12-09_1f_hallway-corner",
           "perspective": 0
         },
         {
           "yaw": 3.1284945924430794,
           "pitch": 0.3055457384528282,
           "rotation": 4.71238898038469,
           "target": "5-04_1f_lobby-corner",
           "perspective": 0
         }
       ],
       "infoHotspots": []
     },
     {
       "id": "11-08_1f_hallway-center-reversed",
       "name": "Hallway",
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
         "yaw": 2.308882997480797,
         "pitch": 0.13010349659666076,
         "fov": 1.3860279694857303
       },
       "entranceHotspots":[
        {
          "yaw": 2.4999661823302333,
          "pitch": 0.27511622019067516,
          "rotation": 0,
          "target": "13-10_1f_administration-entrance",
        },
        {
          "yaw": 3.123337211702113,
          "pitch": 0.07379785911812142,
          "rotation": 0,
          "target": "6-05_1f_records-entrance",
        }

       ],
       "linkHotspots": [
         {
           "yaw": 3.120572369373866,
           "pitch": 0.3204134398848968,
           "rotation": 5.497787143782138,
           "target": "5-04_1f_lobby-corner",
           "perspective": 500
         }, 
         {
          "yaw": 0.05445781295897234,
          "pitch": 0.22685749976279368,
          "rotation": 0,
           "target": "12-09_1f_hallway-corner", 
           "perspective": 500
         }
       ],
       "infoHotspots": []
     },
     {
       "id": "12-09_1f_hallway-corner",
       "name": "Hallway (Corner)",
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
         "yaw": 2.0416807457950945,
         "pitch": -0.01582566247309103,
         "fov": 1.3860279694857303
       },
       "entranceHotspots":[],
       "linkHotspots": [
         {
           "yaw": 3.0125022902715566,
           "pitch": 0.19183986201926118,
           "rotation": 0,
           "target": "11-08_1f_hallway-center-reversed",
           "perspective": 500
         }
       ],
       "infoHotspots": []
     },
     {
       "id": "13-10_1f_administration-entrance",
       "name": "Administration (Entrance)",
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
         "yaw": -0.3335114838511526,
         "pitch": 0.458847683193385,
         "fov": 1.3860279694857303
       },
       "entranceHotspots":[],
       "linkHotspots": [
         {
           "yaw": 2.1923963822250565,
           "pitch": 0.3489780161960745,
           "rotation": 4.71238898038469,
           "target": "3-03_1f_lobby-center",
           "perspective": 500
         },
         {
           "yaw": -2.250633374636136,
           "pitch": 0.5213965876662527,
           "rotation": 1.5707963267948966,
           "target": "10-08_1f_hallway-center",
           "perspective": 500
         },
         {
           "yaw": -0.7145813874247722,
           "pitch": 0.2083803974726841,
           "rotation": 0,
           "target": "14-11_1f_administration-center",
           "perspective": 500
         }
       ],
       "infoHotspots": []
     },
     {
       "id": "14-11_1f_administration-center",
       "name": "Center",
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
         "yaw": 0.1704853055254354,
         "pitch": -0.028540174891983128,
         "fov": 1.3860279694857303
       },
       "entranceHotspots":[
        {
          "yaw": 0.4234897309503225,
          "pitch": 0.07677891654597602,
          "rotation": 0,
          "target": "15-10_1f_administration-entrance-reversed",
        }
       ],
       "linkHotspots": [],
       "infoHotspots": []
     },
     {
       "id": "15-10_1f_administration-entrance-reversed",
       "name": "Exit",
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
         "yaw": -2.9605602795640884,
         "pitch": 0.40798308567448416,
         "fov": 1.3860279694857303
       },
       "entranceHotspots":[],
       "linkHotspots": [
         {
           "yaw": -2.2958551367313884,
           "pitch": 0.5987935558265498,
           "rotation": 1.5707963267948966,
           "target": "12-09_1f_hallway-corner",
           "perspective": 500
         },
         {
           "yaw": 2.295814021341177,
           "pitch": 0.4394342473169104,
           "rotation": 4.71238898038469,
           "target": "5-04_1f_lobby-corner",
           "perspective": 500
         }
       ],
       "infoHotspots": []
     }
   ],
   "name": "CHED Project",
   "settings": {
     "mouseViewMode": "drag",
     "autorotateEnabled": false,
     "fullscreenButton": false,
     "viewControlButtons": false
   }
 };
 