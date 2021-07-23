/* eslint-disable no-undef */
Feature('Menambah Review')

Before(({ I }) => {
  I.amOnPage('/')
  I.seeElement('.card')

  I.click(locate('.card a').first())
})

Scenario('Menambah review tanpa nama dan pesan', ({ I }) => {
  I.dontSeeElement('.swal2-container')

  I.seeElement('.resto__add_review')

  I.click('.resto__add_btn')

  I.seeElement('.swal2-container')

  I.click(locate('.swal2-confirm').first())
})

Scenario('Menambah review hanya nama saja', ({ I }) => {
  I.dontSeeElement('.swal2-container')

  I.seeElement('.resto__add_review')
  I.seeElement('#input_add_review__name')

  I.fillField('#input_add_review__name', 'Namaku Udin')

  I.click('.resto__add_btn')

  I.seeElement('.swal2-container')

  I.click(locate('.swal2-confirm').first())
})

Scenario('Menambah review hanya pesan saja', ({ I }) => {
  I.dontSeeElement('.swal2-container')

  I.seeElement('.resto__add_review')
  I.seeElement('#input_add_review__text')

  I.fillField('#input_add_review__text', 'Intinya Mantap')

  I.click('.resto__add_btn')

  I.seeElement('.swal2-container')

  I.click(locate('.swal2-confirm').first())
})

Scenario('Menambah review', ({ I }) => {
  I.dontSeeElement('.swal2-container')

  I.seeElement('.resto__add_review')

  I.seeElement('#input_add_review__name')
  I.seeElement('#input_add_review__text')

  I.fillField('#input_add_review__name', 'Namaku Udin')

  I.fillField('#input_add_review__text', 'Intinya Mantap')

  I.click('.resto__add_btn')

  I.seeElement('.swal2-container')

  I.click(locate('.swal2-confirm').first())

  I.see('Success!', '.swal2-title')
})
