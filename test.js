// Questions will be asked
const Questions = [{
id: 0,
q: &quot;What is capital of India?&quot;,
a: [{ text: &quot;gandhinagar&quot;, isCorrect: false },
{ text: &quot;Surat&quot;, isCorrect: false },
{ text: &quot;Delhi&quot;, isCorrect: true },
{ text: &quot;mumbai&quot;, isCorrect: false }
]

},
{
id: 1,
q: &quot;What is the capital of Thailand?&quot;,
a: [{ text: &quot;Lampang&quot;, isCorrect: false, isSelected: false },
{ text: &quot;phuket&quot;, isCorrect: false },
{ text: &quot;Ayutthaya&quot;, isCorrect: false },
{ text: &quot;Bangkok&quot;, isCorrect: true }
]

},
{
id: 2,
q: &quot;What is the capital of Gujarat&quot;,
a: [{ text: &quot;surat&quot;, isCorrect: false },
{ text: &quot;vadodara&quot;, isCorrect: false },
{ text: &quot;gandhinagar&quot;, isCorrect: true },
{ text: &quot;rajkot&quot;, isCorrect: false }
]

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName(&quot;result&quot;);
result[0].innerText = &quot;&quot;;

// Getting the question
const question = document.getElementById(&quot;question&quot;);

// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById(&#39;op1&#39;);
const op2 = document.getElementById(&#39;op2&#39;);
const op3 = document.getElementById(&#39;op3&#39;);
const op4 = document.getElementById(&#39;op4&#39;);

// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = &quot;&quot;;

// Show selection for op1
op1.addEventListener(&quot;click&quot;, () =&gt; {
op1.style.backgroundColor = &quot;lightgoldenrodyellow&quot;;
op2.style.backgroundColor = &quot;lightskyblue&quot;;
op3.style.backgroundColor = &quot;lightskyblue&quot;;
op4.style.backgroundColor = &quot;lightskyblue&quot;;
selected = op1.value;
})

// Show selection for op2
op2.addEventListener(&quot;click&quot;, () =&gt; {
op1.style.backgroundColor = &quot;lightskyblue&quot;;
op2.style.backgroundColor = &quot;lightgoldenrodyellow&quot;;
op3.style.backgroundColor = &quot;lightskyblue&quot;;
op4.style.backgroundColor = &quot;lightskyblue&quot;;

selected = op2.value;
})

// Show selection for op3
op3.addEventListener(&quot;click&quot;, () =&gt; {
op1.style.backgroundColor = &quot;lightskyblue&quot;;
op2.style.backgroundColor = &quot;lightskyblue&quot;;
op3.style.backgroundColor = &quot;lightgoldenrodyellow&quot;;
op4.style.backgroundColor = &quot;lightskyblue&quot;;
selected = op3.value;
})

// Show selection for op4
op4.addEventListener(&quot;click&quot;, () =&gt; {
op1.style.backgroundColor = &quot;lightskyblue&quot;;
op2.style.backgroundColor = &quot;lightskyblue&quot;;
op3.style.backgroundColor = &quot;lightskyblue&quot;;
op4.style.backgroundColor = &quot;lightgoldenrodyellow&quot;;
selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName(&quot;evaluate&quot;);

// Evaluate method
evaluate[0].addEventListener(&quot;click&quot;, () =&gt; {
if (selected == &quot;true&quot;) {
result[0].innerHTML = &quot;True&quot;;
result[0].style.color = &quot;green&quot;;

} else {
result[0].innerHTML = &quot;False&quot;;
result[0].style.color = &quot;red&quot;;
}
})
}

if (start) {
iterate(&quot;0&quot;);
}

// Next button and method
const next = document.getElementsByClassName(&#39;next&#39;)[0];
var id = 0;

next.addEventListener(&quot;click&quot;, () =&gt; {
start = false;
if (id &lt; 2) {
id++;
iterate(id);
console.log(id);
}

})