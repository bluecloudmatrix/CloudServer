/**
 * Created by qiushan on 5/31/2016.
 */
var entries = [
    {"id":0001, "name":"MongoDB", "image":"weare.pub/mongodb:3.0", "picture":"mongodb.png", "description":""},
    {"id":0002, "name":"Node.js", "image":"mymongodb", "picture":"nodejs.png", "description":""},
    {"id":0003, "name":"cadvisor", "image":"mymongodb", "picture":"cadvisor.png", "description":""},
    {"id":0004, "name":"mysql", "image":"mymongodb", "picture":"mysql.png", "description":""},
    {"id":0005, "name":"nginx", "image":"mymongodb", "picture":"nginx.png", "description":""},
    {"id":0006, "name":"PHP", "image":"mymongodb", "picture":"PHP.png", "description":""},
    {"id":0007, "name":"haproxy", "image":"mymongodb", "picture":"haproxy.png", "description":""},
    {"id":0008, "name":"Ubuntu", "image":"mymongodb", "picture":"Ubuntu.png", "description":""},
    {"id":0009, "name":"wordpress", "image":"mymongodb", "picture":"wordpress.png", "description":""},
    {"id":0010, "name":"Spark", "image":"mymongodb", "picture":"Spark.jpg", "description":""}
];

exports.getImagesEntries = function(){
    return entries;
}

exports.getImagesEntry = function (id){
    for(var i=0; i < entries.length; i++){
        if(entries[i].id == id) return entries[i];
    }
}