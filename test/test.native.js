/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var abs = require( '@stdlib/math-base-special-abs' );
var randu = require( '@stdlib/random-base-randu' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var fresnel = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( fresnel instanceof Error )
};


// FIXTURES //

var smallPositive = require( './fixtures/c/cephes/small.json' );
var mediumPositive = require( './fixtures/c/cephes/medium.json' );
var largePositive = require( './fixtures/c/cephes/large.json' );
var hugePositive = require( './fixtures/c/cephes/huge.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof fresnel, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes Fresnel integrals (small positive values)', opts, function test( t ) {
	var delta;
	var tol;
	var C;
	var S;
	var x;
	var y;
	var i;

	x = smallPositive.x;
	S = smallPositive.S;
	C = smallPositive.C;

	for ( i = 0; i < x.length; i++ ) {
		y = fresnel( x[i] );
		if ( y[0] === S[i] ) {
			t.strictEqual( y[0], S[i], 'x: '+x[i]+'. Expected: '+S[i] );
		} else {
			delta = abs( y[0] - S[i] );
			tol = 4.0 * EPS * abs( S[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. S: '+y[0]+'. Expected: '+S[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
		if ( y[1] === C[i] ) {
			t.strictEqual( y[1], C[i], 'x: '+x[i]+'. Expected: '+C[i] );
		} else {
			delta = abs( y[1] - C[i] );
			tol = 4.0 * EPS * abs( C[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. C: '+y[1]+'. Expected: '+C[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes Fresnel integrals (medium positive values)', opts, function test( t ) {
	var delta;
	var tol;
	var C;
	var S;
	var x;
	var y;
	var i;

	x = mediumPositive.x;
	S = mediumPositive.S;
	C = mediumPositive.C;

	for ( i = 0; i < x.length; i++ ) {
		y = fresnel( x[i] );
		if ( y[0] === S[i] ) {
			t.strictEqual( y[0], S[i], 'x: '+x[i]+'. Expected: '+S[i] );
		} else {
			delta = abs( y[0] - S[i] );
			tol = 1.5 * EPS * abs( S[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. S: '+y[0]+'. Expected: '+S[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
		if ( y[1] === C[i] ) {
			t.strictEqual( y[1], C[i], 'x: '+x[i]+'. Expected: '+C[i] );
		} else {
			delta = abs( y[1] - C[i] );
			tol = 1.5 * EPS * abs( C[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. C: '+y[1]+'. Expected: '+C[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes Fresnel integrals (large positive values)', opts, function test( t ) {
	var delta;
	var tol;
	var C;
	var S;
	var x;
	var y;
	var i;

	x = largePositive.x;
	S = largePositive.S;
	C = largePositive.C;

	for ( i = 0; i < x.length; i++ ) {
		y = fresnel( x[i] );
		if ( y[0] === S[i] ) {
			t.strictEqual( y[0], S[i], 'x: '+x[i]+'. Expected: '+S[i] );
		} else {
			delta = abs( y[0] - S[i] );
			tol = 1.5 * EPS * abs( S[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. S: '+y[0]+'. Expected: '+S[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
		if ( y[1] === C[i] ) {
			t.strictEqual( y[1], C[i], 'x: '+x[i]+'. Expected: '+C[i] );
		} else {
			delta = abs( y[1] - C[i] );
			tol = 1.5 * EPS * abs( C[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. C: '+y[1]+'. Expected: '+C[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes Fresnel integrals (very large positive values)', opts, function test( t ) {
	var delta;
	var tol;
	var C;
	var S;
	var x;
	var y;
	var i;

	x = hugePositive.x;
	S = hugePositive.S;
	C = hugePositive.C;

	for ( i = 0; i < x.length; i++ ) {
		y = fresnel( x[i] );
		if ( y[0] === S[i] ) {
			t.strictEqual( y[0], S[i], 'x: '+x[i]+'. Expected: '+S[i] );
		} else {
			delta = abs( y[0] - S[i] );
			tol = 1.5 * EPS * abs( S[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. S: '+y[0]+'. Expected: '+S[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
		if ( y[1] === C[i] ) {
			t.strictEqual( y[1], C[i], 'x: '+x[i]+'. Expected: '+C[i] );
		} else {
			delta = abs( y[1] - C[i] );
			tol = 1.5 * EPS * abs( C[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. C: '+y[1]+'. Expected: '+C[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function is an odd function of x', opts, function test( t ) {
	var yn;
	var yp;
	var x;
	var i;

	for ( i = 0; i < 500; i++ ) {
		x = randu() * 10000.0;
		yn = fresnel( -x );
		yp = fresnel( x );

		t.strictEqual( yp[0], -yn[0], 'S(x) = -S(-x)' );
		t.strictEqual( yp[1], -yn[1], 'C(x) = -C(-x)' );
	}
	t.end();
});

tape( 'the function returns `[0.5, 0.5]` if provided `+infinity`', opts, function test( t ) {
	var v = fresnel( PINF );
	t.strictEqual( v[0], 0.5, 'returns 0.5' );
	t.strictEqual( v[1], 0.5, 'returns 0.5' );
	t.end();
});

tape( 'the function returns `[-0.5, -0.5]` if provided `-infinity`', opts, function test( t ) {
	var v = fresnel( NINF );
	t.strictEqual( v[0], -0.5, 'returns -0.5' );
	t.strictEqual( v[1], -0.5, 'returns -0.5' );
	t.end();
});

tape( 'the function returns `[NaN, NaN]` if provided a `NaN`', opts, function test( t ) {
	var v = fresnel( NaN );
	t.strictEqual( isnan( v[0] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[1] ), true, 'returns expected value' );
	t.end();
});
