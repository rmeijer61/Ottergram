
//******************************************************************************
// Selector
//******************************************************************************
// 6.4 - Declaring String Variables
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
// 7.2.5 - Triggering transitions with JavaScript
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';

//******************************************************************************
// Class
//******************************************************************************
// 7.1.2 - Writing the JavaScript to hide the detail image
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
// 7.2.5 - Triggering transitions with JavaScript
var TINY_EFFECT_CLASS = 'is-tiny';

//******************************************************************************
// Other variables
//******************************************************************************
// 7.1.3 - Listening for the keypress event
var ESC_KEY = 27;


//******************************************************************************
// Functions
//******************************************************************************

// 6.7 - Writing the setDetails Function
// 6.7.1 - Accepting arguments by declaring parameters
function setDetails(imageUrl, titleText) {
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);

  // 6.7.1 - Accepting arguments by declaring parameters
  //detailImage.setAttribute('src', 'img/otter3.jpg');
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  // 6.7.1 - Accepting arguments by declaring parameters
  //detailTitle.textContent = 'You Should Be Dancing';
  detailTitle.textContent = titleText;
}

// 6.8 - Returning Values from Functions
function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

// 6.8 - Returning Values from Functions
function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

// 6.8 - Returning Values from Functions
function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

// 6.9 - Adding an Event Listener
function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function (event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);

    // 7.1.4 - Showing the detail image again
    showDetails();
  });
}

// 6.10 - Accessing All the Thumbnails
function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);

  // convert the NodeList returned from querySelectorAll to an array -
  // It is a backward-compatible way to convert from a NodeList to an array
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;

}

// 6.11 - Iterating Through the Array of Thumbnails
// go through the array of thumbnails, one item at a time
function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);

  // 7.1.3 - Listening for the keypress event
  addKeyPressHandler();
}

// 7.1.2 - Writing the JavaScript to hide the detail image
// use the classList.add DOM method to manipulate the class name
function hideDetails() {
  'use strict';
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

// 7.1.4 - Showing the detail image again
function showDetails() {
  'use strict';
  // 7.2.5 - Triggering transitions with JavaScript
  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);

  document.body.classList.remove(HIDDEN_DETAIL_CLASS);

  // 7.2.5 - Triggering transitions with JavaScript
  frame.classList.add(TINY_EFFECT_CLASS);
  // 7.2.5 - Triggering transitions with JavaScript
  //frame.classList.remove(TINY_EFFECT_CLASS);
  setTimeout(function () {
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);

}


// 7.1.3 - Listening for the keypress event
// trigger the detail image to hide
function addKeyPressHandler() {
  'use strict';
  document.body.addEventListener('keyup', function (event) {
    event.preventDefault();
    console.log(event.keyCode);

    // 7.1.3 - Listening for the keypress event
    if (event.keyCode === ESC_KEY) {
      hideDetails();
    }
  });
}


// 6.11 - Iterating Through the Array of Thumbnails
initializeEvents();
