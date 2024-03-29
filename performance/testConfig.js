var falcor = require('./../index');
var Cache = require('./../test/data/Cache');
var _Legacy = require('./legacy');
var getOps = require('./get');
var setOps = require('./set');
var mergeOps = require('./merge');
var E_model = new falcor.Model();
var model = new falcor.Model({cache: Cache()});
var macro = _Legacy.getMacroModel();
var mdp = _Legacy.getMdpModel();
var noOp = function() {};

macro._root.unsafeMode = true;
model._root.unsafeMode = true;

function repeatInConfig(name, count, test, config) {
    for (var i = 0; i < count; i++) {
        config[name + ' ' + i] = test;
    }
}

module.exports = function() {
    var config = {
        name: 'Falcor',
        async: false,
        tests: {}
    };
    return {
        config: config,
        models: {
            model: model,
            macro: macro,
            emptyModel: E_model,
            mdp: mdp
        },
        repeatInConfig: repeatInConfig,
        get: getOps,
        set: setOps,
        merge: mergeOps
    };
};
