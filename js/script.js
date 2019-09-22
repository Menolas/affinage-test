'use strict';

var images = [
	{
		alt: 'some picture',
		url: 'img/photo-1.jpg'
	},

	{
        alt: 'some picture',
		url: 'img/photo-2.jpg'
	},

	{
        alt: 'some picture',
		url: 'img/photo-3.jpg'
	}
];

var rightHandler = document.querySelector('.control-panel__handler--right');
var leftHandler = document.querySelector('.control-panel__handler--left');
var backBlock = document.querySelector('.gallery__block--back img');
var frontBlock = document.querySelector('.gallery__block--front img');

rightHandler.addEventListener('click', function () {
    var sweptPictureUrl = frontBlock.src;
    for (var i = 0; i < images.length; i++) {
    	if (sweptPictureUrl === images[i].url) {
    		var j;
    		if (i >= images.length - 1) {
    			j = 0;
    		} else {
    		    j = i + 1;
    	    }
    		backBlock.src = sweptPictureUrl;
    		frontBlock.src = images[j].url;
    	}
    }
});

leftHandler.addEventListener('click', function () {
    var sweptPictureUrl = frontBlock.src;
    for (var i = 0; i < images.length; i++) {
    	if (sweptPictureUrl === images[i].url) {
    		var j;
    		if (i = 0) {
    			j = 2;
    		} else {
    		    j = i - 1;
    	    }
    		backBlock.src = sweptPictureUrl;
    		frontBlock.src = images[j].url;
    	}
    }
});
