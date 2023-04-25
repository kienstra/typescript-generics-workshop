import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

type Name = Record< string, { name: string } >;
const array = [
  {
    name: "John",
  },
  {
    name: "Steve",
  },
];

const obj = array.reduce< Name >((accum, item) => {
  return {
    ...accum,
    [ item.name ]: item,
  };
}, {} );

it("Should resolve to an object where name is the key", () => {
  expect(obj).toEqual({
    John: {
      name: "John",
    },
    Steve: {
      name: "Steve",
    },
  });

  type tests = [Expect<Equal<typeof obj, Record<string, { name: string }>>>];
});
