import faker from "@faker-js/faker";

const generateWord = (): string => faker.random.word().toLowerCase();

export default generateWord;
