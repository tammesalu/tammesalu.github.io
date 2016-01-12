/*
 * main.js
 *
 * Created by Raul Tammesalu 12 January 2016.
 */

/*global
  $, console
*/

function updateTimeRemaining() {
  'use strict';

  var today = moment();
  var marathon = moment({year: 2016, month: 8, day: 25, hour: 10});

  var duration = moment.duration(marathon.diff(today));

  var months = duration.months();
  var weeks = Math.floor(duration.asDays() / 7);
  var days = Math.floor(duration.asDays() - weeks * 7);
  var hours = duration.hours();
  var minutes = duration.minutes();
  var seconds = duration.seconds();

  $('div#months > p.bignumber').text(months);
  $('div#weeks > p.bignumber').text(weeks);
  $('div#days > p.bignumber').text(days);
  $('div#hours > p.bignumber').text(hours);
  $('div#minutes > p.bignumber').text(minutes);
  $('div#seconds > p.bignumber').text(seconds);
}

function main() {
  'use strict';

  console.log('Marathon App.');

  setInterval(updateTimeRemaining, 1000);

}

$(document).ready(main);
