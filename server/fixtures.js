now = new Date().getTime();

if (Feelings.find().count() == 0) {

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

if (Comments.find() == 0) {
    var feelingsId = Feelings.insert({
        title: 'Comments are here',
        feeling: "Finally, the commenting feature is here. We can now express our feelings toward another's feelins",
        date: now
    });

    Comments.insert({
        feelingId: feelingsId,
        submitted: now,
        body: 'Awesome. That make this the first ever comment'
    });
}