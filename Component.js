jQuery.sap.declare("sap.ui.final.test.Component");


sap.ui.core.UIComponent.extend("sap.ui.final.test.Component",{
	
	createContent : function(oController){
		
		var oView = sap.ui.view({
			id: "app",
			type:"JS",
			viewName: "sap.ui.final.test.finalxml.App",
			viewData: {component : this}
		});
		
		var url ="https://sapes1.sapdevcenter.com/sap/opu/odata/IWBEP/GWDEMO/";
		var oModel = new sap.ui.model.odata.ODataModel(url, true);
		
		this.setModel(oModel);
		
		return oView;
	}
	
})
    
