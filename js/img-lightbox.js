/*!
 * @see {@link https://github.com/englishextra/img-lightbox}
 * imgLightbox
 * requires this very img-lightbox.js, and animate.css, img-lightbox.css
 * @params {String} linkClass
 * @params {Object} settings object
 * imgLightbox(linkClass, settings)
 * passes jshint
 */

/*jslint browser: true */

/*jslint node: true */

/*jshint -W014 */
(function(root, document) {
	"use strict";

	var docElem = document.documentElement || "";
	var docBody = document.body || "";
	var animatedClass = "animated";
	var btnCloseClass = "btn-close";
	var containerClass = "img-lightbox";
	var fadeInClass = "fadeIn";
	var fadeInUpClass = "fadeInUp";
	var fadeOutClass = "fadeOut";
	var fadeOutDownClass = "fadeOutDown";
	var imgLightboxWindowIsBindedClass = "img-lightbox-window--is-binded";
	var imgLightboxOpenClass = "img-lightbox--open";
	var imgLightboxLinkIsBindedClass = "img-lightbox-link--is-binded";
	var isLoadedClass = "is-loaded";
	var dummySrc =
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
	var isMobile = navigator.userAgent.match(
		/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i
	);
	var isTouch =
		isMobile !== null ||
		document.createTouch !== undefined ||
		"ontouchstart" in root ||
		"onmsgesturechange" in root ||
		navigator.msMaxTouchPoints;

	var debounce = function debounce(func, wait) {
		var timeout;
		var args;
		var context;
		var timestamp;
		return function() {
			context = this;
			args = [].slice.call(arguments, 0);
			timestamp = new Date();

			var later = function later() {
				var last = new Date() - timestamp;

				if (last < wait) {
					timeout = setTimeout(later, wait - last);
				} else {
					timeout = null;
					func.apply(context, args);
				}
			};

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};

	var callCallback = function callCallback(func, data) {
		if (typeof func !== "function") {
			return;
		}

		var caller = func.bind(this);
		caller(data);
	};

	var setDisplayBlock = function setDisplayBlock(e) {
		if (e) {
			e.style.display = "block";
		}
	};

	var setDisplayNone = function setDisplayNone(e) {
		if (e) {
			e.style.display = "none";
		}
	};

	var hideImgLightbox = function hideImgLightbox(callback) {
		var container =
			document.getElementsByClassName(containerClass)[0] || "";
		var img = container
			? container.getElementsByTagName("img")[0] || ""
			: "";

		var hideContainer = function hideContainer() {
			container.classList.remove(fadeInClass);
			container.classList.add(fadeOutClass);

			var hideImg = function hideImg() {
				container.classList.remove(animatedClass);
				container.classList.remove(fadeOutClass);
				img.classList.remove(animatedClass);
				img.classList.remove(fadeOutDownClass);

				img.onload = function() {
					container.classList.remove(isLoadedClass);
				};

				img.src = dummySrc;
				setDisplayNone(container);
				callCallback(callback, root);
			};

			var timer = setTimeout(function() {
				clearTimeout(timer);
				timer = null;
				hideImg();
			}, 400);
		};

		if (container && img) {
			img.classList.remove(fadeInUpClass);
			img.classList.add(fadeOutDownClass);
			var timer = setTimeout(function() {
				clearTimeout(timer);
				timer = null;
				hideContainer();
			}, 400);
		}

		docElem.classList.remove(imgLightboxOpenClass);
		docBody.classList.remove(imgLightboxOpenClass);
	};

	var imgLightbox = function imgLightbox(linkClass, settings) {
		var _linkClass = linkClass || "";

		var options = settings || {};
		var rate = options.rate || 500;
		var touch = options.touch;
		var onError = options.onError;
		var onLoaded = options.onLoaded;
		var onCreated = options.onCreated;
		var onClosed = options.onClosed;
		var link = document.getElementsByClassName(_linkClass) || "";
		var container =
			document.getElementsByClassName(containerClass)[0] || "";
		var img = container
			? container.getElementsByTagName("img")[0] || ""
			: "";

		if (!container) {
			container = document.createElement("div");
			container.classList.add(containerClass);
			var html = [];
			html.push('<img src="' + dummySrc + '" alt="" />');
			html.push(
				'<div class="half-circle-spinner"><div class="circle circle-1"></div><div class="circle circle-2"></div></div>'
			);
			html.push('<a href="javascript:void(0);" class="btn-close"></a>');
			container.innerHTML = html.join("");
			docBody.appendChild(container);
			img = container
				? container.getElementsByTagName("img")[0] || ""
				: "";
			var btnClose = container
				? container.getElementsByClassName(btnCloseClass)[0] || ""
				: "";

			var handleImgLightboxContainer = function handleImgLightboxContainer() {
				hideImgLightbox(onClosed);
			};

			container.addEventListener("click", handleImgLightboxContainer);
			btnClose.addEventListener("click", handleImgLightboxContainer);

			if (!docElem.classList.contains(imgLightboxWindowIsBindedClass)) {
				docElem.classList.add(imgLightboxWindowIsBindedClass);
				root.addEventListener("keyup", function(ev) {
					if (27 === (ev.which || ev.keyCode)) {
						hideImgLightbox(onClosed);
					}
				});
			}
		}

		var arrange = function arrange(e) {
			var hrefString =
				e.getAttribute("href") || e.getAttribute("data-src") || "";
			var dataTouch = e.getAttribute("data-touch") || "";

			if (!hrefString) {
				return;
			}

			var handleImgLightboxLink = function handleImgLightboxLink(ev) {
				ev.stopPropagation();
				ev.preventDefault();
				docElem.classList.add(imgLightboxOpenClass);
				docBody.classList.add(imgLightboxOpenClass);
				container.classList.remove(isLoadedClass);

				var logic = function logic() {
					if (onCreated) {
						callCallback(onCreated, root);
					}

					container.classList.add(animatedClass);
					container.classList.add(fadeInClass);
					img.classList.add(animatedClass);
					img.classList.add(fadeInUpClass);

					img.onload = function() {
						container.classList.add(isLoadedClass);

						if (onLoaded) {
							callCallback(onLoaded, root);
						}
					};

					img.onerror = function() {
						if (onError) {
							callCallback(onError, root);
						}
					};

					img.src = hrefString;
					setDisplayBlock(container);
				};

				debounce(logic, rate).call();
			};

			if (!e.classList.contains(imgLightboxLinkIsBindedClass)) {
				e.classList.add(imgLightboxLinkIsBindedClass);
				e.addEventListener("click", handleImgLightboxLink);

				if (isTouch && (touch || dataTouch)) {
					e.addEventListener("touchstart", handleImgLightboxLink);
				}
			}
		};

		if (container && img && link) {
			var i, l;

			for (i = 0, l = link.length; i < l; i += 1) {
				arrange(link[i]);
			}

			i = l = null;
		}
	};

	root.imgLightbox = imgLightbox;
})("undefined" !== typeof window ? window : this, document);
