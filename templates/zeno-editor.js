/**
 * Created by PhilBeadle on 3/08/15.
 // */
if (Meteor.is_client) {
    Template['zeno-editor'].helpers({
        content: function () {
            return Analyses.find({template: 'content'}, {sort: {order: 1}});
        }
    });
}
