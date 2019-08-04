/*
*
* MIT License
Copyright (c) 2016 Vikylp
Copyright (c) 2019 Heriberto-Juarez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
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