//console.log("AQUÍ");
//console.log(Mensajes.find({"message":{$ne:null}}));



Meteor.methods({
    MeteorMethod: function (message){
      console.log("Data in db before UPDATE:");
      console.log(Mensajes.find().fetch());
      console.log();	
      console.log("I'm called from .NET! The message: " + message.hello + ", " + message.data); 
      console.log();	   
      

      var dbmessage = Mensajes.find({}, {limit: 1}).fetch();
      console.log(dbmessage);

      Mensajes.update({}, { hello : message.hello , data : message.data});

      console.log("Data in db after UPDATE:");
      console.log(Mensajes.find({}, {limit: 1}).fetch());
 
      return message.data;
    }
  });