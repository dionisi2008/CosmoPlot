var Transiction;
var db = IDBDatabase;
var ProfileStore;
var SysPosts;
window.addEventListener("DOMContentLoaded", function () //Load Kernel Site
{
    var BaseRequs = indexedDB.open("CosmoPlotBase");
    BaseRequs.onsuccess = function ()
    {
        var db = BaseRequs.result;
        Transiction = db.transaction(["Profile", "Posts", "HashSubBase"], "readwrite");
        var ReuqstCreatePostState = Transiction.objectStore("Profile").get("CreatePost");
        ReuqstCreatePostState.onsuccess = function ()
        {
            SysPosts = new PostsClass(Transiction.objectStore("Posts"), ReuqstCreatePostState.result); 
        }    
                
    }

    
});


class PostsClass
{
    BaseStore = IDBObjectStore;
    

    constructor(ObjectStore = new IDBObjectStore(), StateCreatePost)
    {
        var HtmlObj = document.implementation.createHTMLDocument();
        this.BaseStore = ObjectStore;
        var LoadWebCompanent = new XMLHttpRequest();
        LoadWebCompanent.open("GET", "/WebObj/Lenta/Lenta_Obj.html");
        LoadWebCompanent.send(null);
        LoadWebCompanent.onload = function ()
        {            
            HtmlObj.documentElement.innerHTML = LoadWebCompanent.responseText;
            class Lenta extends HTMLElement
                {
                    constructor()
                    {
                        super();
                        console.log("Warring! " + getComputedStyle(this).width);
                        var ThisObj = this;
                        window.onresize = function ()
                        {
                            console.log("Warring! " + getComputedStyle(ThisObj).width);
                        }
                        this.innerHTML = "";
                        this.append(HtmlObj.getElementsByTagName("link")[0]);
                        if (StateCreatePost == "True")
                        {
                            HtmlObj.getElementById("Button_Create_Post").addEventListener("click", function () 
                            {
                                var NewPost = new Post(document.getElementById("Theme_Text").value, document.getElementById("All_Text").value, document.getElementById("Img_Url").value);
                                var BaseRequstPost = indexedDB.open("CosmoPlotBase");
                                BaseRequstPost.onsuccess = function ()
                                {
                                    var TransictionPost = BaseRequstPost.result.transaction(["Posts"], "readwrite");
                                    var RequstPost = TransictionPost.objectStore("Posts").add(NewPost, new Date);
                                    RequstPost.onsuccess = function ()
                                    {
                                        console.log("Commlite!");
                                    }
                                }                                
                            });
                            this.append(HtmlObj.getElementById("Create_Post"));
                        }
                    }                    
                }
                customElements.define("new-lenta", Lenta);
        }
       
    }
}

class Post
    {
        constructor(Getzagalovok, GetAllText, GetUrlImage)
        {
           this.zagalovok = Getzagalovok;
           this.AllText = GetAllText;
           this.UrlImage = GetUrlImage;
        }
    }
