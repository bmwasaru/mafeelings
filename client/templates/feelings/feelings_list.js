Template.feelingsList.helpers({
    feelings: function() {
        return Feelings.find({}, {sort: {date: -1}});
    }
});