describe('homepage', function() {

  var host = 'http://localhost:9999';

  before(function() {
    casper.start(host)
  });

  it('hello world', function() {
    casper.then(function() {
      expect('body').to.have.text('Hello world');
    });
  });

  it('should say hello gus', function() {
    casper.thenOpen(host + '?name=Gus', function() {
      expect('body').to.have.text('Hello Gus');
    });
  });


  it('should give me some JSON love', function() {
    casper.thenOpen(host + '/reflect.json?name=gus', function() {
      expect('body').to.have.text('{"name":"gus"}');
    });
  });

});
