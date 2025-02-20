/**
 * Web Atelier 2023  - 7 - Single-Page Web Applications with Fetch and Client-side Views
 *
 * Author: __Elvira Baltasar__
 *
 * API Client
 *
 * Task 1
 *
 * Complete the code using the fetchJSON function to call the Web API routes
 * implemented in the previous assignments
 *
 */
api = function () {

    function validateResponse(res) {
        if (res.status == 200 || res.status == 201) {
            return res.json();
        } if (res.status == 204) {
            return;
        } else {
            throw res.status;
        }
    }

    async function fetchJSON(method, url, body, headers) {

        function addHeaders(headers) {
            let newHeaders = { ...headers };
            newHeaders['Accept'] = 'application/json';
            if (method == 'POST' || method == 'PUT' || method == 'PATCH')
                newHeaders['Content-Type'] = 'application/json';
            return newHeaders;
        }

        if (method === 'POST' || method == 'PUT' || method == 'PATCH') {
            body = JSON.stringify(body);
        }

        // console.log("_fetchJSON", method, url, body, headers);

        const res = await fetch(url, { method, headers: addHeaders(headers), body });
        return validateResponse(res);

    }

    async function fetchFORM(method, url, body, headers) {

        function addHeaders(headers) {
            let newHeaders = { ...headers };
            newHeaders['Accept'] = 'application/json';
            return newHeaders;
        }

        const res = await fetch(url, { method, headers: addHeaders(headers), body });
        return validateResponse(res);

    }

    function getMaps() {
        return fetchJSON('GET', '/map');
    }

    function getMap(id) {
        return fetchJSON('GET', '/map/'+id+'/edit')
    }

    function addMap(map) {
        return fetchJSON('POST', '/map/', map)
    }


    function replaceMap(id, map) {
        return fetchJSON('PUT', '/map/'+id, map)
    }

    function deleteMap(id) {
        return fetchJSON('DELETE', '/map/'+id)
    }

    function cloneMap(id) {
        return fetchJSON('POST', '/map/'+id+'/clone')
    }

    function toggleFav(id) {
        return fetchJSON('PATCH', '/map/'+id+'/fav')
    }

    function addMarker(marker, map_id){
        return fetchJSON('POST', '/map/'+map_id+'/marker', marker)
    }

    function getMarkers(map_id){
        return fetchJSON('GET', '/map/'+map_id+'/marker')
    }

    function replaceMarker(marker, map_id){
        return fetchJSON('PUT', '/map/'+map_id+'/marker/'+marker._id, marker)
    }

    function deleteMarker(marker, map_id){
        return fetchJSON('DELETE', '/map/'+map_id+'/marker/'+marker._id)
    }

    return {
        getMaps,
        getMap,
        addMap,
        replaceMap,
        toggleFav,
        cloneMap,
        deleteMap,
        addMarker,
        getMarkers,
        replaceMarker,
        deleteMarker
    }

}();