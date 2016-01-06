sap.ui.jsview("sap.ui.final.test.finalxml.App", {


	getControllerName : function() {
		return "sap.ui.final.test.finalxml.App";
	},

	createContent : function(oController) {
		
		this.setDisplayBlock(true);
 		this.app = new sap.m.SplitApp();
 		
 		var master = sap.ui.xmlview("M1","sap.ui.final.test.finalxml.Master");
 		master.getController().nav = this.getController();
 		
 		this.app.addMasterPage(master);
 		this.app.setInitialMaster("M1");
 		
 		var detail = sap.ui.xmlview("D1","sap.ui.final.test.finalxml.Detail");
 		detail.getController().nav = this.getController();
 		
 		var detail2 = sap.ui.xmlview("D2","sap.ui.final.test.finalxml.Detail2");
 		detail2.getController().nav = this.getController();
 		
 		this.app.addDetailPage(detail).addDetailPage(detail2);
 		this.app.setInitialDetail("D2");
 		
 		return this.app;
	}

});
