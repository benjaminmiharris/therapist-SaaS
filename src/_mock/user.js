import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  email: faker.internet.email(),
  isVerified: faker.datatype.boolean(),
  status: ['active'],
  mobile: faker.phone.number(),
}));
