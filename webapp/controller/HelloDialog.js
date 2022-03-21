sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function (ManagedObject, Fragment) {
    "use strict"

    return ManagedObject.extend("sap.ui.walkthrough.controller.HelloDialog",{
        
        constructor : function (oView) {
            this._oView = oView
        },

        exit : function () {
            delete this._oView;
        },

        open : function () {
            var oView = this._oView;

            // create the dialog lazily
            if (!oView.byId("helloDialog")) {
                var oFragmentController = {
                    onCloseDialog: function () {
                        oView.byId("helloDialog").close();
                    }
                }
            };
            // load async XML fragment 
            Fragment.load({
                id: oView.getId(),
                name: "sap.ui.demo.walkthrough.view.HelloDialog",
            })
        }
    })
})