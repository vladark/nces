//doubling db connect (why?). Fix it later. FIXED
var mysql      = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'vladark',
  password : 'baykal95',
});

db.connect();

function check(err){if (err) throw err;};
									
db.query('USE Notebooks', check()); 
												
//generate a record in db

var q,f,w,x,e,r,t,y,s,d = [];
q=['Sony','Samsung','ASUS','Apple','Lenovo','Alienware','Acer','Toshiba','3Q'];
f=[12.1,13.2,14.3,15.1,16];
w=['ZX','PN','CX','JK','BP'];
x=[320,500,700,1024];
e=[1.66, 3.15, 2.5, 2.24, 2.7];
r=[2,4];
t=[1024,2048,4096,8192];
y=['Radeon','Gvidia','integrated'];
s=[512,1024,2048];
d=[true,true,true,false];
var nOte = [q,f,w,x,e,r,t,y,s,d];


function getRand(array){          // <---- dat works 
    var k = Math.floor(Math.random()* (array.length-1) );
    return array[k];
   };
   
function getNote(){                 // <---- sure, and it is 
    var not3 = [];
    for (i=0;i<=9;i++){
		not3.push(getRand(nOte[i]));
		};
	return not3.join();
	};
	
exports.fill = function(req,res){
  db.query('INSERT INTO notes (company, model, screen, hmemory, processor, cores, memory, vcard, vmemory, preinstl_os) VALUES ('+getNote()+');',function(err,rows,fields){
									  if (err) throw err;
									  console.log('Record added');
									  });
	db.query('SELECT * FROM notes AS asd', function(err,rows,fields){
																	if (err) throw err;
																	res.send('here:'+rows.asd);
																	});
	 };
