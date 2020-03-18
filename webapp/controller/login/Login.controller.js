sap.ui.define([
    "demo/three/controller/BaseController",
    "sap/ui/model/odata/v2/ODataModel"

 ], function (BaseController,ODataModel) {
    "use strict";
 
    return BaseController.extend("demo.three.controller.login.Login", {
         onInit:function(){
            // var oModel = new ODataModel("http://localhost:8081/services.odata.org/Northwind/Northwind.svc/");
            // console.log('omodel', oModel)
            
            this.oNorthWindModel = this.getOwnerComponent().getModel("northWind");
            console.log('model is',this.oNorthWindModel);
            let oView = this.getView().setModel(this.oNorthWindModel);
         }
    });
 
 });