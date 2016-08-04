System.register(["../src/test"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var test_1;
    return {
        setters:[
            function (test_1_1) {
                test_1 = test_1_1;
            }],
        execute: function() {
            describe('test', function () {
                it('true should be true', function () {
                    expect(test_1.testSetup.isWorking).toBe(true);
                });
            });
        }
    }
});
//# sourceMappingURL=test.spec.js.map