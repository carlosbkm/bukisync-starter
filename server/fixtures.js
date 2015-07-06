var initDatabase = function() {
 
    if (Mensajes.find().count() === 0) {
        
      Mensajes.insert({
        hello: "holita",
        message: "holaza"      
      });
    }
}

initDatabase();
