const canvas=document.getElementById("canvas")
const ctx=canvas.getContext("2d")
canvas.height=window.innerHeight
canvas.width=window.innerWidth
let radius=5
let isDrawing=false
ctx.lineWidth=radius*2
const onmousedown=(e)=>{
    isDrawing=true
    onmousemove(e)
}
const onmousemove=(e)=>{
    if(isDrawing)
    {
        ctx.lineTo(e.offsetX,e.offsetY)
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(e.offsetX,e.offsetY,radius,0,Math.PI*2)
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(e.offsetX,e.offsetY)
    }
}
const onmouseup=()=>{
    isDrawing=false
    ctx.beginPath()
}
canvas.addEventListener("mousedown",onmousedown)
canvas.addEventListener("mousemove",onmousemove)
canvas.addEventListener("mouseup",onmouseup)