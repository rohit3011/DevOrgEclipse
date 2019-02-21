({
    handleClick: function(component, event, helper) {
        var btnClicked = event.getSource();         // the button
        var btnMessage = event.getSource().get("v.label"); // the button's label
        component.set("v.message", event.getSource().get("v.label"));     // update our message
    }
})