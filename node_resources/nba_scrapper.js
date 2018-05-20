const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const app     = express();
const config  = require('./db_credentials');
const mysql   = require('mysql');

const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

app.get('/scrape/:page', function(req, res) {
  const page = req.params.page;
  console.log(page)
  url = `https://www.foxsports.com/nba/players?teamid=0&season=2017&position=0&page=${page}&country=0&grouping=0&weightclass=0`;
  request(url, function(error, response, html) {
    if (!error) {
      let allPlayers = [];
      let $ = cheerio.load(html, {
        normalizeWhitespace: true
      });
      let playerInfo = $('.wisbb_fvStand');
      // gets player information
      for (let i = 1; i < playerInfo.length; i++) {
        let attr = $(playerInfo[i]);
        let player = attr.text().replace(/^\s+|\s+$/gm,'').split('\n').slice(1)
        allPlayers.push(player);
      }
      allPlayers.forEach((x) => {
        let firstName = x[0].split(', ')[1];
        let lastName = x[0].split(', ')[0];
        let team = x[1];
        let position = x[2];
        let height = x[3];
        let weight = x[4];
        let birthday = x[5];
        x[0] = firstName;
        x[1] = lastName;
        x[2] = position;
        x[3] = team;
        x[4] = height;
        x[5] = weight;
        x[6] = birthday;
      })


      const sql = `
        INSERT INTO player_list (firstName, lastName, position, team, height, weight, birthday)
        VALUES ?
        `;
      connection.query(sql, [allPlayers], (err, result) => {
        if (err) throw err;
        console.log(result)
      })
      connection.end();

      console.log(allPlayers)

    }
    res.send('All players inputed!');


  })

})

app.listen('8081')

console.log('Magic happens on port 8081');

exports = module.exports = app;
