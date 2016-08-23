/*
====================================================================================================
@name			jQuery Frontend
@version		2.0.0
@author			Pavel Richter / Grand Pixels
@author-uri		http://grandpixels.com
@copyright		2013 Pavel Richter / Grand Pixels
====================================================================================================
*/

/*
====================================================================================================
Init Tiles Layout
----------------------------------------------------------------------------------------------------
@name			jQuery Isotope
@since			2.0.0
@file			javascripts/jquery.isotope.min.js
----------------------------------------------------------------------------------------------------
*/

jQuery(window).load(function () {
	"use strict";
	
	jQuery(function () {

		var $container = jQuery('.grid-tiles'),
			$container_narrow = jQuery('.grid-tiles-narrow'),
            $container_sidebar = jQuery('.grid-tiles-sidebar'),
            $container_proxy = $container.clone().empty().css({ visibility: 'hidden' }),
			$container_proxy_narrow = $container_narrow.clone().empty().css({ visibility: 'hidden' }),
			$container_proxy_sidebar = $container_sidebar.clone().empty().css({ visibility: 'hidden' }),
			column_number = 7,
            column_number_narrow = 4,
            column_number_sidebar = 6;
		
		$container.after($container_proxy);
		$container_narrow.after($container_proxy_narrow);
		$container_sidebar.after($container_proxy_sidebar);

		jQuery(window).smartresize(function () {
			
			if ((jQuery(window).width() > 1680)) {
				
				column_number = 7;
				column_number_narrow = 4;
				column_number_sidebar = 6;
				
				$container.find('.tile').css('width', '14.28%');
				$container.find('.tile.width-double').css('width', '28.57%');
				
				$container_narrow.find('.tile').css('width', '25%');
				
				$container_sidebar.find('.tile').css('width', '16.66%');
				$container_sidebar.find('.tile.width-double').css('width', '33.33%');
				
			} else if ((jQuery(window).width() > 1440) && (jQuery(window).width() <= 1680)) {
				
				column_number = 6;
				column_number_narrow = 4;
				column_number_sidebar = 5;
				
				$container.find('.tile').css('width', '16.66%');
				$container.find('.tile.width-double').css('width', '33.33%');
				
				$container_narrow.find('.tile').css('width', '25%');
				
				$container_sidebar.find('.tile').css('width', '20%');
				$container_sidebar.find('.tile.width-double').css('width', '40%');
				
			} else if ((jQuery(window).width() > 1280) && (jQuery(window).width() <= 1440)) {
				
				column_number = 5;
				column_number_narrow = 4;
				column_number_sidebar = 4;
				
				$container.find('.tile').css('width', '20%');
				$container.find('.tile.width-double').css('width', '40%');
				
				$container_narrow.find('.tile').css('width', '25%');
				
				$container_sidebar.find('.tile').css('width', '25%');
				$container_sidebar.find('.tile.width-double').css('width', '50%');
				
			} else if ((jQuery(window).width() > 1024) && (jQuery(window).width() <= 1280)) {
				
				column_number = 4;
				column_number_narrow = 4;
				column_number_sidebar = 3;
				
				$container.find('.tile').css('width', '25%');
				$container.find('.tile.width-double').css('width', '50%');
				
				$container_narrow.find('.tile').css('width', '25%');
				
				$container_sidebar.find('.tile').css('width', '33.33%');
				$container_sidebar.find('.tile.width-double').css('width', '66.66%');
				
			} else if ((jQuery(window).width() > 768) && (jQuery(window).width() <= 1024)) {
				
				column_number = 3;
				column_number_narrow = 3;
				column_number_sidebar = 2;
				
				$container.find('.tile').css('width', '33.33%');
				$container.find('.tile.width-double').css('width', '66.66%');
				
				$container_narrow.find('.tile').css('width', '33.33%');
				
				$container_sidebar.find('.tile').css('width', '50%');
				$container_sidebar.find('.tile.width-double').css('width', '100%');
				
			} else if ((jQuery(window).width() > 480) && (jQuery(window).width() <= 768)) {
				
				column_number = 2;
				column_number_narrow = 2;
				column_number_sidebar = 2;
				
				$container.find('.tile').css('width', '50%');
				$container.find('.tile.width-double').css('width', '100%');
				
				$container_narrow.find('.tile').css('width', '50%');
				
				$container_sidebar.find('.tile').css('width', '50%');
				$container_sidebar.find('.tile.width-double').css('width', '100%');
				
			} else if (jQuery(window).width() <= 480) {
				
				column_number = 1;
				column_number_narrow = 1;
				column_number_sidebar = 1;
				
				$container.find('.tile').css('width', '100%');
				$container.find('.tile.width-double').css('width', '100%');
				
				$container_narrow.find('.tile').css('width', '100%');
				
				$container_sidebar.find('.tile').css('width', '100%');
				$container_sidebar.find('.tile.width-double').css('width', '100%');
				
			}
			
			var column_width = Math.floor($container_proxy.width() / column_number),
				column_width_narrow = Math.floor($container_proxy_narrow.width() / column_number_narrow),
				column_width_sidebar = Math.floor($container_proxy_sidebar.width() / column_number_sidebar);
			
			
			// Grid Wide
			$container.css({
				width: column_width * column_number
			}).isotope({
				resizable: false,
				masonry: {
					columnWidth: column_width
				}
			});
			
			// Grid Narrow						
			$container_narrow.css({
				width: column_width_narrow * column_number_narrow
			}).isotope({
				resizable: false,
				masonry: {
					columnWidth: column_width_narrow
				}
			});
			
			// Grid with Sidebar
			$container_sidebar.css({
				width: column_width_sidebar * column_number_sidebar
			}).isotope({
				resizable: false,
				masonry: {
					columnWidth: column_width_sidebar
				}
			});
			
		}).smartresize();

	});
	
});

/*
====================================================================================================
Init Mobile Navigation
----------------------------------------------------------------------------------------------------
@name			jQuery GP
@since			2.0.0
----------------------------------------------------------------------------------------------------
*/

// Clone Navigation
jQuery(document).ready(function () {
	"use strict";

    var gp_navigation_mobile = jQuery('.navigation-primary').clone().attr('id', 'navigation-mobile').attr('class', 'navigation-mobile');
    
    gp_navigation_mobile.appendTo('.navigation-container');
    
});

// Switch Class
jQuery(document).ready(function () {
	"use strict";

	var events = 'click.fndtn',
        $selector = jQuery('.navigation-mobile-button a');
    
	if ($selector.length > 0) {

		jQuery('.navigation-mobile-button a').on(events, function (e) {
			e.preventDefault();
			jQuery('body').toggleClass('mobile-active');
		});

	}
	
});

/*
====================================================================================================
Init Tabs
----------------------------------------------------------------------------------------------------
@name			jQuery UI
@since			2.0.0
----------------------------------------------------------------------------------------------------
*/

jQuery(document).ready(function () {
	"use strict";
	
	jQuery(".tabs").tabs();
		
});

/*
====================================================================================================
Init Back to Top Button
----------------------------------------------------------------------------------------------------
@name			jQuery GP
@since			2.0.0
----------------------------------------------------------------------------------------------------
*/

jQuery(document).ready(function () {
	"use strict";
	
	var ua = navigator.userAgent,
		event = (ua.match(/iPad/i)) ? "touchstart" : "click";

	jQuery(window).scroll(function () {
		
		if (jQuery(this).scrollTop() !== 0) {
			jQuery('.back-to-top').fadeIn();
		} else {
			jQuery('.back-to-top').fadeOut();
		}
		
	});
	
	jQuery('.back-to-top').bind(event, function () {
		
		jQuery('body,html').animate({
			scrollTop: 0
		}, 800);
		
	});

});

/*
====================================================================================================
Init Lightbox
----------------------------------------------------------------------------------------------------
@name			jQuery touchTouch
@since			2.0.0
@file			javascripts/jquery.touchtouch.js
----------------------------------------------------------------------------------------------------
*/

jQuery(document).ready(function () {
	"use strict";

	jQuery('.lightbox a').touchTouch();
	jQuery('a.lightbox').touchTouch();

});

/*
====================================================================================================
Init Modal Search
----------------------------------------------------------------------------------------------------
@name			jQuery GP
@since			2.0.0
----------------------------------------------------------------------------------------------------
*/

jQuery(document).ready(function () {
	"use strict";
	
	var ua = navigator.userAgent,
		event = (ua.match(/iPad/i)) ? "touchstart" : "click";

	jQuery(".modal-search-button").bind(event, function () {
		jQuery(".modal-search").fadeIn().css('display', 'table');
	});
	
	jQuery(".modal-search-close").bind(event, function () {
		jQuery(".modal-search").fadeOut();
	});
	
	jQuery(document).keyup(function (e) {
		if (e.keyCode === 27) {
			jQuery(".modal-search").fadeOut();
		}
	});
	

});

/*
====================================================================================================
Alerts Function
----------------------------------------------------------------------------------------------------
@name			jQuery GP
@since			2.0.0
----------------------------------------------------------------------------------------------------
*/

jQuery(document).ready(function () {
	"use strict";
	
	var ua = navigator.userAgent,
		event = (ua.match(/iPad/i)) ? "touchstart" : "click";
	
	jQuery(".alert .close").bind(event, function () {
		jQuery(this).closest(".alert").fadeOut();
	});

});

/*
====================================================================================================
Overlay
----------------------------------------------------------------------------------------------------
@name			jQuery GP
@since			2.0.0
----------------------------------------------------------------------------------------------------
*/

/* Image Overlay */
jQuery(document).ready(function () {
	"use strict";

	jQuery('.overlay').hover(
		function () {
			jQuery(this).find('span').stop(false, true).fadeIn(300);
		},
		function () {
			jQuery(this).find('span').stop(false, true).fadeOut(300);
		}
	);

});