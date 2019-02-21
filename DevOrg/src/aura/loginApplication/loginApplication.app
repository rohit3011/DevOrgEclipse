<aura:application useAppcache="true" extends="ltng:outAppUnstyled" implements="ltng:allowGuestAccess">
     <ltng:require styles="{!join(',',
                          $Resource.pqbootstrap + '/css/bootstrap.min.css',
                          $Resource.pqbootstrap + '/css/uxframework-blue.css',
                          $Resource.pqbootstrap + '/css/uxf-support-custom.css')}" />
    <ltng:require scripts="{!join(',', 
                           $Resource.pqbootstrap + '/js/jquery-2.2.4.js', 
                           $Resource.pqbootstrap + '/js/bootstrap.min.js')}"/>
    <aura:dependency resource="c:loginForm"/>
    <c:loginForm />
    
  <!--  <div class="bootstrap">
        <c:PQHeader />
        
        <div class="container-fluid">
        	
            <c:testLoginForm />
        </div>
        
        <c:PQFooter />
        
    </div>     -->
    
</aura:application>