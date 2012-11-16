
var ageInWeeks = exports.ageInWeeks =  function(fromDt, toDt) {
  var error;
  if (error = validateDates(fromDt, toDt)) {
    throw new Error("datecalc.ageInWeeks: "+error);
  }

  fromDt = removeTime(fromDt);
  toDt = removeTime(toDt);

  var ageInDays = Math.round((toDt - fromDt) / (1000*60*60*24));

  return { weeks: Math.floor(ageInDays/7), days: ageInDays%7 };
}

var removeTime = exports.removeTime =  function(date) {
  var newDate = new Date(date);
  newDate.setHours(0);
  newDate.setMinutes(0);
  newDate.setSeconds(0);
  newDate.setMilliseconds(0);
  return newDate;
}


var age = exports.age =  function(fromDt, toDt) {
  var error;
  if (error = validateDates(fromDt, toDt)) {
    throw new Error("datecalc.age: "+error);
  }

  // Get YMD from fromDt and toDt
  var fromYear = fromDt.getFullYear();
  var toYear = toDt.getFullYear();
  var fromMonth = fromDt.getMonth();
  var toMonth = toDt.getMonth();
  var fromDay = fromDt.getDate();
  var toDay = toDt.getDate();
  
  var toDayEarlierInMonth = (toDay < fromDay);
  var toMonthEarlierInYear = (toMonth < fromMonth ||
                          (toMonth === fromMonth && toDayEarlierInMonth));
 
  // Calculate complete years between dates
  var years = toYear - fromYear;
  if (toMonthEarlierInYear) {
    // Not a full year so subtract 1
    years -= 1;
  }

  // Calculate complete months beyond full year difference
  var fromMonthTemp = fromMonth;
  if (toMonthEarlierInYear) {
    fromMonthTemp -= 12;
  }

  var months = toMonth - fromMonthTemp;
  if (toDayEarlierInMonth) {
    // Not a full month so subtract 1
    months = (months === 0 ? 11 : months - 1);
  }

  // Calculate days beyond year/months
  var fromDayTemp = fromDay;
  if (toDayEarlierInMonth) {
    // Subtract days in previous month to make a negative
    var previousMonth = (toMonth === 0 ? 11 : toMonth - 1);
    var daysInPreviousMonth = daysInMonth(toYear, previousMonth);
    fromDayTemp -= daysInPreviousMonth;
  }
  var days = toDay - fromDayTemp;

  return {years: years, months: months, days: days};

}

var daysInMonth = exports.daysInMonth =  function (year, month) {
    return new Date(year, month+1, 0).getDate();
}

var validateDates = function(from, to) {
  if (!(from instanceof Date)) {
    return "First arg must be a Date object";
  }
  if (!(to instanceof Date)) {
    return "Second arg must be a Date object";
  }
  if (!(to > from)) {
    return "Second arg must be after first arg";
  }
  return '';
}