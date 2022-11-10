// ==UserScript==
// @name         Second task from the UAT Analyst assessment
// @namespace    com.wu.automation
// @version      0.1
// @description  Search open agent locations near the 08247 Zip code
// @author       Marcelo Delgado Miranda
// @match        https://www.westernunion.com/lt/en/home.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=westernunion.com
// @grant        GM_log
// @grant        GM_xmlhttpRequest
// @connect      location.westernunion.com
// ==/UserScript==

(async function() {
    'use strict';

    // make API request
    const request = new Promise(resolve => {
        GM_xmlhttpRequest({
            url: "https://location.westernunion.com/api/locations?country=LT&q=08247",
            method: "get",
            onload: resolve,
            responseType: "json",
        });
    });

    // extract the results object from the API response
    const {response: { results } } = await request;
    // extract the address from the first result
    const [{formattedAddress}] = results;

    // print onto the console
    GM_log("Second Task Result:", formattedAddress);
})();
