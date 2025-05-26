var _0x6bce=[&quot;\x70\x65\x73\x2D\x62\x6F\x78&quot;,&quot;\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64&quot;,&quot;\x64\x69\x73\x70\x6C\x61\x79&quot;,&quot;\x73\x74\x79\x6C\x65&quot;,&quot;\x66\x6C\x65\x78&quot;,&quot;\x6E\x6F\x2D\x73\x63\x72\x6F\x6C\x6C&quot;,&quot;\x61\x64\x64&quot;,&quot;\x63\x6C\x61\x73\x73\x4C\x69\x73\x74&quot;,&quot;\x62\x6F\x64\x79&quot;,&quot;\x62\x6C\x6F\x63\x6B\x2D\x63\x6C\x69\x63\x6B&quot;];function showAdblockWarning(){let _0x6f3cx2=document[_0x6bce[1]](_0x6bce[0]);_0x6f3cx2[_0x6bce[3]][_0x6bce[2]]= _0x6bce[4];document[_0x6bce[8]][_0x6bce[7]][_0x6bce[6]](_0x6bce[5]);document[_0x6bce[8]][_0x6bce[7]][_0x6bce[6]](_0x6bce[9])}
var _0x36d7=[&quot;\x67\x65\x74\x43\x6F\x6D\x70\x75\x74\x65\x64\x53\x74\x79\x6C\x65&quot;,&quot;\x64\x69\x73\x70\x6C\x61\x79&quot;,&quot;\x6E\x6F\x6E\x65&quot;,&quot;\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79&quot;,&quot;\x68\x69\x64\x64\x65\x6E&quot;,&quot;\x6F\x66\x66\x73\x65\x74\x48\x65\x69\x67\x68\x74&quot;];function isAdVisible(_0x4554x2){if(!_0x4554x2){return false};const _0x4554x3=window[_0x36d7[0]](_0x4554x2);return !(_0x4554x3[_0x36d7[1]]=== _0x36d7[2]|| _0x4554x3[_0x36d7[3]]=== _0x36d7[4]|| _0x4554x2[_0x36d7[5]]=== 0)}
var _0x8b9a=[&quot;\x2E\x61\x64\x73\x62\x79\x67\x6F\x6F\x67\x6C\x65&quot;,&quot;\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72\x41\x6C\x6C&quot;,&quot;\x5B\x73\x72\x63\x2A\x3D\x22\x61\x64\x2E\x61\x2D\x61\x64\x73\x2E\x63\x6F\x6D\x22\x5D&quot;,&quot;\x66\x6F\x72\x45\x61\x63\x68&quot;];function isAdBlockedDOM(){const _0x1c44x2=document[_0x8b9a[1]](_0x8b9a[0]);const _0x1c44x3=document[_0x8b9a[1]](_0x8b9a[2]);let _0x1c44x4=false;let _0x1c44x5=false;_0x1c44x2[_0x8b9a[3]]((_0x1c44x6)=&gt;{if(isAdVisible(_0x1c44x6)){_0x1c44x4= true}});_0x1c44x3[_0x8b9a[3]]((_0x1c44x6)=&gt;{if(isAdVisible(_0x1c44x6)){_0x1c44x5= true}});return !(_0x1c44x4|| _0x1c44x5)}
var _0x7c10=[&quot;\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x61\x67\x65\x61\x64\x32\x2E\x67\x6F\x6F\x67\x6C\x65\x73\x79\x6E\x64\x69\x63\x61\x74\x69\x6F\x6E\x2E\x63\x6F\x6D\x2F\x70\x61\x67\x65\x61\x64\x2F\x6A\x73\x2F\x61\x64\x73\x62\x79\x67\x6F\x6F\x67\x6C\x65\x2E\x6A\x73&quot;,&quot;\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x64\x2E\x61\x2D\x61\x64\x73\x2E\x63\x6F\x6D\x2F\x61\x64\x2E\x6A\x73&quot;,&quot;\x63\x61\x74\x63\x68&quot;,&quot;\x74\x68\x65\x6E&quot;,&quot;\x48\x45\x41\x44&quot;,&quot;\x6E\x6F\x2D\x63\x6F\x72\x73&quot;,&quot;\x6D\x61\x70&quot;,&quot;\x69\x6E\x63\x6C\x75\x64\x65\x73&quot;,&quot;\x61\x6C\x6C&quot;];function checkNetworkForAdBlock(_0x25fbx2){let _0x25fbx3=[_0x7c10[0],_0x7c10[1]];let _0x25fbx4=_0x25fbx3[_0x7c10[6]]((_0x25fbx5)=&gt;{return fetch(_0x25fbx5,{method:_0x7c10[4],mode:_0x7c10[5]})[_0x7c10[3]](()=&gt;{return true})[_0x7c10[2]](()=&gt;{return false})});Promise[_0x7c10[8]](_0x25fbx4)[_0x7c10[3]]((_0x25fbx6)=&gt;{_0x25fbx2(_0x25fbx6[_0x7c10[7]](false))})[_0x7c10[2]](()=&gt;{_0x25fbx2(true)})}
var _0x71da=[];function combinedAdCheck(_0x6bc9x2){const _0x6bc9x3=isAdBlockedDOM();checkNetworkForAdBlock((_0x6bc9x4)=&gt;{_0x6bc9x2(_0x6bc9x3|| _0x6bc9x4)})}
var _0x9526=[&quot;\x6F\x75\x74\x65\x72\x57\x69\x64\x74\x68&quot;,&quot;\x69\x6E\x6E\x65\x72\x57\x69\x64\x74\x68&quot;,&quot;\x6F\x75\x74\x65\x72\x48\x65\x69\x67\x68\x74&quot;,&quot;\x69\x6E\x6E\x65\x72\x48\x65\x69\x67\x68\x74&quot;,&quot;\x64\x69\x72\x65\x66\x72\x65\x73\x68\x2E&quot;,&quot;\x6C\x6F\x67&quot;,&quot;\x72\x65\x6C\x6F\x61\x64&quot;];function detectDevTools(){let _0xc6aex2=160;setInterval(()=&gt;{if(window[_0x9526[0]]- window[_0x9526[1]]&gt; _0xc6aex2|| window[_0x9526[2]]- window[_0x9526[3]]&gt; _0xc6aex2){console[_0x9526[5]](_0x9526[4]);location[_0x9526[6]]()}},1000)}
var _0x6b59=[&quot;\x64\x6F\x63\x75\x6D\x65\x6E\x74\x45\x6C\x65\x6D\x65\x6E\x74&quot;,&quot;\x6F\x62\x73\x65\x72\x76\x65&quot;,&quot;\x70\x65\x73\x2D\x62\x6F\x78&quot;,&quot;\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64&quot;,&quot;\x53\x63\x72\x69\x70\x74\x20\x64\x69\x68\x61\x70\x75\x73\x21\x20\x48\x61\x6C\x61\x6D\x61\x6E\x20\x61\x6B\x61\x6E\x20\x64\x69\x72\x65\x66\x72\x65\x73\x68\x2E&quot;,&quot;\x6C\x6F\x67&quot;,&quot;\x72\x65\x6C\x6F\x61\x64&quot;];function preventScriptRemoval(){ new MutationObserver(()=&gt;{if(!document[_0x6b59[3]](_0x6b59[2])){console[_0x6b59[5]](_0x6b59[4]);location[_0x6b59[6]]()}})[_0x6b59[1]](document[_0x6b59[0]],{childList:true,subtree:true})}
var _0x4818=[&quot;\x63\x6F\x6E\x74\x65\x78\x74\x6D\x65\x6E\x75&quot;,&quot;\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74&quot;,&quot;\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72&quot;];function disableRightClick(){document[_0x4818[2]](_0x4818[0],function(_0xdc39x2){_0xdc39x2[_0x4818[1]]()})}
var _0x7a0d=[&quot;\x68\x61\x73\x56\x69\x73\x69\x74\x65\x64&quot;,&quot;\x67\x65\x74\x49\x74\x65\x6D&quot;,&quot;\x76\x69\x73\x69\x74\x65\x64\x3D\x74\x72\x75\x65&quot;,&quot;\x69\x6E\x64\x65\x78\x4F\x66&quot;,&quot;\x63\x6F\x6F\x6B\x69\x65&quot;];function isFirstVisit(){return !localStorage[_0x7a0d[1]](_0x7a0d[0])&amp;&amp; document[_0x7a0d[4]][_0x7a0d[3]](_0x7a0d[2])===  -1}
var _0x4ec0=[&quot;\x68\x61\x73\x56\x69\x73\x69\x74\x65\x64&quot;,&quot;\x74\x72\x75\x65&quot;,&quot;\x73\x65\x74\x49\x74\x65\x6D&quot;,&quot;\x63\x6F\x6F\x6B\x69\x65&quot;,&quot;\x76\x69\x73\x69\x74\x65\x64\x3D\x74\x72\x75\x65\x3B\x20\x70\x61\x74\x68\x3D\x2F\x3B\x20\x6D\x61\x78\x2D\x61\x67\x65\x3D\x38\x36\x34\x30\x30&quot;];function markAsVisited(){localStorage[_0x4ec0[2]](_0x4ec0[0],_0x4ec0[1]);document[_0x4ec0[3]]= _0x4ec0[4]}
    window.onload = function() {
        detectDevTools();
        preventScriptRemoval();
        disableRightClick();
        if (navigator.userAgent.toLowerCase().indexOf(&quot;googlebot&quot;) === -1) {
            if (isFirstVisit()) {
                markAsVisited();
                setTimeout(() =&gt; {
                    combinedAdCheck(isBlocked =&gt; {
                        if (isBlocked) {
                            console.log(&quot;diblokir. 1&quot;);
                            showAdblockWarning();
                        }
                    });
                }, 5000);
            } else {
                setInterval(() =&gt; {
                    combinedAdCheck(isBlocked =&gt; {
                        if (isBlocked) {
                            console.log(&quot;diblokir. 2&quot;);
                            showAdblockWarning();
                        }
                    });
                }, 3000);
            }
        }
    };