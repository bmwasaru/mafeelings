Template.commentSubmit.events({
    'submit form': function (e, template) {
        e.preventDefault();

        var now = new Date().getTime();

        var comment = {
            body: $(e.target).find('[name=body]').val(),
            feelingId: template.data._id,
            submitted: now
        };

        comment._id = Comments.insert(comment);
        Router.go('feelingPage', template.data._id);
    }
});

