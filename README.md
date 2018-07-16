# img-lightbox Demo

Responsive no-jQuery pure JS/CSS Lightbox for images, no dependencies, 10kb unminified source code, with demo

[![NPM](https://nodei.co/npm/img-lightbox.png?downloads=true)](https://nodei.co/npm/img-lightbox/)

[![npm](https://img.shields.io/npm/v/img-lightbox.svg)](https://github.com/englishextra/img-lightbox)
[![Bower](https://img.shields.io/bower/v/img-lightbox.svg)](https://github.com/englishextra/img-lightbox)
[![Build Status](https://travis-ci.org/englishextra/img-lightbox.svg?branch=master)](https://travis-ci.org/englishextra/img-lightbox)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2fbe9cbd4dcb4d3b8fe83dac98633f67)](https://www.codacy.com/app/englishextra/img-lightbox?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=englishextra/img-lightbox&amp;utm_campaign=Badge_Grade)

### Demo

[codepen](https://codepen.io/englishextra/full/YLQxRp/)

[jsfiddle](https://fiddle.jshell.net/englishextra/8hhpbv4h/show/)

[jsbin](https://output.jsbin.com/laxudog)

### Features

* Simple initialization

* SPA / PWA friendly: prevents multiple same events assigning

* Debounced launch

* Custom event callbacks

### CDN

#### jsDelivr

`https://cdn.jsdelivr.net/gh/englishextra/img-lightbox@0.1.2/img-lightbox.min.js`

`https://cdn.jsdelivr.net/gh/englishextra/img-lightbox@0.1.2/img-lightbox.min.css`

#### unpkg

`https://unpkg.com/img-lightbox@0.1.2/img-lightbox.js`

`https://unpkg.com/img-lightbox@0.1.2/img-lightbox.css`

### Install

#### npm

`npm install img-lightbox`

#### bower

`bower install img-lightbox`

### Setup

`class` is "img-lightbox-link" required.

`data-src` is required, and contains URL of your image.

[![Build Status](https://farm1.staticflickr.com/955/27854475488_5f82a379ca_z.jpg)](https://farm1.staticflickr.com/955/27854475488_5f82a379ca_z.jpg)

```html
<a href="https://farm1.staticflickr.com/955/27854475488_4f2b7f52e4_k.jpg"
class="img-lightbox-link"
data-src="https://farm1.staticflickr.com/955/27854475488_4f2b7f52e4_k.jpg"
aria-hidden="true"
rel="lightbox"><img src="https://farm1.staticflickr.com/955/27854475488_5f82a379ca_z.jpg" alt="Image Lightbox" /></a>
 ```

## Initialize

```javascript
imgLightbox(document.body || "");
```

## Tips

SPA / PWA developers don't need to bother: built-in class is added to a link.

 That way you avoid multiple assignments to a single element.

## Examples of event handling

 ```javascript
var manageImgLightboxLinks = function (root, scope) {
  var ctx = scope && scope.nodeName ? scope : "";
  if (root.imgLightbox) {
    imgLightbox(ctx, {
      onCreated: function () {
        // show your preloader
      },
      onLoaded: function () {
        // hide your preloader
      },
      onError: function () {
        // hide your preloader
      },
      onClosed: function () {
        // hide your preloader
      }
    });
  }
};
manageImgLightboxLinks("undefined" !== typeof window ? window : this, document.body || "");
```

## GitHub

[englishextra/img-lightbox](https://github.com/englishextra/img-lightbox)

## License

Available under [MIT license](https://opensource.org/licenses/MIT).