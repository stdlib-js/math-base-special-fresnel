/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var computeFresnel = require( './assign.js' );


// MAIN //

/**
* Computes the Fresnel integrals S(x) and C(x).
*
* @param {number} x - input value
* @returns {Array<number>} S(x) and C(x)
*
* @example
* var v = fresnel( 0.0 );
* // returns [ 0.0, 0.0 ]
*
* @example
* var v = fresnel( 1.0 );
* // returns [ ~0.438, ~0.780 ]
*
* @example
* var v = fresnel( Infinity );
* // returns [ ~0.5, ~0.5 ]
*
* @example
* var v = fresnel( -Infinity );
* // returns [ ~-0.5, ~-0.5 ]
*
* @example
* var v = fresnel( NaN );
* // returns [ NaN, NaN ]
*/
function fresnel( x ) {
	return computeFresnel( x, [ 0.0, 0.0 ], 1, 0 );
}


// EXPORTS //

module.exports = fresnel;
