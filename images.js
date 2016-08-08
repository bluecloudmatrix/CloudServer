/**
 * Created by qiushan on 5/31/2016.
 */
var entries = [
    {"id":0001, "name":"MongoDB", "image":"weare.pub/mongodb:latest", "picture":"mongodb.png", "description":""},
    {"id":0002, "name":"Node.js", "image":"weare.pub/node:latest", "picture":"nodejs.png", "description":""},
    {"id":0003, "name":"cadvisor", "image":"weare.pub/cadvisor:latest", "picture":"cadvisor.png", "description":""},
    {"id":0004, "name":"mysql", "image":"weare.pub/mysql:latest", "picture":"mysql.png", "description":""},
    {"id":0005, "name":"nginx", "image":"weare.pub/nginx:latest", "picture":"nginx.png", "description":""},
    {"id":0008, "name":"Ubuntu", "image":"weare.pub/ubuntu:latest", "picture":"Ubuntu.png", "description":""}
];

exports.getImagesEntries = function(){
    return entries;
}

exports.getImagesEntry = function (id){
    for(var i=0; i < entries.length; i++){
        if(entries[i].id == id) return entries[i];
    }
}