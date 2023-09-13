(function(e) {
    function n(n) {
        for (var r, a, i = n[0], u = n[1], d = n[2], s = 0, l = []; s < i.length; s++)
            a = i[s],
            Object.prototype.hasOwnProperty.call(o, a) && o[a] && l.push(o[a][0]),
            o[a] = 0;
        for (r in u)
            Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
        p && p(n);
        while (l.length)
            l.shift()();
        return c.push.apply(c, d || []),
        t()
    }
    function t() {
        for (var e, n = 0; n < c.length; n++) {
            for (var t = c[n], r = !0, a = 1; a < t.length; a++) {
                var i = t[a];
                0 !== o[i] && (r = !1)
            }
            r && (c.splice(n--, 1),
            e = u(u.s = t[0]))
        }
        return e
    }
    var r = {}
      , a = {
        main: 0
    }
      , o = {
        main: 0
    }
      , c = [];
    function i(e) {
        return u.p + "js/" + ({
            202103: "202103",
            2021517: "2021517",
            2021818: "2021818",
            20201218: "20201218",
            "20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c": "20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c",
            addBankCard: "addBankCard",
            "add~continuedDetail~edit~order~orderDetail": "add~continuedDetail~edit~order~orderDetail",
            add: "add",
            edit: "edit",
            agent: "agent",
            "agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555": "agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555",
            "agentRecheckFill~detail~login~order~register~spring": "agentRecheckFill~detail~login~order~register~spring",
            "detail~workorderDetail": "detail~workorderDetail",
            detail: "detail",
            "challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement": "challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement",
            orderDetail: "orderDetail",
            workorderDetail: "workorderDetail",
            write: "write",
            "buy~login~recognition~submitWorkorderTwo": "buy~login~recognition~submitWorkorderTwo",
            recognition: "recognition",
            "console~home~my~product": "console~home~my~product",
            console: "console",
            editBankCard: "editBankCard",
            feedback: "feedback",
            qrCodeInOne: "qrCodeInOne",
            "202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c": "202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c",
            "cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a": "cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a",
            "cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077": "cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077",
            cdn: "cdn",
            cloud: "cloud",
            cloudInstance: "cloudInstance",
            desktop: "desktop",
            physicalMachine: "physicalMachine",
            workorderManagement: "workorderManagement",
            diskIndex: "diskIndex",
            ip: "ip",
            index: "index",
            helpCenterDocsDetail: "helpCenterDocsDetail",
            helpCenterPageDetail: "helpCenterPageDetail",
            paymentResponse: "paymentResponse",
            "5G": "5G",
            about: "about",
            account: "account",
            "accountBind~login~secondAuth": "accountBind~login~secondAuth",
            accountBind: "accountBind",
            secondAuth: "secondAuth",
            activity: "activity",
            address: "address",
            continuedDetail: "continuedDetail",
            order: "order",
            agentRecheckFill: "agentRecheckFill",
            login: "login",
            "register~reset": "register~reset",
            "identification~register": "identification~register",
            register: "register",
            spring: "spring",
            exchangeAddress: "exchangeAddress",
            agentRecheckResult: "agentRecheckResult",
            agentRecheckSubmit: "agentRecheckSubmit",
            agentSubmit: "agentSubmit",
            app: "app",
            "appSolutionDetail~home~productDetail": "appSolutionDetail~home~productDetail",
            appSolutionDetail: "appSolutionDetail",
            productDetail: "productDetail",
            appSolutionIndex: "appSolutionIndex",
            auth: "auth",
            businessOpportunities: "businessOpportunities",
            channel: "channel",
            helpCenterSearch: "helpCenterSearch",
            list: "list",
            priseList: "priseList",
            "home~voucher": "home~voucher",
            voucher: "voucher",
            continuedList: "continuedList",
            loginHistory: "loginHistory",
            newsList: "newsList",
            serviceCaseCategory: "serviceCaseCategory",
            coupon: "coupon",
            home: "home",
            messageList: "messageList",
            challenge: "challenge",
            challengeApply: "challengeApply",
            settingAccountBind: "settingAccountBind",
            challengeCheck: "challengeCheck",
            challengeField: "challengeField",
            exchangeOrder: "exchangeOrder",
            exchangeRecord: "exchangeRecord",
            withdraw: "withdraw",
            "agentBank~agentInfo~agentPhone": "agentBank~agentInfo~agentPhone",
            agentInfo: "agentInfo",
            apply: "apply",
            "bindDisk~bindIp~createBackup~ipDetail": "bindDisk~bindIp~createBackup~ipDetail",
            bindDisk: "bindDisk",
            bindIp: "bindIp",
            createBackup: "createBackup",
            diskInstance: "diskInstance",
            ipDetail: "ipDetail",
            submitWorkorder: "submitWorkorder",
            buy: "buy",
            submitWorkorderTwo: "submitWorkorderTwo",
            "activity.2021": "activity.2021",
            "customer&5g": "customer&5g",
            eComputer: "eComputer",
            eComputer2: "eComputer2",
            enterprise: "enterprise",
            new: "new",
            province: "province",
            security3: "security3",
            trial: "trial",
            workorderProgress: "workorderProgress",
            workorderSearch: "workorderSearch",
            agentBank: "agentBank",
            agentPhone: "agentPhone",
            "businessOpportunitiesWeekly~pivotalPerson": "businessOpportunitiesWeekly~pivotalPerson",
            businessOpportunitiesWeekly: "businessOpportunitiesWeekly",
            pivotalPerson: "pivotalPerson",
            cloudCampus: "cloudCampus",
            identificationStep: "identificationStep",
            info: "info",
            appSolutionForm: "appSolutionForm",
            orderList: "orderList",
            orderListHistory: "orderListHistory",
            cloudHostDiscount: "cloudHostDiscount",
            cloudHostDiscount2020: "cloudHostDiscount2020",
            exchangeApply: "exchangeApply",
            noviceSpecialty: "noviceSpecialty",
            smartCampus: "smartCampus",
            workorderDemand: "workorderDemand",
            cloudMarket: "cloudMarket",
            collect: "collect",
            my: "my",
            product: "product",
            ctyunVision: "ctyunVision",
            download: "download",
            exchange: "exchange",
            helpCenter: "helpCenter",
            helpCenterDocs: "helpCenterDocs",
            identificationIndex: "identificationIndex",
            identification: "identification",
            invoice: "invoice",
            jobDetail: "jobDetail",
            messageDetail: "messageDetail",
            modifyPwd: "modifyPwd",
            money: "money",
            news: "news",
            newsDetail: "newsDetail",
            notFound: "notFound",
            noticeDetail: "noticeDetail",
            noticeList: "noticeList",
            operateProduct: "operateProduct",
            qrCodeLogin: "qrCodeLogin",
            rds: "rds",
            recharge: "recharge",
            rechargeResponse: "rechargeResponse",
            record: "record",
            reset: "reset",
            result: "result",
            safeCenter: "safeCenter",
            serviceCase: "serviceCase",
            serviceCaseDetail: "serviceCaseDetail",
            setting: "setting",
            title: "title",
            video: "video",
            workorder: "workorder"
        }[e] || e) + "." + {
            202103: "6853f3f5",
            2021517: "09c9ec0f",
            2021818: "aa3676ec",
            20201218: "b069a8a3",
            "20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c": "fe97b16f",
            addBankCard: "5c04c2cf",
            "add~continuedDetail~edit~order~orderDetail": "0085ae1a",
            add: "a18b5cc1",
            edit: "6e0464fe",
            agent: "439a7185",
            "agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555": "144fd733",
            "agentRecheckFill~detail~login~order~register~spring": "c5c1ec81",
            "detail~workorderDetail": "e2c8ba2a",
            detail: "0f353a42",
            "challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement": "d987c95d",
            orderDetail: "b1a51440",
            workorderDetail: "a762883c",
            write: "1716f3e9",
            "buy~login~recognition~submitWorkorderTwo": "8c7a74a9",
            "chunk-eec5f6b8": "fa213546",
            recognition: "1ba632ab",
            "console~home~my~product": "492ef351",
            console: "984cd920",
            editBankCard: "14b4c251",
            feedback: "ff123ab5",
            qrCodeInOne: "b30dbfaa",
            "202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c": "a28c2832",
            "cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a": "8794bb34",
            "cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077": "96ec827c",
            cdn: "e91e8537",
            cloud: "deb4b343",
            cloudInstance: "72919149",
            desktop: "c63314bd",
            physicalMachine: "8c7ee215",
            workorderManagement: "e6f6737a",
            diskIndex: "8fff8a13",
            ip: "30741df8",
            "chunk-5f38eea7": "eb56c126",
            index: "f1704b49",
            helpCenterDocsDetail: "b89495d0",
            helpCenterPageDetail: "2a47b753",
            paymentResponse: "cb12bfe2",
            "5G": "bc0102d0",
            about: "b97f2f75",
            account: "0b5db9c2",
            "accountBind~login~secondAuth": "853463a9",
            accountBind: "c918f8ac",
            secondAuth: "6ba58532",
            activity: "9c31cd00",
            address: "5a22a82b",
            continuedDetail: "28d33360",
            order: "613e4a71",
            agentRecheckFill: "76e0656b",
            login: "2caec246",
            "register~reset": "9b163f55",
            "identification~register": "ac993de2",
            register: "ea68fe46",
            spring: "f75d1ba9",
            exchangeAddress: "4a62e04e",
            agentRecheckResult: "e941ad6c",
            agentRecheckSubmit: "cca32294",
            agentSubmit: "938517dc",
            app: "c0dc0eaf",
            "appSolutionDetail~home~productDetail": "f21b749a",
            appSolutionDetail: "358a66f0",
            productDetail: "1b6f0fa6",
            appSolutionIndex: "0fb1da10",
            auth: "3eb6d450",
            businessOpportunities: "9b17451e",
            channel: "9a94f355",
            helpCenterSearch: "ad4e4437",
            list: "6462765a",
            priseList: "0ce55b71",
            "chunk-6b589ffd": "652b44ef",
            "home~voucher": "08dec47b",
            voucher: "d27b011f",
            continuedList: "232a548c",
            loginHistory: "f912ef39",
            newsList: "aafc2dc2",
            serviceCaseCategory: "e9eff103",
            coupon: "cbfc4eac",
            home: "11585181",
            messageList: "93effdeb",
            challenge: "0a3eda06",
            challengeApply: "cf83134c",
            settingAccountBind: "218c422f",
            challengeCheck: "3dcbcd75",
            challengeField: "b1190fed",
            "chunk-2d213728": "7ff882bb",
            exchangeOrder: "4e36a666",
            exchangeRecord: "a0459617",
            withdraw: "818c098e",
            "chunk-7722201c": "02e7904d",
            "agentBank~agentInfo~agentPhone": "d481e8c9",
            agentInfo: "d286251f",
            "chunk-e4f989f8": "74cf1150",
            apply: "f3eb8688",
            "bindDisk~bindIp~createBackup~ipDetail": "959371c3",
            bindDisk: "25812f0e",
            bindIp: "c43ae678",
            createBackup: "a32c7eb6",
            diskInstance: "b0809fee",
            ipDetail: "88551ea5",
            submitWorkorder: "610d45a9",
            buy: "cfaa0e97",
            submitWorkorderTwo: "dcf9addb",
            "activity.2021": "3fa1020d",
            "customer&5g": "9158df97",
            eComputer: "20195288",
            eComputer2: "feca9304",
            enterprise: "6eb53726",
            new: "54ee24c6",
            province: "11f7217c",
            security3: "89a8b1bb",
            trial: "7f5f800c",
            workorderProgress: "07085cbe",
            workorderSearch: "9a05bf9f",
            agentBank: "06bc99d9",
            agentPhone: "85da8043",
            "businessOpportunitiesWeekly~pivotalPerson": "cbc67aea",
            businessOpportunitiesWeekly: "df1058ca",
            pivotalPerson: "f7de358e",
            cloudCampus: "d4d4160e",
            identificationStep: "d9ffb759",
            info: "928204e3",
            appSolutionForm: "91f87f39",
            orderList: "91636382",
            orderListHistory: "c9a72b76",
            cloudHostDiscount: "42768786",
            cloudHostDiscount2020: "c66b965a",
            exchangeApply: "3f88efb4",
            noviceSpecialty: "291a2ec9",
            smartCampus: "258c8136",
            workorderDemand: "880dc010",
            "chunk-b051dfd0": "cc86876e",
            "chunk-c616f30c": "0957a654",
            "chunk-db90efe0": "0a9e9821",
            cloudMarket: "ce728e1d",
            collect: "f4a58938",
            my: "a361e4bc",
            product: "78031b53",
            ctyunVision: "47baa980",
            download: "58368331",
            exchange: "19a4e658",
            helpCenter: "92248c89",
            helpCenterDocs: "93dc3511",
            identificationIndex: "0d214483",
            identification: "d4c1499d",
            invoice: "5816ac1f",
            jobDetail: "ca451986",
            messageDetail: "0617a971",
            modifyPwd: "6a44eeef",
            money: "87fee28c",
            news: "b50e2103",
            newsDetail: "73763ae4",
            notFound: "f47398bf",
            noticeDetail: "c2ca071a",
            noticeList: "7c3f87bd",
            operateProduct: "68a293cf",
            qrCodeLogin: "7136e40c",
            rds: "3613ead7",
            recharge: "ab6fda40",
            rechargeResponse: "96cf73c9",
            record: "16727427",
            reset: "7655c07a",
            result: "7abdc864",
            safeCenter: "c0babcd6",
            serviceCase: "f997c77a",
            serviceCaseDetail: "c9017c85",
            setting: "2edb4eb7",
            title: "38ec7aac",
            video: "f45b253a",
            workorder: "765394ae",
            "chunk-1936b90a": "9894e7e7",
            "chunk-74e30748": "a9762ff5",
            "chunk-7190e4d1": "2fa38d29",
            "chunk-65d6996c": "9cd28574",
            "chunk-5577805c": "f92768c5",
            "chunk-0ac89b64": "d774513e",
            "chunk-41a7e986": "c06ecd26",
            "chunk-69b8d2ae": "05d4ffb3",
            "chunk-26b11054": "84b9c802",
            "chunk-5407991a": "1196a3f8",
            "chunk-f374825a": "b9ac3b6f",
            "chunk-31fa5bf6": "c107c733",
            "chunk-4cc06d01": "331592dc",
            "chunk-f350c91a": "ade01b9a",
            "chunk-024694d2": "56388fb0",
            "chunk-0b3f71a4": "c1f16919",
            "chunk-57de39d4": "7f9d578b",
            "chunk-5c4cb6d0": "db4b2f7d",
            "chunk-6fc7c2c8": "e4a36971",
            "chunk-8981ece4": "580fcb96",
            "chunk-5bc05cd0": "4c1ba6ed",
            "chunk-aaa3e3c8": "432f8dd0",
            "chunk-5c4cf7fe": "0062df4e",
            "chunk-aebc957e": "ec6a3250",
            "chunk-58526af0": "f01b4181",
            "chunk-3d6ad964": "5fb0d977",
            "chunk-0630cef9": "ba37908c",
            "chunk-051790d2": "9d661548",
            "chunk-1b40b847": "aa74f9a0",
            "chunk-672dc5c8": "12608c93"
        }[e] + ".js"
    }
    function u(n) {
        if (r[n])
            return r[n].exports;
        var t = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(t.exports, t, t.exports, u),
        t.l = !0,
        t.exports
    }
    u.e = function(e) {
        var n = []
          , t = {
            202103: 1,
            2021517: 1,
            2021818: 1,
            20201218: 1,
            "20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c": 1,
            addBankCard: 1,
            "add~continuedDetail~edit~order~orderDetail": 1,
            add: 1,
            edit: 1,
            agent: 1,
            "agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555": 1,
            "agentRecheckFill~detail~login~order~register~spring": 1,
            "detail~workorderDetail": 1,
            detail: 1,
            "challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement": 1,
            orderDetail: 1,
            workorderDetail: 1,
            write: 1,
            "buy~login~recognition~submitWorkorderTwo": 1,
            "chunk-eec5f6b8": 1,
            recognition: 1,
            "console~home~my~product": 1,
            console: 1,
            editBankCard: 1,
            feedback: 1,
            "cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a": 1,
            "cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077": 1,
            cdn: 1,
            cloud: 1,
            cloudInstance: 1,
            desktop: 1,
            physicalMachine: 1,
            workorderManagement: 1,
            diskIndex: 1,
            ip: 1,
            "chunk-5f38eea7": 1,
            index: 1,
            helpCenterDocsDetail: 1,
            helpCenterPageDetail: 1,
            paymentResponse: 1,
            "5G": 1,
            about: 1,
            account: 1,
            "accountBind~login~secondAuth": 1,
            accountBind: 1,
            secondAuth: 1,
            address: 1,
            continuedDetail: 1,
            order: 1,
            agentRecheckFill: 1,
            login: 1,
            "register~reset": 1,
            "identification~register": 1,
            register: 1,
            spring: 1,
            exchangeAddress: 1,
            agentRecheckResult: 1,
            agentRecheckSubmit: 1,
            agentSubmit: 1,
            app: 1,
            "appSolutionDetail~home~productDetail": 1,
            appSolutionDetail: 1,
            productDetail: 1,
            appSolutionIndex: 1,
            auth: 1,
            channel: 1,
            helpCenterSearch: 1,
            list: 1,
            priseList: 1,
            "chunk-6b589ffd": 1,
            "home~voucher": 1,
            voucher: 1,
            continuedList: 1,
            loginHistory: 1,
            newsList: 1,
            serviceCaseCategory: 1,
            coupon: 1,
            home: 1,
            messageList: 1,
            challenge: 1,
            challengeApply: 1,
            settingAccountBind: 1,
            challengeCheck: 1,
            challengeField: 1,
            exchangeOrder: 1,
            exchangeRecord: 1,
            withdraw: 1,
            "chunk-7722201c": 1,
            "agentBank~agentInfo~agentPhone": 1,
            agentInfo: 1,
            "chunk-e4f989f8": 1,
            apply: 1,
            "bindDisk~bindIp~createBackup~ipDetail": 1,
            bindDisk: 1,
            bindIp: 1,
            createBackup: 1,
            diskInstance: 1,
            ipDetail: 1,
            submitWorkorder: 1,
            buy: 1,
            submitWorkorderTwo: 1,
            "activity.2021": 1,
            "customer&5g": 1,
            eComputer: 1,
            eComputer2: 1,
            enterprise: 1,
            new: 1,
            province: 1,
            security3: 1,
            trial: 1,
            workorderProgress: 1,
            workorderSearch: 1,
            agentBank: 1,
            agentPhone: 1,
            "businessOpportunitiesWeekly~pivotalPerson": 1,
            businessOpportunitiesWeekly: 1,
            pivotalPerson: 1,
            cloudCampus: 1,
            identificationStep: 1,
            info: 1,
            appSolutionForm: 1,
            orderList: 1,
            orderListHistory: 1,
            cloudHostDiscount: 1,
            cloudHostDiscount2020: 1,
            exchangeApply: 1,
            noviceSpecialty: 1,
            smartCampus: 1,
            workorderDemand: 1,
            "chunk-b051dfd0": 1,
            "chunk-c616f30c": 1,
            "chunk-db90efe0": 1,
            collect: 1,
            my: 1,
            product: 1,
            ctyunVision: 1,
            download: 1,
            exchange: 1,
            helpCenter: 1,
            helpCenterDocs: 1,
            identificationIndex: 1,
            jobDetail: 1,
            messageDetail: 1,
            modifyPwd: 1,
            money: 1,
            newsDetail: 1,
            notFound: 1,
            noticeList: 1,
            operateProduct: 1,
            qrCodeLogin: 1,
            recharge: 1,
            rechargeResponse: 1,
            reset: 1,
            result: 1,
            safeCenter: 1,
            serviceCaseDetail: 1,
            workorder: 1,
            "chunk-1936b90a": 1,
            "chunk-74e30748": 1,
            "chunk-7190e4d1": 1,
            "chunk-65d6996c": 1,
            "chunk-5577805c": 1,
            "chunk-0ac89b64": 1,
            "chunk-41a7e986": 1,
            "chunk-69b8d2ae": 1,
            "chunk-26b11054": 1,
            "chunk-5407991a": 1,
            "chunk-f374825a": 1,
            "chunk-31fa5bf6": 1,
            "chunk-4cc06d01": 1,
            "chunk-f350c91a": 1,
            "chunk-024694d2": 1,
            "chunk-0b3f71a4": 1,
            "chunk-57de39d4": 1,
            "chunk-5c4cb6d0": 1,
            "chunk-6fc7c2c8": 1,
            "chunk-8981ece4": 1,
            "chunk-5bc05cd0": 1,
            "chunk-aaa3e3c8": 1,
            "chunk-5c4cf7fe": 1,
            "chunk-aebc957e": 1,
            "chunk-58526af0": 1,
            "chunk-3d6ad964": 1,
            "chunk-0630cef9": 1,
            "chunk-051790d2": 1,
            "chunk-1b40b847": 1,
            "chunk-672dc5c8": 1
        };
        a[e] ? n.push(a[e]) : 0 !== a[e] && t[e] && n.push(a[e] = new Promise((function(n, t) {
            for (var r = "css/" + ({
                202103: "202103",
                2021517: "2021517",
                2021818: "2021818",
                20201218: "20201218",
                "20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c": "20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c",
                addBankCard: "addBankCard",
                "add~continuedDetail~edit~order~orderDetail": "add~continuedDetail~edit~order~orderDetail",
                add: "add",
                edit: "edit",
                agent: "agent",
                "agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555": "agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555",
                "agentRecheckFill~detail~login~order~register~spring": "agentRecheckFill~detail~login~order~register~spring",
                "detail~workorderDetail": "detail~workorderDetail",
                detail: "detail",
                "challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement": "challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement",
                orderDetail: "orderDetail",
                workorderDetail: "workorderDetail",
                write: "write",
                "buy~login~recognition~submitWorkorderTwo": "buy~login~recognition~submitWorkorderTwo",
                recognition: "recognition",
                "console~home~my~product": "console~home~my~product",
                console: "console",
                editBankCard: "editBankCard",
                feedback: "feedback",
                qrCodeInOne: "qrCodeInOne",
                "202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c": "202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c",
                "cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a": "cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a",
                "cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077": "cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077",
                cdn: "cdn",
                cloud: "cloud",
                cloudInstance: "cloudInstance",
                desktop: "desktop",
                physicalMachine: "physicalMachine",
                workorderManagement: "workorderManagement",
                diskIndex: "diskIndex",
                ip: "ip",
                index: "index",
                helpCenterDocsDetail: "helpCenterDocsDetail",
                helpCenterPageDetail: "helpCenterPageDetail",
                paymentResponse: "paymentResponse",
                "5G": "5G",
                about: "about",
                account: "account",
                "accountBind~login~secondAuth": "accountBind~login~secondAuth",
                accountBind: "accountBind",
                secondAuth: "secondAuth",
                activity: "activity",
                address: "address",
                continuedDetail: "continuedDetail",
                order: "order",
                agentRecheckFill: "agentRecheckFill",
                login: "login",
                "register~reset": "register~reset",
                "identification~register": "identification~register",
                register: "register",
                spring: "spring",
                exchangeAddress: "exchangeAddress",
                agentRecheckResult: "agentRecheckResult",
                agentRecheckSubmit: "agentRecheckSubmit",
                agentSubmit: "agentSubmit",
                app: "app",
                "appSolutionDetail~home~productDetail": "appSolutionDetail~home~productDetail",
                appSolutionDetail: "appSolutionDetail",
                productDetail: "productDetail",
                appSolutionIndex: "appSolutionIndex",
                auth: "auth",
                businessOpportunities: "businessOpportunities",
                channel: "channel",
                helpCenterSearch: "helpCenterSearch",
                list: "list",
                priseList: "priseList",
                "home~voucher": "home~voucher",
                voucher: "voucher",
                continuedList: "continuedList",
                loginHistory: "loginHistory",
                newsList: "newsList",
                serviceCaseCategory: "serviceCaseCategory",
                coupon: "coupon",
                home: "home",
                messageList: "messageList",
                challenge: "challenge",
                challengeApply: "challengeApply",
                settingAccountBind: "settingAccountBind",
                challengeCheck: "challengeCheck",
                challengeField: "challengeField",
                exchangeOrder: "exchangeOrder",
                exchangeRecord: "exchangeRecord",
                withdraw: "withdraw",
                "agentBank~agentInfo~agentPhone": "agentBank~agentInfo~agentPhone",
                agentInfo: "agentInfo",
                apply: "apply",
                "bindDisk~bindIp~createBackup~ipDetail": "bindDisk~bindIp~createBackup~ipDetail",
                bindDisk: "bindDisk",
                bindIp: "bindIp",
                createBackup: "createBackup",
                diskInstance: "diskInstance",
                ipDetail: "ipDetail",
                submitWorkorder: "submitWorkorder",
                buy: "buy",
                submitWorkorderTwo: "submitWorkorderTwo",
                "activity.2021": "activity.2021",
                "customer&5g": "customer&5g",
                eComputer: "eComputer",
                eComputer2: "eComputer2",
                enterprise: "enterprise",
                new: "new",
                province: "province",
                security3: "security3",
                trial: "trial",
                workorderProgress: "workorderProgress",
                workorderSearch: "workorderSearch",
                agentBank: "agentBank",
                agentPhone: "agentPhone",
                "businessOpportunitiesWeekly~pivotalPerson": "businessOpportunitiesWeekly~pivotalPerson",
                businessOpportunitiesWeekly: "businessOpportunitiesWeekly",
                pivotalPerson: "pivotalPerson",
                cloudCampus: "cloudCampus",
                identificationStep: "identificationStep",
                info: "info",
                appSolutionForm: "appSolutionForm",
                orderList: "orderList",
                orderListHistory: "orderListHistory",
                cloudHostDiscount: "cloudHostDiscount",
                cloudHostDiscount2020: "cloudHostDiscount2020",
                exchangeApply: "exchangeApply",
                noviceSpecialty: "noviceSpecialty",
                smartCampus: "smartCampus",
                workorderDemand: "workorderDemand",
                cloudMarket: "cloudMarket",
                collect: "collect",
                my: "my",
                product: "product",
                ctyunVision: "ctyunVision",
                download: "download",
                exchange: "exchange",
                helpCenter: "helpCenter",
                helpCenterDocs: "helpCenterDocs",
                identificationIndex: "identificationIndex",
                identification: "identification",
                invoice: "invoice",
                jobDetail: "jobDetail",
                messageDetail: "messageDetail",
                modifyPwd: "modifyPwd",
                money: "money",
                news: "news",
                newsDetail: "newsDetail",
                notFound: "notFound",
                noticeDetail: "noticeDetail",
                noticeList: "noticeList",
                operateProduct: "operateProduct",
                qrCodeLogin: "qrCodeLogin",
                rds: "rds",
                recharge: "recharge",
                rechargeResponse: "rechargeResponse",
                record: "record",
                reset: "reset",
                result: "result",
                safeCenter: "safeCenter",
                serviceCase: "serviceCase",
                serviceCaseDetail: "serviceCaseDetail",
                setting: "setting",
                title: "title",
                video: "video",
                workorder: "workorder"
            }[e] || e) + "." + {
                202103: "fe072f8e",
                2021517: "0710ab67",
                2021818: "095cf95b",
                20201218: "56c83fb2",
                "20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c": "ed763bab",
                addBankCard: "60d1294f",
                "add~continuedDetail~edit~order~orderDetail": "2ab2a430",
                add: "7505d39b",
                edit: "36040eb2",
                agent: "b438a4f8",
                "agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555": "cbc7d2ae",
                "agentRecheckFill~detail~login~order~register~spring": "cd6dcfb5",
                "detail~workorderDetail": "1b2d7da8",
                detail: "52c1a63d",
                "challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement": "c6de1a0f",
                orderDetail: "8af57ec2",
                workorderDetail: "45137f7d",
                write: "4e0335a1",
                "buy~login~recognition~submitWorkorderTwo": "f1d953ff",
                "chunk-eec5f6b8": "cc17e29e",
                recognition: "38940af3",
                "console~home~my~product": "af801117",
                console: "069f49f6",
                editBankCard: "2612b618",
                feedback: "afb8985f",
                qrCodeInOne: "31d6cfe0",
                "202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c": "31d6cfe0",
                "cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a": "acbde69f",
                "cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077": "edfefe7b",
                cdn: "ef3306bd",
                cloud: "98078bc5",
                cloudInstance: "69ba2fa2",
                desktop: "50fc6a56",
                physicalMachine: "bfaefdad",
                workorderManagement: "a15a1b98",
                diskIndex: "c5b687b2",
                ip: "cbcdd9d5",
                "chunk-5f38eea7": "835495c4",
                index: "dd526bbc",
                helpCenterDocsDetail: "a53fd4f4",
                helpCenterPageDetail: "4787e6d8",
                paymentResponse: "c034cbf6",
                "5G": "08022f5a",
                about: "4ac2203b",
                account: "b4ffb099",
                "accountBind~login~secondAuth": "1c6b2609",
                accountBind: "6c47c383",
                secondAuth: "41ec8fc3",
                activity: "31d6cfe0",
                address: "2caee2ce",
                continuedDetail: "0f7f4f8d",
                order: "18d52023",
                agentRecheckFill: "fc543257",
                login: "93800171",
                "register~reset": "042f3541",
                "identification~register": "1665b3d2",
                register: "0afb1baf",
                spring: "beca31fc",
                exchangeAddress: "c5c5125e",
                agentRecheckResult: "663a3d75",
                agentRecheckSubmit: "71f82df5",
                agentSubmit: "41d97b53",
                app: "bfb22ba8",
                "appSolutionDetail~home~productDetail": "358f1167",
                appSolutionDetail: "dfea72c2",
                productDetail: "cdb72cb3",
                appSolutionIndex: "35cf7a1c",
                auth: "32a613f2",
                businessOpportunities: "31d6cfe0",
                channel: "13f36c7f",
                helpCenterSearch: "9f577239",
                list: "37285cb3",
                priseList: "41925e06",
                "chunk-6b589ffd": "3555396a",
                "home~voucher": "a4e56e57",
                voucher: "2218a1cd",
                continuedList: "459df4b9",
                loginHistory: "dbf87fd3",
                newsList: "621b394b",
                serviceCaseCategory: "84b19f6c",
                coupon: "10f0135b",
                home: "b52fc80a",
                messageList: "62ab2551",
                challenge: "67060d7e",
                challengeApply: "41122fad",
                settingAccountBind: "13265952",
                challengeCheck: "825f8366",
                challengeField: "e6ab90dd",
                "chunk-2d213728": "31d6cfe0",
                exchangeOrder: "449174f9",
                exchangeRecord: "ddf35c5c",
                withdraw: "7f6f3695",
                "chunk-7722201c": "ea2a9005",
                "agentBank~agentInfo~agentPhone": "e96e731d",
                agentInfo: "294e2122",
                "chunk-e4f989f8": "912182df",
                apply: "fefaefde",
                "bindDisk~bindIp~createBackup~ipDetail": "a9212f01",
                bindDisk: "84d3e36c",
                bindIp: "0bc199cb",
                createBackup: "ee593fca",
                diskInstance: "ca504ea9",
                ipDetail: "143ad1b5",
                submitWorkorder: "9092e182",
                buy: "5ffc4f10",
                submitWorkorderTwo: "d025f07c",
                "activity.2021": "05f7104c",
                "customer&5g": "6e3d1bab",
                eComputer: "81470828",
                eComputer2: "67e6c71a",
                enterprise: "a703b44b",
                new: "46328dfa",
                province: "f76aa655",
                security3: "b0f88862",
                trial: "487423b9",
                workorderProgress: "c2c3bc58",
                workorderSearch: "80063a22",
                agentBank: "ea190023",
                agentPhone: "788ff25f",
                "businessOpportunitiesWeekly~pivotalPerson": "553631d2",
                businessOpportunitiesWeekly: "731a3ab9",
                pivotalPerson: "71df04ca",
                cloudCampus: "3e8ce382",
                identificationStep: "e899d3fb",
                info: "5f1a9181",
                appSolutionForm: "b2c39daa",
                orderList: "b7c42e52",
                orderListHistory: "0a6248e1",
                cloudHostDiscount: "5a30fa5d",
                cloudHostDiscount2020: "6a1ca3c8",
                exchangeApply: "8d0538e7",
                noviceSpecialty: "91cf7adb",
                smartCampus: "5ac5e305",
                workorderDemand: "46e9209b",
                "chunk-b051dfd0": "d3936e8c",
                "chunk-c616f30c": "f27c484b",
                "chunk-db90efe0": "27bd9d0f",
                cloudMarket: "31d6cfe0",
                collect: "79fb4f0c",
                my: "2c3d4270",
                product: "56d57b48",
                ctyunVision: "85dc1c1a",
                download: "3d09cdbd",
                exchange: "d86083b8",
                helpCenter: "9214b968",
                helpCenterDocs: "fc8fbee1",
                identificationIndex: "49e67a85",
                identification: "31d6cfe0",
                invoice: "31d6cfe0",
                jobDetail: "4f5ec63b",
                messageDetail: "9feb3548",
                modifyPwd: "a9b41811",
                money: "371e841c",
                news: "31d6cfe0",
                newsDetail: "1734e35d",
                notFound: "41284d58",
                noticeDetail: "31d6cfe0",
                noticeList: "adbc25f5",
                operateProduct: "8b429558",
                qrCodeLogin: "5894efcc",
                rds: "31d6cfe0",
                recharge: "37c88e4b",
                rechargeResponse: "136d4fac",
                record: "31d6cfe0",
                reset: "df1808f7",
                result: "d6d69a48",
                safeCenter: "9c6ac6d3",
                serviceCase: "31d6cfe0",
                serviceCaseDetail: "7b74c491",
                setting: "31d6cfe0",
                title: "31d6cfe0",
                video: "31d6cfe0",
                workorder: "7d4ad4ef",
                "chunk-1936b90a": "cbc7d2ae",
                "chunk-74e30748": "bf492b4d",
                "chunk-7190e4d1": "cd97e2f9",
                "chunk-65d6996c": "f315f4a2",
                "chunk-5577805c": "a6f3f537",
                "chunk-0ac89b64": "cd6dcfb5",
                "chunk-41a7e986": "faba6d72",
                "chunk-69b8d2ae": "cbd7ea72",
                "chunk-26b11054": "e5d6e447",
                "chunk-5407991a": "df3a4169",
                "chunk-f374825a": "5653e3df",
                "chunk-31fa5bf6": "0a9ad63b",
                "chunk-4cc06d01": "efa28012",
                "chunk-f350c91a": "33b6f03b",
                "chunk-024694d2": "1455c573",
                "chunk-0b3f71a4": "f10d1f9d",
                "chunk-57de39d4": "f0158d6b",
                "chunk-5c4cb6d0": "4f68d914",
                "chunk-6fc7c2c8": "433daa89",
                "chunk-8981ece4": "5e5e90bf",
                "chunk-5bc05cd0": "792da90d",
                "chunk-aaa3e3c8": "a35b3b9e",
                "chunk-5c4cf7fe": "afdb5a1d",
                "chunk-aebc957e": "b8e21be8",
                "chunk-58526af0": "f739450a",
                "chunk-3d6ad964": "8027743b",
                "chunk-0630cef9": "806b0096",
                "chunk-051790d2": "b15d7e71",
                "chunk-1b40b847": "a5203109",
                "chunk-672dc5c8": "21c0f49f"
            }[e] + ".css", o = u.p + r, c = document.getElementsByTagName("link"), i = 0; i < c.length; i++) {
                var d = c[i]
                  , s = d.getAttribute("data-href") || d.getAttribute("href");
                if ("stylesheet" === d.rel && (s === r || s === o))
                    return n()
            }
            var l = document.getElementsByTagName("style");
            for (i = 0; i < l.length; i++) {
                d = l[i],
                s = d.getAttribute("data-href");
                if (s === r || s === o)
                    return n()
            }
            var p = document.createElement("link");
            p.rel = "stylesheet",
            p.type = "text/css",
            p.onload = n,
            p.onerror = function(n) {
                var r = n && n.target && n.target.src || o
                  , c = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                c.code = "CSS_CHUNK_LOAD_FAILED",
                c.request = r,
                delete a[e],
                p.parentNode.removeChild(p),
                t(c)
            }
            ,
            p.href = o;
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(p)
        }
        )).then((function() {
            a[e] = 0
        }
        )));
        var r = o[e];
        if (0 !== r)
            if (r)
                n.push(r[2]);
            else {
                var c = new Promise((function(n, t) {
                    r = o[e] = [n, t]
                }
                ));
                n.push(r[2] = c);
                var d, s = document.createElement("script");
                s.charset = "utf-8",
                s.timeout = 120,
                u.nc && s.setAttribute("nonce", u.nc),
                s.src = i(e);
                var l = new Error;
                d = function(n) {
                    s.onerror = s.onload = null,
                    clearTimeout(p);
                    var t = o[e];
                    if (0 !== t) {
                        if (t) {
                            var r = n && ("load" === n.type ? "missing" : n.type)
                              , a = n && n.target && n.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")",
                            l.name = "ChunkLoadError",
                            l.type = r,
                            l.request = a,
                            t[1](l)
                        }
                        o[e] = void 0
                    }
                }
                ;
                var p = setTimeout((function() {
                    d({
                        type: "timeout",
                        target: s
                    })
                }
                ), 12e4);
                s.onerror = s.onload = d,
                document.head.appendChild(s)
            }
        return Promise.all(n)
    }
    ,
    u.m = e,
    u.c = r,
    u.d = function(e, n, t) {
        u.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: t
        })
    }
    ,
    u.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    u.t = function(e, n) {
        if (1 & n && (e = u(e)),
        8 & n)
            return e;
        if (4 & n && "object" === typeof e && e && e.__esModule)
            return e;
        var t = Object.create(null);
        if (u.r(t),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }),
        2 & n && "string" != typeof e)
            for (var r in e)
                u.d(t, r, function(n) {
                    return e[n]
                }
                .bind(null, r));
        return t
    }
    ,
    u.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return u.d(n, "a", n),
        n
    }
    ,
    u.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }
    ,
    u.p = "/wap/main/",
    u.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var d = []
      , s = d.push.bind(d);
    d.push = n,
    d = d.slice();
    for (var l = 0; l < d.length; l++)
        n(d[l]);
    var p = s;
    c.push([0, "chunk-vendors"]),
    t()
}
)({
    0: function(e, n, t) {
        e.exports = t("b196")
    },
    "04c0": function(e, n, t) {
        e.exports = t.p + "img/loading.696aeaa2.gif"
    },
    "0680": function(e, n, t) {
        "use strict";
        t.d(n, "f", (function() {
            return r
        }
        )),
        t.d(n, "l", (function() {
            return a
        }
        )),
        t.d(n, "a", (function() {
            return o
        }
        )),
        t.d(n, "d", (function() {
            return c
        }
        )),
        t.d(n, "e", (function() {
            return i
        }
        )),
        t.d(n, "c", (function() {
            return p
        }
        )),
        t.d(n, "k", (function() {
            return s
        }
        )),
        t.d(n, "g", (function() {
            return f
        }
        )),
        t.d(n, "m", (function() {
            return l
        }
        )),
        t.d(n, "j", (function() {
            return h
        }
        )),
        t.d(n, "i", (function() {
            return m
        }
        )),
        t.d(n, "b", (function() {
            return g
        }
        )),
        t.d(n, "h", (function() {
            return b
        }
        ));
        t("a481");
        var r = "......"
          , a = 3e3
          , o = {
            1: "个人客户",
            2: "企业客户"
        }
          , c = {
            0: "未实名认证",
            1: "认证审核中",
            2: "认证失败",
            3: "已实名认证",
            4: "认证审核中"
        }
          , i = {
            1: "工商营业执照",
            2: "组织机构代码",
            3: "事业法人",
            4: "社团法人",
            5: "军队代号"
        }
          , u = window.location.origin
          , d = u.replace("m", "app")
          , s = "https://www.ctyun.cn/home/?from=wap "
          , l = ("".concat(u, "/wap/main"),
        "".concat(u, "/wechat/main"))
          , p = "".concat(d, "/app/index.html#")
          , f = "".concat(u, "/alogic-ctyun/account/invoice/Download?fileId=")
          , h = "https://app.ctyun.cn/index/app.html"
          , m = "https://itunes.apple.com/cn/app/id1358565649?mt=8"
          , g = "https://app.ctyun.cn/download/ctyun.apk"
          , b = ""
    },
    "0870": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/5G",
            name: "5G",
            meta: {
                title: "5G+拎包入住",
                platform: ["all"]
            },
            component: function() {
                return t.e("5G").then(t.bind(null, "aa6a"))
            }
        }
    },
    "0881": function(e, n, t) {
        "use strict";
        t("551c"),
        t("96cf");
        var r = t("3b8d")
          , a = (t("7f7f"),
        t("bdd0"));
        function o(e) {
            return c.apply(this, arguments)
        }
        function c() {
            return c = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "track/info",
                            e.abrupt("return", a["a"].post(t, n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            c.apply(this, arguments)
        }
        var i = t("7f6d")
          , u = t("a78e")
          , d = t.n(u)
          , s = t("faac")
          , l = t.n(s)
          , p = t("4773");
        function f() {
            var e = m("sid1")
              , n = m("sid2")
              , t = Object(i["p"])("sidExpires");
            e && t > Date.now() ? n ? h(e) : h() : (h(),
            k()),
            b(v()),
            I(v()),
            Object(p["c"])(),
            Object(p["a"])()
        }
        function h(e) {
            var n = Date.now()
              , t = n + 18e5
              , r = new Date(t);
            e = e || "".concat(n, "-").concat(Object(i["k"])()),
            d.a.set("sid1", e, {
                expires: r
            }),
            d.a.set("sid2", e, {
                expires: r
            }),
            Object(i["L"])("sidExpires", t)
        }
        function m() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "sid1";
            return d.a.get(e)
        }
        function g() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "sid2";
            d.a.remove(e)
        }
        function b(e) {
            e = e ? ++e : 1,
            d.a.set("pvid", e)
        }
        function v() {
            return d.a.get("pvid")
        }
        function k() {
            d.a.remove("pvid")
        }
        function w() {
            return encodeURI(document.URL)
        }
        function y() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = document.referrer;
            return e.name && (n = window.location.origin + "/wap/main" + e.fullPath),
            n
        }
        function I(e) {
            var n = Object(i["p"])("referrerPvid") || {};
            n[document.URL] = e,
            Object(i["L"])("referrerPvid", n)
        }
        function D() {
            var e = Object(i["p"])("referrerPvid") || {};
            return e[y()]
        }
        function C() {
            return Object(i["H"])("referrerPvid")
        }
        function x() {
            var e = Object(p["c"])()
              , n = Object(p["d"])(e);
            if (!n)
                return e;
            var t = Object(p["f"])(e);
            return t.content || ""
        }
        function P() {
            return O.apply(this, arguments)
        }
        function O() {
            return O = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "wap",
                            e.prev = 1,
                            r = t("f0d1"),
                            e.next = 5,
                            new Promise((function(e) {
                                var t = r.miniProgram;
                                t && t.getEnv ? t.getEnv((function(t) {
                                    t.miniprogram && (n = "wechat-manager"),
                                    e()
                                }
                                )) : e()
                            }
                            ));
                        case 5:
                            e.next = 10;
                            break;
                        case 7:
                            return e.prev = 7,
                            e.t0 = e["catch"](1),
                            e.abrupt("return", n);
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[1, 7]])
            }
            ))),
            O.apply(this, arguments)
        }
        function R() {
            var e = l.a.os
              , n = l.a.name
              , t = l.a.version
              , r = e.family + "-" + n + "/" + t;
            return r.toLowerCase()
        }
        function S(e) {
            var n;
            function t() {
                n = Date.now()
            }
            function a() {
                Date.now() - n <= 5 && (g(),
                k(),
                C())
            }
            window.addEventListener("beforeunload", t),
            window.addEventListener("unload", a),
            setTimeout(Object(r["a"])(regeneratorRuntime.mark((function n() {
                var t, r;
                return regeneratorRuntime.wrap((function(n) {
                    while (1)
                        switch (n.prev = n.next) {
                        case 0:
                            return f(),
                            n.t0 = m(),
                            n.t1 = v(),
                            n.t2 = w(),
                            n.t3 = y(e),
                            n.t4 = D(),
                            n.t5 = x(),
                            n.next = 9,
                            P();
                        case 9:
                            n.t6 = n.sent,
                            n.t7 = R(),
                            t = {
                                sid: n.t0,
                                pvid: n.t1,
                                url: n.t2,
                                referer: n.t3,
                                referer_pvid: n.t4,
                                track: n.t5,
                                source: n.t6,
                                sourceType: n.t7
                            },
                            r = Object(p["b"])(),
                            r && (t.searchFrom = r),
                            o(t).catch(console.log);
                        case 15:
                        case "end":
                            return n.stop()
                        }
                }
                ), n)
            }
            ))), 0)
        }
        var A = S;
        n["a"] = A
    },
    "0b4e": function(e, n, t) {
        "use strict";
        t("81d3")
    },
    "0b92": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = [{
            name: "trial.personal",
            path: "/activity/trial/personal",
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("trial")]).then(t.bind(null, "ab1d"))
            },
            props: {
                ACTIVITY_DOMAIN: "trial.personal"
            },
            meta: {
                title: "个人免费试用中心",
                platform: ["all"]
            }
        }, {
            name: "trial.enterprise",
            path: "/activity/trial/enterprise",
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("trial")]).then(t.bind(null, "ab1d"))
            },
            props: {
                ACTIVITY_DOMAIN: "trial.enterprise"
            },
            meta: {
                title: "企业免费试用中心",
                platform: ["all"]
            }
        }]
    },
    "0b94": function(e, n, t) {
        var r = {
            "./20201218/router.js": "142f",
            "./2021/router.js": "42a9",
            "./202103/router.js": "afc4",
            "./2021818/router.js": "6a74",
            "./5G/router.js": "cbd5",
            "./5g/router.js": "0870",
            "./_offline/2021618/router.js": "c51c",
            "./_offline/router.js": "a89b",
            "./cloudCampus/router.js": "1119",
            "./cloudHostDiscount/router.js": "4baf",
            "./cloudHostDiscount2020/router.js": "98ff",
            "./collect/router.js": "582e",
            "./customer&5g/router.js": "4364",
            "./eComputer/router.js": "6803",
            "./eComputer2/router.js": "6992",
            "./enterprise/router.js": "428f",
            "./exchange/router.js": "369c",
            "./index/router.js": "2b5f",
            "./noviceRegister/router.js": "52e7",
            "./noviceSpecialty/router.js": "b124",
            "./security3/router.js": "b713",
            "./smartCampus/router.js": "ad7d",
            "./trial/router.js": "0b92"
        };
        function a(e) {
            var n = o(e);
            return t(n)
        }
        function o(e) {
            if (!t.o(r, e)) {
                var n = new Error("Cannot find module '" + e + "'");
                throw n.code = "MODULE_NOT_FOUND",
                n
            }
            return r[e]
        }
        a.keys = function() {
            return Object.keys(r)
        }
        ,
        a.resolve = o,
        e.exports = a,
        a.id = "0b94"
    },
    1: function(e, n) {},
    1119: function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/cloudCampus",
            name: "cloudCampus",
            meta: {
                title: "云创校园",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-e4f989f8"), t.e("cloudCampus")]).then(t.bind(null, "02f7"))
            }
        }
    },
    "142f": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/20201218",
            name: "20201218",
            meta: {
                title: "中国电信&云智谷专属活动",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-e4f989f8"), t.e("20201218")]).then(t.bind(null, "b383"))
            }
        }
    },
    "2b5f": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/index",
            name: "index",
            meta: {
                title: "最新活动",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("index")]).then(t.bind(null, "ea20"))
            }
        }
    },
    "32ee": function(e, n, t) {
        "use strict";
        t.d(n, "E", (function() {
            return s
        }
        )),
        t.d(n, "o", (function() {
            return p
        }
        )),
        t.d(n, "z", (function() {
            return h
        }
        )),
        t.d(n, "L", (function() {
            return g
        }
        )),
        t.d(n, "K", (function() {
            return v
        }
        )),
        t.d(n, "N", (function() {
            return w
        }
        )),
        t.d(n, "O", (function() {
            return I
        }
        )),
        t.d(n, "m", (function() {
            return C
        }
        )),
        t.d(n, "r", (function() {
            return P
        }
        )),
        t.d(n, "C", (function() {
            return R
        }
        )),
        t.d(n, "f", (function() {
            return A
        }
        )),
        t.d(n, "t", (function() {
            return B
        }
        )),
        t.d(n, "D", (function() {
            return T
        }
        )),
        t.d(n, "B", (function() {
            return M
        }
        )),
        t.d(n, "g", (function() {
            return F
        }
        )),
        t.d(n, "l", (function() {
            return q
        }
        )),
        t.d(n, "k", (function() {
            return N
        }
        )),
        t.d(n, "q", (function() {
            return $
        }
        )),
        t.d(n, "h", (function() {
            return V
        }
        )),
        t.d(n, "G", (function() {
            return J
        }
        )),
        t.d(n, "A", (function() {
            return Q
        }
        )),
        t.d(n, "s", (function() {
            return X
        }
        )),
        t.d(n, "F", (function() {
            return K
        }
        )),
        t.d(n, "J", (function() {
            return Y
        }
        )),
        t.d(n, "j", (function() {
            return ee
        }
        )),
        t.d(n, "x", (function() {
            return ne
        }
        )),
        t.d(n, "w", (function() {
            return te
        }
        )),
        t.d(n, "y", (function() {
            return re
        }
        )),
        t.d(n, "n", (function() {
            return ae
        }
        )),
        t.d(n, "I", (function() {
            return oe
        }
        )),
        t.d(n, "i", (function() {
            return ce
        }
        )),
        t.d(n, "e", (function() {
            return ie
        }
        )),
        t.d(n, "d", (function() {
            return de
        }
        )),
        t.d(n, "c", (function() {
            return le
        }
        )),
        t.d(n, "b", (function() {
            return fe
        }
        )),
        t.d(n, "a", (function() {
            return me
        }
        )),
        t.d(n, "v", (function() {
            return be
        }
        )),
        t.d(n, "p", (function() {
            return ke
        }
        )),
        t.d(n, "H", (function() {
            return ye
        }
        )),
        t.d(n, "M", (function() {
            return De
        }
        )),
        t.d(n, "u", (function() {
            return Ce
        }
        ));
        t("8e6e"),
        t("ac6a"),
        t("cadf"),
        t("456d"),
        t("96cf");
        var r = t("bd86")
          , a = t("3b8d")
          , o = t("bdd0")
          , c = t("4328")
          , i = t.n(c);
        function u(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n && (r = r.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, r)
            }
            return t
        }
        function d(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? u(Object(t), !0).forEach((function(n) {
                    Object(r["a"])(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        function s(e) {
            return l.apply(this, arguments)
        }
        function l() {
            return l = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "account/queryPrivacyAccountInfo",
                            e.abrupt("return", o["a"].get(t, {
                                fmp: !0
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            l.apply(this, arguments)
        }
        function p(e) {
            return f.apply(this, arguments)
        }
        function f() {
            return f = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "account/getAuditTemp",
                            e.abrupt("return", o["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            f.apply(this, arguments)
        }
        function h() {
            return m.apply(this, arguments)
        }
        function m() {
            return m = Object(a["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "/order/credit/selfaccountbook",
                            e.abrupt("return", o["a"].get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            m.apply(this, arguments)
        }
        function g(e) {
            return b.apply(this, arguments)
        }
        function b() {
            return b = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "account/updateAccount",
                            e.abrupt("return", o["a"].post(t, i.a.stringify({
                                accountInfo: n.personal
                            }), {
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            b.apply(this, arguments)
        }
        function v(e) {
            return k.apply(this, arguments)
        }
        function k() {
            return k = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "account/updateAccount",
                            e.abrupt("return", o["a"].post(t, i.a.stringify({
                                accountInfo: n.company
                            }), {
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            k.apply(this, arguments)
        }
        function w(e) {
            return y.apply(this, arguments)
        }
        function y() {
            return y = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "alogic-ctyun/self/VerifyMailCode",
                            e.abrupt("return", o["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            y.apply(this, arguments)
        }
        function I(e) {
            return D.apply(this, arguments)
        }
        function D() {
            return D = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "alogic-ctyun/self/VerifyPhoneCode",
                            e.abrupt("return", o["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            D.apply(this, arguments)
        }
        function C() {
            return x.apply(this, arguments)
        }
        function x() {
            return x = Object(a["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "account/selfaccountbook",
                            e.abrupt("return", o["a"].get(n, {
                                fmp: !0
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            x.apply(this, arguments)
        }
        function P(e) {
            return O.apply(this, arguments)
        }
        function O() {
            return O = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctcloudet/v1/bcc/cash/queryCashTransactionDetail",
                            e.abrupt("return", o["a"].get(t, {
                                params: n,
                                fmp: !0
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            O.apply(this, arguments)
        }
        function R() {
            return S.apply(this, arguments)
        }
        function S() {
            return S = Object(a["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "order/credit/queryCreditAmount",
                            e.abrupt("return", o["a"].get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            S.apply(this, arguments)
        }
        function A(e) {
            return j.apply(this, arguments)
        }
        function j() {
            return j = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "order/credit/activeCreditCard",
                            e.abrupt("return", o["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            j.apply(this, arguments)
        }
        function B(e) {
            return L.apply(this, arguments)
        }
        function L() {
            return L = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "order/credit/getCreditTransactionFlow",
                            e.abrupt("return", o["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            L.apply(this, arguments)
        }
        function T() {
            return E.apply(this, arguments)
        }
        function E() {
            return E = Object(a["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "order/credit/queryInactiveList",
                            e.abrupt("return", o["a"].get(n, {
                                fmp: !0
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            E.apply(this, arguments)
        }
        function M(e) {
            return _.apply(this, arguments)
        }
        function _() {
            return _ = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "coupon/list",
                            e.abrupt("return", o["a"].get(t, {
                                params: n,
                                fmp: !0
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            _.apply(this, arguments)
        }
        function F(e) {
            return H.apply(this, arguments)
        }
        function H() {
            return H = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "alogic-ctyun/user/bankacct/New",
                            e.abrupt("return", o["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            H.apply(this, arguments)
        }
        function q(e) {
            return U.apply(this, arguments)
        }
        function U() {
            return U = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "alogic-ctyun/user/bankacct/Update",
                            e.abrupt("return", o["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            U.apply(this, arguments)
        }
        function N(e) {
            return W.apply(this, arguments)
        }
        function W() {
            return W = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "alogic-ctyun/user/bankacct/Delete",
                            e.abrupt("return", o["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            W.apply(this, arguments)
        }
        function $(e) {
            return z.apply(this, arguments)
        }
        function z() {
            return z = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "alogic-ctyun/user/bankacct/List",
                            e.abrupt("return", o["a"].get(t, {
                                params: {
                                    bankacctId: n
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            z.apply(this, arguments)
        }
        function V(e) {
            return G.apply(this, arguments)
        }
        function G() {
            return G = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "alogic-ctyun/account/cash/ApplyWithdraw2",
                            e.abrupt("return", o["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            G.apply(this, arguments)
        }
        function J(e) {
            return Z.apply(this, arguments)
        }
        function Z() {
            return Z = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "order/payAcct",
                            e.abrupt("return", o["a"].get(t, {
                                params: {
                                    amount: n
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            Z.apply(this, arguments)
        }
        function Q() {
            var e = "account/queryAllProvince";
            return o["a"].get(e)
        }
        function X(e) {
            var n = "account/queryProvinceCity";
            return o["a"].get(n, {
                params: {
                    id: e
                }
            })
        }
        function K(e) {
            var n = "account/queryProvinceInfo";
            return o["a"].get(n, {
                params: e,
                fmp: !0
            })
        }
        function Y(e) {
            var n = "account/updateAccount";
            return o["a"].post(n, i.a.stringify(e), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
        }
        function ee() {
            var e = "account/checkAccountType";
            return o["a"].get(e)
        }
        function ne() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = "alogic-ctyun/account/cash/GetWithdrawList";
            return o["a"].get(n, {
                params: d({
                    pageSize: 15
                }, e)
            })
        }
        function te(e) {
            var n = "alogic-ctyun/account/cash/WithdrawDetail";
            return o["a"].get(n, {
                params: {
                    withdrawalId: e
                }
            })
        }
        function re(e) {
            var n = "alogic-ctyun/account/cash/WithdrawReturn";
            return o["a"].get(n, {
                params: e
            })
        }
        function ae(e) {
            var n = "alogic-ctyun/account/cash/GetAmount";
            return o["a"].get(n, {
                params: {
                    withdrawalId: e
                }
            })
        }
        function oe(e) {
            var n = "alogic-ctyun/user/bankacct/UpdateAndSetDef";
            return o["a"].get(n, {
                params: e
            })
        }
        function ce(e) {
            var n = "alogic-ctyun/account/cash/WithdrawBank";
            return o["a"].get(n, {
                params: e
            })
        }
        function ie(e) {
            return ue.apply(this, arguments)
        }
        function ue() {
            return ue = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/self/SendMobileCode",
                            e.abrupt("return", o["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            ue.apply(this, arguments)
        }
        function de(e) {
            return se.apply(this, arguments)
        }
        function se() {
            return se = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/self/SendMobileCodeV3",
                            e.abrupt("return", o["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            se.apply(this, arguments)
        }
        function le() {
            return pe.apply(this, arguments)
        }
        function pe() {
            return pe = Object(a["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "/alogic-ctyun/self/SendEmailCodeV3",
                            e.abrupt("return", o["a"].get(n, {}));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            pe.apply(this, arguments)
        }
        function fe() {
            return he.apply(this, arguments)
        }
        function he() {
            return he = Object(a["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "/alogic-ctcloudet/v1/bcc/order/GetTrialBalance",
                            e.abrupt("return", o["a"].get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            he.apply(this, arguments)
        }
        function me(e) {
            return ge.apply(this, arguments)
        }
        function ge() {
            return ge = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/ctcloud/self/ActiveAccount",
                            e.abrupt("return", o["a"].get(t, {
                                params: {
                                    accountId: window.btoa(n)
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            ge.apply(this, arguments)
        }
        function be() {
            return ve.apply(this, arguments)
        }
        function ve() {
            return ve = Object(a["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "/subscription/getReceivers",
                            e.abrupt("return", o["a"].get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            ve.apply(this, arguments)
        }
        function ke() {
            return we.apply(this, arguments)
        }
        function we() {
            return we = Object(a["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "/alogic-ctcloudet/v1/bcc/account/GetBalanceRemind",
                            e.abrupt("return", o["a"].get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            we.apply(this, arguments)
        }
        function ye(e, n) {
            return Ie.apply(this, arguments)
        }
        function Ie() {
            return Ie = Object(a["a"])(regeneratorRuntime.mark((function e(n, t) {
                var r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return r = "/alogic-ctcloudet/v1/bcc/account/SetBalanceRemind",
                            e.abrupt("return", o["a"].get(r, {
                                params: {
                                    switchType: n,
                                    remindValue: t
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            Ie.apply(this, arguments)
        }
        function De(e) {
            var n = "/account/personalBankAuthLivePhotoUpload";
            return o["a"].post(n, e, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        }
        function Ce() {
            var e = "/alogic-ctyun/user/GetCurrent";
            return o["a"].get(e)
        }
    },
    "369c": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/exchange",
            component: function() {
                return t.e("exchange").then(t.bind(null, "d7d1"))
            },
            children: [{
                path: "/activity/exchange/record",
                name: "record",
                meta: {
                    title: "兑换记录",
                    auth: !0,
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-2d213728"), t.e("exchangeRecord")]).then(t.bind(null, "dd7c"))
                }
            }, {
                path: "/activity/exchange/selectOrder",
                name: "selectOrder",
                meta: {
                    title: "选择兑换订单",
                    auth: !0,
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-2d213728"), t.e("exchangeOrder")]).then(t.bind(null, "be3d"))
                }
            }, {
                path: "/activity/exchange/apply",
                name: "apply",
                meta: {
                    title: "活动兑换",
                    auth: !0,
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("chunk-2d213728"), t.e("exchangeApply")]).then(t.bind(null, "1804"))
                }
            }, {
                path: "/activity/exchange/address",
                name: "exchangeAddress",
                meta: {
                    title: "收货地址",
                    auth: !0,
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555"), t.e("exchangeAddress")]).then(t.bind(null, "6d6b"))
                }
            }, {
                path: "/activity/exchange/result",
                name: "acResult",
                meta: {
                    title: "兑换结果",
                    auth: !0,
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555"), t.e("exchangeAddress")]).then(t.bind(null, "3607"))
                }
            }, {
                path: "/activity/exchange/exchanged",
                name: "exchanged",
                meta: {
                    title: "已兑换订单",
                    auth: !0,
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555"), t.e("exchangeAddress")]).then(t.bind(null, "6180"))
                }
            }]
        }
    },
    3779: function(e, n, t) {
        "use strict";
        t("8e6e"),
        t("cadf"),
        t("456d"),
        t("ac6a");
        var r = t("bd86")
          , a = (t("7514"),
        t("6762"),
        t("2fdb"),
        t("7f7f"),
        t("768b"));
        t("28a5");
        function o(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n && (r = r.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, r)
            }
            return t
        }
        function c(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? o(Object(t), !0).forEach((function(n) {
                    Object(r["a"])(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        var i = {}
          , u = {
            performance: [],
            route: {
                page: [],
                app: []
            },
            cgi: {
                beforeSend: [],
                afterSuccess: [],
                afterError: []
            }
        }
          , d = {}
          , s = [];
        window.cgiStore = i,
        window.observerStore = u;
        var l = function(e) {
            var n = e.split("?")
              , t = {};
            if (n.length > 1) {
                var r = n[1];
                r.split("&").reduce((function(e, n) {
                    var t = n.split("=")
                      , r = Object(a["a"])(t, 2)
                      , o = r[0]
                      , c = r[1];
                    return e[o] = c,
                    e
                }
                ), t)
            }
            return t
        };
        function p(e) {
            if (Array.isArray(e))
                return e.every((function(e) {
                    return p(e)
                }
                ));
            try {
                return "undefined" !== typeof e.split(".").reduce((function(e, n) {
                    return e[n]
                }
                ), window)
            } catch (n) {
                return console.error(n),
                !1
            }
        }
        var f = function(e, n, t) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
              , a = r.firstDo
              , o = r.param;
            a ? e.tId ? (clearTimeout(e.tId),
            e.tId = setTimeout((function() {
                e.tId = 0,
                e.call(n, o)
            }
            ), t)) : (e.tId = 1,
            e.call(n, o)) : (clearTimeout(e.tId),
            e.tId = setTimeout((function() {
                e.call(n, o)
            }
            ), t))
        };
        function h(e, n, t) {
            return e >= n && e <= t
        }
        function m(e, n, t, r) {
            return e >= t && n <= r
        }
        function g(e) {
            try {
                var n = "navigation" === e.$options.parent.$options.name
                  , t = e.$options && e.$options.meta && e.$options.meta.fmpType;
                if (n || t)
                    return !0;
                var r = e._vnode.data.staticClass.includes("__pageRoot");
                return r
            } catch (a) {
                return !1
            }
        }
        function b(e, n) {
            var t = e.name && !n.name
              , r = !0
              , a = r ? "spa" : "ssr";
            if (t)
                return "".concat(a, ".enter");
            var o = !!s.slice(0, -1).find((function(n) {
                return n.to.fullPath === e.fullPath
            }
            ));
            return o ? "" : "".concat(a, ".forward")
        }
        function v() {
            return d
        }
        function k(e) {
            return i[e]
        }
        function w() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = v()
              , t = e.url
              , r = e.seq
              , a = e.successCode
              , o = e.method
              , u = e.params
              , d = l(t);
            i[e.url] = {
                pageId: n.pageId,
                current: n.current,
                referrer: n.referrer,
                url: t,
                seq: r,
                method: o,
                params: c(c({}, d), u),
                startTime: Date.now(),
                requestInfo: e,
                successCode: a || "core.ok",
                runSide: "client",
                fmp: e.fmp
            }
        }
        function y() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = e.params && e.params.body || {}
              , t = e.res && e.res.body || {}
              , r = i[e.url];
            r && (r.traceid = t.traceid || n.traceid,
            r.endTime = Date.now(),
            r.cost = r.endTime - r.startTime)
        }
        function I(e, n) {
            "function" === typeof n && u.cgi[e] && u.cgi[e].push(n)
        }
        function D(e) {
            for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                t[r - 1] = arguments[r];
            u.cgi[e] && u.cgi[e].forEach((function(e) {
                try {
                    e.apply(void 0, t)
                } catch (n) {
                    console.error(n)
                }
            }
            ))
        }
        function C(e) {
            "function" === typeof e && u.performance.push(e)
        }
        function x() {
            var e = performance.getEntries().length();
            performance.setResourceTimingBufferSize(e + 100)
        }
        function P() {
            if (p("PerformanceObserver")) {
                var e = new PerformanceObserver((function(e) {
                    u.performance.forEach((function(n) {
                        try {
                            n(e.getEntries())
                        } catch (t) {
                            console.error(t)
                        }
                    }
                    ))
                }
                ));
                e.observe({
                    entryTypes: ["resource"]
                })
            } else
                p(["performance.getEntries", "performance.setResourceTimingBufferSize"]) && (performance.onresourcetimingbufferfull = x,
                performance.onwebkitresourcetimingbufferfull = x)
        }
        function O(e, n) {
            "function" === typeof n && u.route[e] && u.route[e].push(n)
        }
        function R(e, n) {
            u.route[e] && u.route[e].forEach((function(e) {
                try {
                    e(n)
                } catch (t) {
                    console.error(t)
                }
            }
            ))
        }
        function S(e) {
            e.beforeEach((function(e, n, t) {
                var r = window.location
                  , a = r.protocol
                  , o = r.hostname
                  , i = r.port
                  , u = window.location.origin || "".concat(a, "//").concat(o).concat(i ? ":".concat(i) : "")
                  , l = n.name ? "".concat(u).concat(n.fullPath) : document.referrer
                  , p = e.name ? "".concat(u).concat(e.fullPath) : location.href;
                d.to = e,
                d.from = n,
                d.referer = l,
                d.current = p,
                d.pageId = e.fullPath,
                d.pageName = e.path,
                d.pageQuery = e.query,
                s.push(c({}, d)),
                t()
            }
            ))
        }
        function A() {
            O("page", S),
            I("beforeSend", w),
            I("afterSuccess", y),
            I("afterError", y)
        }
        var j = {
            canIUse: p,
            throttle: f,
            valInside: h,
            areaInside: m,
            isPageComp: g,
            getRouteType: b,
            getRouteInfo: v,
            getCgiInfo: k
        }
          , B = {
            addPerformance: C,
            execPerformance: P,
            addRoute: O,
            execRoute: R,
            addCgi: I,
            execCgi: D
        }
          , L = t("f1e2")
          , T = [];
        function E(e) {
            var n = e || T.splice(0);
            n.length && L["a"].sendEvent("performance.cgi", n)
        }
        function M() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            T.push(e),
            j.canIUse("PerformanceObserver") || (j.canIUse("performance.getEntries") ? q(performance.getEntries()) : j.throttle(E, this, 1500))
        }
        function _() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = e.response && e.response.data || {}
              , t = j.getCgiInfo(e.url);
            if (t) {
                var r = e.response.headers["content-type"]
                  , a = !0;
                r.toUpperCase().includes("JSON") && (a = n.code === t.successCode || "0" === n.resultCode);
                var o = {
                    url: e.url,
                    seq: t.seq,
                    payload: t.params,
                    startTime: t.startTime,
                    endTime: t.endTime,
                    cost: t.cost,
                    httpSuccess: e.httpSuccess,
                    status: e.response.status,
                    code: n.code,
                    serial: n.serial,
                    reason: n.reason,
                    method: t.method,
                    success: a
                };
                return o
            }
        }
        function F() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = _(e);
            M(n)
        }
        function H() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = "string" === typeof e.error ? e.error : e.error && e.error.message
              , t = _(e);
            t.message = n,
            M(t)
        }
        function q() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , n = e.filter((function(e) {
                return "xmlhttprequest" === e.initiatorType
            }
            ));
            T.forEach((function(e) {
                if (e.url) {
                    var t = n.find((function(n) {
                        return n.name.includes(e.url)
                    }
                    ));
                    t && (e.runSide = "client")
                }
            }
            )),
            j.throttle(E, this, 500)
        }
        function U() {
            B.addPerformance(q),
            B.addCgi("afterSuccess", F),
            B.addCgi("afterError", H)
        }
        window.cgiList = T;
        t("20d6");
        var N = t("75fc")
          , W = t("2b0e");
        function $(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n && (r = r.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, r)
            }
            return t
        }
        function z(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? $(Object(t), !0).forEach((function(n) {
                    Object(r["a"])(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        var V = {}
          , G = []
          , J = ["beforeEach", "beforeRouteEnter", "beforeResolve", "afterEach", "routeChanged"]
          , Z = [];
        function Q(e) {
            try {
                return e.$options.meta.fmpType
            } catch (n) {
                return "default"
            }
        }
        function X() {
            if (j.canIUse("performance.timing"))
                return performance.timing.navigationStart
        }
        function K() {
            var e = {};
            j.canIUse("performance.timing") && (e.navigationL1 = performance.timing),
            j.canIUse("performance.getEntriesByType") && (e.navigationL2 = performance.getEntriesByType("navigation")[0],
            e.paint = performance.getEntriesByType("paint"));
            var n = e.navigationL2 || e.navigationL1;
            return {
                timing: n,
                paintTimings: e.paint
            }
        }
        function Y(e, n) {
            var t = V[e]
              , r = X();
            if (t && r) {
                var a = t.routeType
                  , o = void 0 === a ? "" : a
                  , c = o.includes("forward")
                  , i = j.canIUse("PerformanceObserver")
                  , u = j.canIUse("performance.getEntries");
                c && i || !u || de(performance.getEntries());
                var d = o.includes("enter")
                  , s = d ? 0 : t.beforeEach - r
                  , l = t[n] - r
                  , p = G.filter((function(e) {
                    return j.areaInside(e.startTime, e.responseEnd, s, l)
                }
                ))
                  , f = Z.filter((function(e) {
                    return j.areaInside(e.startTime, e.responseEnd, s, l)
                }
                ))
                  , h = f.concat(p).map((function(e) {
                    return {
                        name: e.name,
                        cost: e.duration,
                        size: e.transferSize / 1e3
                    }
                }
                ));
                return h
            }
        }
        function ee(e, n) {
            var t = V[e]
              , r = X();
            if (t && r) {
                var a = t.routeType
                  , o = void 0 === a ? "" : a
                  , c = o.includes("forward")
                  , i = j.canIUse("PerformanceObserver")
                  , u = j.canIUse("performance.getEntries");
                c && i || !u || de(performance.getEntries());
                var d = o.includes("enter")
                  , s = d ? 0 : t.beforeEach - r
                  , l = n - r
                  , p = Z.filter((function(e) {
                    return j.valInside(e.startTime, s, l)
                }
                ))
                  , f = p.map((function(e) {
                    return e.responseEnd
                }
                )).filter((function(e) {
                    return e
                }
                ));
                return {
                    afterImage: r + Math.max.apply(Math, Object(N["a"])(f)),
                    imageCount: f.length
                }
            }
        }
        function ne(e, n) {
            var t = V[e] || {};
            t.done || (V[e] = z(z({}, t), n))
        }
        function te(e) {
            var n = [e.navigationStart, e.beforeRouteLeave, e.beforeDOM, e.beforeEach, e.routeChanged];
            return Math.min.apply(Math, Object(N["a"])(n.filter((function(e) {
                return e
            }
            ))))
        }
        function re(e) {
            var n = [e.mounted, e.afterDOM, e.routeChanged, e.DOMContentLoaded, e.afterCgi];
            return Math.max.apply(Math, Object(N["a"])(n.filter((function(e) {
                return e
            }
            ))))
        }
        function ae(e, n) {
            var t = V[e];
            if (console.log("logPage", n),
            t && !t.done && t.routeType) {
                var r = t.cgiList
                  , a = void 0 === r ? [] : r
                  , o = t.fmpType
                  , c = t.routeType
                  , i = void 0 === c ? "" : c
                  , u = t.error
                  , d = [a.filter((function(e) {
                    return e.fmp
                }
                )), a.filter((function(e) {
                    return j.valInside(e.startTime, t.beforeEach, t.mounted)
                }
                ))]
                  , s = d[0]
                  , l = "fmp" === o
                  , p = l && !s.length
                  , f = i.includes("spa") && !t.mounted
                  , h = p || f;
                if (u || !h) {
                    var m = d.find((function(e) {
                        return e.length
                    }
                    )) || a
                      , g = l ? s : m
                      , b = g.every((function(e) {
                        return e.done
                    }
                    ))
                      , v = "ssr.enter" === i || "static" === o
                      , k = v || u || b;
                    if (k) {
                        var w = z({}, t)
                          , y = i.includes("enter");
                        if (y) {
                            var I = K()
                              , D = I.timing
                              , C = I.paintTimings;
                            w.navigationTiming = D,
                            w.paintTimings = C,
                            w.navigationStart = X(),
                            w.beforeDOM = window.__ctPerformance.__BEFOREDOM__,
                            w.afterDOM = window.__ctPerformance.__AFTERDOM__,
                            C.length > 0 && (w.whiteScreenTime = C[0].startTime),
                            w.httpCost = performance.timing.responseEnd - performance.timing.navigationStart
                        }
                        var x = J.reverse().find((function(e) {
                            return t[e]
                        }
                        ));
                        w.afterAsset = t[x],
                        w.assetList = Y(e, x),
                        s.length && b && (w.afterCgi = Math.max.apply(Math, Object(N["a"])(s.map((function(e) {
                            return e.endTime
                        }
                        )))));
                        var P = s.map((function(e) {
                            return e.cmdId
                        }
                        ));
                        w.cgiList = w.cgiList.map((function(e) {
                            return {
                                url: e.url,
                                serial: e.serial,
                                cost: e.cost,
                                fmp: P.includes(e.cmdId)
                            }
                        }
                        )),
                        w.startTime = te(w),
                        w.endTime = re(w),
                        w.cost = w.endTime - w.startTime,
                        w.reportStage = n;
                        var O = ee(e, w.endTime) || {};
                        w.afterImage = O.afterImage,
                        w.imageCount = O.imageCount,
                        L["a"].sendEvent("performance.page", [z({
                            current: w.pageUrl
                        }, w)]),
                        V[e] = {
                            done: !0
                        }
                    }
                }
            }
        }
        function oe() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = j.getCgiInfo(e.url);
            if (n) {
                var t = V[n.pageId];
                if (t) {
                    var r = t.cgiList || []
                      , a = r.findIndex((function(n) {
                        return n.url === e.url
                    }
                    ));
                    a >= 0 && r.splice(a, 1, n),
                    r.push(n)
                }
            }
        }
        function ce() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            ue(e, n)
        }
        function ie() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            ue(e, n)
        }
        function ue() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = j.getCgiInfo(e.url);
            n && (n.done = !0,
            W["default"].nextTick((function() {
                ae(n.pageId, "afterCgi")
            }
            )))
        }
        function de() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , n = e.filter((function(e) {
                var n = ["navigation", "link", "script"].includes(e.initiatorType)
                  , t = G.includes(e);
                return n && !t
            }
            ));
            G.push.apply(G, Object(N["a"])(n));
            var t = e.filter((function(e) {
                var n = ["img"].includes(e.initiatorType)
                  , t = Z.includes(e);
                return n && !t
            }
            ));
            Z.push.apply(Z, Object(N["a"])(t))
        }
        function se(e) {
            e.beforeEach((function(e, n, t) {
                var r = j.getRouteType(e, n)
                  , a = j.getRouteInfo()
                  , o = a.pageName
                  , c = a.pageQuery
                  , i = a.current;
                ne(e.fullPath, {
                    beforeEach: Date.now(),
                    routeType: r,
                    pageUrl: i,
                    pageName: o,
                    pageQuery: c,
                    cgiList: []
                }),
                "ssr.enter" === r && (ne(e.fullPath, {
                    beforeRouteUpdate: Date.now()
                }),
                console.log("%c beforeEach", "color: green")),
                t()
            }
            )),
            e.beforeResolve((function(e, n, t) {
                ne(e.fullPath, {
                    beforeResolve: Date.now()
                }),
                t()
            }
            )),
            e.afterEach((function(e) {
                ne(e.fullPath, {
                    afterEach: Date.now()
                })
            }
            )),
            W["default"].mixin({
                beforeRouteEnter: function(e, n, t) {
                    ne(e.fullPath, {
                        beforeRouteEnter: Date.now()
                    }),
                    console.log("%c beforeRouteEnter", "color: green"),
                    t()
                },
                beforeRouteUpdate: function(e, n, t) {
                    ne(e.fullPath, {
                        beforeRouteUpdate: Date.now()
                    }),
                    console.log("%c beforeRouteUpdate", "color: green"),
                    t()
                },
                beforeRouteLeave: function(e, n, t) {
                    ne(e.fullPath, {
                        beforeRouteLeave: Date.now()
                    }),
                    console.log("%c beforeRouteLeave", "color: green"),
                    t()
                },
                created: function() {
                    if (j.isPageComp(this)) {
                        var e = Q(this);
                        le = this.$route.fullPath,
                        ne(this.$route.fullPath, {
                            created: Date.now(),
                            fmpType: e
                        }),
                        console.log("%c created", "color: green")
                    }
                },
                mounted: function() {
                    j.isPageComp(this) && (ne(this.$route.fullPath, {
                        mounted: Date.now()
                    }),
                    console.log("%c mounted", "color: green", Date.now()),
                    ae(this.$route.fullPath, "mounted"))
                }
            })
        }
        window.pageStore = V,
        window.addEventListener("DOMContentLoaded", (function() {
            ne(le, {
                DOMContentLoaded: Date.now()
            })
        }
        )),
        document.onreadystatechange = function(e) {
            "complete" === document.readyState && (ne(le, {
                readyComplete: Date.now()
            }),
            console.log("%c complete", "color: green", Date.now()),
            ae(le, "DOMContentLoaded"))
        }
        ;
        var le = "";
        function pe() {
            B.addPerformance(de),
            B.addRoute("page", se),
            B.addCgi("beforeSend", oe),
            B.addCgi("afterSuccess", ce),
            B.addCgi("afterError", ie)
        }
        function fe(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            B.execCgi(e, n, t)
        }
        function he(e) {
            B.execRoute("page", e)
        }
        function me() {
            B.execPerformance(),
            A(),
            U(),
            pe()
        }
        console.log("performance init"),
        me();
        n["a"] = {
            observerCgi: fe,
            observerPage: he
        }
    },
    "3fc8": function(e, n, t) {
        "use strict";
        t.d(n, "d", (function() {
            return v
        }
        )),
        t.d(n, "b", (function() {
            return k
        }
        )),
        t.d(n, "c", (function() {
            return w
        }
        ));
        t("96cf");
        var r = t("3b8d")
          , a = (t("a481"),
        t("7f7f"),
        t("7514"),
        t("cadf"),
        t("ac6a"),
        t("28a5"),
        t("551c"),
        t("bdd0"))
          , o = "/alogic-ctcloudet/v1/portal/provinceZone/Get";
        function c(e) {
            return a["a"].get(o, {
                params: {
                    provinceId: e
                },
                fmp: !0
            })
        }
        function i(e) {
            var n = e;
            if (!n) {
                var t = "无url返回，未拉取到页面数据";
                return Promise.reject(t)
            }
            return a["a"].get(n)
        }
        var u = t("7f6d")
          , d = t("2f62");
        function s(e) {
            var n = {}
              , t = e.split(";");
            return t.forEach((function(e) {
                var t = e.split("=")[0] ? e.split("=")[0].trim() : ""
                  , r = e.split("=")[1] ? e.split("=")[1].trim() : "";
                t && (n[t] = r)
            }
            )),
            n
        }
        var l = function(e) {
            function n(n) {
                if (!e.module)
                    return null;
                var t = e.module.data.item.find((function(e) {
                    return e.groupCode.pValue === n
                }
                ));
                return t ? t.name.pValue : null
            }
            Object.values(e).forEach((function(e) {
                "ArrayEditor" === e.editor ? e.data.item.forEach((function(e) {
                    Object.values(e).forEach((function(e) {
                        ("dataArray" === e.editor || e.type && "dataArray" === e.type.editor) && e.pValue && (e.pValueParse = JSON.parse(e.pValue)),
                        "params" === e.pId && e.pValue && (e.pValueParse = s(e.pValue))
                    }
                    ))
                }
                )) : Object.values(e).forEach((function(e) {
                    ("dataArray" === e.editor || e.type && "dataArray" === e.type.editor) && e.pValue && (e.pValueParse = JSON.parse(e.pValue)),
                    "params" === e.pId && e.pValue && (e.pValueParse = s(e.pValue))
                }
                ))
            }
            ));
            var t = [["seckillTime", "seckillList", "seckill"], ["hotGoodsCategory", "hotGoodsList", "hotGoods"], ["cloudGoodsCategory", "cloudGoodsList", "cloudGoods"], ["caseCategory", "caseList", "cases"]];
            t.forEach((function(t) {
                if (e[t[0]]) {
                    var r = [];
                    e[t[0]].data.item.forEach((function(e) {
                        e.code && r.push({
                            id: e.code,
                            category: e,
                            list: []
                        })
                    }
                    )),
                    e[t[1]] && e[t[1]].data.item.forEach((function(e) {
                        if (e.category.pValue) {
                            var n = Object(u["m"])(r, "id", e.category.pValue);
                            n > -1 && r[n].list.push(e)
                        }
                    }
                    )),
                    e[t[2]] = {
                        id: t[2],
                        name: n(t[2]) || e[t[0]].name.split("-")[0],
                        list: r
                    }
                }
            }
            ));
            var r = [["mixGoodsList", "mixGoods"], ["serviceList", "service"], ["module", "module"]];
            return r.forEach((function(t) {
                e[t[0]] && (e[t[1]] = {
                    id: t[1],
                    name: n(t[1]) || e[t[0]].name.split("-")[0],
                    list: e[t[0]].data.item
                })
            }
            )),
            e
        }
          , p = {
            loaded: !1,
            provinceId: "",
            pageUrl: "",
            pageData: {}
        }
          , f = function(e) {
            return function(n) {
                return n.pageData[e] || null
            }
        }
          , h = {
            provinceId: f("provinceId"),
            module: f("module"),
            topBanner: f("topBanner"),
            seckill: f("seckill"),
            hotGoods: f("hotGoods"),
            cloudGoods: f("cloudGoods"),
            mixGoods: f("mixGoods"),
            service: f("service"),
            cases: f("cases"),
            footBanner: f("footBanner")
        }
          , m = {
            setLoaded: function(e, n) {
                e.loaded = n
            },
            setProvinceId: function(e, n) {
                e.provinceId = n.provinceId
            },
            setMeta: function(e, n) {
                e.pageUrl = n.jsonPath
            },
            setPageData: function(e, n) {
                e.pageData = l(n)
            }
        }
          , g = {
            getData: function() {
                var e = Object(r["a"])(regeneratorRuntime.mark((function e(n, t) {
                    var r, a;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return r = n.dispatch,
                                a = n.commit,
                                a("setLoaded", !1),
                                a("setProvinceId", t),
                                e.next = 5,
                                r("getMeta");
                            case 5:
                                return e.next = 7,
                                r("getPageData");
                            case 7:
                                a("setLoaded", !0);
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                function n(n, t) {
                    return e.apply(this, arguments)
                }
                return n
            }(),
            getMeta: function() {
                var e = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                    var t, r, a;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return t = n.commit,
                                r = n.state,
                                e.next = 3,
                                c(r.provinceId);
                            case 3:
                                a = e.sent,
                                t("setMeta", a.data);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                function n(n) {
                    return e.apply(this, arguments)
                }
                return n
            }(),
            getPageData: function() {
                var e = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                    var t, r, a;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return t = n.commit,
                                r = n.state,
                                e.next = 3,
                                i(r.pageUrl);
                            case 3:
                                a = e.sent,
                                t("setPageData", a.data);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                function n(n) {
                    return e.apply(this, arguments)
                }
                return n
            }()
        }
          , b = (n["a"] = {
            namespaced: !0,
            state: p,
            getters: h,
            mutations: m,
            actions: g
        },
        Object(d["a"])("province"))
          , v = b.mapState
          , k = b.mapActions
          , w = b.mapGetters
    },
    "428f": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            name: "enterprise",
            path: "/activity/enterprise",
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("enterprise")]).then(t.bind(null, "29e6"))
            },
            meta: {
                title: "云领智企 助力百万企业转型腾飞",
                platform: ["all"]
            },
            children: [{
                name: "enterprise.page",
                path: "/enterprise/:column",
                meta: {
                    title: "云领智企 助力百万企业转型腾飞",
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("enterprise")]).then(t.bind(null, "09ad"))
                }
            }]
        }
    },
    "42a9": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = [{
            path: "/activity/2021/:activityId/:sub",
            name: "activity.2021.sub",
            meta: {
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("activity.2021")]).then(t.bind(null, "3049"))
            }
        }, {
            path: "/activity/2021/:activityId",
            name: "activity.2021",
            meta: {
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("activity.2021")]).then(t.bind(null, "3049"))
            }
        }, {
            path: "/activity/2022/:activityId/:sub",
            name: "activity.2022.sub",
            meta: {
                platform: ["all"]
            },
            props: {
                prefix: "2022"
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("activity.2021")]).then(t.bind(null, "3049"))
            }
        }, {
            path: "/activity/2022/:activityId",
            name: "activity.2022",
            meta: {
                platform: ["all"]
            },
            props: {
                prefix: "2022"
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("activity.2021")]).then(t.bind(null, "3049"))
            }
        }]
    },
    4360: function(e, n, t) {
        "use strict";
        var r = t("2b0e")
          , a = t("2f62")
          , o = (t("f751"),
        t("6bf2"))
          , c = t("7f6d")
          , i = t("2ef0")
          , u = t.n(i)
          , d = {}
          , s = {
            namespaced: !0,
            state: u.a.cloneDeep(d),
            mutations: {
                reset: function(e) {
                    Object.assign(e, d)
                }
            },
            actions: {
                login: function(e, n) {
                    var t = e.commit;
                    o["default"].updateLoginStatus(!0),
                    t("account/setUserInfo", n, {
                        root: !0
                    })
                },
                logout: function(e) {
                    var n = e.commit;
                    e.rootState;
                    o["default"].updateLoginStatus(!1),
                    Object(c["H"])("addressInfo"),
                    Object(c["H"])("invoiceInfo"),
                    Object(c["H"])("userInfo"),
                    n("auth/reset", null, {
                        root: !0
                    }),
                    n("account/reset", null, {
                        root: !0
                    })
                }
            }
        }
          , l = s
          , p = t("768b")
          , f = (t("551c"),
        t("ac6a"),
        t("cadf"),
        t("5df3"),
        t("32ee"))
          , h = t("7306")
          , m = t("0680")
          , g = {
            userInfo: {},
            privacyUserInfo: {},
            queryAccountInfoPromise: null,
            capital: {},
            voucher: {},
            coupon: {}
        }
          , b = {
            a: {
                b: 1
            }
        }
          , v = {
            namespaced: !0,
            state: u.a.cloneDeep(g),
            mutations: {
                setUserInfo: function(e, n) {
                    Object(c["L"])("userInfo", n),
                    e.userInfo = n
                },
                setPrivacyUserInfo: function(e, n) {
                    Object(c["L"])("privacyUserInfo", n),
                    e.privacyUserInfo = n
                },
                setAccountCapital: function(e, n) {
                    e.capital = n
                },
                setAccountVoucher: function(e, n) {
                    e.voucher = n
                },
                setAccountCoupon: function(e, n) {
                    e.coupon = n
                },
                reset: function(e) {
                    Object.assign(e, g)
                },
                setUserItemInfo: function(e, n) {
                    Object.assign(e.userInfo, n),
                    Object.assign(e.privacyUserInfo, n)
                },
                setQueryAccountInfoPromise: function(e, n) {
                    e.queryAccountInfoPromise = n
                }
            },
            getters: {
                authStateText: function(e) {
                    return m["d"][e.userInfo.auditStatus - 0] || ""
                },
                auditStatus: function(e) {
                    return e.userInfo.auditStatus
                },
                accountType: function(e) {
                    return e.userInfo.accountType
                },
                accountCanceling: function(e) {
                    var n = e.userInfo.invalidStatus;
                    return "1" === "".concat(n) || "2" === "".concat(n)
                }
            },
            actions: {
                queryAccountInfo: function(e) {
                    var n = e.commit
                      , t = (e.state,
                    Object(f["E"])().then((function(e) {
                        return n("setPrivacyUserInfo", e.data),
                        Promise.all([Object(h["d"])(), Promise.resolve(e.data)])
                    }
                    )).then((function(e) {
                        var t = Object(p["a"])(e, 2)
                          , r = t[0]
                          , a = t[1]
                          , o = !1;
                        "101" === r.data.status && (o = !0),
                        a.emailStatus = o,
                        a.test = b.a.b,
                        b.a.b = b.a.b + 1,
                        n("setUserInfo", a)
                    }
                    )));
                    return n("setQueryAccountInfoPromise", t),
                    t
                },
                queryAccountCapital: function(e) {
                    var n = e.commit;
                    return Object(f["z"])().then((function(e) {
                        n("setAccountCapital", e.data)
                    }
                    ))
                },
                queryInactiveList: function(e) {
                    var n = e.commit;
                    return Object(f["D"])().then((function(e) {
                        n("setAccountVoucher", e.data)
                    }
                    ))
                },
                queryCouponList: function(e, n) {
                    var t = e.commit;
                    return Object(f["B"])(n).then((function(e) {
                        t("setAccountCoupon", e.data)
                    }
                    ))
                }
            }
        }
          , k = v
          , w = (t("7f7f"),
        {
            active: 0,
            remark: "",
            createAgency: {
                agencyType: 0,
                agencyAccType: 2,
                agencyLevel: 3,
                agencySort: 1
            },
            contractData: {},
            bankData: {},
            accountManagerCommissionerId1: ""
        })
          , y = {
            changeValue: function(e, n) {
                var t = n.name
                  , r = n.value;
                e[t] = r
            },
            setAgencyData: function(e, n) {
                Object.assign(e.createAgency, n)
            },
            setContractData: function(e, n) {
                Object.assign(e.contractData, n)
            },
            setBankData: function(e, n) {
                Object.assign(e.bankData, n)
            },
            setContractDataTypeActive: function(e, n) {
                e.contractData["typeActive"] = n
            },
            changeContractData: function(e, n) {
                var t = n.name
                  , r = n.value;
                e.contractData[t] = r
            },
            clearContractData: function(e, n) {
                e.contractData = n
            },
            clearBankData: function(e, n) {
                e.bankData = n
            },
            changeBankData: function(e, n) {
                var t = n.name
                  , r = n.value;
                e.bankData[t] = r
            },
            setAccountManagerCommissionerId1: function(e, n) {
                e.accountManagerCommissionerId1 = n
            }
        }
          , I = {}
          , D = {}
          , C = {
            namespaced: !0,
            state: w,
            mutations: y,
            actions: I,
            getters: D
        }
          , x = {
            globalModalClassName: "",
            modal: {}
        }
          , P = {
            MODAL_CLASS_NAME: function(e, n) {
                e.globalModalClassName = n
            },
            ADD_MODAL: function(e, n) {
                var t = n.id
                  , r = n.modal;
                e.modal[t] = r
            },
            DELETE_MODAL: function(e, n) {
                delete e.modal[n]
            },
            OPEN_MODAL: function(e, n) {
                var t = e.modal[n];
                t && t.open()
            }
        }
          , O = {
            SET_MODAL_CLASS_NAME: function(e, n) {
                var t = e.commit;
                t("MODAL_CLASS_NAME", n)
            },
            ADD_MODAL: function(e, n) {
                var t = e.commit;
                t("ADD_MODAL", n)
            },
            DELETE_MODAL: function(e, n) {
                var t = e.commit;
                t("DELETE_MODAL", n)
            },
            openModal: function(e, n) {
                var t = e.commit;
                t("OPEN_MODAL", n)
            }
        }
          , R = {
            namespaced: !0,
            state: x,
            actions: O,
            mutations: P
        }
          , S = t("3fc8");
        r["default"].use(a["b"]);
        n["a"] = new a["b"].Store({
            modules: {
                auth: l,
                account: k,
                agent: C,
                activity: R,
                province: S["a"]
            }
        })
    },
    4364: function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = [{
            name: "activity.customer",
            path: "/activity/customer",
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("customer&5g")]).then(t.bind(null, "02c7"))
            },
            meta: {
                title: "客户IT上云",
                platform: ["all"]
            },
            props: {
                ACTIVITY_DOMAIN: "customer"
            }
        }, {
            name: "activity.5gcustom",
            path: "/activity/5gcustom",
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("customer&5g")]).then(t.bind(null, "02c7"))
            },
            meta: {
                title: "5G定制网",
                platform: ["all"]
            },
            props: {
                ACTIVITY_DOMAIN: "5g"
            }
        }]
    },
    4773: function(e, n, t) {
        "use strict";
        t.d(n, "e", (function() {
            return C
        }
        )),
        t.d(n, "a", (function() {
            return m
        }
        )),
        t.d(n, "c", (function() {
            return u
        }
        )),
        t.d(n, "b", (function() {
            return d
        }
        )),
        t.d(n, "d", (function() {
            return s
        }
        )),
        t.d(n, "f", (function() {
            return l
        }
        ));
        t("8e6e"),
        t("ac6a"),
        t("cadf"),
        t("456d");
        var r = t("bd86")
          , a = t("7618")
          , o = (t("28a5"),
        t("a481"),
        t("4917"),
        t("3b2b"),
        function(e, n, t) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "/"
              , a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ""
              , o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5]
              , c = new Date;
            t && c.setMinutes(c.getMinutes() + +t),
            document.cookie = e + "=" + escape("" + n) + (t ? ";expires=" + c.toUTCString() : "") + (r ? ";path=" + r : "") + (a ? ";domain=" + a : "") + (o ? ";secure=true" : "")
        }
        )
          , c = function(e) {
            var n = new RegExp("(^| )" + e + "(?:=([^;]*))?(;|$)")
              , t = document.cookie.match(n);
            return t && t[2] ? unescape(t[2]) : ""
        }
          , i = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.hash
              , t = new RegExp("(^|&)" + e + "=([^&#]*)([&#]?)")
              , r = n.substr(n.indexOf("?") + 1).match(t);
            return r ? r[2] : ""
        }
          , u = function() {
            var e = i("track", window.location.href) || "";
            return e = window.decodeURIComponent(e),
            e && o("ct_m_track", e, null, "/", ".ctyun.cn"),
            e || c("ct_m_track") || ""
        }
          , d = function() {
            var e = u();
            if (e)
                return "";
            var n = document.referrer || ""
              , t = !n || n.indexOf("ctyun.cn") > -1;
            if (t)
                return c("ct_m_search_from");
            var r = ["baidu.com", "so.com", "sogou.com", "sm.cn", "google.com", "bing.com", "toutiao.com"]
              , a = r.filter((function(e) {
                return n.indexOf(e) > -1
            }
            ));
            if (0 === a.length)
                return "";
            a = a[0];
            var i = a.replace(/\..*/, "");
            return o("ct_m_search_from", i, null, "/", ".ctyun.cn"),
            i
        }
          , s = function(e) {
            return e = e || u(),
            e.indexOf("-") > -1 && e.indexOf("_") > -1
        }
          , l = function(e) {
            e = e || u();
            var n = s(e)
              , t = {};
            if (!n)
                return t;
            var r = e.split("-");
            return r.forEach((function(e) {
                var n = e.split("_");
                t[n[0]] = n[1] || ""
            }
            )),
            t
        }
          , p = function(e) {
            var n = ["source_360ps", "source_360ms", "source_360zs", "source_360web"];
            return n.some((function(n) {
                return e.indexOf(n) > -1
            }
            ))
        }
          , f = function(e) {
            return i("bd_vid", e) || ""
        }
          , h = function(e) {
            e = e || window.location.href;
            var n = p(e) || f(e);
            return n
        }
          , m = function() {
            var e = window.location.href
              , n = h(e);
            return n && o("ct_m_ocpc_url", e, null, "/", ".ctyun.cn"),
            n ? e : c("ct_m_ocpc_url")
        }
          , g = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            n = JSON.stringify(n),
            navigator.sendBeacon(e, n)
        }
          , b = t("7f6d");
        function v(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n && (r = r.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, r)
            }
            return t
        }
        function k(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? v(Object(t), !0).forEach((function(n) {
                    Object(r["a"])(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        var w = "/collection/gw/pv/BaiduOcpc"
          , y = "/collection/gw/pv/UploadWebConvert"
          , I = {
            source_360ps: "ocpc_ps_convert",
            source_360ms: "ocpc_ms_convert",
            source_360zs: "ocpc_zs_convert",
            source_360web: "ocpc_web_convert"
        }
          , D = function(e) {
            if (!e)
                return !1;
            var n = u()
              , t = decodeURIComponent(i("track", e));
            return n === t
        }
          , C = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3
              , n = m();
            D(n) && (f(n) ? x(n, e) : P(n))
        };
        window.ocpcReport = C;
        var x = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3
              , t = "object" === Object(a["a"])(n) ? k(k({}, n), {}, {
                logidUrl: e
            }) : {
                newType: n,
                logidUrl: e
            }
              , r = {
                conversions: [t]
            }
              , o = l()
              , c = o.source;
            c && (r.source = c);
            var i = {
                data: r
            };
            g(w, i)
        }
          , P = function(e) {
            var n = Object.keys(I).filter((function(n) {
                return e.indexOf(n) > -1
            }
            ))[0]
              , t = I[n]
              , r = Math.floor(Date.now() / 1e3)
              , a = "" + Date.now() + Object(b["k"])()
              , o = {
                requestTime: r,
                dataIndustry: t,
                transId: a,
                event: "SUBMIT",
                eventTime: r
            }
              , c = i("qhclickid", e);
            c && (o.qhcLickId = c);
            var u = {
                data: o
            };
            g(y, u)
        }
    },
    "4baf": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/cloudHostDiscount",
            name: "cloudHostDiscount",
            meta: {
                title: "云主机特惠",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("chunk-2d213728"), t.e("cloudHostDiscount")]).then(t.bind(null, "2740"))
            }
        }
    },
    "52e7": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/noviceRegister",
            name: "noviceRegister",
            meta: {
                title: "新手注册",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("chunk-2d213728"), t.e("noviceSpecialty")]).then(t.bind(null, "da68"))
            }
        }
    },
    "582e": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/collect",
            name: "collect",
            meta: {
                title: "新年大Fang价-建站活动",
                platform: ["all"]
            },
            component: function() {
                return t.e("collect").then(t.bind(null, "58d5"))
            }
        }
    },
    6715: function(e, n, t) {},
    6803: function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = [{
            name: "activity.eComputer",
            path: "/activity/eComputer",
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("eComputer")]).then(t.bind(null, "1eea"))
            },
            meta: {
                title: "0元试用云电脑",
                platform: ["all"]
            }
        }]
    },
    6992: function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = [{
            name: "activity.eComputer2",
            path: "/activity/eComputer2",
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("eComputer2")]).then(t.bind(null, "c709"))
            },
            meta: {
                title: "随身云电脑",
                platform: ["all"]
            },
            props: {
                activityId: "eComputer2"
            }
        }]
    },
    "6a74": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = [{
            path: "/activity/2021818",
            name: "activity.2021818",
            meta: {
                title: "818大促",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("2021818")]).then(t.bind(null, "1834"))
            },
            props: {
                activityId: "2021818",
                color: "#FFFFFF",
                background: "linear-gradient(#1D2364 0%, #1D2364 2.6rem, #3B207E 42%, #2E2FA8 100%)"
            }
        }, {
            name: "activity.2021818.renew",
            path: "/activity/2021818/renew",
            meta: {
                title: "老用户续费专区",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("2021818")]).then(t.bind(null, "1834"))
            },
            props: {
                activityId: "2021818.renew",
                background: "#1E2365",
                color: "#FFFFFF"
            }
        }]
    },
    "6bf2": function(e, n, t) {
        "use strict";
        t.r(n);
        var r = !1
          , a = {
            updateLoginStatus: function(e) {
                r = e
            },
            isLogin: function() {
                return r
            }
        }
          , o = a;
        n["default"] = o
    },
    7306: function(e, n, t) {
        "use strict";
        t.d(n, "o", (function() {
            return i
        }
        )),
        t.d(n, "m", (function() {
            return d
        }
        )),
        t.d(n, "l", (function() {
            return l
        }
        )),
        t.d(n, "n", (function() {
            return f
        }
        )),
        t.d(n, "y", (function() {
            return m
        }
        )),
        t.d(n, "u", (function() {
            return b
        }
        )),
        t.d(n, "v", (function() {
            return k
        }
        )),
        t.d(n, "j", (function() {
            return y
        }
        )),
        t.d(n, "h", (function() {
            return D
        }
        )),
        t.d(n, "k", (function() {
            return x
        }
        )),
        t.d(n, "d", (function() {
            return O
        }
        )),
        t.d(n, "c", (function() {
            return S
        }
        )),
        t.d(n, "a", (function() {
            return j
        }
        )),
        t.d(n, "b", (function() {
            return L
        }
        )),
        t.d(n, "g", (function() {
            return E
        }
        )),
        t.d(n, "r", (function() {
            return _
        }
        )),
        t.d(n, "i", (function() {
            return H
        }
        )),
        t.d(n, "p", (function() {
            return U
        }
        )),
        t.d(n, "z", (function() {
            return W
        }
        )),
        t.d(n, "s", (function() {
            return z
        }
        )),
        t.d(n, "e", (function() {
            return G
        }
        )),
        t.d(n, "f", (function() {
            return Z
        }
        )),
        t.d(n, "x", (function() {
            return X
        }
        )),
        t.d(n, "A", (function() {
            return Y
        }
        )),
        t.d(n, "w", (function() {
            return ne
        }
        )),
        t.d(n, "t", (function() {
            return re
        }
        )),
        t.d(n, "q", (function() {
            return oe
        }
        ));
        t("551c"),
        t("96cf");
        var r = t("3b8d")
          , a = t("bdd0")
          , o = t("4328")
          , c = t.n(o);
        function i(e) {
            return u.apply(this, arguments)
        }
        function u() {
            return u = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "account/login",
                            e.abrupt("return", a["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            u.apply(this, arguments)
        }
        function d() {
            return s.apply(this, arguments)
        }
        function s() {
            return s = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "thirdLogin/getBrief",
                            e.abrupt("return", a["a"].get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            s.apply(this, arguments)
        }
        function l(e) {
            return p.apply(this, arguments)
        }
        function p() {
            return p = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "thirdLogin/createOpenUser",
                            e.abrupt("return", a["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            p.apply(this, arguments)
        }
        function f() {
            return h.apply(this, arguments)
        }
        function h() {
            return h = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "thirdLogin/getOpenUser",
                            e.abrupt("return", a["a"].get(n, {
                                fmp: !0
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            h.apply(this, arguments)
        }
        function m(e) {
            return g.apply(this, arguments)
        }
        function g() {
            return g = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "thirdLogin/unbindOpenUser",
                            e.abrupt("return", a["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            g.apply(this, arguments)
        }
        function b(e) {
            return v.apply(this, arguments)
        }
        function v() {
            return v = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/account/sendMobileCode",
                            e.abrupt("return", a["a"].post(t, c.a.stringify(n), {
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            v.apply(this, arguments)
        }
        function k(e) {
            return w.apply(this, arguments)
        }
        function w() {
            return w = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/account/sendMobileCodeSpring",
                            e.abrupt("return", a["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            w.apply(this, arguments)
        }
        function y(e) {
            return I.apply(this, arguments)
        }
        function I() {
            return I = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/account/createAccountWithCodeAfterCheck",
                            e.abrupt("return", a["a"].post(t, c.a.stringify(n), {
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            I.apply(this, arguments)
        }
        function D(e) {
            return C.apply(this, arguments)
        }
        function C() {
            return C = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/account/checkRegisterPassword",
                            e.abrupt("return", a["a"].post(t, c.a.stringify(n), {
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            C.apply(this, arguments)
        }
        function x(e) {
            return P.apply(this, arguments)
        }
        function P() {
            return P = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/account/createAccount",
                            e.abrupt("return", a["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            P.apply(this, arguments)
        }
        function O(e) {
            return R.apply(this, arguments)
        }
        function R() {
            return R = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/user/findPass/QueryEmailStatus2",
                            e.abrupt("return", a["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            R.apply(this, arguments)
        }
        function S(e) {
            return A.apply(this, arguments)
        }
        function A() {
            return A = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/user/findPass/QueryEmailStat",
                            e.abrupt("return", a["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            A.apply(this, arguments)
        }
        function j(e) {
            return B.apply(this, arguments)
        }
        function B() {
            return B = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/user/findPass/CheckEmailSame",
                            e.abrupt("return", a["a"].post(t, c.a.stringify(n), {
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            B.apply(this, arguments)
        }
        function L(e) {
            return T.apply(this, arguments)
        }
        function T() {
            return T = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/user/findPass/QueryEmailList",
                            e.abrupt("return", a["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            T.apply(this, arguments)
        }
        function E(e) {
            return M.apply(this, arguments)
        }
        function M() {
            return M = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/self/VerifySmsCode",
                            e.abrupt("return", a["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            M.apply(this, arguments)
        }
        function _(e) {
            return F.apply(this, arguments)
        }
        function F() {
            return F = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/user/findPass/ResetPwdNew",
                            e.abrupt("return", a["a"].post(t, c.a.stringify(n), {
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            F.apply(this, arguments)
        }
        function H() {
            return q.apply(this, arguments)
        }
        function q() {
            return q = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "account/validateToken",
                            e.abrupt("return", a["a"].get(n, {
                                headers: {
                                    noAuth: !0
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            q.apply(this, arguments)
        }
        function U() {
            return N.apply(this, arguments)
        }
        function N() {
            return N = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "account/logout",
                            e.abrupt("return", a["a"].get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            N.apply(this, arguments)
        }
        function W(e) {
            return $.apply(this, arguments)
        }
        function $() {
            return $ = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/user/pwd/Update",
                            e.abrupt("return", a["a"].post(t, c.a.stringify(n), {
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            $.apply(this, arguments)
        }
        function z(e) {
            return V.apply(this, arguments)
        }
        function V() {
            return V = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/saml/bind",
                            e.abrupt("return", a["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            V.apply(this, arguments)
        }
        function G(e) {
            return J.apply(this, arguments)
        }
        function J() {
            return J = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/account/SecondSendMobileCode",
                            e.abrupt("return", a["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            J.apply(this, arguments)
        }
        function Z(e) {
            return Q.apply(this, arguments)
        }
        function Q() {
            return Q = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/account/SecondVerifySmsCode",
                            e.abrupt("return", a["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            Q.apply(this, arguments)
        }
        function X(e) {
            return K.apply(this, arguments)
        }
        function K() {
            return K = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/user/SlideVerify",
                            e.abrupt("return", a["a"].post(t, c.a.stringify(n), {
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            K.apply(this, arguments)
        }
        function Y(e) {
            return ee.apply(this, arguments)
        }
        function ee() {
            return ee = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/user/VerifySlideVerify",
                            e.abrupt("return", a["a"].post(t, c.a.stringify(n), {
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            ee.apply(this, arguments)
        }
        function ne(e) {
            return te.apply(this, arguments)
        }
        function te() {
            return te = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/self/SendMobileCodeResetPwd",
                            e.abrupt("return", a["a"].post(t, c.a.stringify(n), {
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            te.apply(this, arguments)
        }
        function re(e) {
            return ae.apply(this, arguments)
        }
        function ae() {
            return ae = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/self/SendEmailCodeResetPwd",
                            e.abrupt("return", a["a"].post(t, c.a.stringify(n), {
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            ae.apply(this, arguments)
        }
        function oe() {
            return ce.apply(this, arguments)
        }
        function ce() {
            return ce = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "alogic-ctcloudet/v1/portal/banner/GetDomain?domain=ctyun.login.notice",
                            e.abrupt("return", a["a"].get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            ce.apply(this, arguments)
        }
    },
    "7f6d": function(e, n, t) {
        "use strict";
        t.d(n, "t", (function() {
            return Y
        }
        )),
        t.d(n, "F", (function() {
            return ee
        }
        )),
        t.d(n, "j", (function() {
            return y
        }
        )),
        t.d(n, "d", (function() {
            return I
        }
        )),
        t.d(n, "N", (function() {
            return D
        }
        )),
        t.d(n, "r", (function() {
            return C
        }
        )),
        t.d(n, "q", (function() {
            return x
        }
        )),
        t.d(n, "M", (function() {
            return P
        }
        )),
        t.d(n, "w", (function() {
            return O
        }
        )),
        t.d(n, "u", (function() {
            return R
        }
        )),
        t.d(n, "A", (function() {
            return S
        }
        )),
        t.d(n, "a", (function() {
            return A
        }
        )),
        t.d(n, "b", (function() {
            return j
        }
        )),
        t.d(n, "O", (function() {
            return L
        }
        )),
        t.d(n, "K", (function() {
            return T
        }
        )),
        t.d(n, "J", (function() {
            return E
        }
        )),
        t.d(n, "c", (function() {
            return M
        }
        )),
        t.d(n, "f", (function() {
            return _
        }
        )),
        t.d(n, "i", (function() {
            return F
        }
        )),
        t.d(n, "k", (function() {
            return H
        }
        )),
        t.d(n, "C", (function() {
            return q
        }
        )),
        t.d(n, "z", (function() {
            return g
        }
        )),
        t.d(n, "y", (function() {
            return b
        }
        )),
        t.d(n, "v", (function() {
            return w
        }
        )),
        t.d(n, "x", (function() {
            return W
        }
        )),
        t.d(n, "I", (function() {
            return $
        }
        )),
        t.d(n, "B", (function() {
            return z
        }
        )),
        t.d(n, "L", (function() {
            return G
        }
        )),
        t.d(n, "p", (function() {
            return J
        }
        )),
        t.d(n, "H", (function() {
            return Z
        }
        )),
        t.d(n, "g", (function() {
            return Q
        }
        )),
        t.d(n, "D", (function() {
            return K
        }
        )),
        t.d(n, "o", (function() {
            return ne
        }
        )),
        t.d(n, "e", (function() {
            return ae
        }
        )),
        t.d(n, "l", (function() {
            return oe
        }
        )),
        t.d(n, "h", (function() {
            return te
        }
        )),
        t.d(n, "G", (function() {
            return re
        }
        )),
        t.d(n, "s", (function() {
            return ce
        }
        )),
        t.d(n, "m", (function() {
            return ie
        }
        )),
        t.d(n, "n", (function() {
            return ue
        }
        )),
        t.d(n, "E", (function() {
            return de
        }
        ));
        t("456d");
        var r = t("75fc")
          , a = t("7618")
          , o = (t("6762"),
        t("2fdb"),
        t("3b2b"),
        t("768b"))
          , c = (t("cadf"),
        t("ac6a"),
        t("a481"),
        t("551c"),
        t("4917"),
        t("28a5"),
        t("5fc6"),
        t("5af2"))
          , i = t.n(c)
          , u = (t("6b54"),
        t("0680"))
          , d = t("80e3")
          , s = t.n(d)
          , l = t("3452")
          , p = t.n(l)
          , f = t("c466")
          , h = null
          , m = function(e) {
            return function(n) {
                return Object.prototype.toString.call(n) === "[object ".concat(e, "]")
            }
        }
          , g = m("String")
          , b = m("Object")
          , v = m("RegExp")
          , k = m("Function")
          , w = m("Boolean")
          , y = function(e) {
            return e !== u["f"] ? (+e / 100).toFixed(2) : e
        }
          , I = function(e) {
            e.hide || D(e || "未知错误")
        }
          , D = function(e) {
            var n = e.message
              , t = void 0 === n ? e : n
              , r = e.duration
              , a = void 0 === r ? u["l"] : r;
            return h && h.close(),
            h = i()(t),
            setTimeout((function() {
                h.close()
            }
            ), a),
            h
        }
          , C = function(e) {
            e.preventDefault()
        }
          , x = function(e) {
            e.target.src = s.a
        }
          , P = function(e, n) {
            return e.split(n || "<separator />")
        }
          , O = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
        }
          , R = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return e.indexOf("Android") > -1 || e.indexOf("Adr") > -1
        }
          , S = function() {
            var e = !1;
            try {
                var n = Object.defineProperty({}, "passive", {
                    get: function() {
                        return e = !0,
                        e
                    }
                });
                window.addEventListener("test", null, n),
                window.removeEventListener("test", null)
            } catch (t) {
                I(t)
            }
            return e
        }
          , A = function(e, n) {
            return new Promise((function(t, r) {
                var a = n.type
                  , o = void 0 === a ? "image/jpeg" : a
                  , c = n.ratio
                  , i = void 0 === c ? .7 : c
                  , u = n.fidelity
                  , d = void 0 === u ? .92 : u
                  , s = new Image;
                s.src = e,
                s.onload = function() {
                    var e = document.createElement("canvas")
                      , n = e.getContext("2d");
                    e.width = this.width * i,
                    e.height = this.height * i,
                    n.drawImage(s, 0, 0, e.width, e.height),
                    e.toBlob((function(e) {
                        t(e)
                    }
                    ), o, d)
                }
                ,
                s.onerror = function(e) {
                    r(e)
                }
            }
            ))
        }
          , j = function(e) {
            return e.replace(/&#39;/g, "'").replace(/&quot;/g, '"')
        }
          , B = function() {
            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.continueLength, t = void 0 === n ? 3 : n, r = [{
                list: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
            }, {
                list: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
            }, {
                list: ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
            }, {
                list: ["z", "x", "c", "v", "b", "n", "m"]
            }].map((function(e) {
                return e.xContinueKeyList = [],
                e.xReverseContinueKeyList = [],
                e.yLeftContinueKeyList = [],
                e.yLeftReverseContinueKeyList = [],
                e.yRightContinueKeyList = [],
                e.yRightReverseContinueKeyList = [],
                e
            }
            )), a = 0; a < r.length; a++)
                for (var c = 0; c < r[a].list.length; c++) {
                    var i = r[a].list;
                    if (c < i.length - 2) {
                        for (var u = "", d = 0; d < t; d++)
                            u += i[c + d];
                        r[a].xContinueKeyList.push(u),
                        r[a].xReverseContinueKeyList.push(X(u))
                    }
                }
            var s = r.reduce((function(e, n) {
                var t = [];
                return Object.entries(n).forEach((function(e) {
                    var n = Object(o["a"])(e, 2)
                      , r = n[0]
                      , a = n[1];
                    "list" !== r && (t = t.concat(a))
                }
                )),
                e = e.concat(t),
                e
            }
            ), []);
            return s
        }
          , L = {
            isChinese: function(e) {
                return /^[\u4e00-\u9fa5]+$/.test(e.toString().trim())
            },
            name: function(e) {
                return /^[\u4E00-\u9FA5A-Za-z]+$/.test(e.toString().trim())
            },
            postNo: function(e) {
                return /^[1-9][0-9]{5}$/.test(e.toString().trim())
            },
            phone: function(e) {
                return /^1(3|4|5|6|7|8|9)\d{9}$/.test(e.toString().trim())
            },
            email: function(e) {
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(e.toString().trim())
            },
            bankCard: function(e) {
                return /^\d{9,30}$/.test(e.toString().trim())
            },
            subBranchNo: function(e) {
                return 12 === e.toString().trim().length
            },
            idCard: function(e) {
                return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(e.toString().trim())
            },
            isBusinessNo: function(e) {
                return /^[0-9A-Za-z]{9,18}$/.test(e.toString().trim())
            },
            isBusinessName: function(e) {
                return /^[^0-9A-Za-z]{2,}$/.test(e.toString().trim())
            },
            isAuthorizerName: function(e) {
                return /^[^0-9]{2,}$/.test(e.toString().trim())
            },
            taxpayerNo: function(e) {
                return /^[A-Za-z0-9]+$/.test(e.toString().trim())
            },
            ip: function(e) {
                return /^((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))$/.test(e.toString().trim())
            },
            password: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , t = n.minLength
                  , r = void 0 === t ? 8 : t
                  , a = n.maxLength
                  , o = void 0 === a ? 26 : a
                  , c = n.account
                  , i = void 0 === c ? "" : c;
                function u() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n;
                    return function(t) {
                        return t.length >= e && t.length <= n
                    }
                }
                function d() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return new RegExp("^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z~!@#$%^*_+\\-{\\[\\]}:?,.\\/]+$)(?![a-z0-9]+$)(?![a-z~!@#$%^*_+\\-{\\[\\]}:?,.\\/]+$)(?![0-9~!@#$%^*_+\\-{\\[\\]}:?,.\\/]+$)[a-zA-Z0-9~!@#$%^*_+\\-{\\[\\]}:?,.\\/]{".concat(r, ",").concat(o, "}$")).test(e)
                }
                function s(e) {
                    return function(n) {
                        return !!e && (e = e.toLowerCase().split("@")[0],
                        n = n.toLowerCase(),
                        !n.includes(e) && !n.includes(X(e)))
                    }
                }
                function l() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return !B().some((function(n) {
                        return e.toLowerCase().includes(n)
                    }
                    ))
                }
                function p() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                      , n = ["Weidong13@", "Pr@ject94", "Pr@ject4", "Pr@ject9", "gzbljc2014!.", "ZX@USS_135246", "nsc&57711135", "tele@HB3*8=2.1", "ZXIPTV_13", "U_tywg_2008", "jiangyanjingwa520.", "1..1administrator", "ZTE@iptv2009", "fshg1433..1", "sf100769978 ..1", "14759179..a", "SqlGdn@InfoxMas2008", "SqlMsde@InfoxEie2000", "Infox1Eies2Sps3Was4!", "Infox4Sms3Sps2Was1!", "zxr10!^**", "ZTE@uss100ZXM10", "cmnet2010@zte", "1qaz@WSX3edc$RFV", "1qaz@WSX", "HPP187 SYS", "P@55w0rd!", "UI-PSWD-01", "UI-PSWD-02", "and 2000 Series", "r@p8p0r+", "tellabs#1", "wrgg15_di524", "P@ssw0rd2017", "P@ssw0rd2018", "R&g3x3vi1", "P@ssw0rd", "P@ssword1", "1qazXSW@", "!QAZ2wsx", "Abc@1396", "P@ssw0rd1", "Pa$$w0rd", "p4$$w0rd", "P@ssw19rd", "Passw0rd!", "P@55w0rd", "p@$$w0rd", "dlghtmxm2017!!", "Password1!", "!QAZ2wsx#EDC", "!QAZ2wsx3edc", "Muklesr0x!221845", "P@55word", "!QAZxsw2", "Server@2017", "zaq1@WSX", "rhsdlek1!", "P@ssw0rds", "@P@ssw0rd", "P@ssw9rd", "P@ssw0rd02", "$easyWinArt4", "M3d!aP0rtal", "Pr!vat3Sh3llAcc3sS", "P@ssw0rd!", "P@ssw0rd1!", "1qaz$RFV", "@P@ssword1", "p@ssword1!", "1qaz2wsx#EDC", "P@55w0rd101", "V4in$ight", "P455w0rd@dm1n", "!QAZ@WSX3edc", "ec2-user", "OvW*busr1", "p@ck3tf3nc3", "qaz_2wsx", "skf_admin1", "!QAZ1qaz", "1qazXSW@", "1qazXSW@", "1qaz2wsx#EDC", "1qaz$RFV", "1qaz@WSX", "1qaz2wsx#EDC"].map((function(e) {
                        return e.toLowerCase()
                    }
                    ));
                    return !n.includes(e.toLowerCase())
                }
                e = e.toString().trim();
                var f, h = {
                    length: {
                        pattern: u(r, o),
                        tips: "密码长度为8~26个字符"
                    },
                    combine: {
                        pattern: d,
                        tips: "密码需为字母（区分大小写）、数字和特殊字符（~!@#$%^*_-+{[]}:,.?/）的组合"
                    },
                    account: {
                        pattern: s(i),
                        tips: "密码不能包含与账号相关的信息，不建议包含账号完整字符串、大小写变为或形似变换的字符串"
                    },
                    dictionary: {
                        pattern: p,
                        tips: "密码不能使用常用的具有特殊含义的字符串或形似变换的字符串"
                    },
                    continue: {
                        pattern: l,
                        tips: "密码不能使用连续3个及以上键位排序字符，如123，Qwe"
                    }
                }, m = Object.values(h).every((function(n) {
                    var t = n.pattern;
                    return !(k(t) && !t(e)) || (f = n.tips,
                    !1)
                }
                ));
                return m || f
            },
            verificationCode: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , t = n.length
                  , r = void 0 === t ? 6 : t;
                return new RegExp("^\\d{".concat(r, "}$")).test(e.toString().trim())
            },
            money: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , n = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
                return !(!e || !n.test(e) || ["0.0", "0.00"].includes(e))
            },
            money2: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , n = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
                return !(!e || !n.test(e))
            }
        }
          , T = function(e) {
            return {
                backgroundImage: "url(".concat(e || s.a, ")")
            }
        }
          , E = function(e) {
            e || (e = {});
            var n = [];
            for (var t in e)
                null !== e[t] && n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
            return n.length > 0 ? "?" + n.join("&") : ""
        }
          , M = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
              , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , r = t.enc
              , a = void 0 === r ? "Utf8" : r
              , o = t.mode
              , c = void 0 === o ? "ECB" : o
              , i = t.padding
              , u = void 0 === i ? "Pkcs7" : i
              , d = p.a.enc[a].parse(n)
              , s = {
                mode: p.a.mode[c],
                padding: p.a.pad[u]
            }
              , l = p.a.TripleDES.encrypt(e, d, s);
            return l.toString()
        }

          , _ = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (e && "string" === typeof e) {
                var t = n.text || "0"
                  , r = n.length || 24;
                if (e.length < r)
                    for (var a = e.length; a < r; a++)
                        e += t;
                else
                    e = e.substring(0, r);
                return e
            }
        }
          , F = function(e, n) {
            return f["a"].format(e, n)
        }
          , H = function() {
            var e, n, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16, a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), o = [];
            if (r = r || a.length,
            t)
                for (e = 0; e < t; e++)
                    o[e] = a[0 | Math.random() * r];
            else
                for (o[8] = o[13] = o[18] = o[23] = "-",
                o[14] = "4",
                e = 0; e < 36; e++)
                    o[e] || (n = 0 | 16 * Math.random(),
                    o[e] = a[19 === e ? 3 & n | 8 : n]);
            return o.join("")
        }
          , q = function() {
            return /MicroMessenger/i.test(window.navigator.userAgent.toLowerCase())
        }
          , U = function() {
            return function(e) {
                var n = window.navigator.userAgent;
                return v(e) ? e.test(n) : g(e) ? n.toLowerCase().includes(e.toLowerCase()) : void 0
            }
        }
          , N = U()
          , W = function() {
            var e = /[MP]\w+\s+\s+Build\/\w+/;
            return N(e) || N("meitu")
        }
          , $ = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return e.replace(/<\/?[a-zA-Z]+\s*\/?>/g, n)
        }
          , z = function() {
            var e = window.navigator.userAgent.toLowerCase()
              , n = ["UCBrowser", "Quark"].map((function(e) {
                return e.toLowerCase()
            }
            ))
              , t = n.some((function(n) {
                return e.includes(n)
            }
            ));
            return t
        }
          , V = function(e) {
            if ("string" !== typeof e)
                return !1;
            try {
                var n = JSON.parse(e);
                return !("object" !== Object(a["a"])(n) || !n)
            } catch (t) {
                return !1
            }
        }
          , G = function(e, n) {
            b(n) && (n = JSON.stringify(n)),
            sessionStorage.setItem(e, n)
        }
          , J = function(e) {
            var n = sessionStorage.getItem(e);
            return V(n) ? JSON.parse(n) : n
        }
          , Z = function(e) {
            sessionStorage.removeItem(e)
        }
          , Q = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e.replace(/\s+/g, "")
        };
        function X() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (g(e))
                return e.split("").reverse().join("");
            throw new Error("input must be string")
        }
        var K = function(e) {
            if (!e)
                return !1;
            var n = window.open(e);
            null === n && (window.location.href = e)
        }
          , Y = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.URL;
            if (window.history && window.history.pushState) {
                if (e === document.URL) {
                    var n = Math.floor(10 * Math.random());
                    e.includes("?") ? e = e.replace("?", "?t=".concat(n, "&")) : e += "?t=".concat(n)
                }
                window.history.pushState(null, null, e)
            } else
                console.error("浏览器不支持pushState")
        }
          , ee = function() {
            window.history.go(-1)
        }
          , ne = function() {
            var e, n, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (!g(t))
                throw new Error("input params must be str");
            if (!t)
                return !1;
            var a = t.split("?");
            return n = a[1] ? a[1].split("&") : t.split("&"),
            e = {},
            n.forEach((function(n) {
                var t = n.split("=");
                if (2 === t.length) {
                    var a = t[0]
                      , o = t[1];
                    e[a] ? e[a] = Array.isArray(e[a]) ? [].concat(Object(r["a"])(e[a]), [o]) : [e[a], o] : e[a] = o
                }
            }
            )),
            e
        }
          , te = function() {
            var e = document.getElementById("app");
            e && (e.style.overflow = "hidden",
            e.style.position = "fixed")
        }
          , re = function() {
            var e = document.getElementById("app");
            e && (e.style.overflow = "",
            e.style.position = "")
        }
          , ae = function(e) {
            return window.JSON.parse(window.JSON.stringify(e))
        }
          , oe = function(e) {
            var n = e.lastIndexOf(".");
            return e.substring(n + 1)
        }
          , ce = function(e, n) {
            return e ? "bankAct" === n ? e.replace(/(.{4})(.*)(.{4})/, (function(e, n, t, r) {
                return n + t.replace(/.{1}/g, "*") + r
            }
            )) : /@/.test(e) || "mail" === n ? e.replace(/(.{1})(.*)(.{1})(@.*)/, "$1****$3$4") : /^\d{7,11}$/.test(e) ? e.replace(/(\d{3})(\d+)(\d{4})/, "$1****$3") : /^\d{12,22}$/.test(e) ? e.replace(/(\d{4})(\d+)(\d{4})/, "$1 **** **** $3") : e.replace(/(\d{2})(\d+)(\d{2})/, "$1**************$3") : ""
        }
          , ie = function(e, n, t) {
            if (!(e instanceof Array) || "string" !== typeof n && "object" !== Object(a["a"])(n))
                return -1;
            if ("string" === typeof n) {
                for (var r = 0; r < e.length; r++)
                    if (e[r][n] === t)
                        return r
            } else if ("object" === Object(a["a"])(n))
                for (var o = function(t) {
                    if (Object.keys(n).every((function(r) {
                        return e[t][r] === n[r]
                    }
                    )))
                        return {
                            v: t
                        }
                }, c = 0; c < e.length; c++) {
                    var i = o(c);
                    if ("object" === Object(a["a"])(i))
                        return i.v
                }
            return -1
        }
          , ue = function(e, n) {
            var t = document.createElement("div");
            t.innerHTML = e;
            var r = t.innerText;
            return n && (r = r.trim().replace(/[\n\r\t]/g, "")),
            r
        }
          , de = function(e) {
            var n = {};
            return e.replace(/[?&]+([^=&]+)=([^&]*)/gi, (function(e, t, r) {
                return n[t] = r
            }
            )),
            n
        }
    },
    "80e3": function(e, n, t) {
        e.exports = t.p + "img/errorImg.61959ae7.png"
    },
    "81d3": function(e, n, t) {},
    "8ace": function(e, n, t) {
        "use strict";
        var r = t("ba10")
          , a = t.n(r)
          , o = new a.a;
        o.events = {
            AUTH_FAIL: "auth-fail",
            AGREE_PRIVACY: "agree-privacy",
            IDENTIFICATION_FAIL: "identification-fail"
        },
        n["a"] = o
    },
    "8d96": function(e, n, t) {
        "use strict";
        t("6715")
    },
    "98ff": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/cloudHostDiscount2020",
            name: "cloudHostDiscount2020",
            meta: {
                title: "云主机钜惠",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("chunk-2d213728"), t.e("cloudHostDiscount2020")]).then(t.bind(null, "fea7"))
            }
        }
    },
    a174: function(e, n, t) {
        "use strict";
        t("6762"),
        t("2fdb"),
        t("20d6"),
        t("f751"),
        t("551c"),
        t("ac6a"),
        t("cadf"),
        t("5df3"),
        t("96cf");
        var r = t("3b8d")
          , a = t("bc3a")
          , o = t.n(a)
          , c = t("8d81")
          , i = t.n(c)
          , u = t("7f6d");
        function d() {
            return s.apply(this, arguments)
        }
        function s() {
            return s = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "version/checkUpdateVersion",
                            e.abrupt("return", m.get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            s.apply(this, arguments)
        }
        var l = t("8ace")
          , p = "300031500"
          , f = 0
          , h = o.a.create();
        h.setMainVersion = function(e) {
            p = e,
            localStorage.setItem("mainVersion", e)
        }
        ,
        h.getMainVersion = function() {
            return p || localStorage.getItem("mainVersion")
        }
        ,
        h.setTimestampOffset = function(e) {
            f = e,
            localStorage.setItem("timestampOffset", e)
        }
        ,
        h.getTimestampOffset = function() {
            return localStorage.getItem("timestampOffset") || f
        }
        ,
        h.initPublicParams = Object(r["a"])(regeneratorRuntime.mark((function e() {
            return regeneratorRuntime.wrap((function(e) {
                while (1)
                    switch (e.prev = e.next) {
                    case 0:
                        return h.setMainVersion(p),
                        e.next = 3,
                        Promise.all([d().then((function(e) {
                            h.setTimestampOffset((new Date).getTime() - e.data.curTime)
                        }
                        ))]).catch(u["d"]);
                    case 3:
                        return e.abrupt("return", e.sent);
                    case 4:
                    case "end":
                        return e.stop()
                    }
            }
            ), e)
        }
        ))),
        h.interceptors.request.use((function(e) {
            var n = (new Date).getTime() - h.getTimestampOffset()
              , t = "s54zv9bm1vd5czfujy6nnuxj1l4g2ny6"
              , r = Object(u["k"])()
              , a = i()(n + r + i()(r + t + n));
            return e.params = Object.assign(e.params || {}, {
                mainVersion: h.getMainVersion(),
                comParam_curTime: n,
                comParam_seqCode: r,
                comParam_signature: a,
                isCheck: !0,
                locale: "zh-cn"
            }),
            e
        }
        )),
        h.interceptors.response.use(function() {
            var e = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t, r, a, o, c, i, d;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = n.data,
                            r = t.data,
                            a = [-700, -707, -998],
                            o = n.config.url,
                            c = ["alogic-ctyun/order/SubmitOnce2", "alogic-ctyun/lottery/Gain", "alogic-ctyun/abm/coupon/Gain", "alogic-ctyun/school/race/participant/Join"],
                            i = c.findIndex((function(e) {
                                return -1 !== o.indexOf(e)
                            }
                            )),
                            -1 !== i && ([0, 1].includes(i) && "noauth" === t.data.state || [2].includes(i) && "-200" === t.data.code || [3].includes(i) && !t.success) && (t.resultCode = -998,
                            t.success = !1),
                            d = +t.resultCode,
                            -707 !== d) {
                                e.next = 15;
                                break
                            }
                            return h.setTimestampOffset((new Date).getTime() - r.curTime),
                            e.next = 12,
                            h(n.config);
                        case 12:
                            n.data = e.sent,
                            e.next = 16;
                            break;
                        case 15:
                            706 === d ? l["a"].emit(l["a"].events.AGREE_PRIVACY) : -998 === d && l["a"].emit(l["a"].events.IDENTIFICATION_FAIL);
                        case 16:
                            return Object(u["y"])(t) && (t.hideError = a.includes(+d)),
                            e.abrupt("return", n);
                        case 18:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }());
        var m = n["a"] = h
    },
    a537: function(e, n, t) {
        "use strict";
        t.d(n, "c", (function() {
            return o
        }
        )),
        t.d(n, "d", (function() {
            return i
        }
        )),
        t.d(n, "a", (function() {
            return d
        }
        )),
        t.d(n, "g", (function() {
            return l
        }
        )),
        t.d(n, "f", (function() {
            return f
        }
        )),
        t.d(n, "e", (function() {
            return m
        }
        )),
        t.d(n, "b", (function() {
            return g
        }
        ));
        t("f751"),
        t("96cf");
        var r = t("3b8d")
          , a = t("bdd0");
        function o() {
            return c.apply(this, arguments)
        }
        function c() {
            return c = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "index/getIcons",
                            e.abrupt("return", a["a"].get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            c.apply(this, arguments)
        }
        function i() {
            return u.apply(this, arguments)
        }
        function u() {
            return u = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "protocol/list",
                            e.abrupt("return", a["a"].get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            u.apply(this, arguments)
        }
        function d(e) {
            return s.apply(this, arguments)
        }
        function s() {
            return s = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", a["a"].get(n));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            s.apply(this, arguments)
        }
        function l() {
            return p.apply(this, arguments)
        }
        function p() {
            return p = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var n, t, r = arguments;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = r.length > 0 && void 0 !== r[0] ? r[0] : {},
                            t = "visit/pushVisitInfo",
                            n = Object.assign({
                                visitUrl: document.URL,
                                visitUrlTitle: document.title,
                                visitReffer: document.referrer,
                                visitRefferType: 0,
                                visitChannel: 1002,
                                visitInTime: (new Date).getTime(),
                                visitOutTime: "",
                                visitObjectId: "",
                                visitObjectName: "",
                                visitType: ""
                            }, n),
                            e.abrupt("return", a["a"].post(t, n));
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            p.apply(this, arguments)
        }
        function f(e) {
            return h.apply(this, arguments)
        }
        function h() {
            return h = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "manager/nbr",
                            e.abrupt("return", a["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            h.apply(this, arguments)
        }
        function m(e) {
            var n = "config/switch/".concat(e);
            return a["a"].get(n)
        }
        function g(e) {
            return b.apply(this, arguments)
        }
        function b() {
            return b = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "alogic-app/version/getCurrVersion",
                            e.abrupt("return", a["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            b.apply(this, arguments)
        }
    },
    a89b: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, "children", (function() {
            return r
        }
        ));
        var r = []
    },
    ad7d: function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/smartCampus",
            name: "smartCampus",
            meta: {
                title: "智慧校园云上行",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("chunk-2d213728"), t.e("smartCampus")]).then(t.bind(null, "5d24"))
            }
        }
    },
    afc4: function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/202103",
            name: "202103",
            meta: {
                title: "开工季特惠",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("202103")]).then(t.bind(null, "7262"))
            }
        }
    },
    b124: function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/noviceSpecialty",
            name: "noviceSpecialty",
            meta: {
                title: "首购专场",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("chunk-2d213728"), t.e("noviceSpecialty")]).then(t.bind(null, "3e2a"))
            }
        }
    },
    b196: function(e, n, t) {
        "use strict";
        t.r(n);
        t("7f7f"),
        t("6762"),
        t("2fdb"),
        t("768b"),
        t("8615"),
        t("ffc1");
        var r = t("2b0e")
          , a = function() {
            var e = this
              , n = e.$createElement
              , t = e._self._c || n;
            return t("div", {
                attrs: {
                    id: "app"
                }
            }, [e.isRouterAlive ? t("keep-alive", {
                attrs: {
                    include: "home,orderList,serviceCase,cloudMarket"
                }
            }, [t("router-view", {
                class: {
                    "router-view": e.protocol.show
                }
            })], 1) : e._e(), e.protocol.show ? t("privacy", {
                attrs: {
                    title: e.protocol.active.dialog.title,
                    content: e.protocol.active.dialog.content,
                    extraContent: e.protocol.active.dialog.extraContent,
                    btns: e.protocol.active.dialog.btns
                },
                on: {
                    handleBtnClick: e.handleProtocolBtnClick
                }
            }) : e._e(), e.modal.show ? t("guide", {
                attrs: {
                    title: e.modal.title,
                    content: e.modal.content,
                    btn: e.modal.btn,
                    btnCancel: e.modal.btnCancel
                },
                on: {
                    handleBtnClose: e.handleModalBtnClose,
                    handleBtnClick: e.handleModalBtnClick
                }
            }) : e._e()], 1)
        }
          , o = []
          , c = (t("20d6"),
        t("a481"),
        t("b54a"),
        t("96cf"),
        t("3b8d"))
          , i = (t("551c"),
        t("28a5"),
        t("8ace"))
          , u = t("a537")
          , d = t("7306")
          , s = {
            name: "app",
            components: {
                Privacy: function() {
                    return t.e("chunk-c616f30c").then(t.bind(null, "8589"))
                },
                Guide: function() {
                    return t.e("chunk-db90efe0").then(t.bind(null, "7cef"))
                }
            },
            provide: function() {
                return {
                    reload: this.reload,
                    onProtocolModal: this.onProtocolModal
                }
            },
            data: function() {
                return {
                    isRouterAlive: !0,
                    protocol: {
                        show: !1,
                        active: {},
                        list: [],
                        config: {}
                    },
                    modal: {
                        show: !1,
                        content: "您尚未完成实名认证，请实名认证后再进行操作。",
                        btn: "立即认证",
                        btnCancel: "取消",
                        link: "/identification"
                    }
                }
            },
            watch: {
                $route: function(e, n) {
                    var t = this;
                    if (t.protocol.show && e.name !== n.name && (t.protocol.show = !1),
                    window._czc) {
                        var r = window.location
                          , a = r.hash.split("?")[0]
                          , o = r.pathname + a
                          , c = "/";
                        window._czc.push(["_trackPageview", o, c])
                    }
                }
            },
            methods: {
                reload: function() {
                    var e = this;
                    this.isRouterAlive = !1,
                    this.$nextTick((function() {
                        e.isRouterAlive = !0
                    }
                    ))
                },
                onProtocolModal: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = this;
                    return n.protocol.config = e,
                    new Promise(function() {
                        var e = Object(c["a"])(regeneratorRuntime.mark((function e(t, r) {
                            var a, o;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0,
                                        e.next = 3,
                                        Object(u["d"])();
                                    case 3:
                                        a = e.sent,
                                        o = a.data,
                                        o && o.length ? (n.protocol.list = o,
                                        n.protocol.active = o[0],
                                        n.protocol.show = !0,
                                        t(o)) : t(!1),
                                        e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8,
                                        e.t0 = e["catch"](0),
                                        r(e.t0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, null, [[0, 8]])
                        }
                        )));
                        return function(n, t) {
                            return e.apply(this, arguments)
                        }
                    }())
                },
                onGuideModal: function() {
                    var e = this;
                    e.modal.show = !0
                },
                handleModalBtnClick: function() {
                    var e = this;
                    e.modal.show = !1,
                    e.$router.push({
                        path: e.modal.link,
                        query: {
                            redirect: e.$route.fullPath
                        }
                    })
                },
                handleModalBtnClose: function() {
                    var e = this;
                    e.modal.show = !1
                },
                handleProtocolBtnClick: function() {
                    var e = Object(c["a"])(regeneratorRuntime.mark((function e(n) {
                        var t, r, a, o, c, i, s;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = this,
                                    r = n.needToQuit,
                                    a = n.callBack,
                                    o = t.protocol.config,
                                    c = o.cancelCallback,
                                    i = o.confirmCallback,
                                    e.prev = 3,
                                    !r) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.next = 7,
                                    Object(d["p"])();
                                case 7:
                                    return e.next = 9,
                                    t.$store.dispatch("auth/logout");
                                case 9:
                                    t.protocol.show = !1,
                                    c ? c() : t.$router.replace({
                                        name: "login",
                                        query: {
                                            redirect: t.$route.fullPath
                                        }
                                    }),
                                    e.next = 17;
                                    break;
                                case 13:
                                    return e.next = 15,
                                    Object(u["a"])(a);
                                case 15:
                                    s = t.protocol.list.findIndex((function(e) {
                                        return e === t.protocol.active
                                    }
                                    )),
                                    s !== t.protocol.list.length - 1 ? t.protocol.active = t.protocol.list[s + 1] : (t.protocol.show = !1,
                                    i && i());
                                case 17:
                                    e.next = 22;
                                    break;
                                case 19:
                                    e.prev = 19,
                                    e.t0 = e["catch"](3),
                                    t.errorCallback(e.t0);
                                case 22:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[3, 19]])
                    }
                    )));
                    function n(n) {
                        return e.apply(this, arguments)
                    }
                    return n
                }()
            },
            mounted: function() {
                var e = this
                  , n = .01 * window.innerHeight;
                document.documentElement.style.setProperty("--vh", "".concat(n, "px")),
                i["a"].on(i["a"].events.AGREE_PRIVACY, (function() {
                    e.onProtocolModal().catch(e.errorCallback)
                }
                )),
                i["a"].on(i["a"].events.IDENTIFICATION_FAIL, (function() {
                    e.onGuideModal()
                }
                ))
            }
        }
          , l = s
          , p = (t("0b4e"),
        t("2877"))
          , f = Object(p["a"])(l, a, o, !1, null, "c9dc2afa", null)
          , h = f.exports
          , m = t("dd8e")
          , g = (t("386d"),
        t("a174"))
          , b = t("7f6d")
          , v = {
            onReady: function() {
                var e = Object(c["a"])(regeneratorRuntime.mark((function e() {
                    var n, t, r, a, o, c, i, u, d = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if (n = d.length > 0 && void 0 !== d[0] ? d[0] : {},
                                !Object(b["C"])()) {
                                    e.next = 9;
                                    break
                                }
                                t = window.location,
                                r = t.origin,
                                a = t.pathname,
                                o = t.search,
                                c = t.hash,
                                i = r + a.replace("wap", "wechat") + o,
                                u = ["javascript:", "vbscript:", "data:"],
                                u.every((function(e) {
                                    return !c.includes(e)
                                }
                                )) && (i += c),
                                window.location.href = i,
                                e.next = 12;
                                break;
                            case 9:
                                return e.next = 11,
                                g["a"].initPublicParams();
                            case 11:
                                return e.abrupt("return", Promise.resolve(n));
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                function n() {
                    return e.apply(this, arguments)
                }
                return n
            }(),
            onGoBack: function(e) {
                e()
            },
            closeWindow: function() {
                return !1
            }
        }
          , k = v
          , w = k
          , y = t("f6c6")
          , I = (t("ceaa"),
        t("b2fb"))
          , D = t.n(I)
          , C = (t("0d6d"),
        t("6bf2"))
          , x = {};
        var P = {
            data: function() {
                return {
                    auth: C["default"],
                    router: y["a"],
                    Native: x,
                    isApp: Object.freeze(!1),
                    isWap: Object.freeze(!0),
                    isWechat: Object.freeze(!1)
                }
            },
            methods: {
                errorCallback: b["d"],
                toast: b["N"],
                setBackgroundImage: b["K"],
                isUnSupportPushStateBrowser: b["B"]
            },
            beforeRouteLeave: function(e, n, t) {
                D.a.close(),
                t()
            }
        }
          , O = P
          , R = t("4360")
          , S = t("0881");
        r["default"].directive("clickOutside", {
            bind: function(e, n, t, a) {
                e.handler = function(a) {
                    r["default"].nextTick((function() {
                        if (console.log(e),
                        console.log(a.target),
                        !e.contains(a.target)) {
                            var r = n.expression
                              , o = t.context;
                            o[r]()
                        }
                    }
                    ))
                }
                ,
                document.addEventListener("click", e.handler)
            },
            unbind: function(e) {
                document.removeEventListener("click", e.handler)
            }
        });
        var A = t("ed09")
          , j = function() {
            var e = this
              , n = e.$createElement
              , t = e._self._c || n;
            return e.visible ? t("div", {
                staticClass: "loading-mask",
                style: {
                    zIndex: e.zIndex
                }
            }, [e._m(0)]) : e._e()
        }
          , B = [function() {
            var e = this
              , n = e.$createElement
              , r = e._self._c || n;
            return r("div", {
                staticClass: "loading-mask-container"
            }, [r("div", {
                staticClass: "loading-mask-main"
            }, [r("img", {
                attrs: {
                    src: t("04c0")
                }
            }), r("p", [e._v("加载中...")])])])
        }
        ]
          , L = {
            data: function() {
                return {
                    visible: !1,
                    zIndex: 99
                }
            }
        }
          , T = L
          , E = (t("8d96"),
        Object(p["a"])(T, j, B, !1, null, null, null))
          , M = E.exports
          , _ = (t("3b2b"),
        t("5df3"),
        t("1c4c"),
        r["default"].prototype.$isServer)
          , F = "classList"in document.body
          , H = function e(n, t) {
            return t = t ? "string" === typeof t ? e(t) : t : document,
            t.querySelector(n)
        }
          , q = function(e, n) {
            return n = n ? "string" === typeof n ? H(n) : n : document,
            Array.from(n.querySelectorAll(e))
        }
          , U = function(e, n) {
            if (!$(e, n))
                if (F)
                    e.classList.add(n);
                else {
                    var t = e.className;
                    t += " ".concat(n),
                    e.className = t.trim().replace(/\s+/g, " ")
                }
        }
          , N = function(e, n) {
            $(e, n) ? z(e, n) : U(e, n)
        }
          , W = function(e, n, t) {
            var r = new RegExp("\\b" + n + "\\b","g");
            e.className = e.className.replace(r, t)
        }
          , $ = function(e, n) {
            return F ? e.classList.contains(n) : e.className.includes(n)
        }
          , z = function(e, n) {
            var t = new RegExp("".concat(n, "\\s?"),"g");
            return F ? e.classList.remove(n) : e.className = e.className.replace(t, "").trim()
        }
          , V = function() {
            return !_ && document.addEventListener ? function(e, n, t) {
                e && n && t && e.addEventListener(n, t, !1)
            }
            : function(e, n, t) {
                e && n && t && e.attachEvent("on" + n, t)
            }
        }()
          , G = function(e, n, t) {
            e.style[n] = e.style["ms".concat(n.slice(0, 1).toUpperCase()).concat(n.slice(1))] = t
        }
          , J = function(e, n) {
            var t = n.parentNode;
            t.lastChild === n ? t.appendChild(e) : t.insertBefore(e, n.nextSibling)
        }
          , Z = {
            setCssProperty: G,
            getEle: H,
            getEles: q,
            addClass: U,
            replaceClass: W,
            toggleClass: N,
            hasClass: $,
            removeClass: z,
            on: V,
            insertAfter: J
        }
          , Q = Z
          , X = r["default"].extend(M)
          , K = function(e, n) {
            return e && e.data && e.data.attrs && e.data.attrs[n]
        }
          , Y = function(e, n) {
            n.value ? r["default"].nextTick((function() {
                e.mask.visible = !0,
                Q.addClass(e, "loading-parent--relative")
            }
            )) : (e.mask.visible = !1,
            Q.removeClass(e, "loading-parent--relative"))
        }
          , ee = {
            bind: function(e, n, t) {
                var r = new X({
                    data: function() {
                        return {
                            zIndex: K(t, "zIndex")
                        }
                    },
                    el: document.createElement("div")
                });
                e.mask = r,
                e.appendChild(r.$el),
                e.domInserted = !0,
                Y(e, n)
            },
            update: function(e, n) {
                n.oldValue !== n.value && Y(e, n)
            },
            unbind: function(e) {
                e.domInserted && e.mask && (e.mask.$destroy(),
                e.mask.$el.remove()),
                delete e.domInserted,
                delete e.mask
            }
        };
        function ne(e) {
            ne.installed || (e.directive("ct-loading", ee),
            ne.installed = !0)
        }
        var te = t("4eb5")
          , re = t.n(te);
        r["default"].config.productionTip = !1,
        r["default"].use(A["b"]),
        r["default"].mixin(O),
        r["default"].use(ne),
        r["default"].use(re.a);
        var ae = function(e) {
            y["a"].to({
                name: "login",
                query: {
                    redirect: e
                },
                replace: !0
            })
        };
        y["a"].inspect(m["a"]),
        i["a"].on(i["a"].events.AUTH_FAIL, (function() {
            R["a"].dispatch("auth/logout"),
            ae(m["a"].currentRoute.query.redirect || m["a"].currentRoute.fullPath)
        }
        ));
        var oe = t("6bf2").default;
        if (m["a"].beforeEach((function(e, n, t) {
            Object(d["i"])().then((function() {
                oe.isLogin() || R["a"].dispatch("account/queryAccountInfo"),
                oe.updateLoginStatus(!0),
                ["login", "register"].includes(e.name) ? t(e.query.redirect || "/") : t()
            }
            )).catch((function(n) {
                -999 === +n.code ? (e.meta.auth ? t({
                    name: "login",
                    query: {
                        redirect: e.fullPath
                    }
                }) : t(),
                R["a"].dispatch("auth/logout")) : console.log(n)
            }
            ))
        }
        )),
        m["a"].afterEach((function(e, n) {
            var t = e.meta.title;
            t && (document.title = t),
            window.setShareInfo && window.setShareInfo({
                title: "天翼云 安全云",
                summary: t,
                pic: "/img/logo.png",
                url: document.URL
            }),
            Object(S["a"])(n)
        }
        )),
        window.CtcloudAnalysis) {
            var ce = window.location.href;
            ce.includes("m.ctyun.cn") ? "https://www.ctyun.cn" : ce.includes("mgray.ctyun.cn") ? "https://wwwgray.ctyun.cn" : "https://wwwtest.ctyun.cn:21443";
            var ie = {
                router: y["a"],
                bdReport: !1,
                initHmt: !1,
                ocpcReport: !1,
                maReport: !1,
                flowReport: {
                    enable: !0,
                    url: "https://www.ctyun.cn/collection/gw/pv/Click"
                }
            };
            window.CtcloudAnalysis.install(r["default"], ie)
        }
        w.onReady().then((function() {
            new r["default"]({
                router: m["a"],
                store: R["a"],
                render: function(e) {
                    return e(h)
                }
            }).$mount("#app")
        }
        )).catch((function(e) {
            console.log(e)
        }
        ))
    },
    b713: function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = [{
            path: "/activity/security2",
            name: "security2",
            meta: {
                title: "合规无忧，翼起同行",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("security3")]).then(t.bind(null, "83dd"))
            }
        }]
    },
    bdd0: function(e, n, t) {
        "use strict";
        t("6762"),
        t("2fdb"),
        t("551c"),
        t("c5f6"),
        t("a481"),
        t("f751");
        var r = t("a174")
          , a = {
            host: "/"
        }
          , o = t("8ace")
          , c = t("7f6d")
          , i = (t("049f"),
        t("9f3c"),
        t("c7c6"),
        t("25c9"),
        t("6c1a"),
        t("d9ab"),
        t("536b"),
        t("7f25"),
        t("7f7f"),
        t("55dd"),
        t("6c7b"),
        t("28a5"),
        t("5df3"),
        t("ac6a"),
        t("cadf"),
        t("456d"),
        t("7618"))
          , u = (t("6b54"),
        t("ac4d"),
        t("8a81"),
        function() {
            return u = Object.assign || function(e) {
                for (var n, t = 1, r = arguments.length; t < r; t++)
                    for (var a in n = arguments[t])
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                return e
            }
            ,
            u.apply(this, arguments)
        }
        );
        function d(e, n, t, r) {
            return new (t || (t = Promise))((function(a, o) {
                function c(e) {
                    try {
                        u(r.next(e))
                    } catch (n) {
                        o(n)
                    }
                }
                function i(e) {
                    try {
                        u(r.throw(e))
                    } catch (n) {
                        o(n)
                    }
                }
                function u(e) {
                    var n;
                    e.done ? a(e.value) : (n = e.value,
                    n instanceof t ? n : new t((function(e) {
                        e(n)
                    }
                    ))).then(c, i)
                }
                u((r = r.apply(e, n || [])).next())
            }
            ))
        }
        function s(e, n) {
            var t, r, a, o, c = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: i(0),
                throw: i(1),
                return: i(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function i(o) {
                return function(i) {
                    return function(o) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; c; )
                            try {
                                if (t = 1,
                                r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r),
                                0) : r.next) && !(a = a.call(r, o[1])).done)
                                    return a;
                                switch (r = 0,
                                a && (o = [2 & o[0], a.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    a = o;
                                    break;
                                case 4:
                                    return c.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    c.label++,
                                    r = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = c.ops.pop(),
                                    c.trys.pop();
                                    continue;
                                default:
                                    if (a = c.trys,
                                    !((a = a.length > 0 && a[a.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        c = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                        c.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && c.label < a[1]) {
                                        c.label = a[1],
                                        a = o;
                                        break
                                    }
                                    if (a && c.label < a[2]) {
                                        c.label = a[2],
                                        c.ops.push(o);
                                        break
                                    }
                                    a[2] && c.ops.pop(),
                                    c.trys.pop();
                                    continue
                                }
                                o = n.call(e, c)
                            } catch (i) {
                                o = [6, i],
                                r = 0
                            } finally {
                                t = a = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, i])
                }
            }
        }
        function l() {
            for (var e = 0, n = 0, t = arguments.length; n < t; n++)
                e += arguments[n].length;
            var r = Array(e)
              , a = 0;
            for (n = 0; n < t; n++)
                for (var o = arguments[n], c = 0, i = o.length; c < i; c++,
                a++)
                    r[a] = o[c];
            return r
        }
        function p(e, n) {
            return new Promise((function(t) {
                return setTimeout(t, e, n)
            }
            ))
        }
        function f(e, n) {
            try {
                var t = e();
                (r = t) && "function" == typeof r.then ? t.then((function(e) {
                    return n(!0, e)
                }
                ), (function(e) {
                    return n(!1, e)
                }
                )) : n(!0, t)
            } catch (a) {
                n(!1, a)
            }
            var r
        }
        function h(e, n, t) {
            return void 0 === t && (t = 16),
            d(this, void 0, void 0, (function() {
                var r, a, o;
                return s(this, (function(c) {
                    switch (c.label) {
                    case 0:
                        r = Date.now(),
                        a = 0,
                        c.label = 1;
                    case 1:
                        return a < e.length ? (n(e[a], a),
                        (o = Date.now()) >= r + t ? (r = o,
                        [4, p(0)]) : [3, 3]) : [3, 4];
                    case 2:
                        c.sent(),
                        c.label = 3;
                    case 3:
                        return ++a,
                        [3, 1];
                    case 4:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        function m(e, n) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
            n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]];
            var t = [0, 0, 0, 0];
            return t[3] += e[3] + n[3],
            t[2] += t[3] >>> 16,
            t[3] &= 65535,
            t[2] += e[2] + n[2],
            t[1] += t[2] >>> 16,
            t[2] &= 65535,
            t[1] += e[1] + n[1],
            t[0] += t[1] >>> 16,
            t[1] &= 65535,
            t[0] += e[0] + n[0],
            t[0] &= 65535,
            [t[0] << 16 | t[1], t[2] << 16 | t[3]]
        }
        function g(e, n) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
            n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]];
            var t = [0, 0, 0, 0];
            return t[3] += e[3] * n[3],
            t[2] += t[3] >>> 16,
            t[3] &= 65535,
            t[2] += e[2] * n[3],
            t[1] += t[2] >>> 16,
            t[2] &= 65535,
            t[2] += e[3] * n[2],
            t[1] += t[2] >>> 16,
            t[2] &= 65535,
            t[1] += e[1] * n[3],
            t[0] += t[1] >>> 16,
            t[1] &= 65535,
            t[1] += e[2] * n[2],
            t[0] += t[1] >>> 16,
            t[1] &= 65535,
            t[1] += e[3] * n[1],
            t[0] += t[1] >>> 16,
            t[1] &= 65535,
            t[0] += e[0] * n[3] + e[1] * n[2] + e[2] * n[1] + e[3] * n[0],
            t[0] &= 65535,
            [t[0] << 16 | t[1], t[2] << 16 | t[3]]
        }
        function b(e, n) {
            return 32 === (n %= 64) ? [e[1], e[0]] : n < 32 ? [e[0] << n | e[1] >>> 32 - n, e[1] << n | e[0] >>> 32 - n] : (n -= 32,
            [e[1] << n | e[0] >>> 32 - n, e[0] << n | e[1] >>> 32 - n])
        }
        function v(e, n) {
            return 0 === (n %= 64) ? e : n < 32 ? [e[0] << n | e[1] >>> 32 - n, e[1] << n] : [e[1] << n - 32, 0]
        }
        function k(e, n) {
            return [e[0] ^ n[0], e[1] ^ n[1]]
        }
        function w(e) {
            return e = k(e, [0, e[0] >>> 1]),
            e = k(e = g(e, [4283543511, 3981806797]), [0, e[0] >>> 1]),
            k(e = g(e, [3301882366, 444984403]), [0, e[0] >>> 1])
        }
        function y(e, n) {
            n = n || 0;
            var t, r = (e = e || "").length % 16, a = e.length - r, o = [0, n], c = [0, n], i = [0, 0], u = [0, 0], d = [2277735313, 289559509], s = [1291169091, 658871167];
            for (t = 0; t < a; t += 16)
                i = [255 & e.charCodeAt(t + 4) | (255 & e.charCodeAt(t + 5)) << 8 | (255 & e.charCodeAt(t + 6)) << 16 | (255 & e.charCodeAt(t + 7)) << 24, 255 & e.charCodeAt(t) | (255 & e.charCodeAt(t + 1)) << 8 | (255 & e.charCodeAt(t + 2)) << 16 | (255 & e.charCodeAt(t + 3)) << 24],
                u = [255 & e.charCodeAt(t + 12) | (255 & e.charCodeAt(t + 13)) << 8 | (255 & e.charCodeAt(t + 14)) << 16 | (255 & e.charCodeAt(t + 15)) << 24, 255 & e.charCodeAt(t + 8) | (255 & e.charCodeAt(t + 9)) << 8 | (255 & e.charCodeAt(t + 10)) << 16 | (255 & e.charCodeAt(t + 11)) << 24],
                i = b(i = g(i, d), 31),
                o = m(o = b(o = k(o, i = g(i, s)), 27), c),
                o = m(g(o, [0, 5]), [0, 1390208809]),
                u = b(u = g(u, s), 33),
                c = m(c = b(c = k(c, u = g(u, d)), 31), o),
                c = m(g(c, [0, 5]), [0, 944331445]);
            switch (i = [0, 0],
            u = [0, 0],
            r) {
            case 15:
                u = k(u, v([0, e.charCodeAt(t + 14)], 48));
            case 14:
                u = k(u, v([0, e.charCodeAt(t + 13)], 40));
            case 13:
                u = k(u, v([0, e.charCodeAt(t + 12)], 32));
            case 12:
                u = k(u, v([0, e.charCodeAt(t + 11)], 24));
            case 11:
                u = k(u, v([0, e.charCodeAt(t + 10)], 16));
            case 10:
                u = k(u, v([0, e.charCodeAt(t + 9)], 8));
            case 9:
                u = g(u = k(u, [0, e.charCodeAt(t + 8)]), s),
                c = k(c, u = g(u = b(u, 33), d));
            case 8:
                i = k(i, v([0, e.charCodeAt(t + 7)], 56));
            case 7:
                i = k(i, v([0, e.charCodeAt(t + 6)], 48));
            case 6:
                i = k(i, v([0, e.charCodeAt(t + 5)], 40));
            case 5:
                i = k(i, v([0, e.charCodeAt(t + 4)], 32));
            case 4:
                i = k(i, v([0, e.charCodeAt(t + 3)], 24));
            case 3:
                i = k(i, v([0, e.charCodeAt(t + 2)], 16));
            case 2:
                i = k(i, v([0, e.charCodeAt(t + 1)], 8));
            case 1:
                i = g(i = k(i, [0, e.charCodeAt(t)]), d),
                o = k(o, i = g(i = b(i, 31), s))
            }
            return o = m(o = k(o, [0, e.length]), c = k(c, [0, e.length])),
            c = m(c, o),
            o = m(o = w(o), c = w(c)),
            c = m(c, o),
            ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8)
        }
        function I(e) {
            return parseInt(e)
        }
        function D(e) {
            return parseFloat(e)
        }
        function C(e, n) {
            return "number" == typeof e && isNaN(e) ? n : e
        }
        function x(e) {
            return e.reduce((function(e, n) {
                return e + (n ? 1 : 0)
            }
            ), 0)
        }
        function P(e, n) {
            if (void 0 === n && (n = 1),
            Math.abs(n) >= 1)
                return Math.round(e / n) * n;
            var t = 1 / n;
            return Math.round(e * t) / t
        }
        function O(e) {
            return e && "object" == Object(i["a"])(e) && "message"in e ? e : {
                message: e
            }
        }
        function R(e, n, t) {
            var r = Object.keys(e).filter((function(e) {
                return !function(e, n) {
                    for (var t = 0, r = e.length; t < r; ++t)
                        if (e[t] === n)
                            return !0;
                    return !1
                }(t, e)
            }
            ))
              , a = Array(r.length);
            return h(r, (function(t, r) {
                a[r] = function(e, n) {
                    var t = function(e) {
                        return "function" != typeof e
                    }
                      , r = new Promise((function(r) {
                        var a = Date.now();
                        f(e.bind(null, n), (function() {
                            for (var e = [], n = 0; n < arguments.length; n++)
                                e[n] = arguments[n];
                            var o = Date.now() - a;
                            if (!e[0])
                                return r((function() {
                                    return {
                                        error: O(e[1]),
                                        duration: o
                                    }
                                }
                                ));
                            var c = e[1];
                            if (t(c))
                                return r((function() {
                                    return {
                                        value: c,
                                        duration: o
                                    }
                                }
                                ));
                            r((function() {
                                return new Promise((function(e) {
                                    var n = Date.now();
                                    f(c, (function() {
                                        for (var t = [], r = 0; r < arguments.length; r++)
                                            t[r] = arguments[r];
                                        var a = o + Date.now() - n;
                                        if (!t[0])
                                            return e({
                                                error: O(t[1]),
                                                duration: a
                                            });
                                        e({
                                            value: t[1],
                                            duration: a
                                        })
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    ));
                    return function() {
                        return r.then((function(e) {
                            return e()
                        }
                        ))
                    }
                }(e[t], n)
            }
            )),
            function() {
                return d(this, void 0, void 0, (function() {
                    var e, n, t, o, c, i;
                    return s(this, (function(u) {
                        switch (u.label) {
                        case 0:
                            for (e = {},
                            n = 0,
                            t = r; n < t.length; n++)
                                o = t[n],
                                e[o] = void 0;
                            c = Array(r.length),
                            i = function() {
                                var n;
                                return s(this, (function(t) {
                                    switch (t.label) {
                                    case 0:
                                        return n = !0,
                                        [4, h(r, (function(t, r) {
                                            c[r] || (a[r] ? c[r] = a[r]().then((function(n) {
                                                return e[t] = n
                                            }
                                            )) : n = !1)
                                        }
                                        ))];
                                    case 1:
                                        return t.sent(),
                                        n ? [2, "break"] : [4, p(1)];
                                    case 2:
                                        return t.sent(),
                                        [2]
                                    }
                                }
                                ))
                            }
                            ,
                            u.label = 1;
                        case 1:
                            return [5, i()];
                        case 2:
                            if ("break" === u.sent())
                                return [3, 4];
                            u.label = 3;
                        case 3:
                            return [3, 1];
                        case 4:
                            return [4, Promise.all(c)];
                        case 5:
                            return u.sent(),
                            [2, e]
                        }
                    }
                    ))
                }
                ))
            }
        }
        function S() {
            var e = window
              , n = navigator;
            return x(["MSCSSMatrix"in e, "msSetImmediate"in e, "msIndexedDB"in e, "msMaxTouchPoints"in n, "msPointerEnabled"in n]) >= 4
        }
        function A() {
            var e = window
              , n = navigator;
            return x(["msWriteProfilerMark"in e, "MSStream"in e, "msLaunchUri"in n, "msSaveBlob"in n]) >= 3 && !S()
        }
        function j() {
            var e = window
              , n = navigator;
            return x(["webkitPersistentStorage"in n, "webkitTemporaryStorage"in n, 0 === n.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL"in e, "BatteryManager"in e, "webkitMediaStream"in e, "webkitSpeechGrammar"in e]) >= 5
        }
        function B() {
            var e = window
              , n = navigator;
            return x(["ApplePayError"in e, "CSSPrimitiveValue"in e, "Counter"in e, 0 === n.vendor.indexOf("Apple"), "getStorageUpdates"in n, "WebKitMediaKeys"in e]) >= 4
        }
        function L() {
            var e = window;
            return x(["safari"in e, !("DeviceMotionEvent"in e), !("ongestureend"in e), !("standalone"in navigator)]) >= 3
        }
        function T() {
            var e, n, t = window;
            return x(["buildID"in navigator, "MozAppearance"in (null !== (n = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== n ? n : {}), "onmozfullscreenchange"in t, "mozInnerScreenX"in t, "CSSMozDocumentRule"in t, "CanvasCaptureMediaStream"in t]) >= 4
        }
        function E() {
            var e = document;
            return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
        }
        function M() {
            var e = j()
              , n = T();
            if (!e && !n)
                return !1;
            var t = window;
            return x(["onorientationchange"in t, "orientation"in t, e && !("SharedWorker"in t), n && /android/i.test(navigator.appVersion)]) >= 2
        }
        function _(e) {
            var n = new Error(e);
            return n.name = e,
            n
        }
        function F(e, n, t) {
            var r, a, o;
            return void 0 === t && (t = 50),
            d(this, void 0, void 0, (function() {
                var c, i;
                return s(this, (function(u) {
                    switch (u.label) {
                    case 0:
                        c = document,
                        u.label = 1;
                    case 1:
                        return c.body ? [3, 3] : [4, p(t)];
                    case 2:
                        return u.sent(),
                        [3, 1];
                    case 3:
                        i = c.createElement("iframe"),
                        u.label = 4;
                    case 4:
                        return u.trys.push([4, , 10, 11]),
                        [4, new Promise((function(e, t) {
                            var r = !1
                              , a = function() {
                                r = !0,
                                e()
                            };
                            i.onload = a,
                            i.onerror = function(e) {
                                r = !0,
                                t(e)
                            }
                            ;
                            var o = i.style;
                            o.setProperty("display", "block", "important"),
                            o.position = "absolute",
                            o.top = "0",
                            o.left = "0",
                            o.visibility = "hidden",
                            n && "srcdoc"in i ? i.srcdoc = n : i.src = "about:blank",
                            c.body.appendChild(i);
                            var u = function e() {
                                var n, t;
                                r || ("complete" === (null === (t = null === (n = i.contentWindow) || void 0 === n ? void 0 : n.document) || void 0 === t ? void 0 : t.readyState) ? a() : setTimeout(e, 10))
                            };
                            u()
                        }
                        ))];
                    case 5:
                        u.sent(),
                        u.label = 6;
                    case 6:
                        return (null === (a = null === (r = i.contentWindow) || void 0 === r ? void 0 : r.document) || void 0 === a ? void 0 : a.body) ? [3, 8] : [4, p(t)];
                    case 7:
                        return u.sent(),
                        [3, 6];
                    case 8:
                        return [4, e(i, i.contentWindow)];
                    case 9:
                        return [2, u.sent()];
                    case 10:
                        return null === (o = i.parentNode) || void 0 === o || o.removeChild(i),
                        [7];
                    case 11:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        function H(e) {
            for (var n = function(e) {
                for (var n, t, r = "Unexpected syntax '" + e + "'", a = /^\s*([a-z-]*)(.*)$/i.exec(e), o = a[1] || void 0, c = {}, i = /([.:#][\w-]+|\[.+?\])/gi, u = function(e, n) {
                    c[e] = c[e] || [],
                    c[e].push(n)
                }; ; ) {
                    var d = i.exec(a[2]);
                    if (!d)
                        break;
                    var s = d[0];
                    switch (s[0]) {
                    case ".":
                        u("class", s.slice(1));
                        break;
                    case "#":
                        u("id", s.slice(1));
                        break;
                    case "[":
                        var l = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(s);
                        if (!l)
                            throw new Error(r);
                        u(l[1], null !== (t = null !== (n = l[4]) && void 0 !== n ? n : l[5]) && void 0 !== t ? t : "");
                        break;
                    default:
                        throw new Error(r)
                    }
                }
                return [o, c]
            }(e), t = n[0], r = n[1], a = document.createElement(null != t ? t : "div"), o = 0, c = Object.keys(r); o < c.length; o++) {
                var i = c[o]
                  , u = r[i].join(" ");
                "style" === i ? q(a.style, u) : a.setAttribute(i, u)
            }
            return a
        }
        function q(e, n) {
            for (var t = 0, r = n.split(";"); t < r.length; t++) {
                var a = r[t]
                  , o = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(a);
                if (o) {
                    var c = o[1]
                      , i = o[2]
                      , u = o[4];
                    e.setProperty(c, i, u || "")
                }
            }
        }
        var U, N, W = ["monospace", "sans-serif", "serif"], $ = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];
        function z(e) {
            return e.rect(0, 0, 10, 10),
            e.rect(2, 2, 6, 6),
            !e.isPointInPath(5, 5, "evenodd")
        }
        function V(e, n) {
            e.width = 240,
            e.height = 60,
            n.textBaseline = "alphabetic",
            n.fillStyle = "#f60",
            n.fillRect(100, 1, 62, 20),
            n.fillStyle = "#069",
            n.font = '11pt "Times New Roman"';
            var t = "Cwm fjordbank gly " + String.fromCharCode(55357, 56835);
            return n.fillText(t, 2, 15),
            n.fillStyle = "rgba(102, 204, 0, 0.2)",
            n.font = "18pt Arial",
            n.fillText(t, 4, 45),
            J(e)
        }
        function G(e, n) {
            e.width = 122,
            e.height = 110,
            n.globalCompositeOperation = "multiply";
            for (var t = 0, r = [["#f2f", 40, 40], ["#2ff", 80, 40], ["#ff2", 60, 80]]; t < r.length; t++) {
                var a = r[t]
                  , o = a[0]
                  , c = a[1]
                  , i = a[2];
                n.fillStyle = o,
                n.beginPath(),
                n.arc(c, i, 40, 0, 2 * Math.PI, !0),
                n.closePath(),
                n.fill()
            }
            return n.fillStyle = "#f9c",
            n.arc(60, 60, 60, 0, 2 * Math.PI, !0),
            n.arc(60, 60, 20, 0, 2 * Math.PI, !0),
            n.fill("evenodd"),
            J(e)
        }
        function J(e) {
            return e.toDataURL()
        }
        function Z() {
            var e = this;
            return function() {
                if (void 0 === N) {
                    var e = function e() {
                        var n = Q();
                        X(n) ? N = setTimeout(e, 2500) : (U = n,
                        N = void 0)
                    };
                    e()
                }
            }(),
            function() {
                return d(e, void 0, void 0, (function() {
                    var e;
                    return s(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return X(e = Q()) ? U ? [2, l(U)] : E() ? [4, (t = document,
                            (t.exitFullscreen || t.msExitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen).call(t))] : [3, 2] : [3, 2];
                        case 1:
                            n.sent(),
                            e = Q(),
                            n.label = 2;
                        case 2:
                            return X(e) || (U = e),
                            [2, e]
                        }
                        var t
                    }
                    ))
                }
                ))
            }
        }
        function Q() {
            var e = screen;
            return [C(D(e.availTop), null), C(D(e.width) - D(e.availWidth) - C(D(e.availLeft), 0), null), C(D(e.height) - D(e.availHeight) - C(D(e.availTop), 0), null), C(D(e.availLeft), null)]
        }
        function X(e) {
            for (var n = 0; n < 4; ++n)
                if (e[n])
                    return !1;
            return !0
        }
        var K = {};
        function Y(e) {
            var n;
            return d(this, void 0, void 0, (function() {
                var t, r, a, o, c, i, u;
                return s(this, (function(d) {
                    switch (d.label) {
                    case 0:
                        for (t = document,
                        r = t.createElement("div"),
                        a = new Array(e.length),
                        o = {},
                        ee(r),
                        u = 0; u < e.length; ++u)
                            c = H(e[u]),
                            ee(i = t.createElement("div")),
                            i.appendChild(c),
                            r.appendChild(i),
                            a[u] = c;
                        d.label = 1;
                    case 1:
                        return t.body ? [3, 3] : [4, p(50)];
                    case 2:
                        return d.sent(),
                        [3, 1];
                    case 3:
                        t.body.appendChild(r);
                        try {
                            for (u = 0; u < e.length; ++u)
                                a[u].offsetParent || (o[e[u]] = !0)
                        } finally {
                            null === (n = r.parentNode) || void 0 === n || n.removeChild(r)
                        }
                        return [2, o]
                    }
                }
                ))
            }
            ))
        }
        function ee(e) {
            e.style.setProperty("display", "block", "important")
        }
        function ne(e) {
            return matchMedia("(inverted-colors: " + e + ")").matches
        }
        function te(e) {
            return matchMedia("(forced-colors: " + e + ")").matches
        }
        function re(e) {
            return matchMedia("(prefers-contrast: " + e + ")").matches
        }
        function ae(e) {
            return matchMedia("(prefers-reduced-motion: " + e + ")").matches
        }
        function oe(e) {
            return matchMedia("(dynamic-range: " + e + ")").matches
        }
        var ce = Math
          , ie = function() {
            return 0
        }
          , ue = {
            default: [],
            apple: [{
                font: "-apple-system-body"
            }],
            serif: [{
                fontFamily: "serif"
            }],
            sans: [{
                fontFamily: "sans-serif"
            }],
            mono: [{
                fontFamily: "monospace"
            }],
            min: [{
                fontSize: "1px"
            }],
            system: [{
                fontFamily: "system-ui"
            }]
        }
          , de = {
            fonts: function() {
                return F((function(e, n) {
                    var t = n.document
                      , r = t.body;
                    r.style.fontSize = "48px";
                    var a = t.createElement("div")
                      , o = {}
                      , c = {}
                      , i = function(e) {
                        var n = t.createElement("span")
                          , r = n.style;
                        return r.position = "absolute",
                        r.top = "0",
                        r.left = "0",
                        r.fontFamily = e,
                        n.textContent = "mmMwWLliI0O&1",
                        a.appendChild(n),
                        n
                    }
                      , u = W.map(i)
                      , d = function() {
                        for (var e = {}, n = function(n) {
                            e[n] = W.map((function(e) {
                                return function(e, n) {
                                    return i("'" + e + "'," + n)
                                }(n, e)
                            }
                            ))
                        }, t = 0, r = $; t < r.length; t++)
                            n(r[t]);
                        return e
                    }();
                    r.appendChild(a);
                    for (var s = 0; s < W.length; s++)
                        o[W[s]] = u[s].offsetWidth,
                        c[W[s]] = u[s].offsetHeight;
                    return $.filter((function(e) {
                        return n = d[e],
                        W.some((function(e, t) {
                            return n[t].offsetWidth !== o[e] || n[t].offsetHeight !== c[e]
                        }
                        ));
                        var n
                    }
                    ))
                }
                ))
            },
            domBlockers: function(e) {
                var n = (void 0 === e ? {} : e).debug;
                return d(this, void 0, void 0, (function() {
                    var e, t, r, a;
                    return s(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return B() || M() ? (e = Object.keys(K),
                            [4, Y((a = []).concat.apply(a, e.map((function(e) {
                                return K[e]
                            }
                            ))))]) : [2, void 0];
                        case 1:
                            return t = o.sent(),
                            n && function(e) {
                                for (var n = "DOM blockers debug:\n```", t = 0, r = Object.keys(K); t < r.length; t++) {
                                    var a = r[t];
                                    n += "\n" + a + ":";
                                    for (var o = 0, c = K[a]; o < c.length; o++) {
                                        var i = c[o];
                                        n += "\n  " + i + " " + (e[i] ? "🚫" : "➡️")
                                    }
                                }
                                console.log(n + "\n```")
                            }(t),
                            (r = e.filter((function(e) {
                                var n = K[e];
                                return x(n.map((function(e) {
                                    return t[e]
                                }
                                ))) > .6 * n.length
                            }
                            ))).sort(),
                            [2, r]
                        }
                    }
                    ))
                }
                ))
            },
            fontPreferences: function() {
                return function(e, n) {
                    return void 0 === n && (n = 4e3),
                    F((function(t, r) {
                        var a = r.document
                          , o = a.body
                          , c = o.style;
                        c.width = n + "px",
                        c.webkitTextSizeAdjust = c.textSizeAdjust = "none",
                        j() ? o.style.zoom = "" + 1 / r.devicePixelRatio : B() && (o.style.zoom = "reset");
                        var i = a.createElement("div");
                        return i.textContent = l(Array(n / 20 << 0)).map((function() {
                            return "word"
                        }
                        )).join(" "),
                        o.appendChild(i),
                        e(a, o)
                    }
                    ), '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
                }((function(e, n) {
                    for (var t = {}, r = {}, a = 0, o = Object.keys(ue); a < o.length; a++) {
                        var c = o[a]
                          , i = ue[c]
                          , u = i[0]
                          , d = void 0 === u ? {} : u
                          , s = i[1]
                          , l = void 0 === s ? "mmMwWLliI0fiflO&1" : s
                          , p = e.createElement("span");
                        p.textContent = l,
                        p.style.whiteSpace = "nowrap";
                        for (var f = 0, h = Object.keys(d); f < h.length; f++) {
                            var m = h[f]
                              , g = d[m];
                            void 0 !== g && (p.style[m] = g)
                        }
                        t[c] = p,
                        n.appendChild(e.createElement("br")),
                        n.appendChild(p)
                    }
                    for (var b = 0, v = Object.keys(ue); b < v.length; b++)
                        r[c = v[b]] = t[c].getBoundingClientRect().width;
                    return r
                }
                ))
            },
            audio: function() {
                var e = window
                  , n = e.OfflineAudioContext || e.webkitOfflineAudioContext;
                if (!n)
                    return -2;
                if (B() && !L() && !function() {
                    var e = window;
                    return x(["DOMRectList"in e, "RTCPeerConnectionIceEvent"in e, "SVGGeometryElement"in e, "ontransitioncancel"in e]) >= 3
                }())
                    return -1;
                var t = new n(1,5e3,44100)
                  , r = t.createOscillator();
                r.type = "triangle",
                r.frequency.value = 1e4;
                var a = t.createDynamicsCompressor();
                a.threshold.value = -50,
                a.knee.value = 40,
                a.ratio.value = 12,
                a.attack.value = 0,
                a.release.value = .25,
                r.connect(a),
                a.connect(t.destination),
                r.start(0);
                var o = function(e) {
                    var n = 3
                      , t = 500
                      , r = 500
                      , a = 5e3
                      , o = function() {};
                    return [new Promise((function(c, i) {
                        var u = !1
                          , d = 0
                          , s = 0;
                        e.oncomplete = function(e) {
                            return c(e.renderedBuffer)
                        }
                        ;
                        var l = function() {
                            setTimeout((function() {
                                return i(_("timeout"))
                            }
                            ), Math.min(r, s + a - Date.now()))
                        }
                          , p = function a() {
                            try {
                                switch (e.startRendering(),
                                e.state) {
                                case "running":
                                    s = Date.now(),
                                    u && l();
                                    break;
                                case "suspended":
                                    document.hidden || d++,
                                    u && d >= n ? i(_("suspended")) : setTimeout(a, t)
                                }
                            } catch (r) {
                                i(r)
                            }
                        };
                        p(),
                        o = function() {
                            u || (u = !0,
                            s > 0 && l())
                        }
                    }
                    )), o]
                }(t)
                  , c = o[0]
                  , i = o[1]
                  , u = c.then((function(e) {
                    return function(e) {
                        for (var n = 0, t = 0; t < e.length; ++t)
                            n += Math.abs(e[t]);
                        return n
                    }(e.getChannelData(0).subarray(4500))
                }
                ), (function(e) {
                    if ("timeout" === e.name || "suspended" === e.name)
                        return -3;
                    throw e
                }
                ));
                return u.catch((function() {}
                )),
                function() {
                    return i(),
                    u
                }
            },
            screenFrame: function() {
                var e = this
                  , n = Z();
                return function() {
                    return d(e, void 0, void 0, (function() {
                        var e, t;
                        return s(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return [4, n()];
                            case 1:
                                return e = r.sent(),
                                [2, [(t = function(e) {
                                    return null === e ? null : P(e, 10)
                                }
                                )(e[0]), t(e[1]), t(e[2]), t(e[3])]]
                            }
                        }
                        ))
                    }
                    ))
                }
            },
            osCpu: function() {
                return navigator.oscpu
            },
            languages: function() {
                var e, n = navigator, t = [], r = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
                if (void 0 !== r && t.push([r]),
                Array.isArray(n.languages))
                    j() && x([!("MediaSettingsRange"in (e = window)), "RTCEncodedAudioFrame"in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3 || t.push(n.languages);
                else if ("string" == typeof n.languages) {
                    var a = n.languages;
                    a && t.push(a.split(","))
                }
                return t
            },
            colorDepth: function() {
                return window.screen.colorDepth
            },
            deviceMemory: function() {
                return C(D(navigator.deviceMemory), void 0)
            },
            screenResolution: function() {
                var e = screen
                  , n = function(e) {
                    return C(I(e), null)
                }
                  , t = [n(e.width), n(e.height)];
                return t.sort().reverse(),
                t
            },
            hardwareConcurrency: function() {
                return C(I(navigator.hardwareConcurrency), void 0)
            },
            timezone: function() {
                var e, n = null === (e = window.Intl) || void 0 === e ? void 0 : e.DateTimeFormat;
                if (n) {
                    var t = (new n).resolvedOptions().timeZone;
                    if (t)
                        return t
                }
                var r, a = (r = (new Date).getFullYear(),
                -Math.max(D(new Date(r,0,1).getTimezoneOffset()), D(new Date(r,6,1).getTimezoneOffset())));
                return "UTC" + (a >= 0 ? "+" : "") + Math.abs(a)
            },
            sessionStorage: function() {
                try {
                    return !!window.sessionStorage
                } catch (e) {
                    return !0
                }
            },
            localStorage: function() {
                try {
                    return !!window.localStorage
                } catch (e) {
                    return !0
                }
            },
            indexedDB: function() {
                if (!S() && !A())
                    try {
                        return !!window.indexedDB
                    } catch (e) {
                        return !0
                    }
            },
            openDatabase: function() {
                return !!window.openDatabase
            },
            cpuClass: function() {
                return navigator.cpuClass
            },
            platform: function() {
                var e = navigator.platform;
                return "MacIntel" === e && B() && !L() ? function() {
                    if ("iPad" === navigator.platform)
                        return !0;
                    var e = screen
                      , n = e.width / e.height;
                    return x(["MediaSource"in window, !!Element.prototype.webkitRequestFullscreen, n > .65 && n < 1.53]) >= 2
                }() ? "iPad" : "iPhone" : e
            },
            plugins: function() {
                var e = navigator.plugins;
                if (e) {
                    for (var n = [], t = 0; t < e.length; ++t) {
                        var r = e[t];
                        if (r) {
                            for (var a = [], o = 0; o < r.length; ++o) {
                                var c = r[o];
                                a.push({
                                    type: c.type,
                                    suffixes: c.suffixes
                                })
                            }
                            n.push({
                                name: r.name,
                                description: r.description,
                                mimeTypes: a
                            })
                        }
                    }
                    return n
                }
            },
            canvas: function() {
                var e = function() {
                    var e = document.createElement("canvas");
                    return e.width = 1,
                    e.height = 1,
                    [e, e.getContext("2d")]
                }()
                  , n = e[0]
                  , t = e[1];
                return function(e, n) {
                    return !(!n || !e.toDataURL)
                }(n, t) ? {
                    winding: z(t),
                    geometry: G(n, t),
                    text: V(n, t)
                } : {
                    winding: !1,
                    geometry: "",
                    text: ""
                }
            },
            touchSupport: function() {
                var e, n = navigator, t = 0;
                void 0 !== n.maxTouchPoints ? t = I(n.maxTouchPoints) : void 0 !== n.msMaxTouchPoints && (t = n.msMaxTouchPoints);
                try {
                    document.createEvent("TouchEvent"),
                    e = !0
                } catch (r) {
                    e = !1
                }
                return {
                    maxTouchPoints: t,
                    touchEvent: e,
                    touchStart: "ontouchstart"in window
                }
            },
            vendor: function() {
                return navigator.vendor || ""
            },
            vendorFlavors: function() {
                for (var e = [], n = 0, t = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; n < t.length; n++) {
                    var r = t[n]
                      , a = window[r];
                    a && "object" == Object(i["a"])(a) && e.push(r)
                }
                return e.sort()
            },
            cookiesEnabled: function() {
                var e = document;
                try {
                    e.cookie = "cookietest=1; SameSite=Strict;";
                    var n = -1 !== e.cookie.indexOf("cookietest=");
                    return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT",
                    n
                } catch (t) {
                    return !1
                }
            },
            colorGamut: function() {
                for (var e = 0, n = ["rec2020", "p3", "srgb"]; e < n.length; e++) {
                    var t = n[e];
                    if (matchMedia("(color-gamut: " + t + ")").matches)
                        return t
                }
            },
            invertedColors: function() {
                return !!ne("inverted") || !ne("none") && void 0
            },
            forcedColors: function() {
                return !!te("active") || !te("none") && void 0
            },
            monochrome: function() {
                if (matchMedia("(min-monochrome: 0)").matches) {
                    for (var e = 0; e <= 100; ++e)
                        if (matchMedia("(max-monochrome: " + e + ")").matches)
                            return e;
                    throw new Error("Too high value")
                }
            },
            contrast: function() {
                return re("no-preference") ? 0 : re("high") || re("more") ? 1 : re("low") || re("less") ? -1 : re("forced") ? 10 : void 0
            },
            reducedMotion: function() {
                return !!ae("reduce") || !ae("no-preference") && void 0
            },
            hdr: function() {
                return !!oe("high") || !oe("standard") && void 0
            },
            math: function() {
                var e, n = ce.acos || ie, t = ce.acosh || ie, r = ce.asin || ie, a = ce.asinh || ie, o = ce.atanh || ie, c = ce.atan || ie, i = ce.sin || ie, u = ce.sinh || ie, d = ce.cos || ie, s = ce.cosh || ie, l = ce.tan || ie, p = ce.tanh || ie, f = ce.exp || ie, h = ce.expm1 || ie, m = ce.log1p || ie;
                return {
                    acos: n(.12312423423423424),
                    acosh: t(1e308),
                    acoshPf: (e = 1e154,
                    ce.log(e + ce.sqrt(e * e - 1))),
                    asin: r(.12312423423423424),
                    asinh: a(1),
                    asinhPf: function(e) {
                        return ce.log(e + ce.sqrt(e * e + 1))
                    }(1),
                    atanh: o(.5),
                    atanhPf: function(e) {
                        return ce.log((1 + e) / (1 - e)) / 2
                    }(.5),
                    atan: c(.5),
                    sin: i(-1e300),
                    sinh: u(1),
                    sinhPf: function(e) {
                        return ce.exp(e) - 1 / ce.exp(e) / 2
                    }(1),
                    cos: d(10.000000000123),
                    cosh: s(1),
                    coshPf: function(e) {
                        return (ce.exp(e) + 1 / ce.exp(e)) / 2
                    }(1),
                    tan: l(-1e300),
                    tanh: p(1),
                    tanhPf: function(e) {
                        return (ce.exp(2 * e) - 1) / (ce.exp(2 * e) + 1)
                    }(1),
                    exp: f(1),
                    expm1: h(1),
                    expm1Pf: function(e) {
                        return ce.exp(e) - 1
                    }(1),
                    log1p: m(10),
                    log1pPf: function(e) {
                        return ce.log(1 + e)
                    }(10),
                    powPI: function(e) {
                        return ce.pow(ce.PI, e)
                    }(-100)
                }
            }
        };
        function se(e) {
            var n = function(e) {
                if (M())
                    return .4;
                if (B())
                    return L() ? .5 : .3;
                var n = e.platform.value || "";
                return /^Win/.test(n) ? .6 : /^Mac/.test(n) ? .5 : .7
            }(e)
              , t = function(e) {
                return P(.99 + .01 * e, 1e-4)
            }(n);
            return {
                score: n,
                comment: "$ if upgrade to Pro: https://fpjs.dev/pro".replace(/\$/g, "" + t)
            }
        }
        function le(e) {
            return JSON.stringify(e, (function(e, n) {
                return n instanceof Error ? u({
                    name: (t = n).name,
                    message: t.message,
                    stack: null === (r = t.stack) || void 0 === r ? void 0 : r.split("\n")
                }, t) : n;
                var t, r
            }
            ), 2)
        }
        function pe(e) {
            return y(function(e) {
                for (var n = "", t = 0, r = Object.keys(e).sort(); t < r.length; t++) {
                    var a = r[t]
                      , o = e[a]
                      , c = o.error ? "error" : JSON.stringify(o.value);
                    n += (n ? "|" : "") + a.replace(/([:|\\])/g, "\\$1") + ":" + c
                }
                return n
            }(e))
        }
        function fe(e) {
            return void 0 === e && (e = 50),
            function(e, n) {
                void 0 === n && (n = 1 / 0);
                var t = window.requestIdleCallback;
                return t ? new Promise((function(e) {
                    return t.call(window, (function() {
                        return e()
                    }
                    ), {
                        timeout: n
                    })
                }
                )) : p(Math.min(e, n))
            }(e, 2 * e)
        }
        function he(e, n) {
            var t = Date.now();
            return {
                get: function(r) {
                    return d(this, void 0, void 0, (function() {
                        var a, o, c;
                        return s(this, (function(i) {
                            switch (i.label) {
                            case 0:
                                return a = Date.now(),
                                [4, e()];
                            case 1:
                                return o = i.sent(),
                                c = function(e) {
                                    var n;
                                    return {
                                        get visitorId() {
                                            return void 0 === n && (n = pe(this.components)),
                                            n
                                        },
                                        set visitorId(e) {
                                            n = e
                                        },
                                        confidence: se(e),
                                        components: e,
                                        version: "3.3.3"
                                    }
                                }(o),
                                (n || (null == r ? void 0 : r.debug)) && console.log("Copy the text below to get the debug data:\n\n```\nversion: " + c.version + "\nuserAgent: " + navigator.userAgent + "\ntimeBetweenLoadAndGet: " + (a - t) + "\nvisitorId: " + c.visitorId + "\ncomponents: " + le(o) + "\n```"),
                                [2, c]
                            }
                        }
                        ))
                    }
                    ))
                }
            }
        }
        function me(e) {
            var n = void 0 === e ? {} : e
              , t = n.delayFallback
              , r = n.debug;
            return n.monitoring,
            d(this, void 0, void 0, (function() {
                return s(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, fe(t)];
                    case 1:
                        return e.sent(),
                        [2, he(R(de, {
                            debug: r
                        }, []), r)]
                    }
                }
                ))
            }
            ))
        }
        var ge = {
            load: me,
            hashComponents: pe,
            componentsToDebugString: le
        }
          , be = t("3779")
          , ve = 1;
        ge.load().then((function(e) {
            return e.get()
        }
        )).then((function(e) {
            var n = e.visitorId;
            window.sessionStorage.setItem("x-riskdevicesign", n)
        }
        )),
        r["a"].defaults.timeout = 6e4,
        r["a"].defaults.baseURL = a.host,
        r["a"].interceptors.request.use((function(e) {
            var n = "wap";
            return e.params = Object.assign(e.params || {}, {
                referrer: n
            }),
            e.headers["x-riskdevicesign"] = window.sessionStorage.getItem("x-riskdevicesign"),
            e.seq = ve,
            be["a"].observerCgi("beforeSend", e),
            ve++,
            e
        }
        )),
        r["a"].interceptors.response.use((function(e) {
            var n = e.data
              , t = /\/s\//.test(e.config.url);
            if (be["a"].observerCgi("afterSuccess", {
                url: e.config.url,
                response: e,
                httpSuccess: !0
            }),
            Object(c["y"])(n) && !n.success && !t) {
                var r = new Error(n.resultMsg);
                return r.code = n.resultCode,
                r.data = n.data,
                r.hide = n.hideError,
                r.statusCode = n.code,
                e.config.headers.noAuth || -999 !== Number(r.code) || o["a"].emit(o["a"].events.AUTH_FAIL),
                Promise.reject(r)
            }
            return n
        }
        ), (function(e) {
            if (e.response)
                switch (e.response.status) {
                case 400:
                    e.message = "请求错误";
                    break;
                case 401:
                    e.message = "未授权，请登录",
                    o["a"].emit(o["a"].events.AUTH_FAIL);
                    break;
                case 403:
                    e.message = "登录过期，请重新登录",
                    o["a"].emit(o["a"].events.AUTH_FAIL);
                    break;
                case 404:
                    e.message = "请求地址出错";
                    break;
                case 500:
                    e.message = "服务器内部错误";
                    break;
                case 501:
                    e.message = "服务未实现";
                    break;
                case 502:
                    e.message = "网关错误";
                    break;
                case 503:
                    e.message = "服务不可用";
                    break;
                case 504:
                    e.message = "网关超时";
                    break;
                case 505:
                    e.message = "HTTP版本不受支持";
                    break;
                default:
                    break
                }
            else
                "ECONNABORTED" === e.code && e.message.includes("timeout") && (e.message = "请求超时",
                e.status = "timeout"),
                e.message.includes("Network Error") && (e.message = "网络错误");
            return Promise.reject(e)
        }
        ));
        n["a"] = r["a"]
    },
    c466: function(e, n, t) {
        "use strict";
        t("3b2b"),
        t("a481");
        n["a"] = {
            format: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-dd";
                if (!e)
                    return "";
                var t = new Date(e)
                  , r = {
                    "M+": t.getMonth() + 1,
                    "d+": t.getDate(),
                    "h+": t.getHours(),
                    "m+": t.getMinutes(),
                    "s+": t.getSeconds(),
                    "q+": Math.floor((t.getMonth() + 3) / 3),
                    S: t.getMilliseconds()
                };
                for (var a in /(y+)/.test(n) && (n = n.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length))),
                r)
                    new RegExp("(" + a + ")").test(n) && (n = n.replace(RegExp.$1, 1 === RegExp.$1.length ? r[a] : ("00" + r[a]).substr(("" + r[a]).length)));
                return n
            },
            getDateTimestamp: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , n = new Date;
                return n.setDate(n.getDate() + e),
                n.setHours(0),
                n.setMinutes(0),
                n.setSeconds(0),
                n.setMilliseconds(0),
                n.getTime()
            }
        }
    },
    c51c: function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = [{
            path: "/activity/2021618",
            name: "2021618",
            meta: {
                title: "年中大促 翼促即发",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("2021517")]).then(t.bind(null, "f35b"))
            }
        }]
    },
    cbd5: function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/5G",
            name: "5G",
            meta: {
                title: "5G+拎包入住",
                platform: ["all"]
            },
            component: function() {
                return t.e("5G").then(t.bind(null, "5f0c"))
            }
        }
    },
    dd8e: function(e, n, t) {
        "use strict";
        t("456d"),
        t("cadf"),
        t("28a5");
        var r = t("bd86")
          , a = t("a8db")
          , o = (t("a481"),
        t("75fc"))
          , c = (t("6b54"),
        t("ac6a"),
        t("7f7f"),
        t("6762"),
        t("2fdb"),
        t("2b0e"))
          , i = t("8c4f")
          , u = [{
            path: "/product/:productCode",
            name: "productDetail",
            meta: {
                title: "",
                platform: ["wap", "wechat"]
            },
            component: function() {
                return Promise.all([t.e("appSolutionDetail~home~productDetail"), t.e("productDetail")]).then(t.bind(null, "46f9"))
            }
        }, {
            path: "/operateProduct",
            name: "operateProduct",
            meta: {
                title: "天翼云产品",
                auth: !0,
                platform: ["wap", "wechat"]
            },
            component: function() {
                return t.e("operateProduct").then(t.bind(null, "61ee"))
            }
        }, {
            path: "/buy/ops",
            name: "ops",
            meta: {
                title: "产品选购",
                auth: !0,
                platform: ["wap", "wechat"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("buy~login~recognition~submitWorkorderTwo"), t.e("buy")]).then(t.bind(null, "b90e"))
            }
        }, {
            path: "/buy/:type/:code",
            name: "buy",
            meta: {
                title: "产品选购",
                auth: !0,
                platform: ["wap", "wechat"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("buy~login~recognition~submitWorkorderTwo"), t.e("buy")]).then(t.bind(null, "c9a5"))
            }
        }, {
            path: "/paymentResponse",
            name: "paymentResponse",
            meta: {
                title: "订单支付",
                auth: !0,
                platform: ["wap", "wechat"]
            },
            component: function() {
                return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("paymentResponse")]).then(t.bind(null, "7fe2"))
            }
        }]
          , d = u
          , s = [{
            path: "/calculator/:code",
            name: "calculator",
            meta: {
                title: "价格计算器",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("new")]).then(t.bind(null, "f93b"))
            }
        }, {
            path: "/budget",
            name: "budget",
            meta: {
                title: "价格预算清单",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("priseList")]).then(t.bind(null, "f3df"))
            }
        }]
          , l = s
          , p = {
            path: "/serviceCase",
            name: "serviceCase",
            component: function() {
                return t.e("serviceCase").then(t.bind(null, "3016"))
            },
            children: [{
                path: ":category",
                name: "serviceCaseCategory",
                meta: {
                    title: "服务案例",
                    keepAlive: !0,
                    platform: ["all"],
                    newPath: "h5/clientcases"
                },
                component: function() {
                    return Promise.all([t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("serviceCaseCategory")]).then(t.bind(null, "ac97"))
                }
            }, {
                path: ":category/:caseId",
                name: "serviceCaseDetail",
                meta: {
                    title: "服务案例详情",
                    platform: ["all"],
                    newPath: function(e) {
                        return "/h5/clientcases/".concat(e.caseId)
                    }
                },
                component: function() {
                    return t.e("serviceCaseDetail").then(t.bind(null, "a09a"))
                }
            }]
        }
          , f = p
          , h = [{
            path: "/cloud/:id?",
            name: "cloud",
            meta: {
                title: "弹性云主机",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("cloud")]).then(t.bind(null, "c410"))
            }
        }, {
            path: "/cloud/instance/:nodeId/:hostId/:regionId/:version",
            name: "cloudInstance",
            meta: {
                title: "弹性云主机",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("cloudInstance")]).then(t.bind(null, "867d"))
            }
        }]
          , m = h
          , g = [{
            path: "/disk/:id?",
            name: "diskIndex",
            meta: {
                title: "云硬盘",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement"), t.e("diskIndex")]).then(t.bind(null, "87fd"))
            }
        }, {
            path: "/disk/instance/:id/:name/:regionId/:version/:from/:nodeId/:hostId?",
            name: "diskInstance",
            meta: {
                title: "云硬盘",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("diskInstance")]).then(t.bind(null, "e93f"))
            }
        }, {
            path: "/disk/backup/:id/:name/:regionId/:version",
            name: "diskBackup",
            meta: {
                title: "创建云硬盘备份",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("bindDisk~bindIp~createBackup~ipDetail"), t.e("createBackup")]).then(t.bind(null, "6562"))
            }
        }, {
            path: "/disk/bind/:hostId/:regionId/:version",
            name: "bindDisk",
            meta: {
                title: "挂载磁盘",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("bindDisk~bindIp~createBackup~ipDetail"), t.e("bindDisk")]).then(t.bind(null, "264a"))
            }
        }]
          , b = g
          , v = [{
            path: "/ip/:id?",
            name: "ip",
            meta: {
                title: "弹性IP",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement"), t.e("ip")]).then(t.bind(null, "c167"))
            }
        }, {
            path: "/bindip/:id/:zoneId/:version",
            name: "bindIp",
            meta: {
                title: "绑定弹性IP",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("bindDisk~bindIp~createBackup~ipDetail"), t.e("bindIp")]).then(t.bind(null, "3ce6"))
            }
        }, {
            path: "/ip/detail/:id/:regionId/:version",
            name: "detailIp",
            meta: {
                title: "弹性IP详情",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("bindDisk~bindIp~createBackup~ipDetail"), t.e("ipDetail")]).then(t.bind(null, "e2d2"))
            }
        }]
          , k = v
          , w = [{
            path: "/appSolution/index",
            name: "appSolutionIndex",
            meta: {
                title: "天翼云解决方案",
                platform: ["all"],
                newPath: "/h5/solutions"
            },
            component: function() {
                return t.e("appSolutionIndex").then(t.bind(null, "e57f"))
            }
        }, {
            path: "/appSolution/detail/:solutionId",
            name: "solutionDetail",
            meta: {
                title: "",
                platform: ["all"],
                newPath: function(e) {
                    return "/h5/solutions/".concat(e.solutionId)
                }
            },
            component: function() {
                return Promise.all([t.e("appSolutionDetail~home~productDetail"), t.e("appSolutionDetail")]).then(t.bind(null, "465e"))
            }
        }, {
            path: "/appSolution/form",
            name: "appSolutionForm2",
            meta: {
                title: "服务咨询",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("appSolutionForm")]).then(t.bind(null, "f9cc"))
            }
        }]
          , y = w
          , I = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            n = Array.isArray(n) ? n : [n],
            e.push.apply(e, Object(o["a"])(n))
        }
          , D = function() {
            var e = []
              , n = t("0b94");
            return n.keys().forEach((function(t) {
                var r = n(t).default;
                I(e, r)
            }
            )),
            e
        }
          , C = D()
          , x = {
            path: "/activity",
            name: "activity",
            component: function() {
                return t.e("activity").then(t.bind(null, "6e5b"))
            },
            children: C
        }
          , P = x
          , O = {
            path: "/agent",
            name: "agent",
            meta: {
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("agent")]).then(t.bind(null, "bc86"))
            },
            children: [{
                path: "info",
                name: "info",
                meta: {
                    title: "基本信息 (1/3)",
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("agentBank~agentInfo~agentPhone"), t.e("agentInfo")]).then(t.bind(null, "9b26"))
                }
            }, {
                path: "phone",
                name: "phone",
                meta: {
                    title: "联系方式 (2/3)",
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("agentBank~agentInfo~agentPhone"), t.e("agentPhone")]).then(t.bind(null, "248b"))
                }
            }, {
                path: "bank",
                name: "bank",
                meta: {
                    title: "银行信息 (3/3)",
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("agentBank~agentInfo~agentPhone"), t.e("agentBank")]).then(t.bind(null, "4f6b"))
                }
            }, {
                path: "submit",
                name: "submit",
                meta: {
                    title: "提交",
                    platform: ["all"]
                },
                component: function() {
                    return t.e("agentSubmit").then(t.bind(null, "e784"))
                }
            }, {
                path: "recheckFill",
                name: "recheckFill",
                meta: {
                    title: "复审",
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555"), t.e("agentRecheckFill~detail~login~order~register~spring"), t.e("agentRecheckFill")]).then(t.bind(null, "1b8a"))
                }
            }, {
                path: "recheckSubmit",
                name: "recheckSubmit",
                meta: {
                    title: "复审",
                    platform: ["all"]
                },
                component: function() {
                    return t.e("agentRecheckSubmit").then(t.bind(null, "ce6c"))
                }
            }, {
                path: "recheckResult",
                name: "recheckResult",
                meta: {
                    title: "复审",
                    platform: ["all"]
                },
                component: function() {
                    return t.e("agentRecheckResult").then(t.bind(null, "2344"))
                }
            }]
        }
          , R = O
          , S = {
            path: "/",
            component: function() {
                return Promise.all([t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("console~home~my~product"), t.e("appSolutionDetail~home~productDetail"), t.e("home~voucher"), t.e("home")]).then(t.bind(null, "3b4d"))
            },
            children: [{
                path: "",
                name: "home",
                meta: {
                    title: "天翼云",
                    platform: ["wap", "wechat"],
                    newPath: "/h5"
                },
                component: function() {
                    return Promise.all([t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("console~home~my~product"), t.e("appSolutionDetail~home~productDetail"), t.e("home~voucher"), t.e("home")]).then(t.bind(null, "1c07"))
                }
            }, {
                path: "product",
                name: "product",
                meta: {
                    title: "产品",
                    platform: ["wap", "wechat"],
                    newPath: "/h5/discover/product"
                },
                component: function() {
                    return Promise.all([t.e("console~home~my~product"), t.e("product")]).then(t.bind(null, "dc86"))
                }
            }, {
                path: "console",
                name: "console",
                meta: {
                    title: "控制台",
                    platform: ["wap", "wechat"],
                    newPath: "/h5/manage/console"
                },
                component: function() {
                    return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("console~home~my~product"), t.e("console")]).then(t.bind(null, "7e60"))
                }
            }, {
                path: "my",
                name: "my",
                meta: {
                    title: "我的",
                    platform: ["wap", "wechat"],
                    newPath: "/h5/my"
                },
                component: function() {
                    return Promise.all([t.e("console~home~my~product"), t.e("my")]).then(t.bind(null, "d63a"))
                }
            }]
        }
          , A = S
          , j = {
            path: "/auth",
            component: function() {
                return t.e("auth").then(t.bind(null, "e9eb"))
            },
            children: [{
                path: "login",
                name: "login",
                meta: {
                    title: "登录",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555"), t.e("agentRecheckFill~detail~login~order~register~spring"), t.e("buy~login~recognition~submitWorkorderTwo"), t.e("accountBind~login~secondAuth"), t.e("login")]).then(t.bind(null, "ebb0"))
                }
            }, {
                path: "register",
                name: "register",
                meta: {
                    title: "新用户注册",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555"), t.e("agentRecheckFill~detail~login~order~register~spring"), t.e("register~reset"), t.e("identification~register"), t.e("register")]).then(t.bind(null, "a6ac"))
                }
            }, {
                path: "reset",
                name: "reset",
                meta: {
                    title: "重置登录密码",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("register~reset"), t.e("reset")]).then(t.bind(null, "0537"))
                }
            }, {
                path: "accountBind",
                name: "accountBind",
                meta: {
                    title: "账号绑定",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("accountBind~login~secondAuth"), t.e("accountBind")]).then(t.bind(null, "2041"))
                }
            }, {
                path: "modify",
                name: "modifyPassword",
                meta: {
                    title: "修改密码",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return t.e("modifyPwd").then(t.bind(null, "9b8e"))
                }
            }, {
                path: "secondAuth",
                name: "secondAuth",
                meta: {
                    title: "二次认证",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("accountBind~login~secondAuth"), t.e("secondAuth")]).then(t.bind(null, "cc93"))
                }
            }, {
                path: "secondAuth/redirect",
                name: "redirect",
                meta: {
                    title: "二次认证",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("accountBind~login~secondAuth"), t.e("secondAuth")]).then(t.bind(null, "ca85"))
                }
            }]
        }
          , B = j
          , L = {
            path: "/business",
            name: "business",
            meta: {
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return t.e("businessOpportunities").then(t.bind(null, "1811"))
            },
            children: [{
                path: "weekly",
                name: "weekly",
                meta: {
                    title: "战团周报",
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("businessOpportunitiesWeekly~pivotalPerson"), t.e("businessOpportunitiesWeekly")]).then(t.bind(null, "8358"))
                }
            }, {
                path: "pivotalPerson",
                name: "pivotalPerson",
                meta: {
                    title: "关键人收集",
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("businessOpportunitiesWeekly~pivotalPerson"), t.e("pivotalPerson")]).then(t.bind(null, "0804"))
                }
            }]
        }
          , T = L
          , E = {
            path: "/video",
            component: function() {
                return t.e("video").then(t.bind(null, "f479"))
            },
            children: [{
                path: "",
                name: "video",
                meta: {
                    title: "视频播放",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("index")]).then(t.bind(null, "3867"))
                }
            }]
        }
          , M = E
          , _ = [{
            path: "/account",
            component: function() {
                return t.e("account").then(t.bind(null, "18ce"))
            },
            children: [{
                path: "",
                name: "account",
                meta: {
                    title: "账户管理",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("index")]).then(t.bind(null, "97d4"))
                }
            }, {
                path: "coupon",
                name: "coupon",
                meta: {
                    title: "优惠券",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("chunk-6b589ffd"), t.e("coupon")]).then(t.bind(null, "88a6"))
                }
            }, {
                path: "voucher",
                name: "voucher",
                meta: {
                    title: "代金券",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("chunk-6b589ffd"), t.e("home~voucher"), t.e("voucher")]).then(t.bind(null, "fbe7"))
                }
            }, {
                path: "info",
                name: "acctInfo",
                meta: {
                    title: "账户信息",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-e4f989f8"), t.e("info")]).then(t.bind(null, "6838"))
                }
            }, {
                path: "realname",
                name: "realname",
                meta: {
                    title: "实名认证",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-e4f989f8"), t.e("info")]).then(t.bind(null, "b335"))
                }
            }, {
                path: "realname/uploadpic",
                name: "realname/uploadpic",
                meta: {
                    title: "银行卡认证",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-e4f989f8"), t.e("info")]).then(t.bind(null, "c2cc"))
                }
            }, {
                path: "realAuthHelper",
                name: "realAuthHelper",
                meta: {
                    title: "实名认证",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-e4f989f8"), t.e("info")]).then(t.bind(null, "ef1f"))
                }
            }, {
                path: "recognition",
                name: "recognition",
                meta: {
                    title: "活体认证",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("buy~login~recognition~submitWorkorderTwo"), t.e("chunk-eec5f6b8"), t.e("recognition")]).then(t.bind(null, "7628"))
                }
            }, {
                path: "mobile",
                name: "mobile",
                meta: {
                    title: "修改绑定手机号",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-e4f989f8"), t.e("info")]).then(t.bind(null, "7bf7"))
                }
            }, {
                path: "edit",
                name: "edit",
                meta: {
                    title: "修改账户信息",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("add~continuedDetail~edit~order~orderDetail"), t.e("edit")]).then(t.bind(null, "40d8"))
                }
            }, {
                path: "edit/address",
                name: "address",
                meta: {
                    title: "修改联系地址",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return t.e("address").then(t.bind(null, "dfc0"))
                }
            }, {
                path: "withdraw",
                component: function() {
                    return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("add~continuedDetail~edit~order~orderDetail"), t.e("edit")]).then(t.bind(null, "850e"))
                },
                children: [{
                    path: "",
                    name: "withdraw",
                    meta: {
                        title: "提现",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement"), t.e("withdraw")]).then(t.bind(null, "fefa"))
                    }
                }, {
                    path: "bankList",
                    name: "bankList",
                    meta: {
                        title: "选择银行卡",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement"), t.e("withdraw")]).then(t.bind(null, "0dad"))
                    }
                }, {
                    path: "addBankCard",
                    name: "addBankCard",
                    meta: {
                        title: "银行卡信息",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("addBankCard")]).then(t.bind(null, "207c"))
                    }
                }, {
                    path: "editBankCard",
                    name: "editBankCard",
                    meta: {
                        title: "银行卡信息",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("editBankCard")]).then(t.bind(null, "91da"))
                    }
                }, {
                    path: "result",
                    name: "result",
                    meta: {
                        title: "处理结果",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return t.e("result").then(t.bind(null, "81b8"))
                    }
                }, {
                    path: "list",
                    name: "list",
                    meta: {
                        title: "提现明细",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("list")]).then(t.bind(null, "b825"))
                    }
                }, {
                    path: "detail/:id",
                    name: "detail",
                    meta: {
                        title: "提现详情",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555"), t.e("agentRecheckFill~detail~login~order~register~spring"), t.e("detail~workorderDetail"), t.e("detail")]).then(t.bind(null, "4c1b"))
                    }
                }]
            }, {
                path: "recharge",
                name: "recharge",
                meta: {
                    title: "充值",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return t.e("recharge").then(t.bind(null, "2469"))
                }
            }]
        }, {
            path: "/rechargeResponse/:result",
            name: "rechargeResponse",
            meta: {
                title: "账户充值",
                auth: !0,
                platform: ["wap", "wechat"]
            },
            component: function() {
                return t.e("rechargeResponse").then(t.bind(null, "6217"))
            }
        }]
          , F = _
          , H = {
            path: "/setting",
            component: function() {
                return t.e("setting").then(t.bind(null, "efb7"))
            },
            children: [{
                path: "",
                name: "setting",
                meta: {
                    title: "设置",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("index")]).then(t.bind(null, "aa3a"))
                }
            }, {
                path: "accountBind",
                name: "settingAccountBind",
                meta: {
                    title: "账号绑定",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement"), t.e("settingAccountBind")]).then(t.bind(null, "f356"))
                }
            }, {
                path: "about",
                name: "about",
                meta: {
                    title: "关于我们",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return t.e("about").then(t.bind(null, "5b2a"))
                }
            }]
        }
          , q = H
          , U = [{
            path: "/order/list",
            name: "orderList",
            meta: {
                title: "",
                keepAlive: !0,
                auth: !0,
                platform: ["wap", "wechat"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("orderList")]).then(t.bind(null, "7ded"))
            }
        }, {
            path: "/order/list-history",
            name: "orderListHistory",
            meta: {
                title: "历史订单",
                keepAlive: !0,
                auth: !0,
                platform: ["wap", "wechat"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("orderListHistory")]).then(t.bind(null, "b551"))
            }
        }, {
            path: "/order/detail/:orderId",
            name: "orderDetail",
            meta: {
                title: "订单详情",
                keepAlive: !1,
                auth: !0,
                platform: ["wap", "wechat"]
            },
            component: function() {
                return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555"), t.e("challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement"), t.e("add~continuedDetail~edit~order~orderDetail"), t.e("orderDetail")]).then(t.bind(null, "d355"))
            }
        }]
          , N = U
          , W = {
            path: "/news",
            component: function() {
                return t.e("news").then(t.bind(null, "69a2"))
            },
            children: [{
                path: "detail/:newsId",
                name: "newsDetail",
                meta: {
                    title: "资讯详情",
                    platform: ["wap", "wechat"],
                    newPath: function(e) {
                        return "/h5/news/".concat(e.newsId)
                    }
                },
                component: function() {
                    return t.e("newsDetail").then(t.bind(null, "6684"))
                }
            }, {
                path: "list",
                name: "newsList",
                meta: {
                    title: "新闻资讯",
                    platform: ["wap", "wechat"],
                    newPath: "/h5/news"
                },
                component: function() {
                    return Promise.all([t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("newsList")]).then(t.bind(null, "05cb"))
                }
            }]
        }
          , $ = W
          , z = {
            path: "/identification",
            component: function() {
                return Promise.all([t.e("identification~register"), t.e("identification")]).then(t.bind(null, "697f"))
            },
            children: [{
                path: "",
                name: "identificationIndex",
                meta: {
                    title: "用户类型",
                    auth: !1,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return t.e("identificationIndex").then(t.bind(null, "4fc2"))
                }
            }, {
                path: "authing",
                name: "authing",
                meta: {
                    title: "审核认证中",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return t.e("identificationIndex").then(t.bind(null, "279e"))
                }
            }, {
                path: "fail",
                name: "fail",
                meta: {
                    title: "认证状态",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return t.e("identificationIndex").then(t.bind(null, "5583"))
                }
            }, {
                path: "personal",
                name: "personalAuth",
                meta: {
                    title: "个人实名认证",
                    auth: !1,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-e4f989f8"), t.e("identificationStep")]).then(t.bind(null, "0b72"))
                }
            }, {
                path: "company",
                name: "companyAuth",
                meta: {
                    title: "企业实名认证",
                    auth: !1,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-e4f989f8"), t.e("identificationStep")]).then(t.bind(null, "d2ff"))
                }
            }, {
                path: "personal/idAuth",
                name: "idAuth",
                meta: {
                    title: "个人身份证认证",
                    auth: !1,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-e4f989f8"), t.e("identificationStep")]).then(t.bind(null, "6def"))
                }
            }, {
                path: "company/nonIdAuth",
                name: "nonIdAuth",
                meta: {
                    title: "个人非身份证认证",
                    auth: !1,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-e4f989f8"), t.e("identificationStep")]).then(t.bind(null, "937c"))
                }
            }]
        }
          , V = z
          , G = {
            path: "/cloudMarket",
            component: function() {
                return t.e("cloudMarket").then(t.bind(null, "7735"))
            },
            children: [{
                path: "",
                name: "cloudMarketEntrance",
                meta: {
                    title: "云市场",
                    keepAlive: !0,
                    platform: ["app"]
                },
                component: function() {
                    return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("index")]).then(t.bind(null, "314f"))
                }
            }, {
                path: "channel/:code",
                name: "cloudMarketChannel",
                meta: {
                    keepAlive: !0,
                    platform: ["app"]
                },
                component: function() {
                    return Promise.all([t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("channel")]).then(t.bind(null, "d468"))
                }
            }, {
                path: "detail/:productId",
                name: "cloudMarketDetail",
                meta: {
                    title: "商品详情",
                    platform: ["app"]
                },
                component: function() {
                    return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555"), t.e("agentRecheckFill~detail~login~order~register~spring"), t.e("detail~workorderDetail"), t.e("detail")]).then(t.bind(null, "33e3"))
                }
            }, {
                path: "order/:orderId",
                name: "cloudMarketOrder",
                meta: {
                    title: "确认订单",
                    auth: !0,
                    platform: ["app"]
                },
                component: function() {
                    return Promise.all([t.e("agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555"), t.e("agentRecheckFill~detail~login~order~register~spring"), t.e("add~continuedDetail~edit~order~orderDetail"), t.e("order")]).then(t.bind(null, "4781"))
                }
            }]
        }
          , J = G
          , Z = {
            path: "/qrCodeLogin",
            name: "qrCodeLogin",
            meta: {
                platform: ["app"]
            },
            component: function() {
                return t.e("qrCodeLogin").then(t.bind(null, "b99b"))
            }
        }
          , Q = Z
          , X = {
            path: "/qrcodeInOne",
            name: "qrcodeInOne",
            meta: {
                platform: ["app", "wap", "wechat"]
            },
            component: function() {
                return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("qrCodeInOne")]).then(t.bind(null, "60cd"))
            }
        }
          , K = X
          , Y = {
            path: "/workorder",
            component: function() {
                return t.e("workorder").then(t.bind(null, "5cd8"))
            },
            children: [{
                path: "",
                name: "submitWorkorderTwo",
                meta: {
                    title: "提交工单",
                    auth: !0,
                    platform: ["app"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("buy~login~recognition~submitWorkorderTwo"), t.e("submitWorkorderTwo")]).then(t.bind(null, "4f0c"))
                }
            }, {
                path: "management",
                name: "workorderManagement",
                meta: {
                    title: "工单管理",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555"), t.e("challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement"), t.e("workorderManagement")]).then(t.bind(null, "f83e"))
                }
            }, {
                path: "submit",
                name: "submitWorkorder",
                meta: {
                    title: "新建工单",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("submitWorkorder")]).then(t.bind(null, "fa56"))
                }
            }, {
                path: "product",
                name: "workorderProducts",
                meta: {
                    title: "选择产品",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return t.e("chunk-b051dfd0").then(t.bind(null, "057c"))
                }
            }, {
                path: "detail/:workorderId",
                name: "workorderDetail",
                meta: {
                    title: "工单详情",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555"), t.e("challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement"), t.e("detail~workorderDetail"), t.e("workorderDetail")]).then(t.bind(null, "6614"))
                }
            }, {
                path: "search",
                name: "workorderSearch",
                meta: {
                    title: "工单管理",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("workorderSearch")]).then(t.bind(null, "e936"))
                }
            }, {
                path: "progress",
                name: "workorderProgress",
                meta: {
                    title: "工单进度",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("workorderProgress")]).then(t.bind(null, "ad73"))
                }
            }, {
                path: "demand",
                name: "workorderDemand",
                meta: {
                    title: "业务需求单",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("chunk-e4f989f8"), t.e("agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555"), t.e("workorderDemand")]).then(t.bind(null, "4969"))
                }
            }]
        }
          , ee = Y
          , ne = {
            path: "*",
            meta: {
                title: "找到不到该页面",
                platform: ["all"]
            },
            component: function() {
                return t.e("notFound").then(t.bind(null, "935e"))
            }
        }
          , te = ne
          , re = {
            path: "/download",
            name: "download",
            meta: {
                title: "天翼云 安全云",
                platform: ["wap", "wechat"]
            },
            component: function() {
                return t.e("download").then(t.bind(null, "fe59"))
            }
        }
          , ae = re
          , oe = {
            path: "/feedback",
            name: "feedback",
            meta: {
                title: "建议与反馈",
                platform: ["wap", "wechat"],
                auth: !0
            },
            component: function() {
                return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("feedback")]).then(t.bind(null, "2639"))
            }
        }
          , ce = oe
          , ie = [{
            path: "/message/list",
            name: "messageList",
            meta: {
                title: "消息",
                platform: ["wap", "wechat"],
                auth: !0,
                newPath: "/h5/messages"
            },
            component: function() {
                return Promise.all([t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("messageList")]).then(t.bind(null, "6db4"))
            }
        }, {
            path: "/message/detail/:id",
            name: "messageDetail",
            meta: {
                title: "消息详情",
                platform: ["wap", "wechat"],
                auth: !0,
                newPath: function(e) {
                    return "/h5/solutions/".concat(e.id)
                }
            },
            component: function() {
                return t.e("messageDetail").then(t.bind(null, "1fe8"))
            }
        }]
          , ue = ie
          , de = [{
            path: "/notice/list",
            name: "noticeList",
            meta: {
                title: "消息",
                platform: ["wap", "wechat"],
                newPath: "/h5/notices"
            },
            component: function() {
                return t.e("noticeList").then(t.bind(null, "0294"))
            }
        }, {
            path: "/notice/detail/:id",
            name: "noticeDetail",
            meta: {
                title: "公告详情",
                platform: ["wap", "wechat"],
                newPath: function(e) {
                    return "/h5/notices/".concat(e.id)
                }
            },
            component: function() {
                return t.e("noticeDetail").then(t.bind(null, "e3e1"))
            }
        }]
          , se = de
          , le = [{
            path: "/helpCenter",
            name: "helpCenter",
            meta: {
                title: "帮助中心",
                platform: ["wap", "wechat"]
            },
            component: function() {
                return t.e("helpCenter").then(t.bind(null, "5cb7"))
            }
        }, {
            path: "/helpCenter/docs",
            name: "helpCenterDocs",
            meta: {
                title: "帮助文档",
                platform: ["all"]
            },
            component: function() {
                return t.e("helpCenterDocs").then(t.bind(null, "3e9f"))
            }
        }, {
            path: "/helpCenter/docs/:id",
            name: "helpCenterDocsDetail",
            meta: {
                title: "帮助中心",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("helpCenterDocsDetail")]).then(t.bind(null, "3851"))
            }
        }, {
            path: "/helpCenter/docs/:bookId/:pageId",
            name: "helpCenterPageDetail",
            meta: {
                title: "帮助中心",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("helpCenterPageDetail")]).then(t.bind(null, "7ce2"))
            }
        }, {
            path: "/helpCenter/search",
            name: "helpCenterSearch",
            meta: {
                title: "",
                platform: ["wap", "wechat"]
            },
            component: function() {
                return Promise.all([t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("helpCenterSearch")]).then(t.bind(null, "5747"))
            }
        }]
          , pe = le
          , fe = [{
            path: "/challenge",
            name: "challenge",
            meta: {
                title: "“创青春”智慧校园主题赛",
                platform: ["all"]
            },
            component: function() {
                return t.e("challenge").then(t.bind(null, "bb41"))
            }
        }, {
            path: "/challenge/field",
            name: "challengeField",
            meta: {
                title: "主题赛场",
                platform: ["all"]
            },
            component: function() {
                return t.e("challengeField").then(t.bind(null, "beb7"))
            }
        }, {
            path: "/challenge/apply",
            name: "challengeApply",
            meta: {
                title: "填写报名信息",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement"), t.e("challengeApply")]).then(t.bind(null, "70a9"))
            }
        }, {
            path: "/challenge/check",
            name: "challengeCheck",
            meta: {
                title: "查看报名信息",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return t.e("challengeCheck").then(t.bind(null, "9ab3"))
            }
        }]
          , he = fe
          , me = [{
            path: "/continued/list",
            name: "continuedList",
            meta: {
                title: "待续订",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("continuedList")]).then(t.bind(null, "6047"))
            }
        }, {
            path: "/continued/:id",
            name: "continuedDetail",
            meta: {
                title: "续订详情",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("add~continuedDetail~edit~order~orderDetail"), t.e("continuedDetail")]).then(t.bind(null, "597c"))
            }
        }]
          , ge = me
          , be = {
            path: "/invoice",
            component: function() {
                return t.e("invoice").then(t.bind(null, "0720"))
            },
            children: [{
                path: "/",
                name: "invoice",
                meta: {
                    title: "发票管理",
                    auth: !0,
                    platform: ["wap", "wechat"],
                    newPath: "/h5/receipt"
                },
                component: function() {
                    return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("index")]).then(t.bind(null, "eb2c"))
                }
            }, {
                path: "apply",
                name: "applyInvoice",
                meta: {
                    title: "申请开票",
                    auth: !0,
                    platform: ["wap", "wechat"],
                    newPath: "/h5/receipt/apply"
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-e4f989f8"), t.e("agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555"), t.e("apply")]).then(t.bind(null, "8e9b"))
                }
            }, {
                path: "title",
                component: function() {
                    return t.e("title").then(t.bind(null, "4531"))
                },
                children: [{
                    path: "/",
                    name: "title",
                    meta: {
                        title: "发票抬头",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("index")]).then(t.bind(null, "8bb3"))
                    }
                }, {
                    path: "write",
                    name: "invoiceWrite",
                    meta: {
                        title: "填写抬头",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555"), t.e("write")]).then(t.bind(null, "674a"))
                    }
                }, {
                    path: "add",
                    name: "invoiceAdd",
                    meta: {
                        title: "添加抬头",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("add~continuedDetail~edit~order~orderDetail"), t.e("add")]).then(t.bind(null, "69b8"))
                    }
                }, {
                    path: "edit",
                    name: "invoiceEdit",
                    meta: {
                        title: "编辑抬头",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("add~continuedDetail~edit~order~orderDetail"), t.e("edit")]).then(t.bind(null, "a78f"))
                    }
                }]
            }, {
                path: "address",
                component: function() {
                    return t.e("address").then(t.bind(null, "ec9f"))
                },
                children: [{
                    path: "/",
                    name: "invoiceAddress",
                    meta: {
                        title: "邮寄地址",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("index")]).then(t.bind(null, "a7e4"))
                    }
                }, {
                    path: "add",
                    name: "addressAdd",
                    meta: {
                        title: "新增地址",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("add~continuedDetail~edit~order~orderDetail"), t.e("add")]).then(t.bind(null, "ae92"))
                    }
                }, {
                    path: "edit",
                    name: "addressEdit",
                    meta: {
                        title: "编辑地址",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("add~continuedDetail~edit~order~orderDetail"), t.e("edit")]).then(t.bind(null, "245cd"))
                    }
                }]
            }, {
                path: "record",
                component: function() {
                    return t.e("record").then(t.bind(null, "a0c7"))
                },
                children: [{
                    path: "/",
                    name: "invoiceRecord",
                    meta: {
                        title: "开票历史",
                        auth: !0,
                        platform: ["wap", "wechat"],
                        newPath: "/h5/receipt/record"
                    },
                    component: function() {
                        return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("index")]).then(t.bind(null, "a2aa"))
                    }
                }, {
                    path: "detail/:id",
                    name: "invoiceDetail",
                    meta: {
                        title: "发票详情",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555"), t.e("agentRecheckFill~detail~login~order~register~spring"), t.e("detail~workorderDetail"), t.e("detail")]).then(t.bind(null, "4b4b"))
                    }
                }, {
                    path: "money",
                    name: "money",
                    meta: {
                        title: "金额详情",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return t.e("money").then(t.bind(null, "f2d6"))
                    }
                }]
            }]
        }
          , ve = be
          , ke = {
            path: "/safeCenter",
            component: function() {
                return t.e("safeCenter").then(t.bind(null, "8d1e"))
            },
            children: [{
                path: "/",
                name: "safeCenter",
                meta: {
                    title: "安全中心",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("index")]).then(t.bind(null, "06de"))
                }
            }, {
                path: "loginHistory",
                name: "loginHistory",
                meta: {
                    title: "登录历史",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("loginHistory")]).then(t.bind(null, "2055"))
                }
            }]
        }
          , we = ke
          , ye = [{
            path: "/cdn/:id?",
            name: "cdn",
            meta: {
                title: "CDN",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("cdn")]).then(t.bind(null, "5af59"))
            }
        }]
          , Ie = ye
          , De = [{
            path: "/physicalMachine/:id?",
            name: "physicalMachine",
            meta: {
                title: "物理机",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("physicalMachine")]).then(t.bind(null, "10343"))
            }
        }]
          , Ce = De
          , xe = [{
            path: "/rds",
            component: function() {
                return t.e("rds").then(t.bind(null, "3bf3"))
            },
            children: [{
                path: "",
                name: "rdsIndex",
                meta: {
                    title: "RDS数据库",
                    auth: !0,
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("index")]).then(t.bind(null, "bf27"))
                }
            }, {
                path: "detail/:regionId/:id",
                name: "rdsDetail",
                meta: {
                    title: "RDS数据库",
                    auth: !0,
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555"), t.e("agentRecheckFill~detail~login~order~register~spring"), t.e("detail~workorderDetail"), t.e("detail")]).then(t.bind(null, "d4e0"))
                }
            }]
        }]
          , Pe = xe
          , Oe = [{
            path: "/desktop/:id?",
            name: "desktop",
            meta: {
                title: "云桌面",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("desktop")]).then(t.bind(null, "5779"))
            }
        }]
          , Re = Oe
          , Se = [{
            path: "/app",
            name: "app",
            meta: {
                title: "天翼云",
                platform: ["all"]
            },
            component: function() {
                return t.e("app").then(t.bind(null, "9f06"))
            }
        }, {
            path: "/app/permission",
            name: "app.permission",
            meta: {
                title: "权限描述",
                platform: ["all"]
            },
            component: function() {
                return t.e("app").then(t.bind(null, "f12b"))
            }
        }]
          , Ae = {
            name: "province",
            path: "/province/:provinceId",
            props: !0,
            meta: {
                title: "省份专区",
                auth: !1,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~653e635c"), t.e("chunk-5f38eea7"), t.e("chunk-e4f989f8"), t.e("province")]).then(t.bind(null, "1b92"))
            }
        }
          , je = {
            path: "/job/detail/:id",
            name: "jobDetail",
            meta: {
                title: "招贤纳士",
                platform: ["all"]
            },
            component: function() {
                return t.e("jobDetail").then(t.bind(null, "e672"))
            }
        }
          , Be = je
          , Le = t("f1e2")
          , Te = t("3779")
          , Ee = ["_method", "_params"];
        function Me(e) {
            if (e.children)
                e.children = _e(e.children);
            else {
                var n = e.meta.platform;
                if (!n.includes("all") && !n.includes("wap"))
                    return null;
                e.name && (He[e.name] = e.name)
            }
            return e
        }
        function _e(e) {
            var n = [];
            return e.forEach((function(e) {
                var t = Me(e);
                t && n.push(t)
            }
            )),
            n
        }
        function Fe(e) {
            var n = [];
            return e.push(te),
            e.forEach((function(e) {
                if ("[object Object]" === Object.prototype.toString.call(e)) {
                    var t = Me(e);
                    t && n.push(t)
                }
                Array.isArray(e) && n.push.apply(n, Object(o["a"])(_e(e)))
            }
            )),
            n
        }
        var He = {}
          , qe = [Se, l, f, m, b, k, y, R, P, A, B, T, d, M, F, q, N, $, V, J, Q, K, ee, ae, ce, ue, se, pe, he, ge, ve, we, Ie, Ce, Pe, Re, Ae, Be]
          , Ue = window.location
          , Ne = Ue.pathname
          , We = Ue.href;
        if (/\wap\/main\/h5/.test(Ne)) {
            var $e = We.replace("/wap/main/h5", "/h5");
            window.location.replace($e)
        }
        var ze = Fe(qe);
        c["default"].use(i["a"]);
        var Ve = new i["a"]({
            mode: "history",
            base: "/".concat("wap", "/").concat("main"),
            routes: [{
                path: "/redirect/:path*",
                name: "redirect",
                redirect: function(e) {
                    var n, t = e.query, o = t._method, c = t._params, i = Object(a["a"])(t, Ee), u = c ? JSON.parse(c) : {};
                    return n = {},
                    Object(r["a"])(n, "name" === o ? "name" : "path", e.params.path || ("name" === o ? "home" : "/")),
                    Object(r["a"])(n, "params", u),
                    Object(r["a"])(n, "query", i),
                    n
                }
            }, {
                path: "/ctyunVision",
                name: "ctyunVision",
                meta: {
                    title: "翼视捷下载中心",
                    platform: ["all"]
                },
                component: function() {
                    return t.e("ctyunVision").then(t.bind(null, "13d9"))
                }
            }, {
                path: "/spring",
                name: "spring",
                meta: {
                    title: "安全云网 暖春行动",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("agentRecheckFill~apply~detail~exchangeAddress~login~order~orderDetail~register~spring~workorderDeman~b21d1555"), t.e("agentRecheckFill~detail~login~order~register~spring"), t.e("spring")]).then(t.bind(null, "a514"))
                }
            }].concat(Object(o["a"])(ze), Object(o["a"])([]))
        });
        Ve.beforeEach((function(e, n, t) {
            var r = e.meta.newPath;
            if (r) {
                var a = "[object Function]" === Object.prototype.toString.call(r);
                window.location.replace(a ? r(e.params) : r)
            } else
                t()
        }
        ));
        var Ge = function(e, n) {
            for (var t = e.split("/").filter((function(e) {
                return !!e
            }
            )), r = "", a = 0; a < t.length; a++) {
                var o = t[a];
                r ? r += o.slice(0, 1).toUpperCase() + o.slice(1) : r = o
            }
            return r
        };
        Ve.afterEach((function(e) {
            var n = e.path
              , t = e.params;
            try {
                var r = Object.values(t).join("/")
                  , a = Object.keys(t).join("/");
                n = n.replace(r, a)
            } catch (o) {}
            Le["a"].routeName = Ge(n),
            Le["a"].sendPV(e)
        }
        )),
        Te["a"].observerPage(Ve);
        n["a"] = Ve
    },
    f0d1: function(e, n) {
        e.exports = wx
    },
    f1e2: function(e, n, t) {
        "use strict";
        t("8e6e"),
        t("cadf"),
        t("456d");
        var r = t("bd86");
        t("ac6a"),
        t("6762"),
        t("28a5"),
        t("6b54");
        function a(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n && (r = r.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, r)
            }
            return t
        }
        function o(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? a(Object(t), !0).forEach((function(n) {
                    Object(r["a"])(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        var c = ["pv", "performance.cgi", "resource.monitor.times"]
          , i = "https://www.ctyun.cn/collection/gw/performance/Info"
          , u = "https://wwwtest.ctyun.cn:21443/collection/gw/performance/Info"
          , d = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8
              , n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
            return n.replace(/[xy]/g, (function(e) {
                var n = 16 * Math.random() | 0
                  , t = "x" === e ? n : 3 & n | 8;
                return t.toString(16)
            }
            )).slice(0, e)
        }
          , s = function(e, n, t) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
              , a = r.firstDo
              , o = r.param;
            a ? e.tId ? (clearTimeout(e.tId),
            e.tId = setTimeout((function() {
                e.tId = 0,
                e.call(n, o)
            }
            ), t)) : (e.tId = 1,
            e.call(n, o)) : (clearTimeout(e.tId),
            e.tId = setTimeout((function() {
                e.call(n, o)
            }
            ), t))
        }
          , l = {
            reportSeq: 0,
            getReportSeq: function() {
                return this.reportSeq
            },
            updateReportSeq: function() {
                this.reportSeq += 1
            },
            traceid: "",
            productName: "ctyunWap",
            getProjectName: function() {
                var e = location.pathname.split("/").filter((function(e) {
                    return e
                }
                ));
                return e.length > 0 ? e[0] : "homePage"
            },
            sendEvent: function() {
                var e = this
                  , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                if (!Array.isArray(t) || !t.length || !n)
                    return !1;
                var r = document.referrer
                  , a = location.href;
                this.updateReportSeq();
                var i = this.projectName ? this.projectName : this.getProjectName()
                  , u = this.productName
                  , d = "".concat(u, ".").concat(i, ".").concat(this.getPageName());
                console.log("%c ".concat(d, " ").concat(n), "color: blue");
                var l = {
                    time: Date.now(),
                    referer: r || "",
                    current: a,
                    event: n,
                    traceId: this.traceid,
                    pageId: d,
                    productName: u
                }
                  , p = c.includes(n) ? this.reportData : [];
                t.forEach((function(n) {
                    p.push(o(o({}, l), {}, {
                        seq: e.getReportSeq() || 1,
                        value: n
                    }))
                }
                )),
                c.includes(n) ? s(this.excuteReport, this, 12e3) : this.later((function() {
                    e.sendBeacon({
                        data: p
                    })
                }
                ))
            },
            reportData: [],
            excuteReport: function() {
                var e = this.reportData.splice(0);
                this.sendBeacon({
                    data: e
                })
            },
            sendBeacon: function(e) {
                this.wafData(e);
                var n = window.location.host.indexOf("test") >= 0 ? "test" : "online"
                  , t = "test" === n ? u : i
                  , r = JSON.stringify(e);
                navigator.sendBeacon ? navigator.sendBeacon(t, r) : this.ajaxPost(t, r)
            },
            ajaxPost: function(e, n, t) {
                var r = new XMLHttpRequest;
                r.onreadystatechange = function() {
                    if (4 === r.readyState && 200 === r.status) {
                        var e = JSON.parse(r.responseText);
                        t && t(e)
                    }
                }
                ,
                r.open("POST", e),
                r.setRequestHeader("Content-Type", "application/json"),
                r.send(n)
            },
            wafData: function(e) {
                if (e.data && 1 === e.data.length && "performance.page" === e.data[0].event) {
                    var n = e.data[0].value.navigationTiming;
                    if (n) {
                        var t = JSON.parse(JSON.stringify(n));
                        delete t.nextHopProtocol,
                        e.data[0].value.navigationTiming = t
                    }
                }
            },
            getPageName: function() {
                return this.routeName || location.href
            },
            later: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
                return setTimeout(e, n)
            },
            reportCatchError: function(e) {
                this.sendEvent("business.custom.log", [{
                    value: {
                        event: "report.catch.error",
                        detail: e
                    }
                }])
            },
            rotueName: "",
            sendPV: function() {
                this.sendEvent("pv", [{
                    pagePv: !0
                }])
            }
        };
        window.__ctPerformance && !window.__ctPerformance.report && (window.__ctPerformance.report = l),
        window.__ctPerformance && (l.traceid = __ctPerformance.traceid || d(32)),
        n["a"] = l
    },
    f6c6: function(e, n, t) {
        "use strict";
        t("7f7f"),
        t("f751"),
        t("a481");
        var r = t("7f6d")
          , a = null
          , o = {
            inspect: function(e) {
                a = e
            },
            to: function(e) {
                if (e.href)
                    return location.href = e.href,
                    !1;
                if (a)
                    return e.replace ? a.replace(e) : a.push(e),
                    !1;
                var n = e.query || {};
                e.params && Object.assign(n, {
                    _params: JSON.stringify(e.params)
                }),
                n._method = e.name ? "name" : "path",
                window.location.href = "/wap/main/redirect/" + (e.name || e.path) + Object(r["J"])(n)
            }
        }
          , c = o;
        n["a"] = c

    }
});
