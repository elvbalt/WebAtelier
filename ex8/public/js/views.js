//EJS Compiled Views - This file was automatically generated on Fri Nov 17 2023 15:08:39 GMT+0100 (hora estándar de Europa central)
 ejs.views_include = function(locals) {
     
     return function(path, d) {
         console.log("ejs.views_include",path,d);
         return ejs["views_"+path.replace(/\//g,"_").replace(/-/g,"_")]({...d,...locals}, null, ejs.views_include(locals));
     }
 };
 ejs.views_map_edit = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "    <header>\r\n            <h1>Map Editor</h1>\r\n        </header>\r\n  \r\n\r\n                <input id=\"title\" type=\"text\" name=\"title\" placeholder=\"<%=map.title%>\"/>\r\n                <input id=\"lat\" type=\"text\" name=\"lat\" placeholder=\"<%=map.center_str.lat%>\"/>\r\n                <input id=\"lng\" type=\"text\" name=\"lng\" placeholder=\"<%=map.center_str.lng%>\" />\r\n                <input id=\"zoom\" type=\"number\" name=\"zoom\" value=\"13\" />\r\n                \r\n                <select name=\"tiles\" id=\"tiles\">\r\n                    <% let options = [\"watercolor\", \"osm\", \"natgeo\", \"ESRI_world_imagery\", \"Swiss_Color\", \"Swiss_Imagery\", \"topo\", \"toner\"] %>\r\n                    <% for (let option of options) { %>\r\n                        <option value=\"<%= option %>\" <%= map.tiles === option ? 'selected' : '' %>>\r\n                            <%= option %>\r\n                        </option>\r\n                    <% } %>\r\n                </select>\r\n\r\n                <% if (map.id == -1){ %>\r\n                <button data-action='create'> Create </button>\r\n\r\n                <% } else { %>\r\n\r\n                <button data-action='update'>Update </button>\r\n\r\n                <% } %>\r\n\r\n\r\n            <div id=\"map\"></div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("    <header>\r\n            <h1>Map Editor</h1>\r\n        </header>\r\n  \r\n\r\n                <input id=\"title\" type=\"text\" name=\"title\" placeholder=\"")
    ; __line = 6
    ; __append(escapeFn(map.title))
    ; __append("\"/>\r\n                <input id=\"lat\" type=\"text\" name=\"lat\" placeholder=\"")
    ; __line = 7
    ; __append(escapeFn(map.center_str.lat))
    ; __append("\"/>\r\n                <input id=\"lng\" type=\"text\" name=\"lng\" placeholder=\"")
    ; __line = 8
    ; __append(escapeFn(map.center_str.lng))
    ; __append("\" />\r\n                <input id=\"zoom\" type=\"number\" name=\"zoom\" value=\"13\" />\r\n                \r\n                <select name=\"tiles\" id=\"tiles\">\r\n                    ")
    ; __line = 12
    ;  let options = ["watercolor", "osm", "natgeo", "ESRI_world_imagery", "Swiss_Color", "Swiss_Imagery", "topo", "toner"] 
    ; __append("\r\n                    ")
    ; __line = 13
    ;  for (let option of options) { 
    ; __append("\r\n                        <option value=\"")
    ; __line = 14
    ; __append(escapeFn( option ))
    ; __append("\" ")
    ; __append(escapeFn( map.tiles === option ? 'selected' : '' ))
    ; __append(">\r\n                            ")
    ; __line = 15
    ; __append(escapeFn( option ))
    ; __append("\r\n                        </option>\r\n                    ")
    ; __line = 17
    ;  } 
    ; __append("\r\n                </select>\r\n\r\n                ")
    ; __line = 20
    ;  if (map.id == -1){ 
    ; __append("\r\n                <button data-action='create'> Create </button>\r\n\r\n                ")
    ; __line = 23
    ;  } else { 
    ; __append("\r\n\r\n                <button data-action='update'>Update </button>\r\n\r\n                ")
    ; __line = 27
    ;  } 
    ; __append("\r\n\r\n\r\n            <div id=\"map\"></div>")
    ; __line = 30
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_map_list_script = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "/**\r\n * Web Atelier 2023  Exercise 5 - Web Apps with Express.js\r\n *\r\n * Student: __Elvira Baltasar__\r\n *\r\n * Task 3\r\n *\r\n */\r\n\r\nlet maps = <%-JSON.stringify(maps)%>;\r\n\r\nmaps.forEach( (u) => {\r\n    initMapThumb(u)\r\n})\r\n\r\n\r\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("/**\r\n * Web Atelier 2023  Exercise 5 - Web Apps with Express.js\r\n *\r\n * Student: __Elvira Baltasar__\r\n *\r\n * Task 3\r\n *\r\n */\r\n\r\nlet maps = ")
    ; __line = 10
    ; __append(JSON.stringify(maps))
    ; __append(";\r\n\r\nmaps.forEach( (u) => {\r\n    initMapThumb(u)\r\n})\r\n\r\n\r\n")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_map_list = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\r\n        <header>\r\n            <h4>Title</h4>\r\n            <span>Thumbnail</span>\r\n            <span class=\"lat\">Latitude</span>\r\n            <span class=\"lng\">Longitude</span>\r\n            <span class=\"zoom\">Zoom</span>\r\n            <span class=\"tiles\">Tile Source</span>\r\n            <span class=\"Views\">View count</span>\r\n            <span class=\"actions\">Actions</span>\r\n            <label for=\"sort\">Sort by:</label>\r\n                <select id=\"sort\">\r\n                <option value=\"Last\"> </option>\r\n                <option value=\"Lat\">Center Latitude</option>\r\n                <option value=\"Lng\">Center Longitude</option>\r\n                <option value=\"zoomLevel\">Zoom Level</option>\r\n                <option value=\"title\">Title</option>\r\n                \r\n                </select>\r\n        </header>\r\n\r\n        <% maps.forEach(map=> { %>\r\n\r\n        <%\r\n        let fav_button = \"&starf;\";\r\n        let fav_value = \"true\"\r\n        if (!map.fav) {\r\n            fav_value = \"false\";\r\n            fav_button = \"&star;\";\r\n        }\r\n        %>\r\n        <section id=\"map-<%=map._id%>\" data-mapid=\"<%=map._id%>\">\r\n            <h4 class=\"name\"><%=map.title%></h4>\r\n            <a href=\"/map/<%=map._id%>\" target=\"view\">\r\n               <div id=\"map-thumb-<%=map._id%>\" class=\"thumb\"></div>\r\n            </a>\r\n\r\n            <span class=\"lat\"><%=map.center_str.lat%></span>\r\n            <span class=\"lng\"><%=map.center_str.lng%></span>\r\n            <span class=\"zoom\"><%=map.zoom%></span>\r\n            <span class=\"tiles\"><%=map.tiles%></span>\r\n            <span class=\"views\"><%=map.viewCount%> </span>\r\n            <a href=\"/map/<%=map._id%>/edit\" target=\"editor\">Edit</a>\r\n            <form action=\"/map/<%=map._id%>/clone\" method=\"POST\">\r\n                <button>Clone</button>\r\n            </form>\r\n            <form action=\"/map/<%=map._id%>/fav?_method=PATCH\" method=\"POST\">\r\n                <input type=\"hidden\" name=\"fav\" value=\"<%=fav_value%>\">\r\n                <button><%-fav_button%></button>\r\n            </form>\r\n            <form action=\"/map/<%=map._id%>?_method=DELETE\" method=\"POST\">\r\n                <button>Delete</button>\r\n            </form>\r\n        </section>\r\n        \r\n        <%})%>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\r\n        <header>\r\n            <h4>Title</h4>\r\n            <span>Thumbnail</span>\r\n            <span class=\"lat\">Latitude</span>\r\n            <span class=\"lng\">Longitude</span>\r\n            <span class=\"zoom\">Zoom</span>\r\n            <span class=\"tiles\">Tile Source</span>\r\n            <span class=\"Views\">View count</span>\r\n            <span class=\"actions\">Actions</span>\r\n            <label for=\"sort\">Sort by:</label>\r\n                <select id=\"sort\">\r\n                <option value=\"Last\"> </option>\r\n                <option value=\"Lat\">Center Latitude</option>\r\n                <option value=\"Lng\">Center Longitude</option>\r\n                <option value=\"zoomLevel\">Zoom Level</option>\r\n                <option value=\"title\">Title</option>\r\n                \r\n                </select>\r\n        </header>\r\n\r\n        ")
    ; __line = 22
    ;  maps.forEach(map=> { 
    ; __append("\r\n\r\n        ")
    ; __line = 24
    ; 
        let fav_button = "&starf;";
        let fav_value = "true"
        if (!map.fav) {
            fav_value = "false";
            fav_button = "&star;";
        }
        
    ; __line = 31
    ; __append("\r\n        <section id=\"map-")
    ; __line = 32
    ; __append(escapeFn(map._id))
    ; __append("\" data-mapid=\"")
    ; __append(escapeFn(map._id))
    ; __append("\">\r\n            <h4 class=\"name\">")
    ; __line = 33
    ; __append(escapeFn(map.title))
    ; __append("</h4>\r\n            <a href=\"/map/")
    ; __line = 34
    ; __append(escapeFn(map._id))
    ; __append("\" target=\"view\">\r\n               <div id=\"map-thumb-")
    ; __line = 35
    ; __append(escapeFn(map._id))
    ; __append("\" class=\"thumb\"></div>\r\n            </a>\r\n\r\n            <span class=\"lat\">")
    ; __line = 38
    ; __append(escapeFn(map.center_str.lat))
    ; __append("</span>\r\n            <span class=\"lng\">")
    ; __line = 39
    ; __append(escapeFn(map.center_str.lng))
    ; __append("</span>\r\n            <span class=\"zoom\">")
    ; __line = 40
    ; __append(escapeFn(map.zoom))
    ; __append("</span>\r\n            <span class=\"tiles\">")
    ; __line = 41
    ; __append(escapeFn(map.tiles))
    ; __append("</span>\r\n            <span class=\"views\">")
    ; __line = 42
    ; __append(escapeFn(map.viewCount))
    ; __append(" </span>\r\n            <a href=\"/map/")
    ; __line = 43
    ; __append(escapeFn(map._id))
    ; __append("/edit\" target=\"editor\">Edit</a>\r\n            <form action=\"/map/")
    ; __line = 44
    ; __append(escapeFn(map._id))
    ; __append("/clone\" method=\"POST\">\r\n                <button>Clone</button>\r\n            </form>\r\n            <form action=\"/map/")
    ; __line = 47
    ; __append(escapeFn(map._id))
    ; __append("/fav?_method=PATCH\" method=\"POST\">\r\n                <input type=\"hidden\" name=\"fav\" value=\"")
    ; __line = 48
    ; __append(escapeFn(fav_value))
    ; __append("\">\r\n                <button>")
    ; __line = 49
    ; __append(fav_button)
    ; __append("</button>\r\n            </form>\r\n            <form action=\"/map/")
    ; __line = 51
    ; __append(escapeFn(map._id))
    ; __append("?_method=DELETE\" method=\"POST\">\r\n                <button>Delete</button>\r\n            </form>\r\n        </section>\r\n        \r\n        ")
    ; __line = 56
    ; })
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_map_script = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "/**\r\n * Web Atelier 2023  Exercise 5 - Web Apps with Express.js\r\n *\r\n * Student: __Elvira Baltasar__\r\n *\r\n * Tasks 4 and 5\r\n *\r\n*/\r\n\r\nlet map = <%-JSON.stringify(map)%>;"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("/**\r\n * Web Atelier 2023  Exercise 5 - Web Apps with Express.js\r\n *\r\n * Student: __Elvira Baltasar__\r\n *\r\n * Tasks 4 and 5\r\n *\r\n*/\r\n\r\nlet map = ")
    ; __line = 10
    ; __append(JSON.stringify(map))
    ; __append(";")
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_map_view = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\r\n\r\n<input id=\"title\" type=\"text\" name=\"title\" readonly value=\"<%=map.title%>\" />\r\n<input id=\"lat\" name=\"lat\" value=<%=map.center_str.lat%> disabled />\r\n<input id=\"lng\" name=\"lng\" vale=<%=map.center_str.lng%> disabled />\r\n<input id=\"zoom\" type=\"number\" name=\"zoom\" readonly value=\"13\" />\r\n<input id=\"tiles\" type=\"text\" name=\"tiles\" readonly value=<%=map.tiles%> />\r\n<input id=\"views\" type=\"text\" name=\"views\" readonly value=<%=map.viewCount ?? 0%> />\r\n\r\n<button id = \"edit\"> Edit </button>\r\n\r\n\r\n<div id=\"map\"></div>\r\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\r\n\r\n<input id=\"title\" type=\"text\" name=\"title\" readonly value=\"")
    ; __line = 3
    ; __append(escapeFn(map.title))
    ; __append("\" />\r\n<input id=\"lat\" name=\"lat\" value=")
    ; __line = 4
    ; __append(escapeFn(map.center_str.lat))
    ; __append(" disabled />\r\n<input id=\"lng\" name=\"lng\" vale=")
    ; __line = 5
    ; __append(escapeFn(map.center_str.lng))
    ; __append(" disabled />\r\n<input id=\"zoom\" type=\"number\" name=\"zoom\" readonly value=\"13\" />\r\n<input id=\"tiles\" type=\"text\" name=\"tiles\" readonly value=")
    ; __line = 7
    ; __append(escapeFn(map.tiles))
    ; __append(" />\r\n<input id=\"views\" type=\"text\" name=\"views\" readonly value=")
    ; __line = 8
    ; __append(escapeFn(map.viewCount ?? 0))
    ; __append(" />\r\n\r\n<button id = \"edit\"> Edit </button>\r\n\r\n\r\n<div id=\"map\"></div>\r\n")
    ; __line = 14
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_marker_edit = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!--\r\n\r\n    Web Atelier 2023  Exercise 7 - Single-Page Web Applications with Fetch and Client-side Views\r\n\r\n    Student: __Elvira Baltasar__\r\n\r\n    Task 6.  Marker Editor Form\r\n\r\n    1. This view expects a marker object and a types string array\r\n    2. The marker object has the following properties:\r\n        - title: string\r\n        - location: {lat: number, lng: number}\r\n        - hue: number\r\n        - type: string\r\n    3. The types array contains the types of markers that can be selected\r\n\r\n-->\r\n\r\n<% if (locals.marker) { %>\r\n\r\n    <form class=\"marker\">\r\n\r\n        <div id=\"info\">\r\n\r\n        <p>Latitude: <%=gps2str(marker.location.lng)%>, Longitude: <%=gps2str(marker.location.lat)%></p>\r\n\r\n        <label for=\"mtitle\">Title:</label><input id=\"mtitle\" type=\"text\" name=\"title\" value=\"<%=marker.title%>\" />\r\n        <label for=\"mhue\">Color:</label><input id=\"mhue\" type=\"range\" min=\"0\" max=\"360\" value=\"<%=marker.hue%>\" />\r\n\r\n        </div>\r\n\r\n        <% if (locals.types==undefined) { locals.types=[\"undefined\", \"null\" ]; } %>\r\n\r\n        <label>Type:</label>\r\n\r\n        <div id =\"options\">\r\n\r\n        <% types.forEach(type=> { %>\r\n            <div id=\"dentro\">\r\n            <label for=\"type-<%=type%>\"><img src=\"/images/marker-<%=type%>.svg\" /></label>\r\n            <input id=\"type-<%=type%>\" type=\"radio\" name=\"type\" value=\"<%=type%>\" <% if (marker.type==type) {%>checked<% } %> />\r\n            </div>\r\n        <% }); %>\r\n\r\n    </div>\r\n\r\n        <button data-action=\"delete\">Delete Marker</button>\r\n\r\n        \r\n\r\n    </form>\r\n\r\n<% } %>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!--\r\n\r\n    Web Atelier 2023  Exercise 7 - Single-Page Web Applications with Fetch and Client-side Views\r\n\r\n    Student: __Elvira Baltasar__\r\n\r\n    Task 6.  Marker Editor Form\r\n\r\n    1. This view expects a marker object and a types string array\r\n    2. The marker object has the following properties:\r\n        - title: string\r\n        - location: {lat: number, lng: number}\r\n        - hue: number\r\n        - type: string\r\n    3. The types array contains the types of markers that can be selected\r\n\r\n-->\r\n\r\n")
    ; __line = 19
    ;  if (locals.marker) { 
    ; __append("\r\n\r\n    <form class=\"marker\">\r\n\r\n        <div id=\"info\">\r\n\r\n        <p>Latitude: ")
    ; __line = 25
    ; __append(escapeFn(gps2str(marker.location.lng)))
    ; __append(", Longitude: ")
    ; __append(escapeFn(gps2str(marker.location.lat)))
    ; __append("</p>\r\n\r\n        <label for=\"mtitle\">Title:</label><input id=\"mtitle\" type=\"text\" name=\"title\" value=\"")
    ; __line = 27
    ; __append(escapeFn(marker.title))
    ; __append("\" />\r\n        <label for=\"mhue\">Color:</label><input id=\"mhue\" type=\"range\" min=\"0\" max=\"360\" value=\"")
    ; __line = 28
    ; __append(escapeFn(marker.hue))
    ; __append("\" />\r\n\r\n        </div>\r\n\r\n        ")
    ; __line = 32
    ;  if (locals.types==undefined) { locals.types=["undefined", "null" ]; } 
    ; __append("\r\n\r\n        <label>Type:</label>\r\n\r\n        <div id =\"options\">\r\n\r\n        ")
    ; __line = 38
    ;  types.forEach(type=> { 
    ; __append("\r\n            <div id=\"dentro\">\r\n            <label for=\"type-")
    ; __line = 40
    ; __append(escapeFn(type))
    ; __append("\"><img src=\"/images/marker-")
    ; __append(escapeFn(type))
    ; __append(".svg\" /></label>\r\n            <input id=\"type-")
    ; __line = 41
    ; __append(escapeFn(type))
    ; __append("\" type=\"radio\" name=\"type\" value=\"")
    ; __append(escapeFn(type))
    ; __append("\" ")
    ;  if (marker.type==type) {
    ; __append("checked")
    ;  } 
    ; __append(" />\r\n            </div>\r\n        ")
    ; __line = 43
    ;  }); 
    ; __append("\r\n\r\n    </div>\r\n\r\n        <button data-action=\"delete\">Delete Marker</button>\r\n\r\n        \r\n\r\n    </form>\r\n\r\n")
    ; __line = 53
    ;  } 
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_sidebar = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\r\n<input type=\"text\" readonly value=\"<%=map.title%>\" />\r\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\r\n<input type=\"text\" readonly value=\"")
    ; __line = 2
    ; __append(escapeFn(map.title))
    ; __append("\" />\r\n")
    ; __line = 3
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_sidebar_gen = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div id=\"CounterContainer\">\r\n    Conected Clients: <span id=\"clientCount\">0</span>\r\n</div> \r\n\r\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div id=\"CounterContainer\">\r\n    Conected Clients: <span id=\"clientCount\">0</span>\r\n</div> \r\n\r\n")
    ; __line = 5
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_map_edit = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "    <header>\r\n            <h1>Map Editor</h1>\r\n        </header>\r\n  \r\n\r\n                <input id=\"title\" type=\"text\" name=\"title\" placeholder=\"<%=map.title%>\"/>\r\n                <input id=\"lat\" type=\"text\" name=\"lat\" placeholder=\"<%=map.center_str.lat%>\"/>\r\n                <input id=\"lng\" type=\"text\" name=\"lng\" placeholder=\"<%=map.center_str.lng%>\" />\r\n                <input id=\"zoom\" type=\"number\" name=\"zoom\" value=\"13\" />\r\n                \r\n                <select name=\"tiles\" id=\"tiles\">\r\n                    <% let options = [\"watercolor\", \"osm\", \"natgeo\", \"ESRI_world_imagery\", \"Swiss_Color\", \"Swiss_Imagery\", \"topo\", \"toner\"] %>\r\n                    <% for (let option of options) { %>\r\n                        <option value=\"<%= option %>\" <%= map.tiles === option ? 'selected' : '' %>>\r\n                            <%= option %>\r\n                        </option>\r\n                    <% } %>\r\n                </select>\r\n\r\n                <% if (map.id == -1){ %>\r\n                <button data-action='create'> Create </button>\r\n\r\n                <% } else { %>\r\n\r\n                <button data-action='update'>Update </button>\r\n\r\n                <% } %>\r\n\r\n\r\n            <div id=\"map\"></div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("    <header>\r\n            <h1>Map Editor</h1>\r\n        </header>\r\n  \r\n\r\n                <input id=\"title\" type=\"text\" name=\"title\" placeholder=\"")
    ; __line = 6
    ; __append(escapeFn(map.title))
    ; __append("\"/>\r\n                <input id=\"lat\" type=\"text\" name=\"lat\" placeholder=\"")
    ; __line = 7
    ; __append(escapeFn(map.center_str.lat))
    ; __append("\"/>\r\n                <input id=\"lng\" type=\"text\" name=\"lng\" placeholder=\"")
    ; __line = 8
    ; __append(escapeFn(map.center_str.lng))
    ; __append("\" />\r\n                <input id=\"zoom\" type=\"number\" name=\"zoom\" value=\"13\" />\r\n                \r\n                <select name=\"tiles\" id=\"tiles\">\r\n                    ")
    ; __line = 12
    ;  let options = ["watercolor", "osm", "natgeo", "ESRI_world_imagery", "Swiss_Color", "Swiss_Imagery", "topo", "toner"] 
    ; __append("\r\n                    ")
    ; __line = 13
    ;  for (let option of options) { 
    ; __append("\r\n                        <option value=\"")
    ; __line = 14
    ; __append(escapeFn( option ))
    ; __append("\" ")
    ; __append(escapeFn( map.tiles === option ? 'selected' : '' ))
    ; __append(">\r\n                            ")
    ; __line = 15
    ; __append(escapeFn( option ))
    ; __append("\r\n                        </option>\r\n                    ")
    ; __line = 17
    ;  } 
    ; __append("\r\n                </select>\r\n\r\n                ")
    ; __line = 20
    ;  if (map.id == -1){ 
    ; __append("\r\n                <button data-action='create'> Create </button>\r\n\r\n                ")
    ; __line = 23
    ;  } else { 
    ; __append("\r\n\r\n                <button data-action='update'>Update </button>\r\n\r\n                ")
    ; __line = 27
    ;  } 
    ; __append("\r\n\r\n\r\n            <div id=\"map\"></div>")
    ; __line = 30
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_map_list_script = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "/**\r\n * Web Atelier 2023  Exercise 5 - Web Apps with Express.js\r\n *\r\n * Student: __Elvira Baltasar__\r\n *\r\n * Task 3\r\n *\r\n */\r\n\r\nlet maps = <%-JSON.stringify(maps)%>;\r\n\r\nmaps.forEach( (u) => {\r\n    initMapThumb(u)\r\n})\r\n\r\n\r\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("/**\r\n * Web Atelier 2023  Exercise 5 - Web Apps with Express.js\r\n *\r\n * Student: __Elvira Baltasar__\r\n *\r\n * Task 3\r\n *\r\n */\r\n\r\nlet maps = ")
    ; __line = 10
    ; __append(JSON.stringify(maps))
    ; __append(";\r\n\r\nmaps.forEach( (u) => {\r\n    initMapThumb(u)\r\n})\r\n\r\n\r\n")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_map_list = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\r\n        <header>\r\n            <h4>Title</h4>\r\n            <span>Thumbnail</span>\r\n            <span class=\"lat\">Latitude</span>\r\n            <span class=\"lng\">Longitude</span>\r\n            <span class=\"zoom\">Zoom</span>\r\n            <span class=\"tiles\">Tile Source</span>\r\n            <span class=\"Views\">View count</span>\r\n            <span class=\"actions\">Actions</span>\r\n            <label for=\"sort\">Sort by:</label>\r\n                <select id=\"sort\">\r\n                <option value=\"Last\"> </option>\r\n                <option value=\"Lat\">Center Latitude</option>\r\n                <option value=\"Lng\">Center Longitude</option>\r\n                <option value=\"zoomLevel\">Zoom Level</option>\r\n                <option value=\"title\">Title</option>\r\n                \r\n                </select>\r\n        </header>\r\n\r\n        <% maps.forEach(map=> { %>\r\n\r\n        <%\r\n        let fav_button = \"&starf;\";\r\n        let fav_value = \"true\"\r\n        if (!map.fav) {\r\n            fav_value = \"false\";\r\n            fav_button = \"&star;\";\r\n        }\r\n        %>\r\n        <section id=\"map-<%=map._id%>\" data-mapid=\"<%=map._id%>\">\r\n            <h4 class=\"name\"><%=map.title%></h4>\r\n            <a href=\"/map/<%=map._id%>\" target=\"view\">\r\n               <div id=\"map-thumb-<%=map._id%>\" class=\"thumb\"></div>\r\n            </a>\r\n\r\n            <span class=\"lat\"><%=map.center_str.lat%></span>\r\n            <span class=\"lng\"><%=map.center_str.lng%></span>\r\n            <span class=\"zoom\"><%=map.zoom%></span>\r\n            <span class=\"tiles\"><%=map.tiles%></span>\r\n            <span class=\"views\"><%=map.viewCount%> </span>\r\n            <a href=\"/map/<%=map._id%>/edit\" target=\"editor\">Edit</a>\r\n            <form action=\"/map/<%=map._id%>/clone\" method=\"POST\">\r\n                <button>Clone</button>\r\n            </form>\r\n            <form action=\"/map/<%=map._id%>/fav?_method=PATCH\" method=\"POST\">\r\n                <input type=\"hidden\" name=\"fav\" value=\"<%=fav_value%>\">\r\n                <button><%-fav_button%></button>\r\n            </form>\r\n            <form action=\"/map/<%=map._id%>?_method=DELETE\" method=\"POST\">\r\n                <button>Delete</button>\r\n            </form>\r\n        </section>\r\n        \r\n        <%})%>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\r\n        <header>\r\n            <h4>Title</h4>\r\n            <span>Thumbnail</span>\r\n            <span class=\"lat\">Latitude</span>\r\n            <span class=\"lng\">Longitude</span>\r\n            <span class=\"zoom\">Zoom</span>\r\n            <span class=\"tiles\">Tile Source</span>\r\n            <span class=\"Views\">View count</span>\r\n            <span class=\"actions\">Actions</span>\r\n            <label for=\"sort\">Sort by:</label>\r\n                <select id=\"sort\">\r\n                <option value=\"Last\"> </option>\r\n                <option value=\"Lat\">Center Latitude</option>\r\n                <option value=\"Lng\">Center Longitude</option>\r\n                <option value=\"zoomLevel\">Zoom Level</option>\r\n                <option value=\"title\">Title</option>\r\n                \r\n                </select>\r\n        </header>\r\n\r\n        ")
    ; __line = 22
    ;  maps.forEach(map=> { 
    ; __append("\r\n\r\n        ")
    ; __line = 24
    ; 
        let fav_button = "&starf;";
        let fav_value = "true"
        if (!map.fav) {
            fav_value = "false";
            fav_button = "&star;";
        }
        
    ; __line = 31
    ; __append("\r\n        <section id=\"map-")
    ; __line = 32
    ; __append(escapeFn(map._id))
    ; __append("\" data-mapid=\"")
    ; __append(escapeFn(map._id))
    ; __append("\">\r\n            <h4 class=\"name\">")
    ; __line = 33
    ; __append(escapeFn(map.title))
    ; __append("</h4>\r\n            <a href=\"/map/")
    ; __line = 34
    ; __append(escapeFn(map._id))
    ; __append("\" target=\"view\">\r\n               <div id=\"map-thumb-")
    ; __line = 35
    ; __append(escapeFn(map._id))
    ; __append("\" class=\"thumb\"></div>\r\n            </a>\r\n\r\n            <span class=\"lat\">")
    ; __line = 38
    ; __append(escapeFn(map.center_str.lat))
    ; __append("</span>\r\n            <span class=\"lng\">")
    ; __line = 39
    ; __append(escapeFn(map.center_str.lng))
    ; __append("</span>\r\n            <span class=\"zoom\">")
    ; __line = 40
    ; __append(escapeFn(map.zoom))
    ; __append("</span>\r\n            <span class=\"tiles\">")
    ; __line = 41
    ; __append(escapeFn(map.tiles))
    ; __append("</span>\r\n            <span class=\"views\">")
    ; __line = 42
    ; __append(escapeFn(map.viewCount))
    ; __append(" </span>\r\n            <a href=\"/map/")
    ; __line = 43
    ; __append(escapeFn(map._id))
    ; __append("/edit\" target=\"editor\">Edit</a>\r\n            <form action=\"/map/")
    ; __line = 44
    ; __append(escapeFn(map._id))
    ; __append("/clone\" method=\"POST\">\r\n                <button>Clone</button>\r\n            </form>\r\n            <form action=\"/map/")
    ; __line = 47
    ; __append(escapeFn(map._id))
    ; __append("/fav?_method=PATCH\" method=\"POST\">\r\n                <input type=\"hidden\" name=\"fav\" value=\"")
    ; __line = 48
    ; __append(escapeFn(fav_value))
    ; __append("\">\r\n                <button>")
    ; __line = 49
    ; __append(fav_button)
    ; __append("</button>\r\n            </form>\r\n            <form action=\"/map/")
    ; __line = 51
    ; __append(escapeFn(map._id))
    ; __append("?_method=DELETE\" method=\"POST\">\r\n                <button>Delete</button>\r\n            </form>\r\n        </section>\r\n        \r\n        ")
    ; __line = 56
    ; })
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_map_script = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "/**\r\n * Web Atelier 2023  Exercise 5 - Web Apps with Express.js\r\n *\r\n * Student: __Elvira Baltasar__\r\n *\r\n * Tasks 4 and 5\r\n *\r\n*/\r\n\r\nlet map = <%-JSON.stringify(map)%>;"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("/**\r\n * Web Atelier 2023  Exercise 5 - Web Apps with Express.js\r\n *\r\n * Student: __Elvira Baltasar__\r\n *\r\n * Tasks 4 and 5\r\n *\r\n*/\r\n\r\nlet map = ")
    ; __line = 10
    ; __append(JSON.stringify(map))
    ; __append(";")
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_map_view = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\r\n\r\n<input id=\"title\" type=\"text\" name=\"title\" readonly value=\"<%=map.title%>\" />\r\n<input id=\"lat\" name=\"lat\" value=<%=map.center_str.lat%> disabled />\r\n<input id=\"lng\" name=\"lng\" vale=<%=map.center_str.lng%> disabled />\r\n<input id=\"zoom\" type=\"number\" name=\"zoom\" readonly value=\"13\" />\r\n<input id=\"tiles\" type=\"text\" name=\"tiles\" readonly value=<%=map.tiles%> />\r\n<input id=\"views\" type=\"text\" name=\"views\" readonly value=<%=map.viewCount ?? 0%> />\r\n\r\n<button id = \"edit\"> Edit </button>\r\n\r\n\r\n<div id=\"map\"></div>\r\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\r\n\r\n<input id=\"title\" type=\"text\" name=\"title\" readonly value=\"")
    ; __line = 3
    ; __append(escapeFn(map.title))
    ; __append("\" />\r\n<input id=\"lat\" name=\"lat\" value=")
    ; __line = 4
    ; __append(escapeFn(map.center_str.lat))
    ; __append(" disabled />\r\n<input id=\"lng\" name=\"lng\" vale=")
    ; __line = 5
    ; __append(escapeFn(map.center_str.lng))
    ; __append(" disabled />\r\n<input id=\"zoom\" type=\"number\" name=\"zoom\" readonly value=\"13\" />\r\n<input id=\"tiles\" type=\"text\" name=\"tiles\" readonly value=")
    ; __line = 7
    ; __append(escapeFn(map.tiles))
    ; __append(" />\r\n<input id=\"views\" type=\"text\" name=\"views\" readonly value=")
    ; __line = 8
    ; __append(escapeFn(map.viewCount ?? 0))
    ; __append(" />\r\n\r\n<button id = \"edit\"> Edit </button>\r\n\r\n\r\n<div id=\"map\"></div>\r\n")
    ; __line = 14
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_marker_edit = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!--\r\n\r\n    Web Atelier 2023  Exercise 7 - Single-Page Web Applications with Fetch and Client-side Views\r\n\r\n    Student: __Elvira Baltasar__\r\n\r\n    Task 6.  Marker Editor Form\r\n\r\n    1. This view expects a marker object and a types string array\r\n    2. The marker object has the following properties:\r\n        - title: string\r\n        - location: {lat: number, lng: number}\r\n        - hue: number\r\n        - type: string\r\n    3. The types array contains the types of markers that can be selected\r\n\r\n-->\r\n\r\n<% if (locals.marker) { %>\r\n\r\n    <form class=\"marker\">\r\n\r\n        <div id=\"info\">\r\n\r\n        <p>Latitude: <%=gps2str(marker.location.lng)%>, Longitude: <%=gps2str(marker.location.lat)%></p>\r\n\r\n        <label for=\"mtitle\">Title:</label><input id=\"mtitle\" type=\"text\" name=\"title\" value=\"<%=marker.title%>\" />\r\n        <label for=\"mhue\">Color:</label><input id=\"mhue\" type=\"range\" min=\"0\" max=\"360\" value=\"<%=marker.hue%>\" />\r\n\r\n        </div>\r\n\r\n        <% if (locals.types==undefined) { locals.types=[\"undefined\", \"null\" ]; } %>\r\n\r\n        <label>Type:</label>\r\n\r\n        <div id =\"options\">\r\n\r\n        <% types.forEach(type=> { %>\r\n            <div id=\"dentro\">\r\n            <label for=\"type-<%=type%>\"><img src=\"/images/marker-<%=type%>.svg\" /></label>\r\n            <input id=\"type-<%=type%>\" type=\"radio\" name=\"type\" value=\"<%=type%>\" <% if (marker.type==type) {%>checked<% } %> />\r\n            </div>\r\n        <% }); %>\r\n\r\n    </div>\r\n\r\n        <button data-action=\"delete\">Delete Marker</button>\r\n\r\n        \r\n\r\n    </form>\r\n\r\n<% } %>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!--\r\n\r\n    Web Atelier 2023  Exercise 7 - Single-Page Web Applications with Fetch and Client-side Views\r\n\r\n    Student: __Elvira Baltasar__\r\n\r\n    Task 6.  Marker Editor Form\r\n\r\n    1. This view expects a marker object and a types string array\r\n    2. The marker object has the following properties:\r\n        - title: string\r\n        - location: {lat: number, lng: number}\r\n        - hue: number\r\n        - type: string\r\n    3. The types array contains the types of markers that can be selected\r\n\r\n-->\r\n\r\n")
    ; __line = 19
    ;  if (locals.marker) { 
    ; __append("\r\n\r\n    <form class=\"marker\">\r\n\r\n        <div id=\"info\">\r\n\r\n        <p>Latitude: ")
    ; __line = 25
    ; __append(escapeFn(gps2str(marker.location.lng)))
    ; __append(", Longitude: ")
    ; __append(escapeFn(gps2str(marker.location.lat)))
    ; __append("</p>\r\n\r\n        <label for=\"mtitle\">Title:</label><input id=\"mtitle\" type=\"text\" name=\"title\" value=\"")
    ; __line = 27
    ; __append(escapeFn(marker.title))
    ; __append("\" />\r\n        <label for=\"mhue\">Color:</label><input id=\"mhue\" type=\"range\" min=\"0\" max=\"360\" value=\"")
    ; __line = 28
    ; __append(escapeFn(marker.hue))
    ; __append("\" />\r\n\r\n        </div>\r\n\r\n        ")
    ; __line = 32
    ;  if (locals.types==undefined) { locals.types=["undefined", "null" ]; } 
    ; __append("\r\n\r\n        <label>Type:</label>\r\n\r\n        <div id =\"options\">\r\n\r\n        ")
    ; __line = 38
    ;  types.forEach(type=> { 
    ; __append("\r\n            <div id=\"dentro\">\r\n            <label for=\"type-")
    ; __line = 40
    ; __append(escapeFn(type))
    ; __append("\"><img src=\"/images/marker-")
    ; __append(escapeFn(type))
    ; __append(".svg\" /></label>\r\n            <input id=\"type-")
    ; __line = 41
    ; __append(escapeFn(type))
    ; __append("\" type=\"radio\" name=\"type\" value=\"")
    ; __append(escapeFn(type))
    ; __append("\" ")
    ;  if (marker.type==type) {
    ; __append("checked")
    ;  } 
    ; __append(" />\r\n            </div>\r\n        ")
    ; __line = 43
    ;  }); 
    ; __append("\r\n\r\n    </div>\r\n\r\n        <button data-action=\"delete\">Delete Marker</button>\r\n\r\n        \r\n\r\n    </form>\r\n\r\n")
    ; __line = 53
    ;  } 
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_sidebar = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\r\n<input type=\"text\" readonly value=\"<%=map.title%>\" />\r\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\r\n<input type=\"text\" readonly value=\"")
    ; __line = 2
    ; __append(escapeFn(map.title))
    ; __append("\" />\r\n")
    ; __line = 3
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_sidebar_gen = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div id=\"CounterContainer\">\r\n    Conected Clients: <span id=\"clientCount\">0</span>\r\n</div> \r\n\r\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div id=\"CounterContainer\">\r\n    Conected Clients: <span id=\"clientCount\">0</span>\r\n</div> \r\n\r\n")
    ; __line = 5
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}