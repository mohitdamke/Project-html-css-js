 var colors = [
    "#FF0000","#FF4000","#FF8000","#FFBF00","#FFFF00","#BFFF00","#40FF00","#00FF00","#00FF4","#00FF80","#00FFBF","#00FFFF","#00BFFF","#0080FF","#0040FF","#0000FF","#4000FF","#8000FF","#BF00FF","#FF00FF","#FF00BF","#FF0080","#FF0040"
 ]

var i = 0
document.querySelector('button').addEventListener('click',function(){
   i = i < colors.length ? ++i : 0
   document.querySelector('body').style.background = colors[i]
})