//EJS Compiled Views - This file was automatically generated on Fri Nov 10 2023 14:31:43 GMT+0100 (hora estándar de Europa central)
 ejs.views_include = function(locals) {
     
     return function(path, d) {
         console.log("ejs.views_include",path,d);
         return ejs["views_"+path.replace(/\//g,"_").replace(/-/g,"_")]({...d,...locals}, null, ejs.views_include(locals));
     }
 };
 