import { faker } from '@faker-js/faker';
import fs from 'node:fs/promises';
import { resolve } from 'node:path';
import { randomUUID } from 'node:crypto';
import { z } from 'zod';

const CharitySchema = z.object({
  id: z.string().uuid(),
  logo: z.string(),
  name: z.string(),
  city: z.string(),
  state: z.string(),
  mission: z.string(),
  about: z.string(),
  website: z.string().url(),
  ein: z.string(),
});

type Charity = z.infer<typeof CharitySchema>;

/**
 * How common is for an error to happen when calling an API method.
 * Change this value to make it more or less common.
 */
const ERROR_RATE = 0;

export function api() {
  function raise() {
    if (Math.random() * 100 > ERROR_RATE) return;
    throw new Error('Something went wrong');
  }

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function fakeNetwork() {
    let delay = Math.ceil(Math.random() * 150) + 50;
    await sleep(delay);
    raise();
  }

  return {
    charities: {
      /**
       * Get a single charity using the ID.
       */
      async show(id: string) {
        await fakeNetwork();

        let charities = CharitySchema.array().parse(
          JSON.parse(
            await fs.readFile(resolve('./app/data/charities.json'), 'utf8')
          )
        );

        return charities.find((charity) => charity.id === id);
      },

      /**
       * Get the list of charities.
       * Optionally filter by name.
       */
      async list({ term, page = 1 }: { term?: string; page?: number } = {}) {
        await fakeNetwork();

        let charities = CharitySchema.array().parse(
          JSON.parse(
            await fs.readFile(resolve('./app/data/charities.json'), 'utf8')
          )
        );

        if (!term) return charities.slice((page - 1) * 10, page * 10);

        return charities
          .filter((charity) => {
            return (
              charity.name.toLowerCase().includes(term.toLowerCase()) ||
              charity.city.toLowerCase().includes(term.toLowerCase()) ||
              charity.state.toLowerCase().includes(term.toLowerCase()) ||
              charity.mission.toLowerCase().includes(term.toLowerCase()) ||
              charity.about.toLowerCase().includes(term.toLowerCase())
            );
          })
          .slice((page - 1) * 10, page * 10);
      },

      /**
       * Create a new charity.
       * It receives an object with the name, city, mission or state.
       * All attributes are optional.
       */
      async create(
        charity: Partial<
          Pick<
            Charity,
            'name' | 'city' | 'mission' | 'state' | 'about' | 'website' | 'ein'
          >
        >
      ) {
        await fakeNetwork();

        let charities = CharitySchema.array().parse(
          JSON.parse(
            await fs.readFile(resolve('./app/data/charities.json'), 'utf8')
          )
        );

        let result: Charity = CharitySchema.parse({
          id: randomUUID(),
          logo: 'https://static.daffy.org/avatars/logo-placeholder.png',
          name: faker.company.name(),
          city: faker.address.city(),
          state: faker.address.state(),
          mission: faker.company.catchPhrase(),
          about: faker.lorem.paragraphs(3),
          website: faker.internet.url(),
          ein: faker.finance.routingNumber(),
          ...charity,
        });

        await fs.writeFile(
          resolve('./app/data/charities.json'),
          JSON.stringify(charities.concat(result), null, 2),
          'utf-8'
        );

        return result;
      },
    },
  };
}
