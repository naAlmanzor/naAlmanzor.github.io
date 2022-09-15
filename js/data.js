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
       "linkHotspots": [
          {
            "yaw": -2.9925828797760023,
            "pitch": -0.1079431985984461,
            "rotation": 0,
            "target": "1-02_1f_main-entrance",
          }
        ],
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
       "linkHotspots": [
         {
          "yaw": -2.7395573010713807,
          "pitch": 0.5873647216994655,
          "rotation": 0,
          "target": "0-01_1f_outside",
         },
         {
           "yaw": 0.046131549595525456,
           "pitch": 0.3391765100864603,
           "rotation": 0,
           "target": "3-03_1f_lobby-center",
         }
       ],
       "infoHotspots": [
         {
           "yaw": 1.0030102336653925,
           "pitch": -0.3718919045371525,
           "title": "QR Code",
           "popup": "./assets/icons/up.png",
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
           "title": "QR Code",
           "popup": "./assets/icons/up.png",
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
       "linkHotspots": [
        {
          "yaw": -0.1900511262581297,
          "pitch": 0.1131406758173686,
          "rotation": 0,
          "target": "2-02_1f_main-entrance-reversed"
        },
        {
          "yaw": 2.6122882008821104,
          "pitch": 0.0289998681155069,
          "rotation": 0,
          "target": "6-05_1f_records-entrance"
        },
         {
           "yaw": 3.018108412137508,
           "pitch": 0.3650013297908039,
           "rotation": 0,
           "target": "5-04_1f_lobby-corner",
           "perspective": 500
         }
       ],
       "infoHotspots": [
        //  {
        //    "yaw": -1.5547279662748785,
        //    "pitch": -0.18069876998386647,
        //    "title": "Sample",
        //    "text": "Sample<div><br></div>"
        //  },
         {
           "yaw": 1.3345362945410386,
           "pitch": -0.12316665319798759,
           "title": "Records",
           "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida congue nibh et mattis. Donec pellentesque leo sed lorem gravida laoreet. Quisque auctor laoreet turpis vel facilisis. Nunc neque lacus, finibus et accumsan mollis, consequat ac augue. Mauris hendrerit lectus ut urna fermentum, a efficitur metus finibus. Cras consectetur finibus hendrerit. Aliquam mi lacus, accumsan iaculis eros in, viverra pretium ex. Nunc a mi ac massa porttitor euismod. Nam sem magna, tincidunt eget dictum in, tincidunt sodales nulla. Aliquam sagittis lorem eget sodales viverra. Vivamus et urna magna. Nullam laoreet, sem nec tempus gravida, purus mi iaculis metus, non tincidunt sem mauris eget quam."
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
       "linkHotspots": [
         {
           "yaw": 2.9919386937932426,
           "pitch": 0.37338659441437727,
           "rotation": 0,
           "target": "5-04_1f_lobby-corner",
           "perspective": 200
         },
         {
          "yaw": -0.1977494635378143,
          "pitch": 0.10029507654535834,
          "rotation": 0,
          "target": "2-02_1f_main-entrance-reversed",
         },
         {
           "yaw": 2.619936987858619,
           "pitch": 0.05179377778197818,
           "rotation": 0,
           "target": "6-05_1f_records-entrance",
         }
       ],
       "infoHotspots": [
         {
          "yaw": 1.3345362945410386,
           "pitch": -0.12316665319798759,
           "title": "Records",
           "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida congue nibh et mattis. Donec pellentesque leo sed lorem gravida laoreet. Quisque auctor laoreet turpis vel facilisis. Nunc neque lacus, finibus et accumsan mollis, consequat ac augue. Mauris hendrerit lectus ut urna fermentum, a efficitur metus finibus. Cras consectetur finibus hendrerit. Aliquam mi lacus, accumsan iaculis eros in, viverra pretium ex. Nunc a mi ac massa porttitor euismod. Nam sem magna, tincidunt eget dictum in, tincidunt sodales nulla. Aliquam sagittis lorem eget sodales viverra. Vivamus et urna magna. Nullam laoreet, sem nec tempus gravida, purus mi iaculis metus, non tincidunt sem mauris eget quam."
         }
      ]
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
       "linkHotspots": [
         {
           "yaw": -0.05997264710148805,
           "pitch": 0.5,
           "rotation": 0.48,
           "target": "4-03_1f_lobby-center-reversed",
         },
         {
           "yaw": -1.5258965615488987,
           "pitch": 0.29247369597525186,
           "rotation": 0,
           "target": "10-08_1f_hallway-center",
         },
         {
          "yaw": -1.1795377961493116,
          "pitch": 0.1004702356141774,
          "rotation": 0,
          "target": "13-10_1f_administration-entrance",
        },
        {
          "yaw": 1.6004737037496817,
          "pitch": 0.14814424836103655,
          "rotation": 0,
          "target": "6-05_1f_records-entrance",
        }
       ],
       "infoHotspots": [
         {
           "yaw": -2.7224178040347464,
           "pitch": 0.10603776137863896,
           "title": "Restricted",
           "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida congue nibh et mattis. Donec pellentesque leo sed lorem gravida laoreet. Quisque auctor laoreet turpis vel facilisis. Nunc neque lacus, finibus et accumsan mollis, consequat ac augue. Mauris hendrerit lectus ut urna fermentum, a efficitur metus finibus. Cras consectetur finibus hendrerit. Aliquam mi lacus, accumsan iaculis eros in, viverra pretium ex. Nunc a mi ac massa porttitor euismod. Nam sem magna, tincidunt eget dictum in, tincidunt sodales nulla. Aliquam sagittis lorem eget sodales viverra. Vivamus et urna magna. Nullam laoreet, sem nec tempus gravida, purus mi iaculis metus, non tincidunt sem mauris eget quam."
         },

         {
          "yaw": -3.8024178040347464,
          "pitch": 0.08603776137863896,
          "title": "Restricted",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida congue nibh et mattis. Donec pellentesque leo sed lorem gravida laoreet. Quisque auctor laoreet turpis vel facilisis. Nunc neque lacus, finibus et accumsan mollis, consequat ac augue. Mauris hendrerit lectus ut urna fermentum, a efficitur metus finibus. Cras consectetur finibus hendrerit. Aliquam mi lacus, accumsan iaculis eros in, viverra pretium ex. Nunc a mi ac massa porttitor euismod. Nam sem magna, tincidunt eget dictum in, tincidunt sodales nulla. Aliquam sagittis lorem eget sodales viverra. Vivamus et urna magna. Nullam laoreet, sem nec tempus gravida, purus mi iaculis metus, non tincidunt sem mauris eget quam."
        },
         {
           "yaw": 1.0605471922804615,
           "pitch": -0.18495530854154119,
           "title": "sample",
           "popup": "./assets/icons/windowed.png",
          //  "title": "Sample",
          //  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida congue nibh et mattis. Donec pellentesque leo sed lorem gravida laoreet. Quisque auctor laoreet turpis vel facilisis. Nunc neque lacus, finibus et accumsan mollis, consequat ac augue. Mauris hendrerit lectus ut urna fermentum, a efficitur metus finibus. Cras consectetur finibus hendrerit. Aliquam mi lacus, accumsan iaculis eros in, viverra pretium ex. Nunc a mi ac massa porttitor euismod. Nam sem magna, tincidunt eget dictum in, tincidunt sodales nulla. Aliquam sagittis lorem eget sodales viverra. Vivamus et urna magna. Nullam laoreet, sem nec tempus gravida, purus mi iaculis metus, non tincidunt sem mauris eget quam."
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
           "pitch": 0.3145881356174241,
           "rotation": 0,
           "target": "10-08_1f_hallway-center", 
         },
         {
           "yaw": -2.4557386951214983,
           "pitch": 0.4549299251197816,
           "rotation": 1.1707963267948966,
           "target": "4-03_1f_lobby-center-reversed",
         },
         {
          "yaw": -3.04680694416151,
          "pitch": 0.06757843174422433,
          "rotation": 0,
          "target": "13-10_1f_administration-entrance",
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
       "linkHotspots": [
         {
           "yaw": 0.9017259041037935,
           "pitch": 0.4111406895751628,
           "rotation": 4.71238898038469,
           "target": "8-07_1f_records-back-side",
         },
         {
          "yaw": 1.658729439745855,
          "pitch": 0.03399651259120695,
          "rotation": 0,
          "target": "9-05_1f_records-entrance-reversed",
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
       "linkHotspots": [
         {
           "yaw": -3.016228165203838,
           "pitch": 0.10318829976044697,
           "rotation": 0,
           "target": "7-06_1f_records-front-side",
         },
         {
          "yaw": 2.3698171976940117,
          "pitch": 0.11024081355432713,
          "rotation": 0,
          "target": "9-05_1f_records-entrance-reversed",
         }
       ],
       "infoHotspots": []
     },
     {
       "id": "9-05_1f_records-entrance-reversed",
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
         "yaw": -3.1373453424009305,
         "pitch": 0.1878894847056074,
         "fov": 1.3860279694857303
       },
       "linkHotspots": [
         {
           "yaw": 3.0062763805463464,
           "pitch": 0.3145881356174241,
           "rotation": 0,
           "target": "10-08_1f_hallway-center",
         },
         {
           "yaw": -2.429645044897555,
           "pitch": 0.49095711723487945,
           "rotation": 1.1707963267948966,
           "target": "4-03_1f_lobby-center-reversed",
         },
         {
          "yaw": -3.0520408168755395,
          "pitch": 0.09662996649865008,
          "rotation": 0,
          "target": "13-10_1f_administration-entrance", 
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
         },
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
        "yaw": -3.308882997480797,
        "pitch": 0,
        "fov": 1.3860279694857303
       },
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
         },
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
       "linkHotspots": [
         {
           "yaw": 3.0825022902715566,
           "pitch": 0.19183986201926118,
           "rotation": 0,
           "target": "11-08_1f_hallway-center-reversed",
         },
         {
           "yaw": 1.1125022902715566,
           "pitch": 0.19183986201926118,
           "rotation": 0,
           "target": "0-01_2f_hallway_stairwell",
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
       "linkHotspots": [
         {
          "yaw": 2.295814021341177,
          "pitch": 0.4394342473169104,
          "rotation": 4.71238898038469,
          "target": "5-04_1f_lobby-corner",
         },
         {
           "yaw": -2.250633374636136,
           "pitch": 0.5213965876662527,
           "rotation": 1,
           "target": "10-08_1f_hallway-center",
         },
         {
           "yaw": -0.7145813874247722,
           "pitch": 0.2083803974726841,
           "rotation": 0,
           "target": "14-11_1f_administration-center-room",
         }
       ],
       "infoHotspots": []
     },
     {
       "id": "14-11_1f_administration-center-room",
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
       "linkHotspots": [
        {
          "yaw": 0.4234897309503225,
          "pitch": 0.07677891654597602,
          "rotation": 0,
          "target": "15-10_1f_administration-entrance-reversed",
        }
       ],
       "infoHotspots": []
     },
     {
       "id": "15-10_1f_administration-entrance-reversed",
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
         "yaw": -2.9605602795640884,
         "pitch": 0.40798308567448416,
         "fov": 1.3860279694857303
       },
       "linkHotspots": [
         {
           "yaw": -2.250633374636136,
           "pitch": 0.5213965876662527,
           "rotation": 1,
           "target": "10-08_1f_hallway-center",
         },
         {
           "yaw": 2.295814021341177,
           "pitch": 0.4394342473169104,
           "rotation": 4.71238898038469,
           "target": "5-04_1f_lobby-corner",
         },
         {
          "yaw": -0.7145813874247722,
          "pitch": 0.2083803974726841,
          "rotation": 0,
          "target": "14-11_1f_administration-center-room",
         }
       ],
       "infoHotspots": []
     },

     // 2nd Floor

     {
      "id": "0-01_2f_hallway_stairwell",
      "name": "01_2F_Hallway_Stairwell",
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
        "yaw": 1.8981447205761386,
        "pitch": 0.008859580219471752,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": 0.9225971846589758,
          "pitch": 0.2411216765974995,
          "rotation": 0,
          "target": "12-09_1f_hallway-corner"
        },
        {
          "yaw": 1.4310710777952735,
          "pitch": 0.1726869461146361,
          "rotation": 0,
          "target": "0-01_3f_stairwell"
        },
        {
          "yaw": 2.268632497877423,
          "pitch": 0.21255371844952364,
          "rotation": 0,
          "target": "3-03_2f_conference-room-entrance-01"
        },
        {
          "yaw": -2.958398027332139,
          "pitch": 0.37717859412550503,
          "rotation": 0,
          "target": "1-02_2f_hallway-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-02_2f_hallway-center",
      "name": "02_2F_Hallway-Center",
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
        "yaw": -2.164293111546314,
        "pitch": 0.06845573689116335,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": 0.15756019250107656,
          "pitch": 0.2667942143337889,
          "rotation": 0,
          "target": "0-01_2f_hallway_stairwell"
        },
        {
          "yaw": -2.9560679027994166,
          "pitch": 0.12651899384129806,
          "rotation": 0,
          "target": "8-06_2f_technical-division-entrance-01"
        },
        {
          "yaw": -1.6063673247800025,
          "pitch": 0.24274612607307233,
          "rotation": 0,
          "target": "20-13_2f_secretary-room-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-02_2f_hallway-center-reveresed",
      "name": "02_2F_Hallway-Center-reveresed",
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
        "yaw": 0.19975725677023703,
        "pitch": 0.08562052467597425,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": 0.15756019250107656,
          "pitch": 0.2667942143337889,
          "rotation": 0,
          "target": "0-01_2f_hallway_stairwell"
        },
        {
          "yaw": -2.9560679027994166,
          "pitch": 0.12651899384129806,
          "rotation": 0,
          "target": "8-06_2f_technical-division-entrance-01"
        },
        {
          "yaw": -1.6063673247800025,
          "pitch": 0.24274612607307233,
          "rotation": 0,
          "target": "20-13_2f_secretary-room-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-03_2f_conference-room-entrance-01",
      "name": "03_2F_Conference-Room-Entrance-01",
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
        "yaw": -2.416291536452148,
        "pitch": 0.008228733642418717,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": -2.1597050553948893,
          "pitch": 0.1313365231137702,
          "rotation": 0,
          "target": "5-04_2f_conference-room-center"
        },
        ,
        {
          "yaw": 0.9618627238738018,
          "pitch": 0.5837279561533322,
          "rotation": 0,
          "target": "0-01_2f_hallway_stairwell"
        },
        {
          "yaw": -0.9304086343642766,
          "pitch": 0.4756106193390881,
          "rotation": 0,
          "target": "1-02_2f_hallway-center"
        },
        
      ],
      "infoHotspots": []
    },
    {
      "id": "4-03_2f_conference-room-entrance-01-reversed",
      "name": "03_2F_Conference-Room-Entrance-01-reversed",
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
        "yaw": -0.4132977103647093,
        "pitch": 0.22594305122827762,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": -2.1935113645792637,
          "pitch": 0.11441461590144542,
          "rotation": 0,
          "target": "5-04_2f_conference-room-center"
        },
        {
          "yaw": 0.8358136934968172,
          "pitch": 0.6124998391563583,
          "rotation": 0,
          "target": "0-01_2f_hallway_stairwell"
        },
        {
          "yaw": -0.9795860501373106,
          "pitch": 0.43732854451529235,
          "rotation": 0,
          "target": "1-02_2f_hallway-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-04_2f_conference-room-center",
      "name": "04_2F_Conference-Room-Center",
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
        "yaw": -1.4381064776904466,
        "pitch": 0.14744500228828272,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": -0.47972048336505146,
          "pitch": 0.10942825990102634,
          "rotation": 0,
          "target": "4-03_2f_conference-room-entrance-01-reversed"
        },
        {
          "yaw": -2.376042287691684,
          "pitch": 0.07134287898702851,
          "rotation": 0,
          "target": "7-05_2f_conference-room-entrance-02-reversed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-05_2f_conference-room-entrance-02",
      "name": "05_2F_Conference-Room-Entrance-02",
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
        "yaw": -0.34595732209337804,
        "pitch": 0.11112121326228319,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": -0.7990349348410266,
          "pitch": 0.13696488655294026,
          "rotation": 0,
          "target": "5-04_2f_conference-room-center"
        },
        {
          "yaw": -2.450777702159911,
          "pitch": 0.19754491335468316,
          "rotation": 0,
          "target": "9-06_2f_technical-division-entrance-01-reversed"
        },
        {
          "yaw": -3.1086604857593674,
          "pitch": 0.15203071447067273,
          "rotation": 0,
          "target": "18-12_2f_secretary-room-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-05_2f_conference-room-entrance-02-reversed",
      "name": "05_2F_Conference-Room-Entrance-02-reversed",
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
        "yaw": 3.003631366844946,
        "pitch": 0.2225069252369387,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": -0.7990349348410266,
          "pitch": 0.13696488655294026,
          "rotation": 0,
          "target": "5-04_2f_conference-room-center"
        },
        {
          "yaw": -2.450777702159911,
          "pitch": 0.19754491335468316,
          "rotation": 0,
          "target": "9-06_2f_technical-division-entrance-01-reversed"
        },
        {
          "yaw": -3.1086604857593674,
          "pitch": 0.15203071447067273,
          "rotation": 0,
          "target": "18-12_2f_secretary-room-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-06_2f_technical-division-entrance-01",
      "name": "06_2F_Technical-Division-Entrance-01",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9365171099632548,
          "pitch": 0.3791017458643283,
          "rotation": 0,
          "target": "2-02_2f_hallway-center-reveresed"
        },
        {
          "yaw": -0.952018188220924,
          "pitch": 0.08197694805318356,
          "rotation": 0,
          "target": "6-05_2f_conference-room-entrance-02"
        },
        {
          "yaw": 0.9088580852346855,
          "pitch": 0.11201205604581155,
          "rotation": 0,
          "target": "19-12_2f_secretary-room-center-reversed"
        },
        {
          "yaw": 0.10783339074211717,
          "pitch": 0.38237983203675086,
          "rotation": 0,
          "target": "10-07_2f_technical-division-center-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-06_2f_technical-division-entrance-01-reversed",
      "name": "06_2F_Technical-Division-Entrance-01-reversed",
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
        "yaw": -2.9034924827806137,
        "pitch": 0.0586092877246287,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": 0.13067309029965557,
          "pitch": 0.2726689582673245,
          "rotation": 0,
          "target": "10-07_2f_technical-division-center-room"
        },
        {
          "yaw": -0.8893483725513747,
          "pitch": 0.21628079003901135,
          "rotation": 0,
          "target": "6-05_2f_conference-room-entrance-02"
        },
        {
          "yaw": 0.9382335054897162,
          "pitch": 0.1501153922848637,
          "rotation": 0,
          "target": "19-12_2f_secretary-room-center-reversed"
        },
        {
          "yaw": -2.9365171099632548,
          "pitch": 0.3791017458643283,
          "rotation": 0,
          "target": "2-02_2f_hallway-center-reveresed"
        },
        {
          "yaw": 2.874782293496289,
          "pitch": 0.0979784195306248,
          "rotation": 0,
          "target": "20-13_2f_secretary-room-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-07_2f_technical-division-center-room",
      "name": "07_2F_Technical-division-center-room",
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
        "yaw": 0.08572966783335545,
        "pitch": 0.19817322329993026,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": -0.7602433213354569,
          "pitch": 0.3536390588283767,
          "rotation": 0.4,
          "target": "12-08_2f_technical-division-left-side"
        },
        {
          "yaw": 1.623671719273574,
          "pitch": 0.31725057928212266,
          "rotation": -1.2,
          "target": "15-10_2f_technical-division-right-side"
        },
        {
          "yaw": 3.0887582349068357,
          "pitch": 0.08359954787598411,
          "rotation": 0,
          "target": "9-06_2f_technical-division-entrance-01-reversed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-07_2f_technical-division-center-reversed",
      "name": "07_2F_Technical-Division-center-reversed",
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
        "yaw": 1.7277539882997264,
        "pitch": 0.00858644650089424,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": -0.7602433213354569,
          "pitch": 0.3536390588283767,
          "rotation": 0.4,
          "target": "12-08_2f_technical-division-left-side"
        },
        {
          "yaw": 1.623671719273574,
          "pitch": 0.31725057928212266,
          "rotation": -1.2,
          "target": "15-10_2f_technical-division-right-side"
        },
        {
          "yaw": 3.0890765083806855,
          "pitch": 0.039620688731188736,
          "rotation": 0,
          "target": "9-06_2f_technical-division-entrance-01-reversed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-08_2f_technical-division-left-side",
      "name": "08_2F_Technical-Division-Left-Side",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": -0.014242885440793884,
          "pitch": 0.258960206860154,
          "rotation": 0,
          "target": "14-09_2f_technical-division-left-side-corner"
        },
        {
          "yaw": 2.12565983489481,
          "pitch": 0.19493019623093488,
          "rotation": 0,
          "target": "11-07_2f_technical-division-center-reversed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-08_2f_technical-division-left-side-reversed",
      "name": "08_2F_Technical-Division-Left-Side-reversed",
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
        "yaw": 1.8022152881693172,
        "pitch": 0.20393558974558879,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": 0.019553119974689892,
          "pitch": 0.26430180542533144,
          "rotation": 0,
          "target": "14-09_2f_technical-division-left-side-corner"
        },
        {
          "yaw": 2.246363182156271,
          "pitch": 0.4101791838848046,
          "rotation": 0,
          "target": "11-07_2f_technical-division-center-reversed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-09_2f_technical-division-left-side-corner",
      "name": "09_2F_Technical-Division-Left-Side-Corner",
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
        "yaw": -2.5956820225671997,
        "pitch": 0.09653806528005049,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": -0.10738232694894556,
          "pitch": 0.44477681905091764,
          "rotation": 0,
          "target": "13-08_2f_technical-division-left-side-reversed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-10_2f_technical-division-right-side",
      "name": "10_2F_Technical-Division-Right-Side",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5622350439545727,
          "pitch": 0.15859953971810015,
          "rotation": 0,
          "target": "10-07_2f_technical-division-center-room"
        },
        {
          "yaw": 0.00854610800107558,
          "pitch": 0.34133924441568695,
          "rotation": 0,
          "target": "17-11_2f_technical-division-right-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-10_2f_technical-division-right-side-reversed",
      "name": "10_2F_Technical-Division-Right-Side-reversed",
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
        "yaw": -1.5277336259469525,
        "pitch": -0.007135043722994894,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": -0.0031493075696218398,
          "pitch": 0.1764069864789839,
          "rotation": 0,
          "target": "17-11_2f_technical-division-right-corner"
        },
        {
          "yaw": -1.544803525102619,
          "pitch": 0.16766154357673457,
          "rotation": 0,
          "target": "10-07_2f_technical-division-center-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-11_2f_technical-division-right-corner",
      "name": "11_2F_Technical-Division-Right-Corner",
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
        "yaw": -0.9260097967800114,
        "pitch": 0.26115074746646627,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": 3.017740103806222,
          "pitch": 0.3625689239289798,
          "rotation": 1,
          "target": "16-10_2f_technical-division-right-side-reversed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-12_2f_secretary-room-center",
      "name": "12_2F_Secretary-Room-Center",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.578195050739371,
          "pitch": 0.17338143684224328,
          "rotation": 0,
          "target": "21-13_2f_secretary-room-entrance-reversed"
        },
        {
          "yaw": -0.8561820367501198,
          "pitch": 0.24671845013399718,
          "rotation": 0,
          "target": "8-06_2f_technical-division-entrance-01"
        },
        {
          "yaw": 2.3511856881714683,
          "pitch": 0.06431236001201235,
          "rotation": 0,
          "target": "22-14_2f_director-office-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-12_2f_secretary-room-center-reversed",
      "name": "12_2F_Secretary-Room-Center-reversed",
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
        "yaw": 3.091280914571475,
        "pitch": 0.13426468961819005,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": -2.619365109194817,
          "pitch": 0.13612264454069845,
          "rotation": 0,
          "target": "21-13_2f_secretary-room-entrance-reversed"
        },
        {
          "yaw": -0.8707200110532494,
          "pitch": 0.2072238912648281,
          "rotation": 0,
          "target": "8-06_2f_technical-division-entrance-01"
        },
        {
          "yaw": 2.4517120168867272,
          "pitch": 0.059607909305665174,
          "rotation": 0,
          "target": "22-14_2f_director-office-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-13_2f_secretary-room-entrance",
      "name": "13_2F_Secretary-Room-Entrance",
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
        "yaw": -0.4339609686926842,
        "pitch": 0.14735899222817395,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": -1.8762431001285638,
          "pitch": 0.04013701073879972,
          "rotation": 0,
          "target": "8-06_2f_technical-division-entrance-01"
        },
        {
          "yaw": -0.9630692066211441,
          "pitch": 0.32947799183247106,
          "rotation": 0,
          "target": "18-12_2f_secretary-room-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-13_2f_secretary-room-entrance-reversed",
      "name": "13_2F_Secretary-Room-Entrance-reversed",
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
        "yaw": -2.862606179692847,
        "pitch": 0.13421743700945754,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": -1.8753469776459664,
          "pitch": 0.08636263435765557,
          "rotation": 0,
          "target": "8-06_2f_technical-division-entrance-01"
        },
        {
          "yaw": 2.169845835889607,
          "pitch": 0.05726913389730015,
          "rotation": 0,
          "target": "3-03_2f_conference-room-entrance-01"
        },
        {
          "yaw": 2.2030838552495116,
          "pitch": 0.39776749773635167,
          "rotation": 0,
          "target": "0-01_2f_hallway_stairwell"
        },
        {
          "yaw": -1.0077395458391116,
          "pitch": 0.21391591308072222,
          "rotation": 0,
          "target": "18-12_2f_secretary-room-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-14_2f_director-office-entrance",
      "name": "14_2F_Director-Office-Entrance",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.48279961017523476,
          "pitch": 0.19189142840465223,
          "rotation": 0,
          "target": "24-15_2f_director-office-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-14_2f_director-office-entrance-reversed",
      "name": "14_2F_Director-Office-Entrance-reversed",
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
        "yaw": -1.9548280197835233,
        "pitch": 0.17451888015692063,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": -0.5274991432603287,
          "pitch": 0.3412568640871019,
          "rotation": 0,
          "target": "24-15_2f_director-office-center"
        },
        {
          "yaw": -2.9650144488590904,
          "pitch": 0.024953984380051253,
          "rotation": 0,
          "target": "21-13_2f_secretary-room-entrance-reversed"
        },
        {
          "yaw": -2.1689163066588346,
          "pitch": 0.5413069589483701,
          "rotation": 0,
          "target": "18-12_2f_secretary-room-center"
        },
        {
          "yaw": -2.0773389096960084,
          "pitch": 0.07235865089639937,
          "rotation": 0,
          "target": "8-06_2f_technical-division-entrance-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-15_2f_director-office-center",
      "name": "15_2F_Director-Office-Center",
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
        "yaw": 0.1739294531118052,
        "pitch": 0.009513391630662227,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": -2.0606876763521917,
          "pitch": 0.13740994614799007,
          "rotation": 0,
          "target": "23-14_2f_director-office-entrance-reversed"
        }
      ],
      "infoHotspots": []
    },
    // 3rd floor
    {
      "id": "0-01_3f_stairwell",
      "name": "01_3F_Stairwell",
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
        "yaw": 2.1835895697601737,
        "pitch": 0.2355245461838571,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": 1.3554319112236843,
          "pitch": 0.3472604763646281,
          "rotation": 0,
          "target": "0-01_2f_hallway_stairwell"
        },
        {
          "yaw": 3.1306675678104465,
          "pitch": 0.1171633320757195,
          "rotation": 0,
          "target": "1-02_3f_cubicles-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-02_3f_cubicles-entrance",
      "name": "02_3F_Cubicles-Entrance",
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
        "yaw": 3.1399483157290895,
        "pitch": -0.03120443467095413,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": 3.134306764916637,
          "pitch": 0.29051674545853423,
          "rotation": 0,
          "target": "3-03_3f_cubicles"
        },
        {
          "yaw": 0.11714126470998565,
          "pitch": 0.4069693740437721,
          "rotation": 0,
          "target": "0-01_3f_stairwell"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-02_3f_cubicles-entrance_reversed",
      "name": "02_3F_Cubicles-Entrance_reversed",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1148493771277614,
          "pitch": 0.2194415199998474,
          "rotation": 0,
          "target": "3-03_3f_cubicles"
        },
        {
          "yaw": 0.11714126470998565,
          "pitch": 0.4069693740437721,
          "rotation": 0,
          "target": "0-01_3f_stairwell"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-03_3f_cubicles",
      "name": "03_3F_Cubicles",
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
        "yaw": 0.1174835826429188,
        "pitch": 0.17168675019673785,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": 0.0012256866620070639,
          "pitch": 0.16434731859260943,
          "rotation": 0,
          "target": "5-04_3f_stage-entrance"
        },
        {
          "yaw": -3.0782561684346437,
          "pitch": 0.0592157772975046,
          "rotation": 0,
          "target": "2-02_3f_cubicles-entrance_reversed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-03_3f_cubicles_reversed",
      "name": "03_3F_Cubicles_reversed",
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
        "yaw": -2.845025423186925,
        "pitch": -0.002810774799963056,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": 0.017090941768614698,
          "pitch": 0.29060968922910035,
          "rotation": 0,
          "target": "5-04_3f_stage-entrance"
        },
        {
          "yaw": -3.093239085521418,
          "pitch": 0.13447768410862793,
          "rotation": 0,
          "target": "2-02_3f_cubicles-entrance_reversed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-04_3f_stage-entrance",
      "name": "04_3F_Stage-Entrance",
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
        "yaw": 0.2049267813891653,
        "pitch": 0.03329687070732135,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": 0.4550741012893873,
          "pitch": 0.2364857836953309,
          "rotation": 0,
          "target": "7-05_3f_stage-center"
        },
        {
          "yaw": -3.036370984830489,
          "pitch": 0.3782080293397545,
          "rotation": 0,
          "target": "4-03_3f_cubicles_reversed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-04_3f_stage-entrance_reversed",
      "name": "04_3F_Stage-Entrance_reversed",
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
        "yaw": -2.9400496214579945,
        "pitch": -0.004540482369190357,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": -2.9968944269427773,
          "pitch": 0.2593602921559981,
          "rotation": 0,
          "target": "4-03_3f_cubicles_reversed"
        },
        {
          "yaw": 0.5246542428578405,
          "pitch": 0.2459467380637239,
          "rotation": 0,
          "target": "7-05_3f_stage-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-05_3f_stage-center",
      "name": "05_3F_Stage-Center",
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
        "yaw": 3.092356468401949,
        "pitch": 0.22478540601041885,
        "fov": 1.3860279694857303
      },
      "linkHotspots": [
        {
          "yaw": 2.210281790870681,
          "pitch": 0.07219424222817494,
          "rotation": 0,
          "target": "6-04_3f_stage-entrance_reversed"
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
 