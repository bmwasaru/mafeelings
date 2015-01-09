Template.feelingPage.helpers({
    comments: function() {
        return Comments.find({feelingId: this._id});
    }
});