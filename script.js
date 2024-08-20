
function circlechaptakaro(){
    // defineing the default scale value
    var xscale = 1;
    var yscale =1;

    var xprev = 0;
    var yprev = 0;
    
    window.addEventListener("mousemove", function(dets){
       var xdiff = dets.clientX - xprev;
       var ydiff = dets.clientY -yprev;

       xprev = dets.clientX;
       yprev = dets.clientY;
    
       xscale = gsap.utils.clamp(.8,1.2, xdiff);
       xscale = gsap.utils.clamp(.8,1.2, ydiff);

       circleMouseFollower(xscale, yscale);
    });
};
function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
     document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
     document.querySelector('#minicircle').style.display = "block";
    });
    window.addEventListener("mouseleave" , function(dets){
     document.querySelector('#minicircle').style.display = "block";
    });
};

// circlechaptakaro();
circleMouseFollower();



document.querySelectorAll('.elem').forEach(function(elem){
    elem.addEventListener("mouseleave", function(dets){
        elem.querySelector('img').style.opacity = 0;});
});

document.querySelectorAll('.elem').forEach(function(elem){
    elem.addEventListener("mousemove", function(dets){
        elem.querySelector('img').style.opacity = 1;});
});