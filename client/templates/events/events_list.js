var eventsData = [
    {
        title: 'Technology Exhibit',
        host: 'Britone Mwasaru',
        venue: 'Room I & J',
        date: Date("February 4, 2015 12:00:00")
    },
    {
        title: 'STEM confrence',
        host: 'M-Power Ladies',
        venue: 'Swahili Centre',
        date: Date("January 10, 2015 11:13:00")
    }
];

Template.eventsList.helpers({
    events: eventsData
})