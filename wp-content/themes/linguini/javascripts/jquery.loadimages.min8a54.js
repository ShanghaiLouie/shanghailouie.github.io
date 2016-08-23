/*
====================================================================================================
@name			jQuery Load Images
@version		1.0.0
@author			Krio
@author-uri		http://krio.me/jquery-image-loader-plugin
				http://github.com/krio/jquery-image-loader-plugin
@license		GNU General Public License version 3.0
@modified       2013 Pavel Richter
====================================================================================================
*/

(function(e){e.fn.loadImages=function(t){var n=e(this).find("img").css({opacity:0,visibility:"hidden"}).addClass("loadImages"),r=n.size(),i=e.extend({},e.fn.loadImages.defaults,t),s=setInterval(function(){r?n.filter(".loadImages").each(function(){if(this.complete){o(this);r--}}):clearInterval(s)},i.loadedCheckEvery),o=function(t){e(t).css({visibility:"visible"}).animate({opacity:1},i.imageEnterDelay,function(){e(t).removeClass("loadImages")})}};e.fn.loadImages.defaults={loadedCheckEvery:350,imageEnterDelay:300}})(jQuery);