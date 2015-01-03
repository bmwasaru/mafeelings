if (feelings.find().count() == 0) {

    feelings.insert({
        title: 'heartbreak',
        feeling: 'She left after 3 weeks',
        date: Date.now()
    });

    feelings.insert({
        title: 'uninspired',
        feeling: "Feeling like I don't want to do anything",
        date: Date.now()
    });
}