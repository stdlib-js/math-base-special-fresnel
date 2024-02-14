<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# fresnel

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [Fresnel integrals][fresnel-integral] S(x) and C(x).

<section class="intro">

The [Fresnel integrals][fresnel-integral] are defined as

<!-- <equation class="equation" label="eq:fresnel_integrals" align="center" raw="\begin{align} S(x) &= \int_0^x \sin\left(\frac{\pi}{2} t^2\right)\,\mathrm{d}t, \\ C(x) &= \int_0^x \cos\left(\frac{\pi}{2} t^2\right)\,\mathrm{d}t. \end{align}" alt="Fresnel integral"> -->

```math
\begin{align} S(x) &= \int_0^x \sin\left(\frac{\pi}{2} t^2\right)\,\mathrm{d}t, \\ C(x) &= \int_0^x \cos\left(\frac{\pi}{2} t^2\right)\,\mathrm{d}t. \end{align}
```

<!-- <div class="equation" align="center" data-raw-text="\begin{align} S(x) &amp;= \int_0^x \sin\left(\frac{\pi}{2} t^2\right)\,\mathrm{d}t, \\ C(x) &amp;= \int_0^x \cos\left(\frac{\pi}{2} t^2\right)\,\mathrm{d}t. \end{align}" data-equation="eq:fresnel_integrals">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/math/base/special/fresnel/docs/img/equation_fresnel_integrals.svg" alt="Fresnel integral">
    <br>
</div> -->

<!-- </equation> -->

Some sources define the Fresnel integrals using t<sup>2</sup> for the argument of the sine and cosine. To get these functions, multiply the computed integrals by `√(π/2)` and multiply the argument `x` by `√(2/π)`.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-fresnel
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var fresnel = require( '@stdlib/math-base-special-fresnel' );
```

#### fresnel( x )

Simultaneously computes the [Fresnel integrals][fresnel-integral] S(x) and C(x).

```javascript
var v = fresnel( 0.0 );
// returns [ ~0.0, ~0.0 ]

v = fresnel( 1.0 );
// returns [ ~0.438, ~0.780 ]

v = fresnel( Infinity );
// returns [ ~0.5, ~0.5 ]

v = fresnel( -Infinity );
// returns [ ~-0.5, ~-0.5 ]

v = fresnel( NaN );
// returns [ NaN, NaN ]
```

#### fresnel.assign( x, out, stride, offset )

Simultaneously computes the [Fresnel integrals][fresnel-integral] S(x) and C(x) and assigns results to a provided output array.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var out = new Float64Array( 2 );

var v = fresnel.assign( 0.0, out, 1, 0 );
// returns <Float64Array>[ ~0.0, ~0.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array-base-linspace' );
var fresnel = require( '@stdlib/math-base-special-fresnel' );

var x = linspace( 0.0, 10.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( fresnel( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/fresnelc`][@stdlib/math/base/special/fresnelc]</span><span class="delimiter">: </span><span class="description">compute the Fresnel integral C(x).</span>
-   <span class="package-name">[`@stdlib/math-base/special/fresnels`][@stdlib/math/base/special/fresnels]</span><span class="delimiter">: </span><span class="description">compute the Fresnel integral S(x).</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-fresnel.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-fresnel

[test-image]: https://github.com/stdlib-js/math-base-special-fresnel/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/math-base-special-fresnel/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-fresnel/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-fresnel?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-fresnel.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-fresnel/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-fresnel/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-fresnel/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-fresnel/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-fresnel/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-fresnel/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-fresnel/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-fresnel/blob/main/branches.md

[fresnel-integral]: https://en.wikipedia.org/wiki/Fresnel_integral

<!-- <related-links> -->

[@stdlib/math/base/special/fresnelc]: https://github.com/stdlib-js/math-base-special-fresnelc

[@stdlib/math/base/special/fresnels]: https://github.com/stdlib-js/math-base-special-fresnels

<!-- </related-links> -->

</section>

<!-- /.links -->
