/*!
{
  "name": "Quota Storage Management API",
  "property": "quotamanagement",
  "tags": ["storage"],
  "builderAliases": ["quota_management_api"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/quota-api/"
  }]
}
!*/
define(["Modernizr","prefixed"],function(b,a){b.addTest("quotamanagement",function(){var d=a("temporaryStorage",navigator);var c=a("persistentStorage",navigator);return !!(d&&c)})});