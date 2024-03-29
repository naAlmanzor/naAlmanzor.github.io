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
           "pitch": 0.35,
           "rotation": 0,
           "target": "5-04_1f_lobby-corner",
           "perspective": 500
         }
       ],
       "infoHotspots": [
         {
           "yaw": 1.3345362945410386,
           "pitch": -0.12316665319798759,
           "title": "Records",
           "text": "Part of the Administrive Division, this facility holds the information of classified and important documents within the Building."
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
           "pitch": 0.35,
           "rotation": 0,
           "target": "5-04_1f_lobby-corner",
           "perspective": 500
         }
       ],
       "infoHotspots": [
         {
          "yaw": 1.3345362945410386,
           "pitch": -0.12316665319798759,
           "title": "Records",
           "text": "Part of the Administrive Division, this facility holds the information of classified and important documents within the Building."
         }
      ]
     },
     {
       "id": "5-04_1f_lobby-corner",
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
         "yaw": -0.8760848251946065,
         "pitch": 0.31533421382147075,
         "fov": 1.3860279694857303
       },
       "linkHotspots": [
         {
           "yaw": -0.05997264710148805,
           "pitch": 0.5,
           "rotation": 0,
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
//         {
//           "yaw": -2.7224178040347464,
//           "pitch": 0.10603776137863896,
//           "title": "COA",
//           "text": ""
//         },
//          {
//            "yaw": -2.7224178040347464,
//            "pitch": 0.10603776137863896,
//            "title": "COA",
//            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida congue nibh et mattis. Donec pellentesque leo sed lorem gravida laoreet. Quisque auctor laoreet turpis vel facilisis. Nunc neque lacus, finibus et accumsan mollis, consequat ac augue. Mauris hendrerit lectus ut urna fermentum, a efficitur metus finibus. Cras consectetur finibus hendrerit. Aliquam mi lacus, accumsan iaculis eros in, viverra pretium ex. Nunc a mi ac massa porttitor euismod. Nam sem magna, tincidunt eget dictum in, tincidunt sodales nulla. Aliquam sagittis lorem eget sodales viverra. Vivamus et urna magna. Nullam laoreet, sem nec tempus gravida, purus mi iaculis metus, non tincidunt sem mauris eget quam."
//          },

         {
          "yaw": -3.8024178040347464,
          "pitch": 0.08603776137863896,
          "title": "Restricted",
          "text": "This area is unavailable for access to the public."
        },
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
       "name": "Records",
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
       "name": "Records",
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
          "pitch": 0.0847440873173692,
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
       "infoHotspots": [
        {
          "yaw": -1.4297443684049895,
          "pitch": 0.1924372250113784,
          "title": "Cashier",
          "text": "Part of the Administrive Division, This facility is where payments are made along with securing proof of payment reciepts."
        }
       ]
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
          "pitch": 0.07511622019067516,
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
       "infoHotspots": [
        {
          "yaw": -1.4297443684049895,
          "pitch": 0.1924372250113784,
          "title": "Cashier",
          "text": "Part of the Administrive Division, This facility is where payments are made along with securing proof of payment reciepts."
        }
       ]
     },
     {
       "id": "12-09_1f_hallway-corner",
       "name": "Stairwell (1F)",
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
       "infoHotspots": [
        {
          "yaw": 1.546483084057265,
          "pitch": -0.24043905946258732,
          "title": "Floor Layout",
          "popup": "./assets/images/floor1-layout.png",
        }
       ]
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
       "name": "Administration",
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
      "name": "Stairwell (2F)",
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
      "name": "Conference Room (Entrance)",
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
          "yaw": -2.1935113645792637,
          "pitch": 0.11441461590144542,
          "rotation": 0,
          "target": "5-04_2f_conference-room-center"
        },
        {
          "yaw": 0.8358136934968172,
          "pitch": 0.6124998391563583,
          "rotation": 1,
          "target": "0-01_2f_hallway_stairwell"
        },
        {
          "yaw": -0.9795860501373106,
          "pitch": 0.43732854451529235,
          "rotation": -1,
          "target": "1-02_2f_hallway-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-03_2f_conference-room-entrance-01-reversed",
      "name": "Conference Room (Entrance)",
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
          "rotation": 1,
          "target": "0-01_2f_hallway_stairwell"
        },
        {
          "yaw": -0.9795860501373106,
          "pitch": 0.43732854451529235,
          "rotation": -1,
          "target": "1-02_2f_hallway-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-04_2f_conference-room-center",
      "name": "Conference Room",
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
      "infoHotspots": [
        {
          "yaw": -1.257168600810381,
          "pitch": -0.1025588606290615,
          "title": "Conference Room",
          "text": "Important meetings are held here."
        }
      ]
    },
    {
      "id": "6-05_2f_conference-room-entrance-02",
      "name": "Conference Room (Entrance)",
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
        },
        {
          "yaw": 2.1260905752927934,
          "pitch": 0.4597867317256963,
          "rotation": 0,
          "target": "10-07_2f_technical-division-center-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-05_2f_conference-room-entrance-02-reversed",
      "name": "Conference Room (Entrance)",
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
        },
        {
          "yaw": 2.1260905752927934,
          "pitch": 0.4597867317256963,
          "rotation": 0,
          "target": "10-07_2f_technical-division-center-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-06_2f_technical-division-entrance-01",
      "name": "Technical Division (Entrance)",
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
      "name": "Technical Division (Entrance)",
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
      "name": "Technical Division",
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
        },
        {
          "yaw": -2.768697884878847,
          "pitch": 0.07058983359090121,
          "rotation": 0,
          "target": "6-05_2f_conference-room-entrance-02"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2507331495833274,
          "pitch": -0.21320507404740496,
          "title": "Technical Division",
          "text": "<div style='font-weight: bold;'>The room consists of the following units:</div><div><br>  -Chief Education Program Specialist</div><div><br>  -Supervising Education Program Specialist</div><div><br>  -Education Supervisors, Education Program Specialist</div><div><br>  -SIKAP or LGSO</div><div><br>  -StuFAPs Unit</div><div><br>  -UniFAST Unit</div><div>"
        },
        {
          "yaw": 2.1156639735184513,
          "pitch": -0.15180480688423273,
          "title": "Floor Layout",
          "popup": "./assets/images/floor2-layout.png"
        }
      ]
    },
    {
      "id": "11-07_2f_technical-division-center-reversed",
      "name": "Technical Division",
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
        },
        {
          "yaw": -2.768697884878847,
          "pitch": 0.07058983359090121,
          "rotation": 0,
          "target": "6-05_2f_conference-room-entrance-02"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2507331495833274,
          "pitch": -0.21320507404740496,
          "title": "Technical Division",
          "text": "<div style='font-weight: bold;'>The room consists of the following units:</div><div><br>  Chief Education Program Specialist</div><div><br>  - Supervising Education Program Specialist</div><div><br>  Education Supervisors, Education Program Specialist</div><div> <br>  SIKAP or LGSO</div><div><br>  StuFAPs Unit</div><div><br>  UniFAST Unit</div><div>"
        },
        {
          "yaw": 2.1156639735184513,
          "pitch": -0.15180480688423273,
          "title": "Floor Layout",
          "popup": "./assets/images/floor1-layout.png"
        }
      ]
    },
    {
      "id": "12-08_2f_technical-division-left-side",
      "name": "Technical Division",
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
      "name": "Technical Division",
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
      "name": "Technical Division",
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
      "name": "Technical Division",
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
      "name": "Technical Division",
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
      "name": "Technical Division",
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
      "name": "Secretary Room",
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
          "pitch": 0.01338143684224328,
          "rotation": 0,
          "target": "21-13_2f_secretary-room-entrance-reversed"
        },
        {
          "yaw": -0.8561820367501198,
          "pitch": 0.0171845013399718,
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
      "infoHotspots": [
        {
          "yaw": -0.13792211543249167,
          "pitch": 0.2142394324042481,
          "title": "Secretary",
          "text": "The office of CHED Region XI's Secretary. Recieves and records requested documents as well as signs any neccessary documents and or letters. Is also in charge of releasing documents to HRDD."
        }
      ]
    },
    {
      "id": "19-12_2f_secretary-room-center-reversed",
      "name": "Secretary Room",
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
          "pitch": 0.01612264454069845,
          "rotation": 0,
          "target": "21-13_2f_secretary-room-entrance-reversed"
        },
        {
          "yaw": -0.8707200110532494,
          "pitch": 0.0172238912648281,
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
      "infoHotspots": [
        {
          "yaw": -0.13792211543249167,
          "pitch": 0.1142394324042481,
          "title": "Secretary",
          "text": "<div>The office of CHED Region XI's Secretary. Recieves and records requested documents as well as signs any neccessary documents/letters. Is also in charge of releasing documents to HRDD.</div><div><br></div>"
        }
      ]
    },
    {
      "id": "20-13_2f_secretary-room-entrance",
      "name": "Secretary Room (Entrance)",
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
          "yaw": -0.6630692066211441,
          "pitch": 0.42947799183247106,
          "rotation": 0,
          "target": "18-12_2f_secretary-room-center"
        },
        {
          "yaw": 2.0019525050247395,
          "pitch": 0.33447882795281103,
          "rotation": 0,
          "target": "0-01_2f_hallway_stairwell"
        },
        {
          "yaw": 0.04,
          "pitch": 0.1,
          "rotation": 0,
          "target": "22-14_2f_director-office-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-13_2f_secretary-room-entrance-reversed",
      "name": "Secretary Room (Entrance)",
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
          "yaw": -1.8762431001285638,
          "pitch": 0.04013701073879972,
          "rotation": 0,
          "target": "8-06_2f_technical-division-entrance-01"
        },
        {
          "yaw": -0.6630692066211441,
          "pitch": 0.42947799183247106,
          "rotation": 0,
          "target": "18-12_2f_secretary-room-center"
        },
        {
          "yaw": 2.0019525050247395,
          "pitch": 0.33447882795281103,
          "rotation": 0,
          "target": "0-01_2f_hallway_stairwell"
        },
        {
          "yaw": 0.04,
          "pitch": 0.1,
          "rotation": 0,
          "target": "22-14_2f_director-office-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-14_2f_director-office-entrance",
      "name": "Director's Office (Entrance)",
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
          "yaw": -0.58279961017523476,
          "pitch": 0.47189142840465223,
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
          "yaw": -2.1989163066588346,
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
      "id": "23-14_2f_director-office-entrance-reversed",
      "name": "Director's Office (Entrance)",
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
          "yaw": -0.58279961017523476,
          "pitch": 0.47189142840465223,
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
          "yaw": -2.1989163066588346,
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
      "name": "Director's Office",
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
      "infoHotspots": [
        {
          "yaw": 0.1323711074087175,
          "pitch": 0.21167372284237047,
          "title": "Director's Office",
          "text": "The office of CHED Region XI's Director. Certificates, documents and the likes are forwarded here. The reviewin and signing of documents are also done here in addtion to the secretary room"
        }
      ]
    },
    // 3rd floor
    {
      "id": "0-01_3f_stairwell",
      "name": "Stairwell (3F)",
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
      "infoHotspots": [
        {
          "yaw": -1.9020865142300565,
          "pitch": -0.1771818111313337,
          "title": "Floor Layout",
          "popup": "./assets/images/floor3-layout.png"
        }
      ]
    },
    {
      "id": "1-02_3f_cubicles-entrance",
      "name": "Cubicles (Entrance)",
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
      "name": "Cubicles (Entrance)",
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
      "id": "3-03_3f_cubicles",
      "name": "Cubicles",
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
      "infoHotspots": [
        {
          "yaw": -1.4817068784161442,
          "pitch": -0.1,
          "title": "Units",
          "text": "Billing and Communication and Documentation Units"
        },
        {
          "yaw": 1.5753015941988604,
          "pitch": -0.1,
          "title": "Units",
          "text": "Liquidation and Validation Units"
        }
      ]
    },
    {
      "id": "4-03_3f_cubicles_reversed",
      "name": "Cubicles",
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
      "infoHotspots": [
        {
          "yaw": -1.4817068784161442,
          "pitch": -0.1,
          "title": "Units",
          "text": "Billing and Communication and Documentation Units"
        },
        {
          "yaw": 1.5753015941988604,
          "pitch": -0.1,
          "title": "Units",
          "text": "Liquidation and Validation Units"
        }
      ]
    },
    {
      "id": "5-04_3f_stage-entrance",
      "name": "Stage (Entrance)",
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
          "pitch": 0.17,
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
      "name": "Stage (Entrance)",
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
          "yaw": 0.4550741012893873,
          "pitch": 0.17,
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
      "id": "7-05_3f_stage-center",
      "name": "Stage",
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
      "infoHotspots": [
        {
          "yaw": -3.127422649174843,
          "pitch": 0.02786225596958232,
          "title": "Stage",
          "text": "This room is used for press conferences and any other events that CHED promotes"
        }
      ]
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
 
