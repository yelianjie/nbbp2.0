var ScrollFix = function(elem) {
	// Variables to track inputs
	this.startY = 0
	this.startTopScroll = 0
	
	this.elem = elem || document.querySelector(elem);
	
	// If there is no element, then do nothing	
	if(!this.elem)
		return;
	
	// Handle the start of interactions
	this.elem.addEventListener('touchstart', this.func.bind(this), false);
};
ScrollFix.prototype.func = function (event) {
	this.startY = event.touches[0].pageY;
	this.startTopScroll = this.elem.scrollTop;
	if(this.startTopScroll <= 0)
	this.elem.scrollTop = 1;

	if(this.startTopScroll + this.elem.offsetHeight >= this.elem.scrollHeight)
		this.elem.scrollTop = this.elem.scrollHeight - this.elem.offsetHeight - 1;
}

ScrollFix.prototype.destory = function () {
	this.elem.removeEventListener('touchstart', this.func, false);
}

export default ScrollFix