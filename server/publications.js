Meteor.publish('feelings', function() {
    return Feelings.find();
});

Meteor.publish('comments', function() {
    return Comments.find();
});