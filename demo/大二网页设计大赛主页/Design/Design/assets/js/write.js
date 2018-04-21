var http=require("http");
var mysql=require("mysql");
var express=require("express");
var app=express();
var database=mysql.createConnection({host:"localhost",user:"root",password:"xiyounet",database:"networkcontest"});
var querystring=require("querystring");
http.createServer(function(req,res){
	var postdata="";
    req.on('data',function(chunk){
        //使用querystring模块中的parse方法将字符串转化为对象
		postdata+=chunk;
    })
    req.on('end',function(){
        postdata=querystring.parse(postdata);
        console.log(postdata);
        database.query(`insert into team
		(phonenumer,team)
		values
		('${postdata.contact}','${postdata.team}');`,
		function(err,result){
          if(err){
          	console.log(err);
              database.end();
          }else{
              console.log('插入数据成功');
//            database.end();
          }
      })
        database.query(`insert into person
		(leader,lead_stnum,leadercontact,leaderclass,member1,member1stnum,member1contact,member1class,member2,member2stnum,member2contact,member2class)
		values
		('${postdata.leaderName}','${postdata.leaderNum}','${postdata.leaderContact}',
		'${postdata.leaderClass}','${postdata.member1Name}','${postdata.member1Num}',
		'${postdata.member1Contact}','${postdata.member1Class}','${postdata.member2Name}',
		'${postdata.member2Num}','${postdata.member2Contact}','${postdata.member2Class}');`,
		function(err,result){
          if(err){
          	console.log(err);
              database.end();
          }else{
              console.log('插入数据成功');
//            database.end();
          }
      })

   })
}).listen(8090);
