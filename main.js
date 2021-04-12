const counter = document.getElementById('counter');
const limitTop = document.getElementById('top');
const limitBottom = document.getElementById('bottom');
const less = document.getElementById('less');
const more = document.getElementById('more');

function initValues() {
	counter.textContent = '1';
	limitTop.textContent = '10';
	limitBottom.textContent = '0';
	less.textContent = '1';
	more.textContent = '1';
}

function incrementLimitTop(step) {
	limitTop.textContent = parseInt(limitTop.textContent) + step;
}

function decrementLimitTop(step) {
	if (parseInt(counter.textContent) + step < parseInt(limitTop.textContent)) {
		limitTop.textContent = parseInt(limitTop.textContent) - step;
	}
}

function incrementLimitBottom(step) {
	if (
		parseInt(counter.textContent) - step >
		parseInt(limitBottom.textContent)
	) {
		limitBottom.textContent = parseInt(limitBottom.textContent) + step;
	}
}

function decrementLimitBottom(step) {
	limitBottom.textContent = parseInt(limitBottom.textContent) - step;
}

function incrementLess(step) {
	less.textContent = parseInt(less.textContent) + step;
}

function decrementLess(step) {
	if (less.textContent >= step) {
		less.textContent = parseInt(less.textContent) - step;
	}
}

function incrementMore(step) {
	more.textContent = parseInt(more.textContent) + step;
}

function decrementMore(step) {
	if (more.textContent >= step) {
		more.textContent = parseInt(more.textContent) - step;
	}
}

function incrementCounter(step) {
	if (
		parseInt(counter.textContent) + step - 1 <
		parseInt(limitTop.textContent)
	) {
		counter.textContent = parseInt(counter.textContent) + step;
	}
}

function decrementCounter(step) {
	if (
		parseInt(counter.textContent) - step + 1 >
		parseInt(limitBottom.textContent)
	) {
		counter.textContent = parseInt(counter.textContent) - step;
	}
}

document.getElementById('top').parentElement.addEventListener('wheel', e => {
	if (e.deltaY < 0) {
		incrementLimitTop(2);
	} else if (e.deltaY > 0) {
		decrementLimitTop(2);
	}
});

document.getElementById('bottom').parentElement.addEventListener('wheel', e => {
	if (e.deltaY < 0) {
		incrementLimitBottom(2);
	} else if (e.deltaY > 0) {
		decrementLimitBottom(2);
	}
});

document.getElementById('less').parentElement.addEventListener('wheel', e => {
	if (e.deltaY < 0) {
		incrementLess(2);
	} else if (e.deltaY > 0) {
		decrementLess(2);
	}
});

document.getElementById('more').parentElement.addEventListener('wheel', e => {
	if (e.deltaY < 0) {
		incrementMore(2);
	} else if (e.deltaY > 0) {
		decrementMore(2);
	}
});

document
	.querySelectorAll('.limit > .first')[0]
	.addEventListener('mousedown', () => {
		incrementLimitTop(1);
	});

document
	.querySelectorAll('.limit > .second')[0]
	.addEventListener('mousedown', () => {
		decrementLimitTop(1);
	});

document
	.querySelectorAll('.limit > .first')[1]
	.addEventListener('mousedown', () => {
		incrementLimitBottom(1);
	});

document
	.querySelectorAll('.limit > .second')[1]
	.addEventListener('mousedown', () => {
		decrementLimitBottom(1);
	});

document
	.querySelectorAll('.number > .first')[0]
	.addEventListener('mousedown', () => {
		incrementLess(1);
	});

document
	.querySelectorAll('.number > .second')[0]
	.addEventListener('mousedown', () => {
		decrementLess(1);
	});

document
	.querySelectorAll('.number > .first')[1]
	.addEventListener('mousedown', () => {
		incrementMore(1);
	});

document
	.querySelectorAll('.number > .second')[1]
	.addEventListener('mousedown', () => {
		decrementMore(1);
	});

document.querySelectorAll('.button')[0].addEventListener('mousedown', () => {
	decrementCounter(parseInt(less.textContent));
});

document.querySelectorAll('.button')[1].addEventListener('mousedown', () => {
	incrementCounter(parseInt(more.textContent));
});

document.getElementById('reset').addEventListener('mousedown', () => {
	initValues();
});

document.getElementById('cliczone').addEventListener('click', () => {
	incrementCounter(1);
});

document.querySelector('#cliczone > .title').addEventListener('click', e => {
	e.stopPropagation();
});

document.getElementById('cliczone').addEventListener('contextmenu', e => {
	e.preventDefault();
	decrementCounter(1);
});

document
	.querySelector('#cliczone > .title')
	.addEventListener('contextmenu', e => {
		e.stopPropagation();
	});

initValues();
