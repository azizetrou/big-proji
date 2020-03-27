var url = location.pathname;
var index = url.lastIndexOf("/") + 1;
var fileName = url.substring(index);


   class container{
      constructor(){
       var container = document.getElementById("form-container");
       var table = document.getElementById("table");
       var nav = document.getElementById("nav");
       var heading = document.getElementById("h1");
       var btn = document.getElementById("btn-group");


       if (screen.width<430) {
          container.style.width = screen.width +"px";
         nav.style.width = screen.width + "px";
         nav.style.margin = "auto";
         heading.style.fontSize = "10px";
         container.style.width = 400 + "px";
         container.style.overflow = "hidden";
         table.style.width = screen.width - 200 + "px";
         table.style.fontSize = "4px";
         btn.style.display = "block";
         btn.style.position = "relative";
         btn.style.left = 0 ;  
      } 
      else if (screen.width<660) {
         nav.style.width = screen.width - 100 + "px";
         nav.style.margin = "auto";
         heading.style.fontSize = "10px";
         container.style.width = screen.width - 10 + "px";
         container.style.overflow = "hidden";
         table.style.width = screen.width - 65 + "px";
         table.style.fontSize = "6px";
         btn.style.display = "block";
       } 
       else if (screen.width<820) {
         nav.style.width = screen.width - 100 + "px";
         nav.style.margin = "auto";
         heading.style.fontSize = "11px";
         container.style.width = screen.width - 10 + "px";
         container.style.overflow = "hidden";
         table.style.width = screen.width - 65 + "px";
         table.style.fontSize = "7px";
         btn.style.display = "block";
       } 
       else if (screen.width<920) {
         nav.style.width = screen.width - 100 + "px";
         nav.style.margin = "auto";
         heading.style.fontSize = "11px";
         container.style.width = screen.width - 10 + "px";
         container.style.overflow = "hidden";
         table.style.width = screen.width - 65 + "px";
         table.style.fontSize = "8px";
         btn.style.display = "block";
       } 
       else if (screen.width<1080) {
         nav.style.width = screen.width - 100 + "px";
         heading.style.fontSize = "14px";
         container.style.width = screen.width - 160 + "px";
         container.style.overflow = "hidden";
         table.style.width = screen.width - 150 + "px";
         table.style.fontSize = "8px";
         btn.style.display = "block";
      } 
      else if (screen.width<1450) {
         nav.style.width = screen.width - 100 + "px";
         heading.style.fontSize = "14px";
         container.style.width = 1200 + "px";
         container.style.overflow = "hidden";
         table.style.width = screen.width - 160 + "px";
         table.style.fontSize = "14px";
      } 
      else if (screen.width<1650) {
         nav.style.width = screen.width + "px";
         href.style.color = "red";
         heading.style.fontSize = "11px";
         container.style.width = 1400 + "px";
         container.style.overflow = "hidden";
         table.style.width = screen.width - 250 + "px";
         table.style.fontSize = "16px";
      } 
      else if (screen.width<2830) {
         nav.style.width = screen.width - 200 + "px";
         heading.style.fontSize = "15";
         container.style.width = 1800 + "px";
         table.style.width = screen.width  - 190 + "px";
         table.style.fontSize = "20px";
      } 
      else if (screen.width<3020) {
         nav.style.width = screen.width - 300 + "px";
         container.style.width = screen.width - 560 + "px";
         table.style.width = screen.width  - 200 + "px";
         table.style.fontSize = "24px";
      }}
      
   } 

onload = new container();
