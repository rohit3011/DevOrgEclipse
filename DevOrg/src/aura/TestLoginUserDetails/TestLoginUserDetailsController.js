({	
    populatedetail: function(component, event, helper) {
        // getting the value which is set when the event is called and passed the value in the 
        // js contoller of the TestLoginForm component
        var selected = event.getParam("sUser");
        // getting the div id of the parent component login screen through the attribute via Event
        var toggleText = event.getParam("loginScreenId");
        // getting the div id of the parent component user screen through the attribute via Event
        var toggleText1 = event.getParam("userScreenId");
        
        console.log("selected"+selected); // will get username like rohit.sharma@proquest.com
        // calling the action from apex class
        var action = component.get("c.userRec");
        console.log("action"+action);
        action.setParams({"username": selected});
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            
            console.log("state in comp2"+state);
            if (state === "SUCCESS") {
                // if we do this step in parent component controller then the user screen appers first
                // and after that the value of the user gets set.
                // hide the user screen
                $A.util.addClass(toggleText,'toggle');
                // show the user screen
                $A.util.removeClass(toggleText1,'toggle');
                
                // getting the user object returned from the apex class
                var userRec = response.getReturnValue();
                console.log("userRec"+userRec);
                component.set("v.userDetail",userRec);
            }
        });
        $A.enqueueAction(action);
       // component.set("v.userDetail",selected);
       // console.log("user"+selected);
	}
})