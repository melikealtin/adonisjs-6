const RedisController = () => import('#controllers/redis_controller')
import router from '@adonisjs/core/services/router'
const MoviesController = () => import('#controllers/movies_controller')

router.get('/', [MoviesController, 'index']).as('home')

router
  .get('/movies/:slug', [MoviesController, 'show'])
  .as('movies.show')
  .where('slug', router.matchers.slug())

// router
//   .get('/movies/my-awesome-movie', async (ctx) => {
//     return ctx.view.render('pages/movies', { movie: 'Another Awesome Movie!' })
//   })
//   .as('movies.show')

router.delete('/redis/:slug', [RedisController, 'destroy']).as('redis.destory')
router.delete('/redis/flush', [RedisController, 'flush']).as('redis.flush')
