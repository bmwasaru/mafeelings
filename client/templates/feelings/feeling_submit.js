Template.feelingSubmit.events({
    'submit form': function (e) {
        e.preventDefault();

        var feeling = {
            title: $(e.target).find('[name=title]').val(),
            feeling: $(e.target).find('[name=feeling]').val(),
            date: Date.now()
        };

        feeling._id = Feelings.insert(feeling);
        Router.go('feelingPage', feeling);
    }
});