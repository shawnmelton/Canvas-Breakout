module.exports = (function(grunt) {
    'use strict';

    grunt.initConfig({
        jshint: {
            ignore_warning: {
                options: {
                    '-W002': true, // IE8 and earlier issue
                    '-W044': true, // Bad / unnecessary escaping
                    '-W084': true, // expected a conditional
                    '-W061': true, // eval can be harmful
                    '-W030': true, // expected assignment for function call
                    '-W040': true // Possible strict violation
                },
                src: [
                    'Gruntfile.js',
                    'src/js/*.js'
                ]
            } 
        },
        embed: {
            custom_options: {
                options: {
                    threshold: '5000KB'
                },
                files: {
                    'tmp/index.html': 'src/index.html'
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    optimize: 'uglify',
                    preserveLicenseComments: false,
                    findNestedDependencies: true,
                    baseUrl: 'src/js/',
                    mainConfigFile: 'src/js/bootstrap.js',
                    name: 'app',
                    include: ['bootstrap'],
                    out: 'tmp/js/app.js'
                }
            }
        },
        uglify: {
            options: {
                mangle: true,
                compress: true,
                report: 'min'
            },
            my_target: {
                files: {
                    'dist/js/app.js': ['src/js/libs/require.js', 'tmp/js/app.js'],
                    'tmp/js/inline.js': 'src/js/inline.js'
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'dist/css/styles.css': 'src/css/styles.scss',
                    'tmp/css/inline.css': 'src/css/inline.scss'
                },
                options: {
                    style: 'compressed'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: { 
                    'dist/index.html': 'tmp/index.html'
                }
            }
        },
        clean: ['tmp', 'dist/css', 'dist/js', 'dist/index.html']
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-embed');

    grunt.registerTask('default', [
        'clean', 'jshint', 'requirejs', 'uglify', 'sass', 'embed', 'htmlmin'
    ]);

    grunt.registerTask('cleanup', ['clean']);
});