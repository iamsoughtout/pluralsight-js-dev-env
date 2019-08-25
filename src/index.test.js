import {expect} from 'chai';  //to use an Assertion library, I am importing chai and using the expect sylye that comes with chai

import jsdom from 'jsdom';

import fs from 'fs';        //fs = filesystem. It let's you interact with the file system using node



describe('My first test', () => {
  it('it should pass', () => {
    expect(2 + 9).to.equal(11);
  });
})

describe("index.html", () => {   //index.html is the file that we want to test
  it("should say hello", (done) => {      //this is shoing tht i am writing a test to show that Hello is in the index.html file
    const index = fs.readFileSync("./src/index.html", "utf-8");    //gettin s reference to the index.html file and holding it in memory via fs.readFileSync
    jsdom.env(index, function(err, window){         //defining the jsdom environment and pass the index.html file. Add call-back function that is run after jsdom finishes pulling index.html into memory. Window here is same as window in browsers
      const h1 = window.document.getElementsByTagName("h1")[0]; //getting the first h1 in an array(in the event there are more than one item in the array)
      expect(h1.innerHTML).to.equal("Hello Nigeria");
      done();
      window.close(); //closing the window to free up the memory that was taken when the in-memory DOM was created.
    })
  })
})
