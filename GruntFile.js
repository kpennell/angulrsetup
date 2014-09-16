module.exports = function(grunt) {
	var gtx = require('gruntfile-gtx').wrap(grunt);

    gtx.loadAuto();

    var gruntConfig = require('./grunt');
    gruntConfig.package = require('./package.json');

    gtx.config(gruntConfig);

    // We need our bower components in order to develop
    gtx.alias('build:dev', ['clean:src', 'recess:app', 'copy:dev', 'concat:dev']);
    gtx.alias('build:demo', ['clean:demo', 'copy:demo', 'clean:cleans', 'recess:min', 'uglify:min']);

    gtx.alias('release', ['bower-install-simple', 'build:dev', 'changelog:release', 'bump-commit']);
    gtx.alias('release-patch', ['bump-only:patch', 'release']);
    gtx.alias('release-minor', ['bump-only:minor', 'release']);
    gtx.alias('release-major', ['bump-only:major', 'release']);
    gtx.alias('prerelease', ['bump-only:prerelease', 'release']);

    gtx.finalise();
}