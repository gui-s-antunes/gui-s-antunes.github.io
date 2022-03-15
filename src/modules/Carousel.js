class Carousel {
    constructor(doms){
        this.doms = doms;
        this.position = 0;
        this.arrayPosition = 0;
    }

    previousDom(){
        this.arrayPosition--;
        this.calcDom();
    }
    
    nextDom(){
        this.arrayPosition++;
        this.calcDom();
    }

    calcDom(){
        this.position = Math.abs(this.arrayPosition % this.doms.length);
        this.setActiveDom();
    }

    setActiveDom(){
        this.removeActive();
        this.doms[this.position].classList.add('active');
    }

    removeActive(){
        this.doms.forEach(dom => {
            dom.classList.remove('active');
        });
    }
}

export default Carousel;