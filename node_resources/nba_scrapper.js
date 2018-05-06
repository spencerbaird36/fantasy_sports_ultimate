var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
  url = 'https://www.foxsports.com/nba/players';
  request(url, function(error, response, html) {
    if (!error) {
      var test = [];
      var $ = cheerio.load(html, {
        normalizeWhitespace: true
      });
      // gets player name
      $('.wisbb_fullPlayer').each((indx, data) => {
        var $element = $(data)
        // console.log($element.children().first().text());
      })
      // gets team name
      $('.wisbb_fvStand').each((indx, data) => {
        var $attributes = $(data);
        test.push($attributes.first().first().text().replace(/^\s+|\s+$/gm,''));
      })
      test.filter((i, elem) => {
        console.log(i.split('\n'))
      })
    }

  })
})

app.listen('8081')

console.log('Magic happens on port 8081');

exports = module.exports = app;
