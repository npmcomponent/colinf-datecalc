*This repository is a mirror of the [component](http://component.io) module [colinf/datecalc](http://github.com/colinf/datecalc). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/colinf-datecalc`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
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
  - [.daysInMonth(year, month)](#daysinmonthyear-month)
  - [.age(fromDate, toDate)](#agefromdate-todate)
  - [.ageInWeeks(fromDate, toDate)](#ageinweeksfromdate-todate)
  - [.removeTime(date)](#removetimedate)

### .daysInMonth(year, month)
Returns the days in the given month. Year should be a number in the form YYYY and month is zero-based i.e. 0 is January, 1 is February.
```js
var datecalc = require('datecalc');
var daysInFeb2012 = datecalc.daysInMonth(2012,1);
```

### .age(fromDate, toDate)
Calculates the difference between two dates in years, months and days. Returns an object in the form {years: n, months: n, days: n}. `fromDate` and `toDate` must both be valid Date objects and `toDate` must be after `fromDate`, otherwise an Error is thrown.
```js
var datecalc = require('datecalc');
var age = datecalc.age(new Date(2000,11,30), new Date(2012,0,5));
```
In this example age is set to the object:
```
{ years: 11, months: 0, days: 6 }
```

### .ageInWeeks(fromDate, toDate)
Calculates the difference between two dates in weeks and days. Returns an object in the form {weeks: n, days: n}. `fromDate` and `toDate` must both be valid Date objects and `toDate` must be after `fromDate`, otherwise an Error is thrown.
```js
var datecalc = require('datecalc');
var ageInWeeks = datecalc.ageInWeeks(new Date(2000,11,30), new Date(2012,11,1));
```
In this example ageInWeeks is set to the object:
```
{ weeks: 11, months: 0, days: 6 }
```

### .removeTime(date)
Returns a new Date with the time portion of `date` set to 0:00:00.000 

### License ###
  The MIT License - see the file LICENSE.txt within the repository for details.