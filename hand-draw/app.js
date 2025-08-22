const videoEl = document.getElementById('webcam');
const canvasEl = document.getElementById('draw');
const overlayEl = document.getElementById('overlay');
const dismissBtn = document.getElementById('dismiss');

const ctx = canvasEl.getContext('2d');
let devicePixelRatioScale = 1;

function resizeCanvasToDisplaySize() {
	const { innerWidth, innerHeight, devicePixelRatio } = window;
	devicePixelRatioScale = Math.max(1, Math.floor(devicePixelRatio || 1));
	const displayWidth = innerWidth;
	const displayHeight = innerHeight;
	canvasEl.style.width = displayWidth + 'px';
	canvasEl.style.height = displayHeight + 'px';
	canvasEl.width = displayWidth * devicePixelRatioScale;
	canvasEl.height = displayHeight * devicePixelRatioScale;
	ctx.setTransform(devicePixelRatioScale, 0, 0, devicePixelRatioScale, 0, 0);
}

resizeCanvasToDisplaySize();
window.addEventListener('resize', resizeCanvasToDisplaySize);

dismissBtn.addEventListener('click', () => overlayEl.classList.add('hidden'));
window.addEventListener('keydown', (e) => {
	if (e.key === 'c' || e.key === 'C') {
		clearCanvas();
	}
	if (e.key === 'h' || e.key === 'H') {
		overlayEl.classList.toggle('hidden');
	}
});

function clearCanvas() {
	ctx.save();
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
	ctx.restore();
}

// Drawing state
let lastPoint = null;
let hasSeenHand = false;

function drawFromFingerTip(x, y) {
	ctx.lineCap = 'round';
	ctx.lineJoin = 'round';
	ctx.strokeStyle = '#111';
	ctx.lineWidth = 4;
	if (lastPoint) {
		ctx.beginPath();
		ctx.moveTo(lastPoint.x, lastPoint.y);
		ctx.lineTo(x, y);
		ctx.stroke();
	}
	lastPoint = { x, y };
}

function resetStroke() {
	lastPoint = null;
}

// MediaPipe Hands setup
const hands = new Hands({
	locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
});

hands.setOptions({
	selfieMode: true,
	maxNumHands: 1,
	modelComplexity: 1,
	minDetectionConfidence: 0.6,
	minTrackingConfidence: 0.5
});

hands.onResults((results) => {
	const landmarks = results.multiHandLandmarks && results.multiHandLandmarks[0];
	if (!landmarks || landmarks.length < 9) {
		resetStroke();
		return;
	}

	if (!hasSeenHand) {
		hasSeenHand = true;
		overlayEl.classList.add('hidden');
	}

	const tip = landmarks[8]; // Index fingertip
	const x = tip.x * canvasEl.width / devicePixelRatioScale;
	const y = tip.y * canvasEl.height / devicePixelRatioScale;
	drawFromFingerTip(x, y);
});

// Camera
const camera = new Camera(videoEl, {
	onFrame: async () => {
		await hands.send({ image: videoEl });
	},
	width: 640,
	height: 480
});

async function start() {
	try {
		await camera.start();
	} catch (err) {
		console.error('Camera start failed:', err);
		overlayEl.classList.remove('hidden');
	}
}

start();