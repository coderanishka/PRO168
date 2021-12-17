AFRAME.registerComponent("buttons", {
    init:function(){
        var b1 = document.createElement('button')
        var b2 = document.createElement('button')
        b1.setAttribute('id', 'order')
        b1.setAttribute('class', 'btn btn-warning')
        b1.innerHTML = "Order Now";
        b2.setAttribute('id', 'summary')
        b2.setAttribute('class', 'btn btn-warning')
        b2.innerHTML = "Order Summary";
        var buttons = document.getElementById('button-div')
        buttons.appendChild(b1)
        buttons.appendChild(b2)
    },
})