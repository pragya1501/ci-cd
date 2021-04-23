module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //task for watching changes in scss & js
        watch: {
            grunt: { files: ['Gruntfile.js'] },
            sass: {
                files: ['assets/scss/**/*.scss'],
                tasks: ['sass', 'cssmin']
            },
        },

        //browser sync task for auto refresh changes on browser
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'assets/css/*.css',
                        './**/*.shtml',
                        './view/**/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    //updated your url here before starting work
                    proxy: 'http://all.loc/sokrati-projects/trident-sample/'
                }
            }
        },

        // scss watch task
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    precision: 2
                },
                files: {
                    'assets/css/global.css': 'assets/scss/global.scss',
                    'assets/css/homepage.css': 'assets/scss/homepage.scss',
                }
            }
        },

        //uglify js (update list of js used in project here)
        uglify: {
            options: {
                mangle: false,
                beautify: false,
                compress: true
            },
            my_target: {
                files: {
                    'assets/js/vendor.js': [
                        'assets/js/libraries/jquery-3.1.1.min.js',
                        'assets/js/libraries/swiper.min.js'
                    ],
                }
            }
        },

        //clean previous build before creating a new
        clean: {
            build: {
                src: ['build/**/*.*']
            }
        },

        //copy htmls & assets to build folder from production
        copy: {
            html: {
                expand: true,
                cwd: '',
                src: ['*.html', 'view/*.html'],
                dest: 'build/',

            },
            shtml: {
                files: [{
                    expand: true,
                    dot: true,
                    src: ['*.shtml'],
                    dest: 'build/',
                    rename: function (dest, src) {
                        return dest + src.replace(/\.shtml$/, '.html');
                    }
                }]
            },
            images: {
                expand: true,
                cwd: 'assets/images/',
                src: '**',
                dest: 'build/assets/images/'
            },
            fonts: {
                expand: true,
                cwd: 'assets/fonts/',
                src: '**',
                dest: 'build/assets/fonts/'

            },
            css: {
                expand: true,
                cwd: 'assets/css',
                src: '*.css',
                dest: 'build/assets/css/'

            },
            video: {
                expand: true,
                cwd: 'assets/videos',
                src: '*.*',
                dest: 'build/assets/videos/'
            },
            js: {
                expand: true,
                cwd: 'assets/js',
                src: '*.js',
                dest: 'build/assets/js/'
            },
            doucments: {
                expand: true,
                cwd: 'assets/doucments',
                src: '*.pdf',
                dest: 'build/assets/doucments/'
            }
        },

        //replce shtml includes with actual htmls
        ssi: {
            options: {
                cache: 'all',
                ext: '.shtml',
                baseDir: 'build',
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'build',
                    src: ['*.html'],
                    dest: 'build'
                }]
            }
        },

        //minify css
        cssmin: {
            target: {
                files: {
                    'assets/css/libraries.css': ['assets/css/libraries/*.css'],
                    'assets/css/global.css': ['assets/css/global.css'],
                    'assets/css/homepage.css': ['assets/css/homepage.css'],
                }
            }
        },

        //minified images
        tinypng: {
            options: {
                apiKey: 'ognQnVUe4Opz6Q4sMmAVvYZ1hJWh3UYK',
                summarize: true
            },
            compress: {
                expand: true,
                src: 'build/assets/images/*.png',
                dest: './',
                ext: '.png'
            },
            compress2: {
                expand: true,
                src: 'build/assets/images/*.jpg',
                dest: './',
                ext: '.jpg'
            },
        },

        //replace css & js grouping occurrence 
        usemin: {
            html: 'build/*.html'
        },

        //replace all text occurrence '.shtml' with '.html' 
        replace: {
            files: {
                src: 'build/*.html', // source files array (supports minimatch)
                dest: 'build/', // destination directory or file
                force: true,
                replacements: [{
                    from: '.shtml', // string replacement
                    to: '.html'
                }]
            }
        }
    });



    //task registrations 
    grunt.loadNpmTasks('grunt-ssi');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-tinypng');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-text-replace');

    //default task watch & browsersync
    grunt.registerTask('default', ['browserSync', 'watch']);

    //grunt build task(copy,ssi,cssmin,usemin,replace)
    grunt.registerTask('build', ['clean', 'copy', 'ssi', 'cssmin', 'usemin', 'replace', 'uglify']);

}