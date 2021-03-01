describe('Website', () => {
    
    it('should open silkparadize main page', () => {
        browser.url('https://silkparadize.com.ua');
        //expect($('#logo')).toBeDisplayed();
        browser.pause(5000);
    })
})