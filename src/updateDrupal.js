/* global Drupal */

const puppeteer = require('puppeteer');
const fs = require('fs');
const chalk = require('chalk');

function writeFile(data) {
  const output = `
    module.exports = ${JSON.stringify(data)}
  `;
  try {
    fs.writeFileSync('/Users/kyle/Dropbox/CELTICS/projects/drupal/index.js', output);
    console.log(chalk.green(`File was saved.`));
  } catch (err) {
    throw new Error(`at writing file:\n${err}\n`);
  }
}

async function scrapeNewLinks() {
  // Initialize headless browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // Navigate to celtics.com
  await page.goto('https://nba.com/celtics');
  // Copy drupal object
  const data = await page.evaluate(() => Drupal);
  // Close headless browser
  await browser.close();
  // Write index.js file
  writeFile(data);
  return false;
}

scrapeNewLinks();
