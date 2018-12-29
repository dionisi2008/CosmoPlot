var Base = indexedDB.open("CosmoPlotBase");
 
            Base.onsuccess = function ()
            {
                var CreatePost = Base.result.transaction("Profile", "readonly").objectStore("Profile").get("CreatePost");
                CreatePost.onsuccess = function ()
                {
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
                                
                                

                                if (CreatePost.result == "True")
                                {                        
                                    this.append(HtmlObj.getElementById("Create_Post"));
                                }
                                
                        }
                        
                    }
                    customElements.define("new-lenta", Lenta);





                   
                                                  
                }
            }
        }