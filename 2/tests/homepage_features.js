var host = 'http://localhost:3000/';

describe("homepage", function() {

  before(function() {
    casper.start(host);
  });

  it('hello world', function() {
    casper.then(function() {
      expect('body').to.have.text('hello world');
    });
  });

  it('greets', function() {
    casper.thenOpen(host + '?name=gus&age=22', function() {
      expect('body').to.have.text('hello gus')
    });
  });

  it('should give me json format', function() {
    casper.thenOpen(host + 'reflect.json?name=gus', function() {
      expect('body').to.have.text('{"name":"gus"}');
    });
  });

});
