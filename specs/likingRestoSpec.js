import FavoriteRestaIdb from '../src/scripts/data/favoriteresta-idb'
import * as TestFactories from './helper/testFactory'

describe('Menyukai sebuah restoran', () => {
  beforeEach(() => {
    TestFactories.addLikeButtonContainer()
  })

  it('Harusnya menampilkan tombol favorite yang belum disukai sebelumnya', async () => {
    await TestFactories.createLikeButtonPresenterWithResta({ id: 1 })

    expect(
      document.querySelector('[aria-label="like this resta"]')
    ).toBeTruthy()
  })

  it('Harusnya tidak menampilkan tombol belum disukai, yang dimana restanya belum disukai', async () => {
    await TestFactories.createLikeButtonPresenterWithResta({ id: 1 })

    expect(
      document.querySelector('[aria-label="unlike this resta"]')
    ).toBeFalsy()
  })

  it('Harusnya suatu restoran bisa disukai', async () => {
    await TestFactories.createLikeButtonPresenterWithResta({ id: 1 })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    const resta = await FavoriteRestaIdb.getResta(1)

    expect(resta).toEqual({ id: 1 })

    FavoriteRestaIdb.deleteResta(1)
  })

  it('Harusnya tidak bisa menambah restoran yang sudah disukai sebelumnya', async () => {
    await TestFactories.createLikeButtonPresenterWithResta({ id: 1 })

    await FavoriteRestaIdb.putResta({ id: 1 })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaIdb.getAllRestas()).toEqual([{ id: 1 }])

    FavoriteRestaIdb.deleteResta(1)
  })

  it('Harusnya tidak bisa menambah restoran yang tidak punya id', async () => {
    await TestFactories.createLikeButtonPresenterWithResta({})

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaIdb.getAllRestas()).toEqual([])
  })
})
