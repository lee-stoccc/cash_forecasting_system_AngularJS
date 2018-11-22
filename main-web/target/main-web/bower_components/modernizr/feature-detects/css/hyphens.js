/*!
{
  "name": "CSS Hyphens",
  "caniuse": "css-hyphens",
  "property": ["csshyphens", "softhyphens", "softhyphensfind"],
  "tags": ["css"],
  "builderAliases": ["css_hyphens"],
  "async" : true,
  "authors": ["David Newton"],
  "warnings": [
    "These tests currently require document.body to be present",
    "If loading Hyphenator.js via yepnope, be cautious of issue 158: http://code.google.com/p/hyphenator/issues/detail?id=158",
    "This is very large – only include it if you absolutely need it"
    ],
  "notes": [{
    "name": "The Current State of Hyphenation on the Web.",
    "href": "http://davidnewton.ca/the-current-state-of-hyphenation-on-the-web"
  },{
    "name": "Hyphenation Test Page",
    "href": "http://davidnewton.ca/demos/hyphenation/test.html"
  },{
    "name": "Hyphenation is Language Specific",
    "href": " http://code.google.com/p/hyphenator/source/diff?spec=svn975&r=975&format=side&path=/trunk/Hyphenator.js#sc_svn975_313"
  },{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/312"
  }]
}
!*/
define(["Modernizr","prefixes","createElement","testAllProps","addTest"],function(e,d,c,b,a){e.addAsyncTest(function(){var g=300;setTimeout(f,g);function f(){if(!document.body&&!document.getElementsByTagName("body")[0]){setTimeout(f,g);return}function i(){try{var r=c("div");var o=c("span");var m=r.style;var n=0;var l=0;var k=false;var q=document.body.firstElementChild||document.body.firstChild;r.appendChild(o);o.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.";document.body.insertBefore(r,q);m.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;";n=o.offsetHeight;l=o.offsetWidth;m.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+d.join("hyphens:auto; ");k=(o.offsetHeight!=n||o.offsetWidth!=l);document.body.removeChild(r);r.removeChild(o);return k}catch(p){return false}}function j(l,t){try{var k=c("div");var s=c("span");var m=k.style;var p=0;var u=false;var o=false;var n=false;var r=document.body.firstElementChild||document.body.firstChild;m.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;";k.appendChild(s);document.body.insertBefore(k,r);s.innerHTML="mm";p=s.offsetHeight;s.innerHTML="m"+l+"m";o=(s.offsetHeight>p);if(t){s.innerHTML="m<br />m";p=s.offsetWidth;s.innerHTML="m"+l+"m";n=(s.offsetWidth>p)}else{n=true}if(o===true&&n===true){u=true}document.body.removeChild(k);k.removeChild(s);return u}catch(q){return false}}function h(m){try{var q=c("input");var r=c("div");var p="lebowski";var l=false;var k;var o=document.body.firstElementChild||document.body.firstChild;r.innerHTML=p+m+p;document.body.insertBefore(r,o);document.body.insertBefore(q,r);if(q.setSelectionRange){q.focus();q.setSelectionRange(0,0)}else{if(q.createTextRange){k=q.createTextRange();k.collapse(true);k.moveEnd("character",0);k.moveStart("character",0);k.select()}}try{if(window.find){l=window.find(p+p)}else{k=window.self.document.body.createTextRange();l=k.findText(p+p)}}catch(n){l=false}document.body.removeChild(r);document.body.removeChild(q);return l}catch(n){return false}}a("csshyphens",function(){if(!b("hyphens","auto",true)){return false}try{return i()}catch(k){return false}});a("softhyphens",function(){try{return j("&#173;",true)&&j("&#8203;",false)}catch(k){return false}});a("softhyphensfind",function(){try{return h("&#173;")&&h("&#8203;")}catch(k){return false}})}})});