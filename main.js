anime({
//   css selector
  targets: '#tunnel circle',
//   here we scale it up by 20%
  scale: 1.1,
  duration: 250,
//   this alternates so it returns to begin from the end
  direction:'alternate',
  loop:true,
//   easings allow us to add more character to our animations
  easing: 'easeInOutSine', 
//   we can apply a delay as a function. It loops through every item. 
    delay: (el, index) => index * 50,
//   modern javascript! woo!
})


// here we set up the conveyor effect. we only want to move it left by half of its width. we remove the easing effect to keep it consistently smooth.
anime({
  targets: '.conveyor',
  translateX: '-50%',
  duration: 1500,
  loop: true,
  easing: 'linear'
})


// set up variables for our path
const zigZagPath = document.querySelector('#zigzag path')
// get the length of the path
const zigZagOffset = anime.setDashoffset(zigZagPath)
// set the length of the path
zigZagPath.setAttribute('stroke-dashoffset', zigZagOffset)
anime({
  targets: zigZagPath,
  // animate from the full length to 0
  strokeDashoffset: [zigZagOffset, 0],
  duration: 3000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

// set up variables for our path
const wave = document.querySelector('#wave path')
const waveOffset = anime.setDashoffset(wave)
wave.setAttribute('stroke-dashoffset', waveOffset)
anime({
  targets: wave,
  strokeDashoffset: [waveOffset, 0],
  duration: 2000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})



const duplicateHTML = (element, quantity) => {
  
// we want to duplicate our crosses content 10 times
const crossesContent = element.innerHTML
// we join it so the items are one piece of text without commas
const crosses = new Array(quantity).fill(crossesContent).join('')
element.innerHTML = crosses
}

const crosses = document.querySelector('#crosses')
// duplicated the content 10 times using the new fancy function!
duplicateHTML(crosses, 10)

anime({
  targets: '#crosses path',
  rotate: '1turn',
  delay: (el, i) => i * 100,
  duration: 1200,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

duplicateHTML(document.querySelector('#dots'), 40)
const dots = document.querySelectorAll('#dots .dot')

dots.forEach(dot => {
  anime({
    targets: dot,
    rotate: (el, i) => anime.random(90, 360),
    duration: (el, i) => anime.random(250, 750),
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate',
    autoplay: true
  });
});

duplicateHTML(document.querySelector('#circles'), 20)


anime({
  targets: '#circles .dot',
  scale: [0, 1.2],
  delay: (el, i) => i * 100,
  duration: 250,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

anime({
  targets: '#flashes .flash',
  // we put the colors into an array and grab each one by its index
  backgroundColor: (el, i) => ['#fff636', '#cb89fc', '#fc3035', '#77ebfd'][i],
  // apply a random delay to each one
  delay: (el, i) => anime.random(50, 100),
  duration: 500,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})



anime({
  targets: '#squares rect',
  // we need to force the translate position to center the squares
  translateX: ['-50%', '-50%'],
  // we’re not actually animating them, it’s a bit of a hack
  translateY: ['-50%', '-50%'],
  // animate rotation from 45 to 0 to -45
  rotate: [45, 0, -45],
  // delay each one incrementally by 100ms
  delay: (el, i) => 100 * i,
  duration: (el, i) => 750,
  loop: true,
  easing: 'easeInOutSine',
  direction: 'alternate'
})











