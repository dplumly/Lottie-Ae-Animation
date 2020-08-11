// let animation = bodymovin.loadAnimation({
//     container: document.getElementById('bm'), // Required
//     path: 'js/data.json', // Required
//     renderer: 'svg/canvas/html', // Required
//     loop: true, // Optional
//     autoplay: true, // Optional
//     name: "Move objects", // Name for future reference. Optional.
// })


let animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/data.json'
    // path: 'https://assets4.lottiefiles.com/packages/lf20_4fnpPI.json'
    // path: 'https://lottiefiles.com/share/NDMwF1'
});

// lottie.play();