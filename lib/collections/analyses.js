/**
 * Created by PhilBeadle on 4/08/15.
 */
Analyses = new Mongo.Collection('Analyses');
Documents = new Meteor.Collection("documents")

Meteor.methods({
    deleteDocument: function (id) {
        Documents.remove(id);
        ShareJS.model.delete(id);
    }
});
