import {sound, sound2, sound3, sound4} from './audioData.js';

/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

(function() {
  var Marzipano = window.Marzipano;
  var bowser = window.bowser;
  var screenfull = window.screenfull;
  var data = window.APP_DATA;

  // Grab elements from DOM.
  var panoElement = document.querySelector('#pano');
  var sceneNameElement = document.querySelector('#titleBar .sceneName');
  var sceneListElement = document.querySelector('#sceneList');
  var sceneElements = document.querySelectorAll('#sceneList .scene');
  var sceneListToggleElement = document.querySelector('#sceneListToggle');

  var audioToggleElement = document.querySelector('#audioToggle');

  var autorotateToggleElement = document.querySelector('#autorotateToggle');
  var fullscreenToggleElement = document.querySelector('#fullscreenToggle');

  // Detect desktop or mobile mode.
  if (window.matchMedia) {
    var setMode = function() {
      if (mql.matches) {
        document.body.classList.remove('desktop');
        document.body.classList.add('mobile');
      } else {
        document.body.classList.remove('mobile');
        document.body.classList.add('desktop');
      }
    };
    var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
    setMode();
    mql.addListener(setMode);
  } else {
    document.body.classList.add('desktop');
  }

  // Detect whether we are on a touch device.
  document.body.classList.add('no-touch');
  window.addEventListener('touchstart', function() {
    document.body.classList.remove('no-touch');
    document.body.classList.add('touch');
  });

  // Use tooltip fallback mode on IE < 11.
  if (bowser.msie && parseFloat(bowser.version) < 11) {
    document.body.classList.add('tooltip-fallback');
  }

  // Viewer options.
  var viewerOpts = {
    controls: {
      mouseViewMode: data.settings.mouseViewMode
    }
  };

  // Initialize viewer.
  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

  // Create scenes.
  var scenes = data.scenes.map(function(data) {
    if (data.id.includes("1f")){
      var floor = "1F";
    }

    /* Open this if there is 2f in the data */
    if (data.id.includes("2f")){
      var floor = "2F";
    }

    if (data.id.includes("3f")){
      var floor = "3F";
    }
    var urlPrefix = "./assets/"+floor.toString();
    var source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" });
    var geometry = new Marzipano.CubeGeometry(data.levels);

    var limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100*Math.PI/180, 120*Math.PI/180);
    var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });

    // Create link hotspots.
    data.linkHotspots.forEach(function(hotspot) {
      var elementImg = ""

      // Image will depend on the targeted room

      // for areas within rooms
      if (hotspot.target.includes("front-side") || hotspot.target.includes("back-side") 
      || hotspot.target.includes("center-room") || hotspot.target.includes("conference-room-center") || hotspot.target.includes("secretary-room-center") || hotspot.target.includes("director-office-center")
      || hotspot.target.includes("division-center-reversed")){
        elementImg = "link-rooms";
        var element = createHotspotElement(hotspot, elementImg);
        scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch});
      }

      // for entrances
      else if(hotspot.target.includes("entrance")){

        if(hotspot.target.includes("reversed")){
          elementImg = "exit"  
        }
        else if(hotspot.target.includes("main")){
          elementImg = "entrance"
        }
        else{
          elementImg = "entrance-room";
        }
        var element = createHotspotElement(hotspot, elementImg);
        scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch});
      }
      else if(hotspot.target.includes("outside")){
        elementImg = "link-rooms";
        var element = createHotspotElement(hotspot, elementImg);
        scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch});
      }
      else if(hotspot.target.includes("lobby-corner") ||  hotspot.target.includes("cubicles") && !hotspot.target.includes("entrance") || hotspot.target.includes("stage-center") ){
        elementImg = "link-rooms";
        var element = createHotspotElement(hotspot, elementImg);
        if (data.id.includes("administration-entrance")){
          scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch}, {perspective: {extraTransforms: "rotateX(0deg)"}});
        }
        else{
          scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch}, {perspective: {extraTransforms: "rotateX(0deg)"}});
        }
        
      }

      // for the center lobby
      else if(hotspot.target.includes("lobby-center")){
        elementImg = "arrow-sd";
        var element = createHotspotElement(hotspot, elementImg);

        if (data.id.includes("records-entrance")){
          scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch},{perspective: {extraTransforms: "rotateX(30deg)"}});
        }
        else if (data.id.includes("lobby-corner")){
          scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch},{perspective: {extraTransforms: "rotateX(70deg)"}});
        }
        else{
          scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch},{perspective: {extraTransforms: "rotateX(70deg)"}});
        }
        
      }

      // for floor levels

      // 1st floor link to 2nd floor
      else if(hotspot.target.includes("12-09_1f_hallway-corner") && data.id.includes("2f")){
        elementImg = "stair-down";
        var element = createHotspotElement(hotspot, elementImg);
        scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch},{perspective: {extraTransforms: "rotateX(20deg)"}});
      }

      // 2nd floor
      else if(hotspot.target.includes("0-01_2f_hallway_stairwell")){
        
        // link to 1st floor
        if (data.id.includes("1f")){
          elementImg = "stair-up";
          var element = createHotspotElement(hotspot, elementImg);
          scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch});
        }

        // link to wnd floor
        else if (data.id.includes("3f")){
          elementImg = "stair-down";
          var element = createHotspotElement(hotspot, elementImg);
          scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch});
        }

        //fallback
        else {
          elementImg = "arrow-sd";
          var element = createHotspotElement(hotspot, elementImg);
          scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch},{perspective: {extraTransforms: "rotateX(70deg)"}});
        }
        // var element = createHotspotElement(hotspot, elementImg);
        // scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch});
      }

      // 3rd floor
      else if(hotspot.target.includes("0-01_3f_stairwell")){
        
        // link to 2nd floor
        if (data.id.includes("2f")){
          elementImg = "stair-up";
          var element = createHotspotElement(hotspot, elementImg);
          scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch},{perspective: {extraTransforms: "rotateX(20deg)"}});
        }

        // exception, changes only the links within 3rd floor
        else if (data.id.includes("3f")){
          elementImg = "link-rooms";
          var element = createHotspotElement(hotspot, elementImg);
          scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch},{perspective: {extraTransforms: "rotateX(0deg)"}});
        }
      }
      else{
        elementImg = "arrow-sd";
        var element = createHotspotElement(hotspot, elementImg);
        
        if (data.id.includes("administration-entrance")){
          scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch}, {perspective: {extraTransforms: "rotateX(0deg)"}});
        }
        
        else{
          scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch}, {perspective: {extraTransforms: "rotateX(70deg)"}});
        }
      }
    }); 

    // Create info hotspots.
    data.infoHotspots.forEach(function(hotspot) {
      var elementImg = ""
      var header_color = ""
      var close_color = ""
      var text_color = ""

      // Image will depend on the targeted room
      if (hotspot.title.includes("Restricted")){
        elementImg = "restricted";
        header_color = "#f23a3a"
        close_color = "#684e4e"
        text_color = "#543a3a"

      }
      else{
        elementImg = "info";
        header_color = "#3e629b"
        close_color = "#1b3359"
        text_color = "#374761"
      }
      var element = createInfoHotspotElement(hotspot, elementImg, header_color, close_color, text_color);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });
    

    return {
      data: data,
      scene: scene,
      view: view
    };
  });

  // Set up autorotate, if enabled.
  var autorotate = Marzipano.autorotate({
    yawSpeed: 0.03,
    targetPitch: 0,
    targetFov: Math.PI/2
  });
  if (data.settings.autorotateEnabled) {
    autorotateToggleElement.classList.add('enabled');
  }

  // Set handler for autorotate toggle.
  autorotateToggleElement.addEventListener('click', toggleAutorotate);

  // Set up fullscreen mode, if supported.
  if (screenfull.enabled && data.settings.fullscreenButton) {
    document.body.classList.add('fullscreen-enabled');
    fullscreenToggleElement.addEventListener('click', function() {
      screenfull.toggle();
    });
    screenfull.on('change', function() {
      if (screenfull.isFullscreen) {
        fullscreenToggleElement.classList.add('enabled');
      } else {
        fullscreenToggleElement.classList.remove('enabled');
      }
    });
  } else {
    document.body.classList.add('fullscreen-disabled');
  }

  //TODO AUDIO STUFF
  // Set handler for scene list toggle.
  sceneListToggleElement.addEventListener('click', toggleSceneList);
  audioToggleElement.addEventListener('click', toggleAudio);

  let audioEnabled = false;

  function toggleAudio() {
    console.log(audioEnabled);
    if(audioEnabled==false) {
      audioEnabled=true;
    }
    else if(audioEnabled==true) {
      audioEnabled=false;
    }
  };

  // Start with the scene list open on desktop.
  // if (!document.body.classList.contains('mobile')) {
  //   showSceneList();
  // }

  // Set handler for scene switch.
  scenes.forEach(function(scene) {
    var el = document.querySelector('#sceneList .scene[data-id="' + scene.data.id + '"]');
    el.addEventListener('click', function() {
      switchScene(scene);
      // On mobile, hide scene list after selecting a scene.
      if (document.body.classList.contains('mobile')) {
        hideSceneList();
      }
    });
  });

  function sanitize(s) {
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
  }

  function switchScene(scene) {
    stopAutorotate();
    scene.view.setParameters(scene.data.initialViewParameters);
    scene.scene.switchTo();
    startAutorotate();
    updateSceneName(scene);
    updateSceneList(scene);
  }

  function updateSceneName(scene) {
    sceneNameElement.innerHTML = sanitize(scene.data.name);
  }

  function updateSceneList(scene) {
    for (var i = 0; i < sceneElements.length; i++) {
      var el = sceneElements[i];
      if (el.getAttribute('data-id') === scene.data.id) {
        el.classList.add('current');
      } else {
        el.classList.remove('current');
      }
    }
  }

  // function showSceneList() {
  //   sceneListElement.classList.add('enabled');
  //   sceneListToggleElement.classList.add('enabled');
  // }

  function hideSceneList() {
    sceneListElement.classList.remove('enabled');
    sceneListToggleElement.classList.remove('enabled');
  }

  function toggleSceneList() {
    sceneListElement.classList.toggle('enabled');
  }

  function startAutorotate() {
    if (!autorotateToggleElement.classList.contains('enabled')) {
      return;
    }
    viewer.startMovement(autorotate);
    viewer.setIdleMovement(3000, autorotate);
  }

  function stopAutorotate() {
    viewer.stopMovement();
    viewer.setIdleMovement(Infinity);
  }

  function toggleAutorotate() {
    if (autorotateToggleElement.classList.contains('enabled')) {
      autorotateToggleElement.classList.remove('enabled');
      stopAutorotate();
    } else {
      autorotateToggleElement.classList.add('enabled');
      startAutorotate();
    }
  }

  function createHotspotElement(hotspot, type) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('link-hotspot');

    // Create image element.
    var icon = document.createElement('img');
    var source = './assets/icons/'+type.toString()+'.png';
    icon.src = source;
    icon.classList.add('link-hotspot-icon');

    // Set rotation transform.
    var transformProperties = [ '-ms-transform', '-webkit-transform', 'transform' ];
    for (var i = 0; i < transformProperties.length; i++) {
      var property = transformProperties[i];
      icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
    }

    // Add click event handler.
    wrapper.addEventListener('click', function() {
      switchScene(findSceneById(hotspot.target));
    });

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    wrapper.appendChild(icon);

    return wrapper;
  }
  
  function createInfoHotspotElement(hotspot, type, header_color, close_color, text_color) {
    
    // let isPlaying = false;

    if(hotspot.hasOwnProperty('popup')){
        var wrapper = document.createElement('div');
        wrapper.classList.add('info-hotspot');
        var header = document.createElement('div');
        header.classList.add('info-hotspot-header');
        header.classList.add('noHover');
        var iconWrapper = document.createElement('div');
        iconWrapper.classList.add('info-hotspot-icon-wrapper');
        var icon = document.createElement('img');
        icon.src = './assets/icons/image.png';
        icon.classList.add('info-hotspot-icon');
        iconWrapper.appendChild(icon);
        header.appendChild(iconWrapper);
        wrapper.appendChild(header);

        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("img01");
        
        wrapper.onclick = function(){
        modal.style.display = "block";
        modalImg.src = hotspot.popup;
        }

      var span = document.getElementsByClassName("close")[0];
      span.onclick = function() {modal.style.display = "none";}

      return wrapper;
    }

    else{
      // Create wrapper element to hold icon and tooltip.
      var wrapper = document.createElement('div');
      wrapper.classList.add('hotspot');
      wrapper.classList.add('info-hotspot');

      // Create hotspot/tooltip header.
      var header = document.createElement('div');
      header.classList.add('info-hotspot-header');

      // Create image element.
      var iconWrapper = document.createElement('div');
      iconWrapper.classList.add('info-hotspot-icon-wrapper');
      var icon = document.createElement('img');
      var source = './assets/icons/'+type.toString()+'.png';
      icon.src = source;
      icon.classList.add('info-hotspot-icon');
      iconWrapper.appendChild(icon);

      // Create title element.
      var titleWrapper = document.createElement('div');
      titleWrapper.classList.add('info-hotspot-title-wrapper');
      var title = document.createElement('div');
      title.classList.add('info-hotspot-title');
      title.innerHTML = hotspot.title;
      titleWrapper.appendChild(title);

      // Create close element.
      var closeWrapper = document.createElement('div');
      closeWrapper.classList.add('info-hotspot-close-wrapper');
      var closeIcon = document.createElement('img');
      closeIcon.src = './assets/icons/close.png';
      closeIcon.classList.add('info-hotspot-close-icon');
      closeWrapper.appendChild(closeIcon);

      // Construct header element.
      header.appendChild(iconWrapper);
      header.appendChild(titleWrapper);
      header.appendChild(closeWrapper);

      // Create text element.
      var text = document.createElement('div');
      text.classList.add('info-hotspot-text');
      text.innerHTML = hotspot.text;

      // Place header and text into wrapper element.
      wrapper.appendChild(header);
      wrapper.appendChild(text);

      // Changes color for info-hotspots depending on the hotspot
      wrapper.querySelector('.info-hotspot-header').style.backgroundColor = header_color;
      wrapper.querySelector('.info-hotspot-close-wrapper').style.backgroundColor = close_color;
      wrapper.querySelector('.info-hotspot-text').style.backgroundColor = text_color;

      // Create a modal for the hotspot content to appear on mobile mode.
      var modal = document.createElement('div');
      modal.innerHTML = wrapper.innerHTML;
      modal.classList.add('info-hotspot-modal');
      document.body.appendChild(modal);

      var toggle = function() {
      wrapper.classList.toggle('visible');
      modal.classList.toggle('visible');
      };
      
      //TODO FIX AUDIO SYSTEM LATER

      var soundToggle = function() {
        if(sound3.playing()==false && audioEnabled==true) {
          // sound3.play();
          if(hotspot.title.includes("COA")) {
            sound4.play();
          } else if(hotspot.title.includes("Records")) {
            sound4.play();
          } else if(hotspot.title.includes("Cashier")) {
            sound4.play();
          } else if(hotspot.title.includes("Conference Room")) {
            sound4.play();
          } else if(hotspot.title.includes("Technical Division")) {
            sound4.play();
          } else if(hotspot.title.includes("Secretary")) {
            sound4.play();
          } else if(hotspot.title.includes("Director's Office")) {
            sound4.play();
          } else if(hotspot.title.includes("Units") && hotspot.text.includes("Billing")) {
            sound4.play();
          }  else if(hotspot.title.includes("Units") && hotspot.text.includes("Liquidation")) {
            sound4.play();
          } else if(hotspot.title.includes("Stage")) {
            sound4.play();
          } else {
            sound3.play();
          }
        } else if(sound3.playing()==true && audioEnabled==false) {
          sound3.stop();
          sound4.stop();
        }
      };

      // Show content when hotspot is clicked.
      wrapper.querySelector('.info-hotspot-header').addEventListener('click', toggle);
      wrapper.querySelector('.info-hotspot-header').addEventListener('click', soundToggle);

      // Hide content when close icon is clicked.
      modal.querySelector('.info-hotspot-close-wrapper').addEventListener('click', toggle);
      modal.querySelector('.info-hotspot-close-wrapper').addEventListener('click', soundToggle);

      // Prevent touch and scroll events from reaching the parent element.
      // This prevents the view control logic from interfering with the hotspot.
      stopTouchAndScrollEventPropagation(wrapper);

     
      return wrapper;
    }
  }
  
  function stopTouchAndScrollEventPropagation(element, eventList) {
    var eventList = [ 'touchstart', 'touchmove', 'touchend', 'touchcancel',
                      'wheel', 'mousewheel' ];
    for (var i = 0; i < eventList.length; i++) {
      element.addEventListener(eventList[i], function(event) {
        event.stopPropagation();
      });
    }
  }

  function findSceneById(id) {
    for (var i = 0; i < scenes.length; i++) {
      if (scenes[i].data.id === id) {
        return scenes[i];
      }
    }
    return null;
  }

  function findSceneDataById(id) {
    for (var i = 0; i < data.scenes.length; i++) {
      if (data.scenes[i].id === id) {
        return data.scenes[i];
      }
    }
    return null;
  }

  // Display the initial scene.
  switchScene(scenes[0]);

})();
