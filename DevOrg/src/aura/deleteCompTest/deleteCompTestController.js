({executeTest : function (component, event, helper) {
    var navEvt = $A.get("e.force:navigateToSObject");
    navEvt.setParams({
      "recordId": "a099000002QqWvPAAV",
      "slideDevName": "related"
    });
    navEvt.fire();
}
})