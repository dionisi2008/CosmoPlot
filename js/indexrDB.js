
    indexedDB.deleteDatabase("CosmoPlotBase");

    var Base = indexedDB.open("CosmoPlotBase", 1);
    
    Base.onupgradeneeded = function()
    {
        var ss = Base.result.createObjectStore("test");
        Base.result
    }


