import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

type TFunc = (...args: any) => any;
type TObj = { 'run': (...args: any) => any };
function runGenerator< T extends TFunc >(generator: T): ReturnType<T>;
function runGenerator< T extends TObj >(generator: T): ReturnType<T["run"]>;
function runGenerator(generator: TFunc | TObj) {
  if (typeof generator === "function") {
    return generator();
  }
  return generator.run();
}

it("Should accept an object where the generator is a function", () => {
  const result = runGenerator({
    run: () => "hello",
  });

  expect(result).toBe("hello");

  type test1 = Expect<Equal<typeof result, "hello">>;
});

it("Should accept an object where the generator is a function", () => {
  const result = runGenerator(() => "hello");

  expect(result).toBe("hello");

  type test1 = Expect<Equal<typeof result, string>>;
});
