var Request_Obj = new XMLHttpRequest();
var HtmlObj = document.implementation.createHTMLDocument();

Request_Obj.open("GET", "/WebObj/Lenta/Lenta_Obj.html");
Request_Obj.send(null);


Request_Obj.onload = function ()
{    
    HtmlObj.documentElement.innerHTML = Request_Obj.responseText;
    class Lenta extends HTMLElement
    {
        constructor()
        {
            super();
            this.innerHTML = "";
            this.append(HtmlObj.getElementsByTagName("link")[0]);
            if (localStorage.getItem("Base.Post.Create") == "true")
            {

                
                
                this.append(HtmlObj.getElementById("Create_Post"));
                
            }
            
            
        }
        
    }
    customElements.define("new-lenta", Lenta);
}