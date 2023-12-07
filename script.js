// gsap.to('.box1',{
//   x:1000,
//   duration:2,
//   delay:1,
//   scale:0.5,
//   rotate:360
// })

// gsap.from('.box2',{
//   x:1000,
//   duration:2,
//   delay:1,
//   scale:0.5,
//   rotate:360
// })


var tl=gsap.timeline();

tl.to('.box1',{
  x:1000,
     duration:2,
     delay:1,
     backgroundColor:'cyan',
     scale:0.5,
     borderRadius:50,
     rotate:360
})
tl.to('.box2',{
  x:1000,
     duration:2,
     scale:0.5,
     backgroundColor:'magenta',
     borderRadius:50,
     rotate:360
})

tl.to('.box3',{
  x:1000,
     duration:2,
     borderRadius:50,
     backgroundColor:'brown',
     scale:0.5,
     rotate:360
})