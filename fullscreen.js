{
    const KEYCODE = {
        ARROW_LEFT: 37,
        ARROW_RIGHT: 39,
    };

    let currSlide = null;
    const slideContainer = document.querySelector('div[id^=marp-core]');


    const startPresentation = () => {
        currSlide = slideContainer.firstChild;
        activateFullscreen();
    };

    const activateFullscreen = () => {
        if (!currSlide) {
            return alert('보여줄 슬라이드가 없어요!!!');
        }
        if (currSlide.requestFullscreen) {
            currSlide.requestFullscreen();
        } else if (currSlide.mozRequestFullScreen) { /* Firefox */
            currSlide.mozRequestFullScreen();
        } else if (currSlide.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            currSlide.webkitRequestFullscreen();
        } else if (currSlide.msRequestFullscreen) { /* IE/Edge */
            currSlide.msRequestFullscreen();
        }
    };

    const fullScreenHandler = e => {
        if (!document.fullscreen) {
            return;
        }
        if (e.keyCode === KEYCODE.ARROW_RIGHT) {
            nextSlide();
        } else if (e.keyCode === KEYCODE.ARROW_LEFT) {
            prevSlide();
        }
    };
    document.addEventListener('keyup', fullScreenHandler);
    const nextSlide = () => {
        if (currSlide.nextSibling) {
            currSlide = currSlide.nextSibling;
            activateFullscreen();
        }
    };

    const prevSlide = () => {
        if (currSlide.previousSibling) {
            currSlide = currSlide.previousSibling;
            activateFullscreen();
        }
    };

    startPresentation();
}