// fetch("./header.html")
//   .then(response => {
//     return response.text()
//   })
//   .then(data => {
//     document.querySelector(".header").innerHTML = data;
//   });

// let sampleSub = document.querySelector("span#sampleSub");
// otherSub = sampleSub.textContent.toUpperCase();
// sampleSub.textContent = otherSub;

//Based on Semantic UI Responsiveness Menu by Designosis: https://codepen.io/designosis/pen/LbMgya

$('.ui.sidebar').sidebar({
    context: $('.ui.pushable.segment'),
    transition: 'overlay'
}).sidebar('attach events', '#mobile_item');

$('.ui.vertical.sidebar').sidebar({
    'onHidden': () => {
         $('.pusher').css('overflow', 'initial');
}
}).sidebar()

$('.ui.sticky')
  .sticky({
    context: 'div#orderingInfo.seven.wide.column',
    pushing: true
  })
;