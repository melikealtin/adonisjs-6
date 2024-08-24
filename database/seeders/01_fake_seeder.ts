import { movies } from '#database/data/movies'
import { CineastFactory } from '#database/factories/cineast_factory'
import { MovieFactory } from '#database/factories/movie_factory'
import { UserInfoFactory } from '#database/factories/user_info_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  static environment = ['development', 'testing']
  async run() {
    // Write your database queries inside the run method
    await CineastFactory.createMany(10)
    await UserInfoFactory.createMany(5)
    await this.#createMovies()
  }

  async #createMovies() {
    let index = 0
    await MovieFactory.tap((row, { faker }) => {
      const movie = movies[index]
      const released = DateTime.now().set({ year: movie.releaseYear })

      row.title = movie.title

      index++
    }).createMany(movies.length)

    await MovieFactory.createMany(3)
    await MovieFactory.apply('released').createMany(2)
    await MovieFactory.apply('releasingSoon').createMany(2)
    await MovieFactory.apply('postProduction').createMany(2)
  }
}
