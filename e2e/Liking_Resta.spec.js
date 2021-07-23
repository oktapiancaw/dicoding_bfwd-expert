const assert = require('assert')
/* eslint-disable no-undef */
Feature('Liking Resta')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
  I.see('Data tidak ada', '#resta_not_found')
  I.amOnPage('/')
  I.seeElement('.card')
})

Scenario('Menyukai Restoran', async ({ I }) => {
  const firstRestaLink = locate('.card a').first()
  const firstRestaTitle = await I.grabTextFrom(locate('.card span').first())

  I.click(firstRestaLink)

  I.seeElement('#likeButton')

  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.card')
  const likedResta = await I.grabTextFrom('.card span')

  assert.strictEqual(firstRestaTitle, likedResta)
})

Scenario('Batal Menyukai Restoran', async ({ I }) => {
  I.click(locate('.card a').first())

  I.seeElement('#likeButton')

  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.card')

  I.click(locate('.card a').first())

  I.seeElement('#likeButton')

  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.see('Data tidak ada', '#resta_not_found')
})
