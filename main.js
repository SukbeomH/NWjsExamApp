// Open a new Window and load URL
nw.Window.open("https://frontpilotacgtest.insahr.co.kr", {
	title: "ExamApp",
	icon: "./resources/icon/icon.png",
	kiosk: true,
	frame: false,
	fullscreen: true,
});

nw.Screen.Init();
const screens = nw.Screen.screens;
if (screens.length > 1) {
	// Get an exist Window and load URL
	nw.Window;
}
