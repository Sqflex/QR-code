jQuery(document).ready(function(){
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'assets/particles/particles.json', function () {
        console.log('callback - particles.js config loaded');
    }); 
})

var scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 800,
    offset: 100
}); 