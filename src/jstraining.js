'use strict';

const path = require('path'),
      workshopper = require('workshopper-adventure'),
      chalk = require('chalk');

const jstraining = workshopper({
  name: 'jstraining',
  appDir: __dirname,
  exerciseDir: path.join(__dirname, './exercises'),
  languages: ['en'],
  header: require('workshopper-adventure/default/header'),
  footer: {
    file: path.join(__dirname, './footer/en.md')
  }
});

const errorFn = console.error;
const warnFn = console.warn;

console.error = function(message, ...err) {
  logWithColor('red', errorFn, message, ...err);
};

console.warn = function(message, ...err) {
  logWithColor('yellow', warnFn, message, ...err);
};

function logWithColor(color, fn, message, ...err){
  return fn(`\n  ${chalk[color]('> Error: ' + message)}`, ...err);
}

jstraining.addAll([
  'VARIABLE'
]);

module.exports = jstraining;
