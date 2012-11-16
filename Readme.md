# Datecalc Component #
  Datecalc is a component with a few, hopefully useful, date calculation utilities.

### Installation ###
```
$ component install colinf/datecalc
```
  You can find out more about using and installing components [here](https://github.com/component/component).

### Example Usage ###
```js
var datecalc = require('datecalc');
var daysInFeb2012 = datecalc.daysInMonth(2012,1);
```

### API ###
  - [.daysInMonth(year, month)](#daysinmonth)
  - [.age(fromDate, toDate)](#age)

### .daysInMonth(year, month) [daysinmonth]
Returns the days in the given month. Year should be a number in the form YYYY and month is zero-based i.e. 0 is January, 1 is February.
```js
var datecalc = require('datecalc');
var daysInFeb2012 = datecalc.daysInMonth(2012,1);
```

### .age(fromDate, toDate) [age]
Calculates the difference between two dates in years, months and days. Returns an object in the form {years: n, months: n, days: n}. fromDate and toDate must both be valid Date objects and toDate must be after fromDate, otherwise an Error is thrown.
```js
var datecalc = require('datecalc');
var age = datecalc.age(new Date(2000,11,30), new Date(2012,0,5));
```
In this example age is set to the object:
```
{ years: 11, months: 0, days: 6 }
```

### License ###
  The MIT License - see the file LICENSE.txt within the repository for details.