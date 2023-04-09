/**
 * Sets up Justified Gallery.
 */
if (!!$.prototype.justifiedGallery) {
  var options = {
    rowHeight: 140,
    margins: 4,
    lastRow: "justify"
  };
  $(".article-gallery").justifiedGallery(options);
}

/**
 * Storage
 */
var STORAGE_PREFIX = "STORAGE_EX_"
var Storage = {};
Storage.get = function (key) {
  key = STORAGE_PREFIX + key;
  var now = new Date().getTime();
  var data = localStorage.getItem(key);
  if (data === null) {
    return null;
  }
  var parseData = JSON.parse(data);
  if (parseData.expireTime && now < parseInt(parseData.expireTime)) {
    return parseData.value;
  }
  return null;
};

Storage.set = function (key, value, duration) {
  if (!duration) {
    duration = 1000 * 60 * 60 * 24;
  }
  key = STORAGE_PREFIX + key;
  var now = new Date().getTime();
  var data = {
    expireTime: now + parseInt(duration),
    value: value
  };
  localStorage.setItem(key, JSON.stringify(data));
};

$(document).ready(function () {

  /**
   * Shows the responsive navigation menu on mobile.
   */
  $("#header > #nav > ul > .icon").click(function () {
    $("#header > #nav > ul").toggleClass("responsive");
  });


  /**
   * Controls the different versions of  the menu in blog post articles
   * for Desktop, tablet and mobile.
   */
  if ($(".post").length) {
    var menu = $("#menu");
    var nav = $("#menu > #nav");
    var menuIcon = $("#menu-icon, #menu-icon-tablet");

    /**
     * Display the menu on hi-res laptops and desktops.
     */
    if ($(document).width() >= 1440) {
      menu.show();
      menuIcon.addClass("active");
    }

    /**
     * Display the menu if the menu icon is clicked.
     */
    menuIcon.click(function () {
      if (menu.is(":hidden")) {
        menu.show();
        menuIcon.addClass("active");
      } else {
        menu.hide();
        menuIcon.removeClass("active");
      }
      return false;
    });

    /**
     * Add a scroll listener to the menu to hide/show the navigation links.
     */
    if (menu.length) {
      $(window).on("scroll", function () {
        var topDistance = $(window).scrollTop();

        // hide only the navigation links on desktop
        if (!nav.is(":visible") && topDistance < 50) {
          nav.show();
        } else if (nav.is(":visible") && topDistance > 100) {
          nav.hide();
        }

        // on tablet, hide the navigation icon as well and show a "scroll to top
        // icon" instead
        if (!$("#menu-icon").is(":visible") && topDistance < 50) {
          $("#menu-icon-tablet").show();
          $("#top-icon-tablet").hide();
        } else if (!$("#menu-icon").is(":visible") && topDistance > 100) {
          $("#menu-icon-tablet").hide();
          $("#top-icon-tablet").show();
        }
      });
    }

    /**
     * Show mobile navigation menu after scrolling upwards,
     * hide it again after scrolling downwards.
     */
    if ($("#footer-post").length) {
      var lastScrollTop = 0;
      $(window).on("scroll", function () {
        var topDistance = $(window).scrollTop();

        if (topDistance > lastScrollTop) {
          // downscroll -> show menu
          $("#footer-post").hide();
        } else {
          // upscroll -> hide menu
          $("#footer-post").show();
        }
        lastScrollTop = topDistance;

        // close all submenu"s on scroll
        $("#nav-footer").hide();
        $("#toc-footer").hide();
        $("#share-footer").hide();

        // show a "navigation" icon when close to the top of the page,
        // otherwise show a "scroll to the top" icon
        if (topDistance < 50) {
          $("#actions-footer > #top").hide();
        } else if (topDistance > 100) {
          $("#actions-footer > #top").show();
        }
      });
    }
  }

  if ($("#typed").length) {
    var typedStringsHtml = $("#typed-source")[0].innerHTML;
    if (!Storage.get("typed")) {
      var typedStrings = typedStringsHtml.split("\n").map(s => s.trim()).join(" ")
        .split("&lt;br&gt;").map(s => s.trim())
        .filter(s => s);
      new Typed("#typed", {
        strings: [typedStrings.join("<br>")],
        typeSpeed: 20,
        startDelay: 300,
      });
      let attribute = $("#typed")[0].getAttribute("duration");
      Storage.set("typed", true, eval(attribute));
    } else {
      let innerHtml = typedStringsHtml.replace(/&lt;br&gt;/g, "<br>").replace(/\^\d+/g, "");
      $("#typed")[0].innerHTML = innerHtml;
    }
  }
});
