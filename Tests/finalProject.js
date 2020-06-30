var Final = {}
var asset = require('../codeAbstact/finalProjectArray')
module.exports = {
    beforeEach: browser => {
        Final = browser.page.finalProjectPageObjects()
        Final
            .navigate()
    },
    "Part Links": browser=>{
        Final
        .click('@systemBuilder')
        .click('@cpuPicker')
        .setValue('@partSearcher', asset.searchcpu)
        .pause(3000)
        .click('@ryzen53600xcpu')
        .click('@addToListButton')
        .pause(2000)
        .click('@ryzen53600xcpuVerify')
        .click('@Amazon')
        .click('@BestBuy')
        .click('@NewEgg')
        .api.windowHandles(function(results) {
            Final
                .switchWindow(results.value[3])
                .verify.urlContains('https://www.amazon.com')
                .switchWindow(results.value[2])
                .verify.urlContains('https://www.bestbuy.com')
                .switchWindow(results.value[1])
                .verify.urlContains('https://www.newegg.com')
        })
    },
    "Check searches": browser=>{
        Final
            .AlohaBeaches(asset)
            .Uri(asset)
            .Behringer(asset)
    },
}