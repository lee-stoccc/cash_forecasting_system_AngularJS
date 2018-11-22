/*!
{
  "name": "Form Validation",
  "property": "formvalidation",
  "tags": ["forms", "validation", "attribute"],
  "builderAliases": ["forms_validation"]
}
!*/
define(["Modernizr","createElement","docElement","testStyles"],function(d,b,a,c){d.addTest("formvalidation",function(){var g=b("form");if(!("checkValidity" in g)||!("addEventListener" in g)){return false}if("reportValidity" in g){return true}var e=false;var f;d.formvalidationapi=true;g.addEventListener("submit",function(h){if(!window.opera||window.operamini){h.preventDefault()}h.stopPropagation()},false);g.innerHTML='<input name="modTest" required="required" /><button></button>';c("#modernizr form{position:absolute;top:-99999em}",function(h){h.appendChild(g);f=g.getElementsByTagName("input")[0];f.addEventListener("invalid",function(i){e=true;i.preventDefault();i.stopPropagation()},false);d.formvalidationmessage=!!f.validationMessage;g.getElementsByTagName("button")[0].click()});return e})});