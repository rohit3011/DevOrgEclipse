@RestResource(urlMapping='/Accounts/*/contacts')
global class AccountManager {
	
	// test variable created from Eclipse 
	public string Accname{get;set;}
	public string AccPhone{get;set;}
	
	@HttpGet
    global static Account getAccount() {
        RestRequest request = RestContext.request;
        // grab the caseId from the end of the URL
        String accId = request.requestURI.substringBetween('Accounts/', '/contacts');
        Account result =  [SELECT Id,Name, (Select Id, name from Contacts) FROM Account WHERE Id = :accId];
        return result;
    }

}