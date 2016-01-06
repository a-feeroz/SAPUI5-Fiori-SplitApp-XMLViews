sap.ui.controller("sap.ui.final.test.finalxml.Detail", {

	businesspartnerdetail : function(value){
		return "ID : " + value;
	},
	
	businesspartnerroletext : function(value){
		return "Role : " + value;
	},
	
	businesspartnerkey : function(value){
		return "Key : " + value;
	},
	
	addressdetails : function(Building,Street,City,PostalCode,AddressTypeCode,CountryText){
		return "\n" + Building+ ", " + Street + ", " + "\n" + "\n" + City + ", " + CountryText + "\n" + "\n" + "PIN : " +PostalCode;
	},
	
	press1: function(oEvent){
			
			var bIndicator = new sap.m.BusyDialog({
	    	 	
		 		
		        text: "Fetching data.." 		
		        	
		 		
		 	});
			
	bIndicator.open();
			
	var x = oEvent.getSource().getText();
	var link = this.getView().byId("ln1");
	var url = "https://sapes1.sapdevcenter.com/sap/opu/odata/IWBEP/GWDEMO/CountryCollection('" + x + "')";
	OData.request({
	      	  
	      	  requestUri: url,
	      	  method: "GET",
	      	  headers: {
	      		         "X-Requested-With": "XMLHttpRequest",
	      		         "DataServiceVersion": "2.0",          
	      		         "X-CSRF-Token":"Fetch"
	      	  }
	    },
	             function (data, response) {
	                var ctext = data.CountryText;
	            	  bIndicator.close();
	            	 	
	            	 	var popover = new sap.m.ResponsivePopover({
	               	     title: "Country Details",
	               	     placement: sap.m.PlacementType.Bottom,
	               	     bounce: true,
	               	     endButton : new sap.m.Button({
	               	    	  text: "close",
	               	    	  press: function(){
	               	    		  popover.close();
	               	    	  }
	               	      }),
	               	      contentWidth: "300px",
	               	      content:[  
	               	              new sap.m.Table({
	           	        	  				  columns: [
	           			            	     	  new sap.m.Column({
	           											        width : "6em",
	           											      }),        
	           					            	                
	           					            	    new sap.m.Column({
	           					            	      width : "6em",
	           					            	    }),
	           			            	      
	           			            	    ],
	           			            	      
	           			            	    items: [
	           			            	    	  
	           					            	    	new sap.m.ColumnListItem({
	           					            	          cells: [
	           					            	              new sap.m.ObjectIdentifier({
	           												                  title: "Country Code",
	           												    	        }),      
	           							            	          new sap.m.Text({
	           							            	    	        text: x,
	           					            	            	}),
	           					            	          ]
	           					            	      }),
	           					            	        
	           					            	      new sap.m.ColumnListItem({
	           					            	        	cells:[
	           					            	        	    new sap.m.ObjectIdentifier({
	           					            	        	    	   title: "Country Name"
	           					            	        	    }),
	           					            	        	   new sap.m.Text({
	           									            	    	  text: ctext,
	           							            	         }),
	           					            	        	]
	           					            	      }),
	           					            	]	
	           	        	  	 })
	               	      ]
	               	    });
	            	 	
	            	 	popover.openBy(link);
	            },
	             
	            function(err){
	            	 alert("Error in fetching data");
	            }
	             
	            
	             
	         );    
		}
	

});
