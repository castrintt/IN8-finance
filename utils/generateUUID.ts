import { faker } from "@faker-js/faker";

export const generateUUID = (): string => faker.string.uuid();
