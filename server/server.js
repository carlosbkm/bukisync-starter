console.log("AQUÍ");
console.log(Mensajes.find({"message":{$ne:null}}));



Meteor.methods({
    MeteorMethod: function (message){
      console.log("I'm called from .NET! The message: " + message.hello);    
      console.log("I'm called from .NET! The message: " + message.data);
      return message.data;
    }
  });