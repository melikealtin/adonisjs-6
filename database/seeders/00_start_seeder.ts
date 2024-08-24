import Role from '#models/role'
import MovieStatus from '#models/movie_status'

import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Roles from '#enums/roles'
import MovieStatuses from '#enums/movie_statuses'

export default class extends BaseSeeder {
  async run() {
    for (const role of [
      { id: Roles.USER, name: 'User' },
      { id: Roles.ADMIN, name: 'Admin' },
    ]) {
      const existingRole = await Role.find(role.id)
      if (!existingRole) {
        await Role.create(role)
      } else {
        existingRole.merge(role)
        await existingRole.save()
      }
    }

    for (const status of [
      { id: MovieStatuses.WRITING, name: 'Writing' },
      { id: MovieStatuses.CASTING, name: 'Casting' },
      { id: MovieStatuses.PRODUCTION, name: 'Production' },
      { id: MovieStatuses.POST_PRODUCTION, name: 'Post Production' },
      { id: MovieStatuses.RELEASED, name: 'Released' },
    ]) {
      const existingStatus = await MovieStatus.find(status.id)
      if (!existingStatus) {
        await MovieStatus.create(status)
      } else {
        existingStatus.merge(status)
        await existingStatus.save()
      }
    }
  }
}
