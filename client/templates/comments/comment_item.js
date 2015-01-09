Template.registerHelper("dateText", function(timestamp) {
    return new Date(timestamp).toLocaleString('en-GB')
});