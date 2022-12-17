document.addEventListener('DOMContentLoaded', function(){
  let tl = new TimelineMax();

  //Primeiro elemento da timeline

  tl.fromTo('.bg-loader', 2,  // target: classe bg-loader; tempo: 2s
  {width: '100%'},  // from, ou seja, vai de 100% até 0%
  {width: '0%',delay: 4.9, ease: Expo.easeInOut}) // o efeito de transição usado


  //Segundo elemento da timeline

  .fromTo('.bg-video', 2,  // target: classe bg-video; tempo: 2s
  {width: '0%', opacity: 0},  // from, ou seja, vai de 0% até 100%
  {width: '100%',opacity: 1, ease: Expo.easeInOut},'-=1') // o efeito de transição usado

  .fromTo('.logo', 0.7,  
  {y: -50, opacity: 0},  
  {y: 0,opacity: 1, ease: Expo.easeInOut},'-=0.5') 

  .fromTo('.nav-list', 0.7,  
  {y: -50, opacity: 0},  
  {y: 0,opacity: 1, ease: Expo.easeInOut},'-=0.5')
   
  .fromTo('.nav-social', 0.7,  
  {y: -50, opacity: 0},  
  {y: 0,opacity: 1, ease: Expo.easeInOut},'-=0.5') 

  .fromTo('.item-1', 0.7,  
  {y: -50, opacity: 0},  
  {y: 0,opacity: 1, ease: Expo.easeInOut},'-=0.5') 

  .fromTo('.item-2', 0.7,  
  {y: -50, opacity: 0},  
  {y: 0,opacity: 1, ease: Expo.easeInOut},'-=0.5') 

  .fromTo('.item-3', 0.7,  
  {y: -50, opacity: 0},  
  {y: 0,opacity: 1, ease: Expo.easeInOut},'-=0.5') 

  .fromTo('.item-4', 0.7,  
  {y: -50, opacity: 0},  
  {y: 0,opacity: 1, ease: Expo.easeInOut},'-=0.5') 

  .fromTo('.item-5', 0.7,  
  {y: -50, opacity: 0},  
  {y: 0,opacity: 1, ease: Expo.easeInOut},'-=0.5') 

})