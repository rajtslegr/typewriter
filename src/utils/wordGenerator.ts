import faker from 'faker';

const generateWord = (): string => faker.random.word().toLowerCase();

export default generateWord;
