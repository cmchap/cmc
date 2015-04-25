'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    outputStyle: 'compressed', // nested or compressed
                    sourceMap: true,
                    // imagePath: '',
                    // includePaths: []
                    // more info: https://github.com/sindresorhus/grunt-sass
                },
                files: {
                    'assets/css/style.css': 'assets/scss/style.scss'
                }
            }
        },

        watch: {
            options: {
                livereload: true,
            },
            sass: {
                files: 'assets/scss/**/*.scss',
                tasks: ['sass'],
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'js/*.js',
                    'images/{,**/}*.{png,jpg,jpeg,gif,webp,svg}',
                    '**/*.hbs',
                    '*.hbs',
                    'assets/scss/**/*.scss',
                ]
            }
        }
    });

    grunt.registerTask('default', ['sass', 'watch']);

};