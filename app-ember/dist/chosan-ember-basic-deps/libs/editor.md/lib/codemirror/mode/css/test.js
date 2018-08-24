(function(){var r=CodeMirror.getMode({indentUnit:2},"css")
function o(o){test.mode(o,r,Array.prototype.slice.call(arguments,1))}o("atMediaUnknownType","[def @media] [attribute screen] [keyword and] [error foobarhello] { }"),o("atMediaUnknownProperty","[def @media] [attribute screen] [keyword and] ([error foobarhello]) { }"),o("atMediaMaxWidthNested","[def @media] [attribute screen] [keyword and] ([property max-width]: [number 25px]) { [tag foo] { } }"),o("tagSelector","[tag foo] { }"),o("classSelector","[qualifier .foo-bar_hello] { }"),o("idSelector","[builtin #foo] { [error #foo] }"),o("tagSelectorUnclosed","[tag foo] { [property margin]: [number 0] } [tag bar] { }"),o("tagStringNoQuotes","[tag foo] { [property font-family]: [variable hello] [variable world]; }"),o("tagStringDouble",'[tag foo] { [property font-family]: [string "hello world"]; }'),o("tagStringSingle","[tag foo] { [property font-family]: [string 'hello world']; }"),o("tagColorKeyword","[tag foo] {","  [property color]: [keyword black];","  [property color]: [keyword navy];","  [property color]: [keyword yellow];","}"),o("tagColorHex3","[tag foo] { [property background]: [atom #fff]; }"),o("tagColorHex6","[tag foo] { [property background]: [atom #ffffff]; }"),o("tagColorHex4","[tag foo] { [property background]: [atom&error #ffff]; }"),o("tagColorHexInvalid","[tag foo] { [property background]: [atom&error #ffg]; }"),o("tagNegativeNumber","[tag foo] { [property margin]: [number -5px]; }"),o("tagPositiveNumber","[tag foo] { [property padding]: [number 5px]; }"),o("tagVendor","[tag foo] { [meta -foo-][property box-sizing]: [meta -foo-][atom border-box]; }"),o("tagBogusProperty","[tag foo] { [property&error barhelloworld]: [number 0]; }"),o("tagTwoProperties","[tag foo] { [property margin]: [number 0]; [property padding]: [number 0]; }"),o("tagTwoPropertiesURL","[tag foo] { [property background]: [atom url]([string //example.com/foo.png]); [property padding]: [number 0]; }"),o("commentSGML","[comment \x3c!--comment--\x3e]"),o("commentSGML2","[comment \x3c!--comment]","[comment --\x3e] [tag div] {}"),o("indent_tagSelector","[tag strong], [tag em] {","  [property background]: [atom rgba](","    [number 255], [number 255], [number 0], [number .2]","  );","}"),o("indent_atMedia","[def @media] {","  [tag foo] {","    [property color]:","      [keyword yellow];","  }","}"),o("indent_comma","[tag foo] {","  [property font-family]: [variable verdana],","    [atom sans-serif];","}"),o("indent_parentheses","[tag foo]:[variable-3 before] {","  [property background]: [atom url](","[string     blahblah]","[string     etc]","[string   ]) [keyword !important];","}"),o("font_face","[def @font-face] {","  [property font-family]: [string 'myfont'];","  [error nonsense]: [string 'abc'];","  [property src]: [atom url]([string http://blah]),","    [atom url]([string http://foo]);","}"),o("empty_url","[def @import] [tag url]() [tag screen];"),o("parens","[qualifier .foo] {","  [property background-image]: [variable fade]([atom #000], [number 20%]);","  [property border-image]: [atom linear-gradient](","    [atom to] [atom bottom],","    [variable fade]([atom #000], [number 20%]) [number 0%],","    [variable fade]([atom #000], [number 20%]) [number 100%]","  );","}")
o("css_variable",":[variable-3 root] {","  [variable-2 --main-color]: [atom #06c];","}","[tag h1][builtin #foo] {","  [property color]: [atom var]([variable-2 --main-color]);","}"),o("supports","[def @supports] ([keyword not] (([property text-align-last]: [atom justify]) [keyword or] ([meta -moz-][property text-align-last]: [atom justify])) {","  [property text-align-last]: [atom justify];","}"),o("document","[def @document] [tag url]([string http://blah]),","  [tag url-prefix]([string https://]),","  [tag domain]([string blah.com]),",'  [tag regexp]([string ".*blah.+"]) {',"    [builtin #id] {","      [property background-color]: [keyword white];","    }","    [tag foo] {","      [property font-family]: [variable Verdana], [atom sans-serif];","    }","  }"),o("document_url","[def @document] [tag url]([string http://blah]) { [qualifier .class] { } }"),o("document_urlPrefix","[def @document] [tag url-prefix]([string https://]) { [builtin #id] { } }"),o("document_domain","[def @document] [tag domain]([string blah.com]) { [tag foo] { } }"),o("document_regexp",'[def @document] [tag regexp]([string ".*blah.+"]) { [builtin #id] { } }'),o("counter-style","[def @counter-style] [variable binary] {","  [property system]: [atom numeric];","  [property symbols]: [number 0] [number 1];",'  [property suffix]: [string "."];',"  [property range]: [atom infinite];","  [property speak-as]: [atom numeric];","}"),o("counter-style-additive-symbols","[def @counter-style] [variable simple-roman] {","  [property system]: [atom additive];","  [property additive-symbols]: [number 10] [variable X], [number 5] [variable V], [number 1] [variable I];","  [property range]: [number 1] [number 49];","}"),o("counter-style-use","[tag ol][qualifier .roman] { [property list-style]: [variable simple-roman]; }"),o("counter-style-symbols",'[tag ol] { [property list-style]: [atom symbols]([atom cyclic] [string "*"] [string "\\2020"] [string "\\2021"] [string "\\A7"]); }')})()
