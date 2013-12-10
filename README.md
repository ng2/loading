# loading
> A drop-in progress 'do something' module for AngularJS

## Installation

`component install ng2/loading`

Then require it in your `index.html` and add it as a dependency:

```js
require('ng2-loading');
//...
angular.module('myApp',['ng2-loading']);
```

## Usage

It will register itself and hook up an $http interceptor that triggers `ng2loading:response` and `ng2loading:responseError`, and `ng2loading:request` and `ng2loading:requestError` events for you to hook up to.

By default it includes a loading bar that goes across the page.

A provider to configure different progress widgets is on the way.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/ng2/loading/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

