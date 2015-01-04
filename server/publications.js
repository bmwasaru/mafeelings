Meteor.publish('feelings', function() {
    return Feelings.find();
});