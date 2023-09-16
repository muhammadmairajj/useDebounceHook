import { faker } from '@faker-js/faker';

export interface User {
    id: number;
    name: string;
}

export const users = Array(1000).fill(0).map((_, index) => (
    {
    id: index,
    name: faker.person.fullName()
}));
// console.log('users', users)

// Fake function mocking an api
export const fetchUser = async (search: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase())
    );
}