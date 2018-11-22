/*!
{
  "name": "Web SQL Database",
  "property": "websqldatabase",
  "caniuse": "sql-storage",
  "tags": ["storage"]
}
!*/
define(["Modernizr"],function(a){a.addTest("websqldatabase","openDatabase" in window)});