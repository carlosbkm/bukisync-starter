Meteor.publish('msj', function() {
  return Mensajes.find({"message":{$ne:null}});
});