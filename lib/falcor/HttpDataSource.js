
/**
 * TODO: Move this into falcor-browser repo
 * A HttpDataSource object is a {@link DataSource} can be used to retrieve data from a remote JSONGraph object using the browser's XMLHttpRequest. 
 * @constructor HttpDataSource
 * @augments DataSource
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HttpDataSource}
 * @param jsonGraphUrl the URL of the JSONGraph model.
 * @example
var model = new falcor.Model({source: new falcor.HttpDataSource("http://netflix.com/user.json")});
var movieNames = model.get('genreLists[0...10][0...10].name').toPathValues();
 */
