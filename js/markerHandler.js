AFRAME.registerComponent('marker-handler',{
    init: async function(){
        this.el.eventListener('markerFound', ()=>{
            this.show()
        })
        this.el.eventListener('markerLost', ()=>{
            this.hide()
        })
    },
    show: function(){
        var button = document.getElementById('button-div')
        button.style.display = 'flex'
        console.log(button)
        var order = document.getElementById('order')
        var summary = document.getElementById('summary')
        order.addEventListener('click', ()=>{
            swal({
                title: 'Order now!',
                icon: 'success'
            })
        })
        summary.addEventListener('click', ()=>{
            swal({
                title: 'Read the entire info',
                icon: 'success'
            })
        })
    },
    hide: function(){
        var button = document.getElementById('button-div')
        button.style.display = null
    }
})