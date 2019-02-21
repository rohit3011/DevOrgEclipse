({
    locationChange : function(component, event, helper) {
        var token = event.getParam("token");
        if (typeof token != "undefined" && token.indexOf('contact/') === 0) {
            var contactId = token.substr(token.indexOf('/') + 1);
            var action = component.get("c.findById");
            action.setParams({
              "contactId": contactId
            });
            action.setCallback(this, function(a) {
                
                //component.set("v.contact", a.getReturnValue());
                var navEvt = $A.get("e.force:navigateToSObject");
                navEvt.setParams({
            	"recordId": "0039000001tpCgDAAU",
                    "slideDevName": "detail"
            });
                navEvt.fire();
            });
            $A.enqueueAction(action);
        }
    }
})