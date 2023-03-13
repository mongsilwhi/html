var Links = {
    setColor:function(color){
   var alist = document.querySelectorAll('a');
   var i = 0;
   while(i < alist.length){
     alist[i].style.color = color;
     i = i + 1;
   }
    }
}
var Body = {
  setColor:function (color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
  function 밝기조정(self){
    var target = document.querySelector('body');
  if(self.value === '어둡게'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = '밝게';

    Links.setColor('powderblue');
} else {
  Body.setBackgroundColor('white');
  Body.setColor('black');
  self.value = '어둡게';
  
  Links.setColor('blue');
}
}