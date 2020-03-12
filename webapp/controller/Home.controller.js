sap.ui.define([
    "demo/three/controller/BaseController",
    "sap/ui/model/odata/v2/ODataModel"

 ], function (BaseController,ODataModel) {
    "use strict";
 
    return BaseController.extend("demo.three.controller.Home", {
         onInit:function(){
            // var oModel = new ODataModel("https://services.odata.org/Northwind/Northwind.svc/");
         }
    });
 
 });