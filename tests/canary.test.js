import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from "react-test-renderer";
import App from "../src/App";

describe("the canary cannot die", () => {
  it("doesnt kill the canary", () => {
    expect.assertions(1);
    expect(true).toBe(true);
  });

  it("ensures the ENV variables have been loaded", () => {
    expect.assertions(1);
    expect(process.env.ENV).toStrictEqual("tests");
  });

  it("takes a picture of the canary", () => {
    expect.assertions(1);
    const comp = renderer.create(<App />);
    const app = comp.toJSON();
    expect(app).toMatchInlineSnapshot(`
      <div
        className="hello"
      >
        <p>
           hello!
        </p>
      </div>
    `);
  });
});
