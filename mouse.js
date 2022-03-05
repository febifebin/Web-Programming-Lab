container.onmouseover = container.onmouseout = handler;

function handler(event) {

function str(el) { //el an identifier refers to element
if (!el) return &quot;null&quot;
return el.className || el.tagName;
}

log.value += event.type + &#39;: &#39; +
&#39;target=&#39; + str(event.target) +
&#39;, relatedTarget=&#39; + str(event.relatedTarget) + &quot;\n&quot;;
log.scrollTop = log.scrollHeight;

if (event.type == &#39;mouseover&#39;) {
event.target.style.background = &#39;pink&#39;
}
if (event.type == &#39;mouseout&#39;) {
event.target.style.background = &#39;&#39;
}
}