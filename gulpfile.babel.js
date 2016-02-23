'use strict';

import del from 'del';
import gulp from 'gulp';
import {readFileSync} from 'fs';
import {join} from 'path';
import babel from 'gulp-babel';

const babelrc = JSON.parse(readFileSync(join(__dirname, '.babelrc'), 'utf-8'));

gulp.task('clean', () => del('lib/**/*'));

gulp.task('copy', () => gulp.src('src/**').pipe(gulp.dest('lib')));

gulp.task('transform', ['copy'], () => gulp.src('src/**/*.js').pipe(babel(babelrc)).pipe(gulp.dest('lib')));

gulp.task('build', ['clean'], () => gulp.start('transform'));
gulp.task('watch', ['build'], () => gulp.watch('src/**/*.js', ['transform']));
