/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 746:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 896:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
const core = __nccwpck_require__(746);
const fs = (__nccwpck_require__(896).promises);

async function main() {
    try {        
        console.log('Starting the script...');
        console.log('Mostrem el directori actual de treball:', process.cwd());

        //Obtinguem el resultat del test.
        const resultat_test = core.getInput('test_result');
        //Guardem l´insignia de error en cas de que el test falle.
        const img_error = 'https://img.shields.io/badge/test-failure-red';
        //Guardem l´insignia del test en cas de que el test resulte exitós.
        const img_exit = 'https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg';
        //Guardem l´insignia que mostrarem al readme depenent del resultat del test.
        const badge = resultat_test === 'success' ? img_exit : img_error;
        //Guardem el missatge que afegirem abans del l´insignia al readme.
        const missatge_badge = `RESULTAT DELS ÚLTIMS TESTS \n ![Test result badge](${badge})`;

        const oldReadmePath = './OldREADME.md';
        let oldReadmeContent = await fs.readFile(oldReadmePath, 'utf-8');
        let newReadmeContent = oldReadmeContent + "\n" + missatge_badge;
        const readmePath = './README.md';
        await fs.writeFile(readmePath, newReadmeContent);

        // console.log(`Attempting to read: ${oldReadmePath}`);
        // console.log('Successfully read OldREADME.md');
        // console.log(`Old README content:\n${oldReadmeContent}`);
        // console.log(`New README content:\n${newReadmeContent}`);
        // console.log(`Attempting to write to: ${readmePath}`);
        // console.log('Successfully wrote to README.md');

        process.exit(0);
    } catch (e) {
        console.error(e);
        core.setFailed(e.message);
    }

};

main();
module.exports = __webpack_exports__;
/******/ })()
;