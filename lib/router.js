Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {return Meteor.subscribe('feelings'); }
});

Router.route('/', {name: 'feelingsList'});
Router.route('/feelings/:_id', {
    name: 'feelingPage',
    data: function() {return Feelings.findOne(this.params._id);}
});
Router.onBeforeAction('dataNotFound', {only: 'feelingPage'});