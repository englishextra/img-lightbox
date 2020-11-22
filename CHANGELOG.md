# Changelog

All notable changes to this project will be documented in this file.

The project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## 0.2.3 - 2019-01-17

### Changed

- Fixed init for SPA

## 0.2.2 - 2019-01-17

### Changed

- Fixed multiple container creation

## 0.2.1 - 2018-12-22

### Changed

- Fixed body scroll disabling on lightbox open https://github.com/englishextra/iframe-lightbox/issues/18

## 0.2.0 - 2018-12-21

### Changed

- Added touchstart surpress to prevent Wordpress takeover https://github.com/englishextra/iframe-lightbox/issues/17

## 0.1.9 - 2018-12-20

### Changed

- Fixed CSS minification https://github.com/englishextra/iframe-lightbox/issues/17

## 0.1.8 - 2018-12-20

### Changed

- Added touch events support https://github.com/englishextra/iframe-lightbox/issues/16

## 0.1.7 - 2018-12-19

### Changed

- Fixed binding custom events bug

## 0.1.6 - 2018-12-19

### Changed

- Fixed jshint warning

## 0.1.5 - 2018-12-19

### Changed

- Fixed on ESC key event bug

## 0.1.4 - 2018-12-18

### Changed

- Reorginized the file tree of the library

## 0.1.3 - 2018-12-18

### Changed

- Changed z-index 999999 to play well with wp-admin
- Changed `data-src` (which is still supported for compatibility) to `href` as the source for image
- Pure CSS Retina Ready UI images, no external ones
- Freeze body scrolling on lightbox open
- Added Close button
- Closes on ESC

## 0.1.2 - 2018-07-16

### Changed

- Added onClosed callback option