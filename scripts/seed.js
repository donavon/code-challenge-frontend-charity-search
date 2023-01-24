const { faker } = require("@faker-js/faker");
const path = require("node:path");
const fs = require("node:fs");
const crypto = require("node:crypto");

function generate() {
  return {
    id: crypto.randomUUID(),
    logo: "https://static.daffy.org/avatars/logo-placeholder.png",
    name: faker.company.name(),
    city: faker.address.city(),
    state: faker.address.state(),
    mission: faker.company.catchPhrase(),
    about: faker.lorem.paragraphs(3),
    website: faker.internet.url(),
    ein: faker.finance.routingNumber(),
  };
}

let charities = JSON.stringify(Array.from({ length: 100 }, generate), null, 2);

fs.writeFileSync(path.resolve("./app/data/charities.json"), charities, "utf-8");
