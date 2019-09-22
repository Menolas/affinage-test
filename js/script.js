'use strict';

var images = [
	{
		alt: 'some picture',
		url: 'file:///Users/elena/affinage-test/img/photo-1.jpg'
	},

	{
        alt: 'some picture',
		url: 'file:///Users/elena/affinage-test/img/photo-2.jpg'
	},

	{
        alt: 'some picture',
		url: 'file:///Users/elena/affinage-test/img/photo-3.jpg'
	}
];

var rightHandler = document.querySelector('.control-panel__handler--right');
var leftHandler = document.querySelector('.control-panel__handler--left');
var backBlock = document.querySelector('.gallery__block--back img');
var frontBlock = document.querySelector('.gallery__block--front img');

frontBlock.src = images[2].url;
backBlock.src = images[0].url;

rightHandler.addEventListener('click', function () {
	var sweptPictureUrl = frontBlock.src;
	for (var i = 0; i < images.length; i++) {
		if (images[i].url === sweptPictureUrl) {
			if (i < images.length - 1) {
				var j = i + 1;
			} else if (i = images.length - 1) {
			    j = 0;
			}
			frontBlock.src = images[j].url;
	        backBlock.src = sweptPictureUrl;
		}
	}
});

leftHandler.addEventListener('click', function () {
    var sweptPictureUrl = frontBlock.src;
    for (var i = 0; i < images.length; i++) {
    	if (images[i].url === sweptPictureUrl) {
    		if (i = 0) {
    			var j = 2;
    		} else if (i > 0) {
    		    j = i - 1;
    	    }
    		backBlock.src = sweptPictureUrl;
    		frontBlock.src = images[j].url;
    	}
    }
});
