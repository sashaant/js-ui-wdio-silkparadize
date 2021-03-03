describe('Website', () => {
    
    it('should open example test site', () => {
        browser.url('https://devexpress.github.io/testcafe/example/');
        browser.pause(2000)

        expect ($('h1')).toBeDisplayed()
    })


    it('Your name ', () => {

        const input = $('#developer-name')
        input.setValue('test123')

        expect(input).toBeDisplayed();

    })
    it('What is your primary Operating System', () => {

        //const column_2 = $('#main-form > div > div.row > div.column.col-2 ')

        const MacOS = $('#macos') //*[@id="macos"]
        MacOS.click()
        browser.pause(2000)


        //expect().toBeDisplayed();
    })

    it('I have tried TestCafe checkbox', () => {
         const testCafe = $('#tried-test-cafe')
         testCafe.click()
         browser.pause(2000)
    })
})
