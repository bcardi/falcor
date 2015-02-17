var jsong = require("../../../bin/Falcor");
var Model = jsong.Model;
var Rx = require("rx");
var LocalDataSource = require("../../data/LocalDataSource");
var Cache = require("../../data/Cache");
var ReducedCache = require("../../data/ReducedCache");
var Expected = require("../../data/expected");
var getTestRunner = require("../../getTestRunner");
var testRunner = require("../../testRunner");
var Bound = Expected.Bound;
var chai = require("chai");
var expect = chai.expect;
var noOp = function() {};
var getDataModel = testRunner.getModel;
describe('Bind', function() {
    it('should bind to an undefined sentinel and onCompleted.', function(done) {
        var model = getDataModel(null, Cache());
        model = model.
            bind(["misc", "usentinel"]).
            subscribe(function(x) {
                done('onNext called with value' + x + ' on a bound model to an sentinel of undefined.  Expected to onCompleted onl  Expected to onCompleted only.');
            }, done, done);
    });
});

describe("BindSync", function() {
    it('should bind to an undefined sentinel and return undefined.', function(done) {
        var model = getDataModel(null, Cache());
        model = model.bindSync(["misc", "usentinel"]);
        expect(model).to.equals(undefined);
    });
    
    describe("Cache Only", function() {
        it("should bind to an object.", function(done) {
            var model = getDataModel(null, Cache());
            var expected = Bound().directValue;
            model = model.bindSync(["videos", 1234]);
            getTestRunner.
                async(Rx.Observable.return(42), model, expected, {useNewModel: false}).
                subscribe(noOp, done, done);
        });

        it("should bind through a reference.", function(done) {
            var model = getDataModel(null, Cache());
            var expected = Bound().onReference;
            model = model.bindSync(["genreList", 0]);
            getTestRunner.
                async(Rx.Observable.return(42), model, expected, {useNewModel: false}).
                subscribe(noOp, done, done);
        });

        it("should throw when trying to get JSONG.", function(done) {
            var model = getDataModel(null, Cache());
            var expected = Bound().onReference;
            model.
                bindSync(["genreList", 0]).
                get([0, 'summary']).
                toJSONG().
                subscribe(function(x) {
                    done('onNext called with value' + x + ' on a bound model requesting toJSONG().');
                }, function(err) {
                    expect(err).to.equals('It is not legal to use the JSON Graph format from a bound Model. JSON Graph format can only be used from a root model.');
                    done();
                }, function() {
                    done('onCompleted called on a bound model requesting toJSONG().');
                })
            
        });
    });
    
    describe("DataSource Only", function() {
        it("should bind to an object.", function(done) {
            var model = getDataModel(new LocalDataSource(Cache()), {});
            var expected = Bound().directValue;
            model = model.bindSync(["videos", 1234]);
            getTestRunner.
                async(model.get(["summary"]), model, expected, {
                    useNewModel: false,
                    onNextExpected: expected.AsPathMap
                }).
                subscribe(noOp, done, done);
        });

        it("should bind through a reference.", function(done) {
            var model = getDataModel(new LocalDataSource(Cache()), {});
            var expected = Bound().onReference;
            model = model.bindSync(["genreList", 0]);
            getTestRunner.
                async(model.get([0, "summary"]), model, expected, {
                    useNewModel: false,
                    onNextExpected: expected.AsPathMap
                }).
                subscribe(noOp, done, done);
        });
    });

    describe("DataSource + Cache", function() {
        it("should bind to an object.", function(done) {
            var model = getDataModel(
                new LocalDataSource(Cache()), 
                ReducedCache.MinimalCache());
            var expected = Bound().toOnly;
            model = model.bindSync(["genreList", 0]);
            getTestRunner.
                async(model.get([{to:1}, "summary"]), model, expected, {
                    useNewModel: false,
                    onNextExpected: expected.AsPathMap
                }).
                subscribe(noOp, done, done);
        });
        
        it("should bind to an object with a selector.", function(done) {
            var model = getDataModel(
                new LocalDataSource(Cache()),
                ReducedCache.MinimalCache());
            var expected = Bound().toOnly;
            model = model.bindSync(["genreList", 0]);
            model.
                get([{to:1}, "summary"], function(list) {
                    testRunner.compare(expected.AsJSON.values[0].json, list);
                }).
                subscribe(noOp, done, function() {
                    getTestRunner.runSync(model, expected, {useNewModel: false});
                    done();
                });
        });
    });
    
    describe('Set', function() {
        it("should bind and set the value.", function(done) {
            var model = getDataModel(null, Cache());
            var expected = Bound().directValue;
            model = model.bindSync(["videos", 1234]);
            model.
                set({path: ["summary"], value: "pie"}).
                flatMap(function() {
                    return model.get(["summary"]);
                }).
                subscribe(function(x) {
                    testRunner.compare({json:{summary:"pie"}}, x);
                }, done, done);
        });
    });
});