Meteor.publish('feelings', function() {
    return feelings.find();
})