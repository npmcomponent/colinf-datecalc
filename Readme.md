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
  - [.ageInWeeks(fromDate, toDate)](#ageinweeks)
  - [.removeTime(date)](#removetime)

### .daysInMonth(year, month) [daysinmonth]
Returns the days in the given month. Year should be a number in the form YYYY and month is zero-based i.e. 0 is January, 1 is February.
```js
var datecalc = require('datecalc');
var daysInFeb2012 = datecalc.daysInMonth(2012,1);
```

### .age(fromDate, toDate) [age]
Calculates the difference between two dates in years, months and days. Returns an object in the form {years: n, months: n, days: n}. `fromDate` and `toDate` must both be valid Date objects and `toDate` must be after `fromDate`, otherwise an Error is thrown.
```js
var datecalc = require('datecalc');
var age = datecalc.age(new Date(2000,11,30), new Date(2012,0,5));
```
In this example age is set to the object:
```
{ years: 11, months: 0, days: 6 }
```

### .ageInWeeks(fromDate, toDate) [ageinweeks]
Calculates the difference between two dates in weeks and days. Returns an object in the form {weeks: n, days: n}. `fromDate` and `toDate` must both be valid Date objects and `toDate` must be after `fromDate`, otherwise an Error is thrown.
```js
var datecalc = require('datecalc');
var ageInWeeks = datecalc.ageInWeeks(new Date(2000,11,30), new Date(2012,11,1));
```
In this example ageInWeeks is set to the object:
```
{ weeks: 11, months: 0, days: 6 }
```

### .removeTime(date) [removetime]
Returns a new Date with the time portion of `date` set to 0:00:00.000 

### License ###
  The MIT License - see the file LICENSE.txt within the repository for details.