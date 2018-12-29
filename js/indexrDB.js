indexedDB.deleteDatabase("CosmoPlotBase");
    window.addEventListener("DOMContentLoaded", function () 
    {
        var ObjStore;
        console.log("Работа Базой данных..")
        
        
        var RequestXML = new XMLHttpRequest();
        RequestXML.open("GET", "HashSumBase.txt");
        RequestXML.send(null);
        var HashSumBase;
    
        RequestXML.onload = function ()
        {
            HashSumBase = RequestXML.responseText.split('\r\n')[0];
            console.log("Актуальная Сумма " + HashSumBase);
    
    
            var request = indexedDB.open("CosmoPlotBase");
            request.onupgradeneeded = function()
            {
                console.log("Создание базы данных");
                var HashObj = request.result.createObjectStore("HashSubBase");
                HashObj.add(HashSumBase, "Hash");
                // - - - - - - 
    
                var ProfileObj = request.result.createObjectStore("Profile");
                ProfileObj.add("True", "CreatePost");
                console.log("База данных успешно создана")
            }
    
            request.onsuccess = function()
            {
              console.log("YES!!!")
            }
    
        
    
    
    
    
      
    }
    });