var exec = require('child_process').exec;

function start(request, response) {
  console.log('Request handler \'start\' was called.');

  // var content = 'empty';
  exec('ls -lah', function(error, stdout, stderr) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(stdout);
    response.end();
  });

}

exports.start = start;
