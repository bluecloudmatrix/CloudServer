/**
 * Created by qiushan on 5/31/2016.
 */
var entries = [
    {"id":0001, "name":"MongoDB", "image":"mymongodb", "picture":"mongodb.png", "description":"MongoDB是一个面向文档的数据库，目前由10gen开发并维护，它的功能丰富，齐全，完全可以替代MySQL"},
    {"id":0002, "name":"Node.js", "picture":"nodejs.png", "description":"Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient"}
];

exports.getImagesEntries = function(){
    return entries;
}

exports.getImagesEntry = function (id){
    for(var i=0; i < entries.length; i++){
        if(entries[i].id == id) return entries[i];
    }
}