({
    createExpense: function(component, expense) {
        
        var theExpenses = component.get("v.newExpense");
 		console.log("Expenses in Helper': " + JSON.stringify(theExpenses));
        var action = component.get("c.createExpense");
        action.setParams({
            theExpenses : theExpenses
        });
        action.setCallback(this,function(a){
            //get the response state
            var state = a.getState();
            
            if(state == "SUCCESS"){
                //Reset Form
                var navEvt = $A.get("e.force:navigateToSObject");
                console.log("navEvt': " + navEvt);
                navEvt.setParams({
					"recordId": "a099000002QqWvPAAV",
                    "slideDevName": "detail"
                   //"url": 'https://www.google.com'
                });
                console.log("navEvt1': " + navEvt);
                navEvt.fire();
              //  var theExpenseRec = {'sobjectType': 'Expense__c', 'Name': '', 'Amount__c': 0, 'Client__c': '', 'Date__c': '', 'Reimbursed__c': false };
               // component.set("v.newExpense",theExpenseRec);
               // alert('Record is Created Successfully');
                

            } 
            else if(state == "ERROR"){
                alert('Error in calling server side action');
            }
        });
        
        $A.enqueueAction(action);
        
        
    }
})