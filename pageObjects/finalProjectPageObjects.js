var ChungusActivation = {
    AlohaBeaches: function (asset) {
        this
        .pause(3000)
        .click('@logIn')
        .setValue('@username', 'Venovo')
        .setValue('@password', '9487949a')
        .pause(90000)
        .click('@signInButton')
        .verify.containsText('@verifySignIn', 'Hi, Venovo')
        .click('@systemBuilder')
        .click('@cpuPicker')
        .setValue('@partSearcher', asset.searchcpu)
        .pause(3000)
        .click('@ryzen53600xcpu')
        .click('@addToListButton')
        .pause(2000)
        .click('@cpuCoolerPicker')
        .setValue('@partSearcher', asset.searchcpucooler)
        .pause(3000)
        .click('@coolerMasterEVOcpuCooler')
        .click('@addToListButton')
        .pause(2000)
        .click('@motherboardPicker')
        .pause(3000)
        .click('@B450motherboard')
        .click('@addToListButton')
        .pause(2000)
        .click('@memoryPicker')
        .setValue('@partSearcher', asset.searchram)
        .pause(3000)
        .click('@corsairRAM')
        .click('@addToListButton')
        .pause(2000)
        .click('@storage')
        .setValue('@partSearcher', asset.searchstorage)
        .pause(3000)
        .click('@evo860Storage')
        .click('@addToListButton')
        .pause(2000)
        .click('@videoCard')
        .setValue('@partSearcher', asset.searchgpu)
        .pause(3000)
        .click('@EVGAgamingVC')
        .click('@addToListButton')
        .pause(2000)
        .click('@case')
        .setValue('@partSearcher', asset.searchcase)
        .pause(3000)
        .click('@NZXTcase')
        .click('@addToListButton')
        .pause(2000)
        .click('@powerSupply')
        .setValue('@partSearcher', asset.searchpower)
        .pause(3000)
        .click('@CorsairCXM')
        .click('@addToListButton')
        .pause(2000)
        .click('@operatingSystem')
        .setValue('@partSearcher', asset.searchos)
        .click('@OSW10Pro')
        .click('@addToListButton')
        .pause(3000)
        .verify.containsText('@ryzen53600xcpuVerify', asset.cpu)
        .verify.containsText('@coolerMasterEVOcpuCoolerVerify', asset.cpucooler)
        .verify.containsText('@B450motherboardVerify', asset.motherboard)
        .verify.containsText('@corsairRAMVerify', asset.ram)
        .verify.containsText('@evo860StorageVerify', asset.storage)
        .verify.containsText('@EVGAgamingVCVerify', asset.gpu)
        .verify.containsText('@NZXTcaseVerify', asset.case)
        .verify.containsText('@CorsairCXMVerify', asset.power)
        .verify.containsText('@OSW10ProVerify', asset.os)
        .click('@savePartsList')
        .pause(2000)
        .clearValue('@namePartsList')
        .setValue('@namePartsList', 'okPC')
        .click('@saveListButton')
        .verify.containsText('@verifySaved1', 'okPC')
        .click('@editPartsList')
        .click('@startNewList')
        return this
    },
    Uri: function (asset) {
        this
        .pause(3000)
        .click('@cpuPicker')
        .setValue('@partSearcher', asset.searchcpu1)
        .pause(3000)
        .click('@i9cpu')
        .click('@addToListButton')
        .pause(2000)
        .click('@cpuCoolerPicker')
        .setValue('@partSearcher', asset.searchcpucooler1)
        .pause(3000)
        .click('@CorsairCPUcooler')
        .click('@addToListButton')
        .pause(2000)
        .click('@motherboardPicker')
        .setValue('@partSearcher', asset.searchmotherboard1)
        .pause(3000)
        .click('@ASUSmotherboard')
        .click('@addToListButton')
        .pause(2000)
        .click('@memoryPicker')
        .setValue('@partSearcher', asset.searchram1)
        .pause(3000)
        .click('@CorsairVengRAM')
        .click('@quantity')
        .pause(2000)
        .click('@option4')
        .click('@addToListButton')
        .pause(2000)
        .click('@storage')
        .setValue('@partSearcher', asset.searchstorage1)
        .pause(3000)
        .click('@samsung860ProStorage')
        .click('@addToListButton')
        .pause(2000)
        .click('@videoCard')
        .setValue('@partSearcher', asset.searchgpu1)
        .pause(3000)
        .click('@Asus2080VC')
        .click('@quantity')
        .pause(2000)
        .click('@option4')
        .click('@addToListButton')
        .pause(2000)
        .click('@case')
        .setValue('@partSearcher', asset.searchcase1)
        .pause(3000)
        .click('@NZXTcase2')
        .click('@addToListButton')
        .pause(2000)
        .click('@powerSupply')
        .setValue('@partSearcher', asset.searchpower1)
        .pause(3000)
        .click('@Corsairpowersupply')
        .click('@addToListButton')
        .pause(2000)
        .click('@operatingSystem')
        .setValue('@partSearcher', asset.searchos)
        .click('@OSW10Pro')
        .click('@addToListButton')
        .pause(3000)
        .verify.containsText('@i9cpuVerify', asset.cpu1)
        .verify.containsText('@CorsairCPUcoolerVerify', asset.cpucooler1)
        .verify.containsText('@ASUSmotherboardVerify', asset.motherboard1)
        .verify.containsText('@CorsairVengRAMVerify1', asset.ram1)
        .verify.containsText('@CorsairVengRAMVerify2', asset.ram1)
        .verify.containsText('@samsung860ProStorageVerify', asset.storage1)
        .verify.containsText('@Asus2080VCVerify1', asset.gpu1)
        .verify.containsText('@Asus2080VCVerify2', asset.gpu1)
        .verify.containsText('@NZXTcase2Verify', asset.case1)
        .verify.containsText('@CorsairpowersupplyVerify', asset.power1)
        .verify.containsText('@OSW10ProVerify', asset.os1)
        .click('@savePartsList')
        .pause(2000)
        .clearValue('@namePartsList')
        .setValue('@namePartsList', 'OGPC')
        .click('@saveListButton')
        .verify.containsText('@verifySaved2', 'OGPC')
        return this
    },
    Behringer: function (asset) {
        this
        .pause(10000)
        .click('@deleteList')
        .pause(2000)
        .click('@confirmDelete')
        .pause(2000)
        .click('@deleteList')
        .pause(2000)
        .click('@confirmDelete')
        .pause(10000)
        .click('@completedBuilds')
        .pause(2000)
        .setValue('@completedBuildsSearch', 'i9')
        .pause(2000)
        .click('@jstaples')
        .click('@jstaplesParts')
        .click('@jstaplesPartClick')
        .click('@editThisPartsList')
        .click('@operatingSystem')
        .setValue('@partSearcher', asset.searchos)
        .pause(3000)
        .click('@OSW10Pro')
        .click('@addToListButton')
        .verify.containsText('@OSW10ProVerify', asset.editOS)
        return this
    }
}
module.exports = {
    url: 'https://pcpartpicker.com/',
    commands: [ChungusActivation], 
    elements: {
        confirmDelete: 'input[value="Delete Saved Part List"]',
        deleteList: {
            selector: '//a[contains(text(),"Delete")]',
            locateStrategy: 'xpath'
        },
        editPartsList: {
            selector: '//a[contains(text(),"Edit Part List")]',
            locateStrategy: 'xpath'
        },
        verifySaved1: {
            selector: '//a[contains(text(),"okPC")]',
            locateStrategy: 'xpath'
        },
        verifySaved2: {
            selector: '//a[contains(text(),"OGPC")]',
            locateStrategy: 'xpath'
        },
        systemBuilder: {
            selector: '//a[contains(text(),"System Builder")]',
            locateStrategy: 'xpath'
        },
        buildGuides: {
            selector: '//a[contains(text(),"Build Guides")]',
            locateStrategy: 'xpath'
        },
        completedBuilds: {
            selector: '//a[contains(text(),"Completed Builds")]',
            locateStrategy: 'xpath'
        },
        completedBuildsSearch: 'input[id="userbuild_search"]',
        browseProducts: {
            selector: '//a[contains(text(),"Browse Products")]',
            locateStrategy: 'xpath'
        },
        logIn: {
            selector: '//a[contains(text(),"Log In")]',
            locateStrategy: 'xpath'
        },
        username: 'input[id="id_username"]',
        password: 'input[id="id_password"]',
        iAmNotARobot: 'div[class="recaptcha-checkbox-border"]',
        signInButton: 'input[value="Sign In"]',
        verifySignIn: {
            selector: '//a[contains(text(),"Hi, Venovo")]',
            locateStrategy: 'xpath'
        },
        logOut: {
            selector: '//a[contains(text(),"Log Out")]',
            locateStrategy: 'xpath'
        },
        signInErrorMessage: {
            selector: '//p[contains(text(),"Invalid username or")]',
            locateStrategy: 'xpath'
        },
        cpuPicker: {
            selector: '(//a[contains(text(),"CPU")])[3]',
            locateStrategy: 'xpath'
        },
        cpuCoolerPicker: {
            selector: '(//a[contains(text(),"CPU Cooler")])[2]',
            locateStrategy: 'xpath'
        },
        motherboardPicker: {
            selector: '(//a[contains(text(),"Motherboard")])[2]',
            locateStrategy: 'xpath'
        },
        memoryPicker: {
            selector: '(//a[contains(text(),"Memory")])[2]',
            locateStrategy: 'xpath'
        },
        storage: {
            selector: '(//a[contains(text(),"Storage")])[2]',
            locateStrategy: 'xpath'
        },
        videoCard: {
            selector: '(//a[contains(text(),"Video Card")])[2]',
            locateStrategy: 'xpath'
        },
        case: {
            selector: '(//a[contains(text(),"Case")])[3]',
            locateStrategy: 'xpath'
        },
        powerSupply: {
            selector: '(//a[contains(text(),"Power Supply")])[2]',
            locateStrategy: 'xpath'
        },
        operatingSystem: {
            selector: '(//a[contains(text(),"Operating")])[2]',
            locateStrategy: 'xpath'
        },
        partSearcher: 'input[id="part_category_search"]',
        ryzen53600xcpu: {
            selector: '(//p[contains(text(),"AMD Ryzen 5 3600X")])[1]',
            locateStrategy: 'xpath'
        },
        ryzen53600xcpuVerify: {
            selector: '//a[contains(text(),"AMD Ryzen 5 3600X 3.8 GHz 6-Core Processor")]',
            locateStrategy: 'xpath'
        },
        addToListButton: {
            selector: '(//a[contains(text(),"Add")])[1]',
            locateStrategy: 'xpath'
        },
        coolerMasterEVOcpuCooler: {
            selector: '//p[contains(text(),"Cooler Master Hyper 212 EVO")]',
            locateStrategy: 'xpath'
        },
        coolerMasterEVOcpuCoolerVerify: {
            selector: '//a[contains(text(),"Cooler Master Hyper 212 EVO 82.9 CFM Sleeve Bearing CPU Cooler")]',
            locateStrategy: 'xpath'
        },
        B450motherboard: {
            selector: '//p[contains(text(),"MSI B450 TOMAHAWK MAX")]',
            locateStrategy: 'xpath'
        },
        B450motherboardVerify: {
            selector: '//a[contains(text(),"MSI B450 TOMAHAWK MAX ATX AM4 Motherboard")]',
            locateStrategy: 'xpath'
        },
        corsairRAM: {
            selector: '(//p[contains(text(),"Corsair Vengeance RGB Pro 16 GB")])[3]',
            locateStrategy: 'xpath'
        },
        corsairRAMVerify: {
            selector: '//a[contains(text(),"Corsair Vengeance RGB Pro 16 GB (2 x 8 GB) DDR4-3000 CL16 Memory")]',
            locateStrategy: 'xpath'
        },
        evo860Storage: {
            selector: '(//p[contains(text(),"Samsung 860 Evo")])[1]',
            locateStrategy: 'xpath'
        },
        evo860StorageVerify: {
            selector: '//a[contains(text(),"Samsung 860 Evo 1 TB 2.5")]',
            locateStrategy: 'xpath'
        },
        EVGAgamingVC: {
            selector: '(//p[contains(text(),"EVGA SC GAMING")])[2]',
            locateStrategy: 'xpath'
        },
        EVGAgamingVCVerify: {
            selector: '//a[contains(text(),"EVGA GeForce GTX 1060 6GB 6 GB SC GAMING Video Card")]',
            locateStrategy: 'xpath'
        },
        NZXTcase: {
            selector: '(//p[contains(text(),"NZXT H510")])[1]',
            locateStrategy: 'xpath'
        },
        NZXTcaseVerify: {
            selector: '//a[contains(text(),"NZXT H510 ATX Mid Tower Case")]',
            locateStrategy: 'xpath'
        },
        CorsairCXM: {
            selector: '(//p[contains(text(),"Corsair CXM")])[1]',
            locateStrategy: 'xpath'
        },
        CorsairCXMVerify: {
            selector: '//a[contains(text(),"Corsair CXM 650 W 80+ Bronze Certified Semi-modular ATX Power Supply")]',
            locateStrategy: 'xpath'
        },
        OSW10Pro: {
            selector: '(//p[contains(text(),"Microsoft Windows 10 Pro (64-bit)")])[1]',
            locateStrategy: 'xpath'
        },
        OSW10ProVerify: {
            selector: '//a[contains(text(),"Microsoft Windows 10 Pro OEM 64-bit")]',
            locateStrategy: 'xpath'
        },
        savePartsList: 'a[class="actionBox__options--save"]',
        namePartsList: 'input[id="partlist_save_new_text"]',
        saveListButton: 'input[value="Save"]',
        deleteListButton: {
            selector: '//a[contains(text(),"Delete")]',
            locateStrategy: 'xpath'
        },
        startNewList: 'a[class="actionBox__options--new"]',
        i9cpu: {
            selector: '//p[contains(text(),"Intel Core i9-9900K")]',
            locateStrategy: 'xpath'
        },
        i9cpuVerify: {
            selector: '//a[contains(text(),"Intel Core i9-9900K 3.6 GHz 8-Core Processor")]',
            locateStrategy: 'xpath'
        },
        CorsairCPUcooler: {
            selector: '(//p[contains(text(),"Corsair H100i RGB PLATINUM")])[1]',
            locateStrategy: 'xpath'
        },
        CorsairCPUcoolerVerify: {
            selector: '//a[contains(text(),"Corsair H100i RGB PLATINUM 75 CFM Liquid CPU Cooler")]',
            locateStrategy: 'xpath'
        },
        ASUSmotherboard: {
            selector: '//p[contains(text(),"Asus PRIME Z390-A")]',
            locateStrategy: 'xpath'
        },
        ASUSmotherboardVerify: {
            selector: '//a[contains(text(),"Asus PRIME Z390-A ATX LGA1151 Motherboard")]',
            locateStrategy: 'xpath'
        },
        CorsairVengRAM: {
            selector: '(//p[contains(text(),"Corsair Vengeance RGB Pro 16 GB")])[1]',
            locateStrategy: 'xpath'
        },
        quantity: 'select[name="quantity"]',
        option4: 'option[value="2"]',
        CorsairVengRAMVerify1: {
            selector: '(//a[contains(text(),"Corsair Vengeance RGB Pro 16 GB (2 x 8 GB) DDR4-3000 CL16 Memory")])[1]',
            locateStrategy: 'xpath'
        },
        CorsairVengRAMVerify2: {
            selector: '(//a[contains(text(),"Corsair Vengeance RGB Pro 16 GB (2 x 8 GB) DDR4-3000 CL16 Memory")])[2]',
            locateStrategy: 'xpath'
        },
        samsung860ProStorage: {
            selector: '//p[contains(text(),"Samsung 860 Pro")]',
            locateStrategy: 'xpath'
        },
        samsung860ProStorageVerify: {
            selector: '//a[contains(text(),"Samsung 860 Pro 4 TB 2.5")]',
            locateStrategy: 'xpath'
        },
        Asus2080VC: {
            selector: '(//p[contains(text(),"Asus ROG Strix Gaming OC")])[1]',
            locateStrategy: 'xpath'
        },
        Asus2080VCVerify1: {
            selector: '(//a[contains(text(),"Asus GeForce RTX 2080 Ti 11 GB ROG Strix Gaming OC Video Card")])[1]',
            locateStrategy: 'xpath'
        },
        Asus2080VCVerify2: {
            selector: '(//a[contains(text(),"Asus GeForce RTX 2080 Ti 11 GB ROG Strix Gaming OC Video Card")])[2]',
            locateStrategy: 'xpath'
        },
        NZXTcase2: {
            selector: '(//p[contains(text(),"NZXT H510 Elite")])[1]',
            locateStrategy: 'xpath'
        },
        NZXTcase2Verify: {
            selector: '//a[contains(text(),"NZXT H510 Elite ATX Mid Tower Case")]',
            locateStrategy: 'xpath'
        },
        Corsairpowersupply: {
            selector: '(//p[contains(text(),"Corsair RMx (2018)")])[1]',
            locateStrategy: 'xpath'
        },
        CorsairpowersupplyVerify: {
            selector: '//a[contains(text(),"Corsair RMx (2018) 850 W 80+ Gold Certified Fully Modular ATX Power Supply")]',
            locateStrategy: 'xpath'
        },
        Amazon: 'img[alt="Amazon"]',
        BestBuy: 'img[alt="Best Buy"]',
        NewEgg: 'img[alt="Newegg"]',
        jstaples: {
            selector: '//a[contains(text(),"jstaples")]',
            locateStrategy: 'xpath'
        },
        jstaplesParts: {
            selector: '//a[contains(text(),"Saved Part Lists")]',
            locateStrategy: 'xpath'
        },
        jstaplesPartClick: {
            selector: '(//a[contains(text(),"1")])[1]',
            locateStrategy: 'xpath'
        },
        editThisPartsList: {
            selector: '//a[contains(text(),"Edit This Part List")]',
            locateStrategy: 'xpath'
        },
    }
}