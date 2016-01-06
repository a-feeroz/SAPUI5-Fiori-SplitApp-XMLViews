sap.ui.controller("sap.ui.final.test.finalxml.App", {

	toPage: function(pageId,context){
		var cv = this.getView().app;
		cv.toDetail("D1");
		var page = cv.getPage("D1");
		page.setBindingContext(context);
	}

});
