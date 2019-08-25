import {expect} from 'chai';  //to use an Assertion library, I am importing chai and using the expect sylye that comes with chai

import jsdom from 'jsdom';

import fs from 'fs';        //fs = filesystem. It let's you interact with the file system using node



describe('My first test', () => {
  it('it should pass', () => {
    expect(2 + 9).to.equal(11);
  });
})

describe("index.html", () => {   //index.html is the file that we want to test
  it("", (done) => {
    const index = fs.readFileSync("./src/index.html", "utf-8");
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName("h1")[0];
      expect(h1.innerHTML).to.equal("Hello Nigeria");
      done();
      window.close();
    })
  })
})
