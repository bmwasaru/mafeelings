Template.registerHelper("prettifyDate", function(timestamp) {
    return new Date(timestamp).toLocaleString('en-GB')
});