({
    doInit : function(component, event) {
        var action = component.get("c.findAll");
        action.setCallback(this, function(a) {
            component.set("v.contacts", a.getReturnValue());
        });
        $A.enqueueAction(action);	
    },


SearchKeyChange: function(component, event) {
    var searchKey = event.getParam("searchKey");
    var action = component.get("c.findByName");
    action.setParams({
      "searchKey": searchKey
    });
    action.setCallback(this, function(a) {
        component.set("v.contacts", a.getReturnValue());
    });
    $A.enqueueAction(action);
},


navigateToRecord: function(component, event, helper) {
    
    var navEvent = $A.get("e.force:navigateToSObject");  

    navEvent.setParams({
        "recordId": "0039000001tpCgDAAU",   
        "slideDevName": "detail"
    });

    navEvent.fire(); 
    
}

})