import { BaseModel, column, scope } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import MovieStatuses from '#enums/movie_statuses'

export default class Movie extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare statusId: number

  @column()
  declare writerId: number

  @column()
  declare directorId: number

  @column()
  declare title: string

  @column()
  declare slug: string

  @column()
  declare summary: string

  @column()
  declare abstract: string

  @column()
  declare posterUrl: string

  @column.dateTime()
  declare releasedAt: DateTime | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  static released = scope((query) => {
    query.where((group) => {
      group
        .where('statusId', MovieStatuses.RELEASED)
        .whereNotNull('releasedAt')
        .where('releasedAt', '<=', DateTime.now().toSQL())
    })
  })
}

//SELECT * FROM movies
// WHERE
// statusId = 5
// AND releasedAt IS NOT NULL
// AND releasedAt <= NOW();
