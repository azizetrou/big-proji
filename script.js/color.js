var url = location.pathname;
var index = url.lastIndexOf("/") + 1;
var fileName = url.substring(index);

//code condition i.php
if (fileName == "index.php") {

   class color{

      constructor() {
         this.color1 = document.getElementById("color1");
         this.color1.addEventListener("click", () => {
           this.select_color("color1");
           this.container = document.getElementById("form-container").style.background = "#f8f9fa";
           this.container = document.getElementById("thead").style.color = "rgb(216, 23, 23)";
           this.container = document.getElementById("tbody").style.color = "rgb(216, 23, 23)";
           this.heading = document.getElementById("h1").style.color = "rgb(216, 23, 23)";
         });
          this.color2 = document.getElementById("color2");
          this.color2.addEventListener("click", () => {
          this.select_color("color2");
          this.container = document.getElementById("form-container").style.background = "#5290d2";
          this.container = document.getElementById("thead").style.color = "rgb(216, 23, 23)";
          this.container = document.getElementById("tbody").style.color = "rgb(216, 23, 23)";
          this.heading = document.getElementById("h1").style.color = "rgb(216, 23, 23)";
         });
          this.color3 = document.getElementById("color3");
          this.color3.addEventListener("click", () => {
          this.select_color("color3");
          this.container = document.getElementById("form-container").style.background = "#004085";
          this.container = document.getElementById("thead").style.color = "rgb(216, 23, 23)";
          this.container = document.getElementById("tbody").style.color = "rgb(216, 23, 23)";
          this.heading = document.getElementById("h1").style.color = "rgb(216, 23, 23)";
          });
        }
  
      select_color(color) {
        if (color == "color1") {
           document.body.style.background = "rgb(254, 255, 255)";
        }
        if (color == "color2") {
           document.body.style.background = "#cfd3d6";
        }
        if (color == "color3") {
           document.body.style.background = "#004085";
        }
    }
  } 
  onload = new color();   
 
class container{
   constructor(){
    var container = document.getElementById("form-container");
    var table = document.getElementById("table");
    var nav = document.getElementById("nav");
    var heading = document.getElementById("h1");
    var btn = document.getElementById("btn-group");


    if (screen.width<430) {
      nav.style.width = screen.width - 300 + "px";
      nav.style.margin = "auto";
      heading.style.fontSize = "10px";
      container.style.width = 380 + "px";
      container.style.overflow = "hidden";
      table.style.width = 260 + "px";
      table.style.fontSize = "4px";
      btn.style.display = "block";
      btn.style.position = "relative";
      btn.style.left = 0 ;  
   } 
   else if (screen.width<660) {
      nav.style.width =  500 + "px";
      nav.style.margin = "auto";
      heading.style.fontSize = "8px";
      container.style.width = 550 + "px";
      container.style.overflow = "hidden";
      table.style.width =  365 + "px";
      table.style.fontSize = "6px";
      btn.style.display = "block";
    } 
    else if (screen.width<820) {
      nav.style.width = 600 + "px";
      nav.style.margin = "auto";
      heading.style.fontSize = "9px";
      container.style.width =  600 + "px";
      container.style.overflow = "hidden";
      table.style.width = 465 + "px";
      table.style.fontSize = "7px";
      btn.style.display = "block";
    } 
    else if (screen.width<920) {
      nav.style.width = 750 + "px";
      nav.style.margin = "auto";
      heading.style.fontSize = "11px";
      container.style.width = 800 + "px";
      container.style.overflow = "hidden";
      table.style.width = 465 + "px";
      table.style.fontSize = "8px";
      btn.style.display = "block";
    } 
    else if (screen.width<1080) {
      nav.style.width = screen.width - 400 + "px";
      heading.style.fontSize = "11px";
      container.style.width = 900 + "px";
      container.style.overflow = "hidden";
      table.style.width = 750 + "px";
      table.style.fontSize = "8px";
      btn.style.display = "block";
   } 
   else if (screen.width<1280) {
      nav.style.width = screen.width - 400 + "px";
      heading.style.fontSize = "11px";
      container.style.width = 950 + "px";
      container.style.overflow = "hidden";
      table.style.width = 750 + "px";
      table.style.fontSize = "8px";
      btn.style.display = "block";
   } 
   else if (screen.width<1380) {
      nav.style.width = screen.width - 400 + "px";
      heading.style.fontSize = "11px";
      container.style.width = 970 + "px";
      container.style.overflow = "hidden";
      table.style.width = 850 + "px";
      table.style.fontSize = "8px";
      btn.style.display = "block";
   } 
   else if (screen.width<1450) {
      nav.style.width = screen.width - 400 + "px";
      heading.style.fontSize = "12px";
      container.style.width = 1000 + "px";
      container.style.overflow = "hidden";
      table.style.width = 860 + "px";
      table.style.fontSize = "14px";
   } 
   else if (screen.width<1550) {
      nav.style.width = screen.width - 400 + "px";
      heading.style.fontSize = "12px";
      container.style.width = 1050 + "px";
      container.style.overflow = "hidden";
      table.style.width = 900 + "px";
      table.style.fontSize = "14px";
   } 
   else if (screen.width<1650) {
      nav.style.width = screen.width - 400 + "px";
      heading.style.fontSize = "13px";
      container.style.width = 1300 + "px";
      container.style.overflow = "hidden";
      table.style.width = 950 + "px";
      table.style.fontSize = "16px";
   } 
   else if (screen.width<1850) {
      nav.style.width = screen.width - 400 + "px";
      heading.style.fontSize = "13px";
      container.style.width = 1070 + "px";
      container.style.overflow = "hidden";
      table.style.width = 1050 + "px";
      table.style.fontSize = "16px";
   } 
   else if (screen.width<1950) {
      nav.style.width = screen.width - 400 + "px";
      heading.style.fontSize = "13px";
      container.style.width = 1100 + "px";
      container.style.overflow = "hidden";
      table.style.width = 1150 + "px";
      table.style.fontSize = "16px";
   } 
   else if (screen.width<2830) {
      nav.style.width = screen.width - 1000 + "px";
      container.style.width = 1200 + "px";
      table.style.width = 1200 + "px";
      table.style.fontSize = "20px";
   } 
   else if (screen.width<3020) {
      nav.style.width = screen.width - 300 + "px";
      container.style.width = 2000 + "px";
      table.style.width = 1600 + "px";
      table.style.fontSize = "24px";
   }}
   
} 

onload = new container();
}
 
//code condition medicaments
   

if (fileName == "medicaments.php") {


   class color{

      constructor() {
         this.color1 = document.getElementById("color1");
         this.color1.addEventListener("click", () => {
           this.select_color("color1");
           this.container = document.getElementById("form-container").style.background = "#f8f9fa";
           this.container = document.getElementById("thead").style.color = "rgb(216, 23, 23)";
           this.container = document.getElementById("tbody").style.color = "rgb(216, 23, 23)";
         });
          this.color2 = document.getElementById("color2");
          this.color2.addEventListener("click", () => {
          this.select_color("color2");
          this.container = document.getElementById("form-container").style.background = "#5290d2";
          this.container = document.getElementById("thead").style.color = "rgb(216, 23, 23)";
          this.container = document.getElementById("tbody").style.color = "rgb(216, 23, 23)";
         });
          this.color3 = document.getElementById("color3");
          this.color3.addEventListener("click", () => {
          this.select_color("color3");
          this.container = document.getElementById("form-container").style.background = "#004085";
          this.container = document.getElementById("thead").style.color = "rgb(216, 23, 23)";
          this.container = document.getElementById("tbody").style.color = "rgb(216, 23, 23)";
          });
        }
  
      select_color(color) {
        if (color == "color1") {
           document.body.style.background = "rgb(254, 255, 255)";
        }
        if (color == "color2") {
           document.body.style.background = "#cfd3d6";
        }
        if (color == "color3") {
           document.body.style.background = "#004085";
        }
    }
  } 
  onload = new color();   
 


   class container{
      constructor(){
       var container = document.getElementById("form-container");
       var table = document.getElementById("table");
       var nav = document.getElementById("nav");
       var btn = document.getElementById("btn-group");
   
   
       if (screen.width<430) {
         nav.style.width = screen.width + "px";
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
         container.style.width = screen.width - 10 + "px";
         container.style.overflow = "hidden";
         table.style.width = screen.width - 65 + "px";
         table.style.fontSize = "6px";
         btn.style.display = "block";
       } 
       else if (screen.width<820) {
         nav.style.width = screen.width - 100 + "px";
         container.style.width = screen.width - 10 + "px";
         container.style.overflow = "hidden";
         table.style.width = screen.width - 65 + "px";
         table.style.fontSize = "7px";
         btn.style.display = "block";
       } 
       else if (screen.width<920) {
         nav.style.width = screen.width - 100 + "px";
         container.style.width = screen.width - 10 + "px";
         container.style.overflow = "hidden";
         table.style.width = screen.width - 65 + "px";
         table.style.fontSize = "8px";
         btn.style.display = "block";
       } 
       else if (screen.width<1080) {
         nav.style.width = screen.width - 100 + "px";
         container.style.width = 800 + "px";
         container.style.overflow = "hidden";
         table.style.width = screen.width - 150 + "px";
         table.style.fontSize = "8px";
         btn.style.display = "block";
      } 
      else if (screen.width<1450) {
         nav.style.width = screen.width - 100 + "px";
         container.style.width = 1200 + "px";
         container.style.overflow = "hidden";
         table.style.width = screen.width - 160 + "px";
         table.style.fontSize = "14px";
      } 
      else if (screen.width<1650) {
         nav.style.width = screen.width - 400 + "px";
         container.style.width = 1400 + "px";
         container.style.overflow = "hidden";
         table.style.width = screen.width - 250 + "px";
         table.style.fontSize = "16px";
      } 
      else if (screen.width<1850) {
         nav.style.width = screen.width - 400 + "px";
         container.style.width = 1670 + "px";
         container.style.overflow = "hidden";
         table.style.width = screen.width - 250 + "px";
         table.style.fontSize = "16px";
      } 
      else if (screen.width<1950) {
         nav.style.width = screen.width - 400 + "px";
         container.style.width = 1700 + "px";
         container.style.overflow = "hidden";
         table.style.width = 1650 + "px";
         table.style.fontSize = "16px";
      } 
      else if (screen.width<2830) {
         nav.style.width = screen.width - 400 + "px";
         container.style.width = 1800 + "px";
         table.style.width = screen.width  - 190 + "px";
         table.style.fontSize = "20px";
      } 
      else if (screen.width<3020) {
         nav.style.width = screen.width - 300 + "px";
         container.style.width = screen.width - 560 + "px";
         table.style.width = 1900 + "px";
         table.style.fontSize = "24px";
      }}
      
   } 
   
   onload = new container();
   }
