(function($){

  $.fn.twentytwenty = function(options) {
    var options = $.extend({
      move_slider_on_hover: false,
      move_with_handle_only: true,
      click_to_move: false
    }, options);

    return this.each(function() {
      var container = $(this);
	  
	  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	  if (isMobile && !move_with_handle_only) move_with_handle_only = true;
	  
	  var imgA = container.find("img:first");
      var imgB = container.find("img:last");
	  var labelA = imgA.attr('label');
	  var labelB = imgB.attr('label');
	  
      var orientation = container.attr('orientation');
      var sliderPct = container.attr('pos');
	  
	  if (orientation == undefined || orientation != "vertical") orientation = "horizontal";
	  if (sliderPct == undefined || sliderPct == "") sliderPct = 0.5;
	  
      var beforeDirection = (orientation === 'vertical') ? 'down' : 'left';
      var afterDirection = (orientation === 'vertical') ? 'up' : 'right';
	
      container.wrap("<div class='twentytwenty-wrapper twentytwenty-" + orientation + "'></div>");
      container.append("<div class='twentytwenty-overlay'></div>");
      var overlay = container.find(".twentytwenty-overlay");
      if (labelA != undefined) overlay.append("<div class='twentytwenty-before-label' data-content='"+labelA+"'></div>");
      if (labelB != undefined) overlay.append("<div class='twentytwenty-after-label' data-content='"+labelB+"'></div>");
      
      container.append("<div class='twentytwenty-handle'></div>");
      var slider = container.find(".twentytwenty-handle");
      slider.append("<span class='twentytwenty-" + beforeDirection + "-arrow'></span>");
      slider.append("<span class='twentytwenty-" + afterDirection + "-arrow'></span>");
      container.addClass("twentytwenty-container");
      imgA.addClass("twentytwenty-before");
      imgB.addClass("twentytwenty-after");
      
      var calcOffset = function(dimensionPct) {
        var w = imgA.width();
        var h = imgA.height();
        return {
          w: w+"px",
          h: h+"px",
          cw: (dimensionPct*w)+"px",
          ch: (dimensionPct*h)+"px"
        };
      };

      var adjustContainer = function(offset) {
      	if (orientation === 'vertical') {
          imgA.css("clip", "rect(0,"+offset.w+","+offset.ch+",0)");
          imgB.css("clip", "rect("+offset.ch+","+offset.w+","+offset.h+",0)");
      	}
      	else {
          imgA.css("clip", "rect(0,"+offset.cw+","+offset.h+",0)");
          imgB.css("clip", "rect(0,"+offset.w+","+offset.h+","+offset.cw+")");
    	}
		container.css("width", offset.w);
        container.css("height", offset.h);
      };

      var adjustSlider = function(pct) {
        var offset = calcOffset(pct);
        slider.css((orientation==="vertical") ? "top" : "left", (orientation==="vertical") ? offset.ch : offset.cw);
        adjustContainer(offset);
      };

      // Return the number specified or the min/max number if it outside the range given.
      var minMaxNumber = function(num, min, max) {
        return Math.max(min, Math.min(max, num));
      };

      // Calculate the slider percentage based on the position.
      var getSliderPercentage = function(positionX, positionY) {
        var sliderPercentage = (orientation === 'vertical') ?
          (positionY-offsetY)/imgHeight :
          (positionX-offsetX)/imgWidth;

        return minMaxNumber(sliderPercentage, 0, 1);
      };


      $(window).on("resize.twentytwenty", function(e) {
        adjustSlider(sliderPct);
      });

      var offsetX = 0;
      var offsetY = 0;
      var imgWidth = 0;
      var imgHeight = 0;
      var onMoveStart = function(e) {
        if (((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) && orientation !== 'vertical') {
          e.preventDefault();
        }
        else if (((e.distX < e.distY && e.distX < -e.distY) || (e.distX > e.distY && e.distX > -e.distY)) && orientation === 'vertical') {
          e.preventDefault();
        }
        container.addClass("active");
        offsetX = container.offset().left;
        offsetY = container.offset().top;
        imgWidth = imgA.width(); 
        imgHeight = imgA.height();
      };
      var onMove = function(e) {
        if (container.hasClass("active")) {
          sliderPct = getSliderPercentage(e.pageX, e.pageY);
          adjustSlider(sliderPct);
        }
      };
      var onMoveEnd = function() {
          container.removeClass("active");
      };

      var moveTarget = options.move_with_handle_only ? slider : container;
      moveTarget.on("movestart",onMoveStart);
      moveTarget.on("move",onMove);
      moveTarget.on("moveend",onMoveEnd);

      if (options.move_slider_on_hover) {
        container.on("mouseenter", onMoveStart);
        container.on("mousemove", onMove);
        container.on("mouseleave", onMoveEnd);
      }

      slider.on("touchmove", function(e) {
        e.preventDefault();
      });

      container.find("img").on("mousedown", function(event) {
        event.preventDefault();
      });

      if (options.click_to_move) {
        container.on('click', function(e) {
          offsetX = container.offset().left;
          offsetY = container.offset().top;
          imgWidth = imgA.width();
          imgHeight = imgA.height();

          sliderPct = getSliderPercentage(e.pageX, e.pageY);
          adjustSlider(sliderPct);
        });
      }

      $(window).trigger("resize.twentytwenty");
    });
  };

})(jQuery);
