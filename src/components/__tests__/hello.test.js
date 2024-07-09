import { call } from "../hello";

test("hello function test", ()=>{
    const result = call("hello world");
    expect(result).toBe("hello world");
})