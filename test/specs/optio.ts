describe('Website', () => {
    
    it('should open optio login page', () => {
        browser.url('https://optio.optioincentives.no');
        //expect($('#logo')).toBeDisplayed();
        browser.pause(10000);
    });
})