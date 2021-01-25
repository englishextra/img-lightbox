# img-lightbox

Responsive no-jQuery pure JS/CSS Lightbox for images, no dependencies, 10kb unminified source code, with demo

[![npm](https://img.shields.io/npm/v/img-lightbox.svg)](https://www.npmjs.com/package/img-lightbox)
[![Build Status](https://travis-ci.com/englishextra/img-lightbox.svg?branch=master)](https://travis-ci.com/englishextra/img-lightbox)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/2fbe9cbd4dcb4d3b8fe83dac98633f67)](https://www.codacy.com/manual/englishextra/img-lightbox/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=englishextra/img-lightbox&amp;utm_campaign=Badge_Grade)
[![](https://data.jsdelivr.com/v1/package/npm/img-lightbox/badge)](https://www.jsdelivr.com/package/npm/img-lightbox)

## Demo

[codepen](https://codepen.io/englishextra/full/YLQxRp/)
[jsfiddle](https://fiddle.jshell.net/englishextra/8hhpbv4h/show/)
[jsbin](https://output.jsbin.com/laxudog)

## Features

* Simple initialization
* SPA / PWA friendly: prevents multiple same events assigning
* Debounced launch, default 500ms, custom rate can be set with rate property of options object
* Preloading spinner that is unset after onload event succeeds
* Pure CSS Retina Ready UI images, no external ones (prompted by github.com/jasomdotnet, thanks)
* Custom event callbacks

## CDN

### jsDelivr

`https://cdn.jsdelivr.net/gh/englishextra/img-lightbox@0.2.4/js/img-lightbox.min.js`
`https://cdn.jsdelivr.net/gh/englishextra/img-lightbox@0.2.4/css/img-lightbox.min.css`

### unpkg

`https://unpkg.com/img-lightbox@0.2.4/js/img-lightbox.js`
`https://unpkg.com/img-lightbox@0.2.4/css/img-lightbox.css`

## Install

### npm

`npm install img-lightbox`

## Setup

`class` is required, and can be any class name you choose (in this demo it's `img-lightbox-link`).
`data-src` is another method to get the source URL when you do not want the link to lead to some real URL.
`href` is required, and contains URL of your image.
For those who don't use 3rd-party scripts that interfere with links behaviour and don't force `window.location` they have no need in either `data-touch="true"` or `{touch: true}`.
When you have scripts that interfere, then to keep lightbox working, use `{touch: true}` or `data-touch="true"` (you shouldn't enable this touch override if you have a full screen image in a lighbox link and have no other space to scroll down).
`data-src` or `href` doesn't matter.
[![Build Status](https://farm1.staticflickr.com/955/27854475488_5f82a379ca_z.jpg)](https://farm1.staticflickr.com/955/27854475488_5f82a379ca_z.jpg)

```html
<a href="https://farm1.staticflickr.com/955/27854475488_4f2b7f52e4_k.jpg"
class="img-lightbox-link"
data-src="https://farm1.staticflickr.com/955/27854475488_4f2b7f52e4_k.jpg"
aria-hidden="true"
rel="lightbox"><img src="https://farm1.staticflickr.com/955/27854475488_5f82a379ca_z.jpg" alt="Image Lightbox" /></a>
```

## Initialize

```js
imgLightbox("img-lightbox-link");
```

## Tips

SPA / PWA developers don't need to bother: work-related class is added to a link.
That way you avoid multiple assignments to a single element.

## Examples of event handling

```js
(function(root) {
  "use strict";
  if (root.imgLightbox) {
    imgLightbox("img-lightbox-link", {
      onCreated: function() {
        /* show your preloader */
      },
      onLoaded: function() {
        /* hide your preloader */
      },
      onError: function() {
        /* hide your preloader */
      },
      onClosed: function() {
        /* hide your preloader */
      },
      rate: 500 /* default: 500 */,
      touch: false /* default: false - use with care for responsive images in links on vertical mobile screens */
    });
  }
})("undefined" !== typeof window ? window : this);
```

## GitHub

[englishextra/img-lightbox](https://github.com/englishextra/img-lightbox)

## License

Available under [MIT license](https://opensource.org/licenses/MIT).
