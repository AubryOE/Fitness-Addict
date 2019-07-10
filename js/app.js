// fetch("./header.html")
//   .then(response => {
//     return response.text()
//   })
//   .then(data => {
//     document.querySelector(".header").innerHTML = data;
//   });

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