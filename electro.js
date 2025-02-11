var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer((req,res)=>{
    fs.readFile('./electronics.json','utf-8',(err,data)=>{
        if(err){
            console.log(err.message)
        }
        else{
            var urldata = req.url;
            var parseurl = url.parse(urldata,true);
            var pathname = parseurl.pathname;
            var pathquery = parseurl.query;
            if(pathname =='/electronics' && req.method=="POST"){
                fs.readFile('./electronics.json','utf-8',(err,data)=>{
                    res.write(data)
                    res.end()
                })
            }else if(pathname=="/electronics" && req.method =="GET"){
                var result = pathquery.cat;
                switch(result){
                    case "s":
                        fs.readFile('./electronics.json','utf-8',(err,data)=>{
                            var dataa = JSON.parse(data)
                            console.log(dataa)
                            var data1 = dataa.electonic.filter((val)=>{
                                return val.category =="Smartphone";
                            })
                            res.write(JSON.stringify(data1))
                            res.end();
                        })
                        break;
                    case "l":
                        fs.readFile('./electronics.json','utf-8',(err,data)=>{
                            var dataa = JSON.parse(data)
                            console.log(dataa)
                            var data1 = dataa.electonic.filter((val)=>{
                                return val.category =="Laptop";
                            })
                            res.write(JSON.stringify(data1))
                            res.end();
                        })
                        break;
                        case "t":
                            fs.readFile('./electronics.json','utf-8',(err,data)=>{
                                var dataa = JSON.parse(data)
                                console.log(dataa)
                                var data1 = dataa.electonic.filter((val)=>{
                                    return val.category =="Tablet";
                                })
                                res.write(JSON.stringify(data1))
                                res.end();
                            })
                            break;
                            case "w":
                                fs.readFile('./electronics.json','utf-8',(err,data)=>{
                                    var dataa = JSON.parse(data)
                                    console.log(dataa)
                                    var data1 = dataa.electonic.filter((val)=>{
                                        return val.category =="Smartwatch";
                                    })
                                    res.write(JSON.stringify(data1))
                                    res.end();
                                })
                                break;
                    default:
                        res.write("Invalid Category")
                        res.end()

                }
            }
            else{
                res.end("Invalid Endpoint")
            }
        }
    })

})
server.listen(3001,()=>{
    console.log('server is running')
})