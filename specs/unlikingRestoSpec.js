import FavoriteRestaIdb from '../src/scripts/data/favoriteresta-idb'
import * as TestFactories from './helper/testFactory'

describe('Batal menyukai restoran', () => {
  beforeEach(async () => {
    TestFactories.addLikeButtonContainer()
    await FavoriteRestaIdb.putResta({ id: 1 })
  })
  afterEach(async () => {
    FavoriteRestaIdb.deleteResta(1)
  })

  it('Harusnya menampilkan tombol batal pada restoran yang disukai', async () => {
    await TestFactories.createLikeButtonPresenterWithResta({ id: 1 })
    expect(
      document.querySelector('[aria-label="unlike this resta"]')
    ).toBeTruthy()
  })

  it('Harusnya menampilkan tombol favorite pada restoran yang disukai', async () => {
    await TestFactories.createLikeButtonPresenterWithResta({ id: 1 })
    expect(document.querySelector('[aria-label="like this resta"]')).toBeFalsy()
  })

  it('Harusnya restoran yang disukai bisa di batalkan', async () => {
    await TestFactories.createLikeButtonPresenterWithResta({ id: 1 })

    document
      .querySelector('[aria-label="unlike this resta"]')
      .dispatchEvent(new Event('click'))

    expect(await FavoriteRestaIdb.getAllRestas()).toEqual([])
  })

  it('Harusnya tidak mengeluarkan error jika membatalkan restoran yang tidak ada', async () => {
    await TestFactories.createLikeButtonPresenterWithResta({ id: 1 })

    await FavoriteRestaIdb.deleteResta(1)

    document
      .querySelector('[aria-label="unlike this resta"]')
      .dispatchEvent(new Event('click'))

    expect(await FavoriteRestaIdb.getAllRestas()).toEqual([])
  })
})
