/*!
{
  "name": "input[form] Attribute",
  "property": "formattribute",
  "tags": ["attribute", "forms", "input"],
  "builderAliases": ["forms_formattribute"]
}
!*/
define(["Modernizr","createElement","docElement"],function(c,b,a){c.addTest("formattribute",function(){var h=b("form");var g=b("input");var k=b("div");var j="formtest"+(new Date()).getTime();var d;var f=false;h.id=j;try{g.setAttribute("form",j)}catch(i){if(document.createAttribute){d=document.createAttribute("form");d.nodeValue=j;g.setAttributeNode(d)}}k.appendChild(h);k.appendChild(g);a.appendChild(k);f=h.elements&&h.elements.length===1&&g.form==h;k.parentNode.removeChild(k);return f})});