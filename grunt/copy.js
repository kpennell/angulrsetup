module.exports = {
    dev: {
        nonull: true,
        files: [
            // Include our bower JS dependencies
            {src: "bower_components/angular/angular.js", dest: "src/js/libs/angular/angular.js"},
            {src: "bower_components/angular-cookies/angular-cookies.js", dest: "src/js/libs/angular/angular-cookies.js"},
            {src: "bower_components/angular-resource/angular-resource.js", dest: "src/js/libs/angular/angular-resource.js"},
            {src: "bower_components/angular-translate/angular-translate.js", dest: "src/js/angular/angular-translate/angular-translate.js"},
            {src: "bower_components/angular-ui-router/release/angular-ui-router.js", dest: "src/js/libs/angular/angular-ui-router.js"},
            {src: "bower_components/angular-animate/angular-animate.js", dest: "src/js/libs/angular/angular-animate.js"},
            {src: "bower_components/ngstorage/ngStorage.js", dest: "src/js/libs/angular/ngStorage.js"},
            {src: "bower_components/oclazyload/dist/ocLazyLoad.js", dest: "src/js/libs/angular/ocLazyLoad.js"},
            {src: "bower_components/angular-bootstrap/ui-bootstrap-tpls.js", dest: "src/js/libs/angular/ui-bootstrap-tpls.js"},
            {src: "bower_components/moment/min/moment.min.js", dest: "src/js/libs/moment.min.js"},
            {src: "bower_components/screenfull/dist/screenfull.min.js", dest: "src/js/libs/screenfull.min.js"},

            // fontawesome
            {src: "bower_components/font-awesome/css/font-awesome.min.css", dest: "src/css/font-awesome.min.css"},
            {src: "**", dest: "src/fonts", cwd: 'bower_components/font-awesome/fonts', expand : true},

            // bootstrap
            {src: "bower_components/bootstrap/dist/css/bootstrap.css", dest: "src/css/bootstrap.css"},
            {src: "bower_components/bootstrap/dist/js/bootstrap.js", dest: "src/js/jquery/bootstrap.js"},
            {src: "**", dest: "src/fonts", cwd: 'bower_components/bootstrap/fonts', expand : true},

            // nav tree
            {src: "**", dest: "src/js/modules/abn_tree", cwd: 'bower_components/angular-bootstrap-nav-tree/dist', expand : true},
            // image crop
            {src: "**", dest: "src/js/modules/ngImgCrop/", cwd: 'bower_components/ngImgCrop/compile/minified', expand : true},
            // file upload
            {src: "bower_components/angular-file-upload/angular-file-upload.js", dest: "src/js/modules/angular-file-upload/angular-file-upload.js"}
        ]
    },
    demo: {
        files: [
            {expand: true, dest: 'demo/', src:'**', cwd:'src/'},
            {dest: 'demo/index.html', src:'src/index.min.html'}
        ]
    }
};