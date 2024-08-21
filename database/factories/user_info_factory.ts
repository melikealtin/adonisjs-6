import factory from '@adonisjs/lucid/factories'
import UserInfo from '#models/users_info'
import Roles from '#enums/roles'

export const UserInfoFactory = factory
  .define(UserInfo, async ({ faker }) => {
    return {
      roleId: Roles.USER,
      fullName: faker.person.fullName(),
      avatarUrl: faker.image.avatar(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }
  })
  .build()
