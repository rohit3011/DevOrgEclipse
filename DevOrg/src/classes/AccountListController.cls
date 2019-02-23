public class AccountListController {
    //Create variable in GITHUB
    public static final string test1 = 'first Variable';
    public final string test2;
    
    @AuraEnabled
    public static List < Account > fetchAccts() {
        return [ SELECT Id, Name, Industry, Type FROM Account LIMIT 10 ];
    }
    
}
