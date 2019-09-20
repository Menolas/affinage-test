'use strict';

var images = [
	{
		alt: 'some picture',
		url: '../img/photo-1.jpg'
	},

	{
        alt: 'some picture',
		url: '../img/photo-2.jpg'
	},

	{
        alt: 'some picture',
		url: '../img/photo-2.jpg'
	}
];

var rightHandle = document.querySelector('.control-panel__handler--right');
var leftHandle = document.querySelector('.control-panel__handler--left');
var backBlock = document.querySelector('.gallery__block--back img');
var frontBlock = document.querySelector('.gallery__block--front img');

rightHandle.addEvenListener('click', function () {
    var sweptPictureUrl = frontBlock.src;
    for (var i = 0; i < images.length; i++) {
    	if (sweptPictureUrl === images[i].url) {
    		var j = i + 1;
    		backBlock.src === sweptPictureUrl;
    		frontBlock.src === images[j].url;
    	}
    }
});
