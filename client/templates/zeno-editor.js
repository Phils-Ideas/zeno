/**
 * Created by PhilBeadle on 3/08/15.
 // */
//if (Meteor.is_client) {
//    Template.zenoEditor.helpers({
//        analysis: function () {
//            console.log(Analyses.findOne('wXGX2x29faqifcQfM'));
//            return Analyses.findOne('wXGX2x29faqifcQfM');
//        }
//    });
//}
var id;


Template.docList.helpers({
    documents: Documents.find()
});


Template.docList.events = {
    "click button": function () {
        return Documents.insert({
            title: "untitled"
        }, function (err, id) {
            if (!id) {
                return;
            }
            return Session.set("document", id);
        });
    }
};

Template.docItem.helpers({
    current: Session.equals("document", id)
});


Template.docItem.events = {
    "click a": function (e) {
        e.preventDefault();
        Session.set("document", this._id);
    }
};

Template.docTitle.helpers
({
    title: function () {
        var ref;
        return (ref = Documents.findOne(this + "")) != null ? ref.title : void 0;
    },
    editorType: function (type) {
        return Session.equals("editorType", type);
    }
});

Template.zenoEditor.helpers
({
    docid: function () {
        return Session.get("document");
    },
    document: function () {
        return ace.edit("editor").getValue();
    }
});
