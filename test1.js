


console.log('test1');
process.nextTick(function(){ console.log('t2'); });


process.nextTick(function(){ console.log('t3'); });


console.log('test2');
