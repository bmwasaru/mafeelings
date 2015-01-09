Template.registerHelper("prettifyDate", function(timestamp) {
    return new Date(timestamp).toLocaleString('en-GB')
});

Template.feelingItem.helpers({
    commentsCount: function() {
        return Comments.find({feelingId: this._id}).count();
    }
});