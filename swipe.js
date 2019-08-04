class Swipe {
	constructor(settings) {
		this.onLeftSwipe = () => {
		};
		this.onRightSwipe = () => {
		};
		this.onUpSwipe = () => {
		};
		this.onDownSwipe = () => {
		};
		this.xDown = null;
		this.yDown = null;
		this.target = document;

		for (let i in settings) {
			if (settings.hasOwnProperty(i)) this[i] = settings[i];
		}

		this.target.addEventListener("touchstart", (e) => {this.handleTouchStart(e);}, false);
		this.target.addEventListener("touchmove", (e) => {this.handleTouchMove(e);}, false);
	}

	handleTouchStart(evt) {
		this.xDown = evt.touches[0].clientX;
		this.yDown = evt.touches[0].clientY;
	}

	handleTouchMove(evt) {
		if (!this.xDown || !this.yDown) {
			return;
		}
		let xUp = evt.touches[0].clientX;
		let yUp = evt.touches[0].clientY;
		let xDiff = this.xDown - xUp;
		let yDiff = this.yDown - yUp;

		if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
			if (xDiff > 0) this.onLeftSwipe();
			else this.onRightSwipe();
		} else {
			if (yDiff > 0) this.onUpSwipe();
			else this.onDownSwipe();
		}
		this.xDown = null;
		this.yDown = null;
	}

	onSwipe(type, fn) {
		type = type || 'left';
		if (type === 'left') {
			this.onLeftSwipe = fn;
		} else if (type === 'right') {
			this.onRightSwipe = fn;
		} else if (type === 'up') {
			this.onUpSwipe = fn;
		} else if (type === 'down') {
			this.onDownSwipe = fn;
		} else {
			throw new Error("Swipe type not recognized");
		}
	}
}