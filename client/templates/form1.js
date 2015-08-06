/**
 * Created by PhilBeadle on 4/08/15.
 */
if (Meteor.isClient) {
    AutoForm.hooks({
        add: {
            onSuccess: function (doc) {
                Router.go('form2');
            }
        }
    });
}
