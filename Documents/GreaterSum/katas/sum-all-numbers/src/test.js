System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testSetup;
    return {
        setters:[],
        execute: function() {
            testSetup = (function () {
                function testSetup() {
                }
                testSetup.isWorking = true;
                return testSetup;
            }());
            exports_1("testSetup", testSetup);
        }
    }
});
//# sourceMappingURL=test.js.map