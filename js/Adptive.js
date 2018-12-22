






document.addEventListener("DOMContentLoaded", function() {
    
    Obj_Lenta = document.getElementsByTagName("new-lenta")[0];
    Obj_Lenta.style.width = document.documentElement.clientWidth - 670 + "px";
    Obj_Lenta.style.height = document.documentElement.clientHeight - 100 + "px";

});

window.addEventListener("resize", function() {
    Obj_Lenta.style.width = document.documentElement.clientWidth - 700 + "px";
    Obj_Lenta.style.height = document.documentElement.clientHeight - 100 + "px";
});

var Obj_Lenta;

