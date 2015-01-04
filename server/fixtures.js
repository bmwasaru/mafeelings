if (Feelings.find().count() == 0) {

    now = new Date().getTime();

    Feelings.insert({
        title: 'heartbreak',
        feeling: 'She left after 3 weeks',
        date: now
    });

    Feelings.insert({
        title: 'uninspired',
        feeling: "Feeling like I don't want to do anything",
        date: new Date(now - 7*3600*1000)
    });
}