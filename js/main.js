jQuery(document).ready(function(){
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    var scroll = new SmoothScroll('.navbar a[href*="#"]', {
        speed: 800,
        offset: 100
    }); 
    particlesJS.load('particles-js', 'assets/particles/particles.json', function () {
        console.log('callback - particles.js config loaded');
    }); 
})


