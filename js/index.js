// let animation = bodymovin.loadAnimation({
//     container: document.getElementById('bm'), // Required
//     path: 'js/data.json', // Required
//     renderer: 'svg/canvas/html', // Required
//     loop: true, // Optional
//     autoplay: true, // Optional
//     name: "Move objects", // Name for future reference. Optional.
// })


let animation = lottie.loadAnimation({
    container: document.getElementById('lottie'), // Required
    renderer: 'svg',
    loop: true,
    autoplay: true,
    // path: 'js/data.json' // the path to the animation json
    path: 'https://assets4.lottiefiles.com/packages/lf20_4fnpPI.json'
});

lottie.play();