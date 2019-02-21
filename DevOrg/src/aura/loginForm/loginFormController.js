({	
    doInit: function(component, event, helper) {
		var toggleText = component.find("userView");
		$A.util.addClass(toggleText,'toggle');		
	},
    
    handleLogin: function (component, event, helpler) {
        var username = component.find("username").get("v.value");
        console.log("username"+username);
        var password = component.find("password").get("v.value");
        console.log("password"+password);
        
        
        
        
        // calling the action from the apex class
        var action = component.get("c.login");  
        // setting the method param
        action.setParams({username:username, password:password, startUrl:null});
        console.log("action"+action);
		
		action.setCallback(this, function(a){
            // getting the return value which will be null, if success
			/* var rtnValue = a.getReturnValue();
			console.log("rtnValue"+rtnValue);
			
			if (rtnValue !== null) {
                alert('Incorrect Username or Password');
            }
            else{
                alert('Login successful');
            } */
            
            var state = a.getState();
            console.log("state': " + state);
            
            // if we get the success then call the event to call another component
                if(state == "SUCCESS"){                
                    var result = a.getReturnValue();
                    
                    if(result.isSuccess){
                        alert(result.successMsg); 
                        var toggleText = component.find("loginView");
                        var toggleText1 = component.find("userView");
                        
                        var evt = $A.get("event.c:setStartURL");
                        console.log("evt': " + evt);
                        evt.setParams({ "sUser": username, "loginScreenId": toggleText, "userScreenId": toggleText1});
                        console.log("evt': " + evt);
                        evt.fire();
                        console.log("evt': " + evt);
                        /*following steps has been moved to the child component controller, values has been passed via event parameters
                        added to hide the login screen */
                        /*	var toggleText = component.find("loginView");
							$A.util.addClass(toggleText,'toggle');
							var toggleText = component.find("userView");
							$A.util.removeClass(toggleText,'toggle');	*/
                    }
                    else{
                        alert(result.errorMsg); 
                    }    
            } 
            else if(state == "ERROR"){
                alert('Error in calling server side action');
            }
            
        });
        $A.enqueueAction(action);
    }
})