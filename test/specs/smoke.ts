describe('Website', function(){

    it('should be alive', function(){
        browser.url('/');
        expected($('#undefined-sticky-wrapper > div > div > div.logo-wrapper')).tobeDisplayed() 
    })
})