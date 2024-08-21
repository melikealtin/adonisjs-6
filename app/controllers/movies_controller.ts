import Movie from '#models/movie'
import type { HttpContext } from '@adonisjs/core/http'

export default class MoviesController {
  async index({ view }: HttpContext) {
    const movies = await Movie.all()
    return view.render('pages/home', { movies })
  }

  async show({ view, params }: HttpContext) {
    const movie = await Movie.findBy('slug', params.slug)
    return view.render('pages/movies/show', { movie })
  }
}
