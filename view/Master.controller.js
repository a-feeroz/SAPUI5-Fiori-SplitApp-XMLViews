sap.ui.controller("sap.ui.final.test.finalxml.Master",{
	

	tel : function(value){
		return "Phone : " + value;
	},

	email : function(value){
		return "Email : " + value;
	},
	
	company : function(value){
		return "Company : " + value;
	},
	
	press: function(evt){
		var context = evt.getSource().getBindingContext();
		this.nav.toPage("D1",context);
	},
	
	handleSorterChange: function(evt) {
		
		
		var odescSorter = new sap.ui.model.Sorter("BusinessPartnerID", true); // sort descending
		var oascSorter = new sap.ui.model.Sorter("BusinessPartnerID", false); // sort ascending
		
		var sortselect = this.getView().byId("sortSelect");
		var key = sortselect.getSelectedKey();
		
		var list  = this.getView().byId("list");
		var binding = list.getBinding("items");
		
		if (key == "sasc") {
			//ascending
			
			binding.sort(oascSorter);
		}
		else {
			//descending
			
			binding.sort(odescSorter);
		}
		
	},
	
	handleSearch : function (evt) {
	  this.updateList();
	},
	
	updateList : function () {
		
		var filters = [];
		var oView = this.getView();
		
    var searchString = this.getView().byId("searchField").getValue();
		if (searchString && searchString.length > 0) {
			
				filters = [
                    new sap.ui.model.Filter("Company", sap.ui.model.FilterOperator.Contains, searchString),
        ];
	}
	
	var list = this.getView().byId("list");
	var binding = list.getBinding("items");
		
	binding.filter(filters);
	}
		
		
		
	},
	
	
});


