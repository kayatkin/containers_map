import ErrorRepository from "../ErrorRepository";

test(`getExistsError`, () => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate(404)).toBe(`Not Found`);
});

test(`getNoExistsError`, () => {
  const errorRepository = new ErrorRepository();
  expect(() => errorRepository.translate(1)).toThrow();
});
