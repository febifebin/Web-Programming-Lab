var cal = {
// (A) PROPERTIES
// (A1) COMMON CALENDAR
sMon : false, // Week start on Monday?
mName : [&quot;Jan&quot;, &quot;Feb&quot;, &quot;Mar&quot;, &quot;Apr&quot;, &quot;May&quot;, &quot;Jun&quot;, &quot;Jul&quot;, &quot;Aug&quot;, &quot;Sep&quot;, &quot;Oct&quot;, &quot;Nov&quot;, &quot;Dec&quot;], // Month
Names

// (A2) CALENDAR DATA
data : null, // Events for the selected period
sDay : 0, sMth : 0, sYear : 0, // Current selected day, month, year

// (A3) COMMON HTML ELEMENTS
hMth : null, hYear : null, // month/year selector
hForm : null, hfHead : null, hfDate : null, hfTxt : null, hfDel : null, // event form

// (B) INIT CALENDAR
init : () =&gt; {
// (B1) GET + SET COMMON HTML ELEMENTS
cal.hMth = document.getElementById(&quot;cal-mth&quot;);
cal.hYear = document.getElementById(&quot;cal-yr&quot;);
cal.hForm = document.getElementById(&quot;cal-event&quot;);
cal.hfHead = document.getElementById(&quot;evt-head&quot;);
cal.hfDate = document.getElementById(&quot;evt-date&quot;);
cal.hfTxt = document.getElementById(&quot;evt-details&quot;);
cal.hfDel = document.getElementById(&quot;evt-del&quot;);
document.getElementById(&quot;evt-close&quot;).onclick = cal.close;
cal.hfDel.onclick = cal.del;
cal.hForm.onsubmit = cal.save;

// (B2) DATE NOW
let now = new Date(),
nowMth = now.getMonth(),
nowYear = parseInt(now.getFullYear());

// (B3) APPEND MONTHS SELECTOR
for (let i=0; i&lt;12; i++) {
let opt = document.createElement(&quot;option&quot;);
opt.value = i;
opt.innerHTML = cal.mName[i];
if (i==nowMth) { opt.selected = true; }
cal.hMth.appendChild(opt);
}
cal.hMth.onchange = cal.list;

// (B4) APPEND YEARS SELECTOR
// Set to 10 years range. Change this as you like.
for (let i=nowYear-10; i&lt;=nowYear+10; i++) {
let opt = document.createElement(&quot;option&quot;);
opt.value = i;
opt.innerHTML = i;
if (i==nowYear) { opt.selected = true; }
cal.hYear.appendChild(opt);
}
cal.hYear.onchange = cal.list;

// (B5) START - DRAW CALENDAR
cal.list();
},

// (C) DRAW CALENDAR FOR SELECTED MONTH
list : () =&gt; {
// (C1) BASIC CALCULATIONS - DAYS IN MONTH, START + END DAY
// Note - Jan is 0 &amp; Dec is 11
// Note - Sun is 0 &amp; Sat is 6
cal.sMth = parseInt(cal.hMth.value); // selected month
cal.sYear = parseInt(cal.hYear.value); // selected year
let daysInMth = new Date(cal.sYear, cal.sMth+1, 0).getDate(), // number of days in selected month
startDay = new Date(cal.sYear, cal.sMth, 1).getDay(), // first day of the month
endDay = new Date(cal.sYear, cal.sMth, daysInMth).getDay(), // last day of the month
now = new Date(), // current date
nowMth = now.getMonth(), // current month
nowYear = parseInt(now.getFullYear()), // current year
nowDay = cal.sMth==nowMth &amp;&amp; cal.sYear==nowYear ? now.getDate() : null ;

// (C2) LOAD DATA FROM LOCALSTORAGE
cal.data = localStorage.getItem(&quot;cal-&quot; + cal.sMth + &quot;-&quot; + cal.sYear);
if (cal.data==null) {
localStorage.setItem(&quot;cal-&quot; + cal.sMth + &quot;-&quot; + cal.sYear, &quot;{}&quot;);
cal.data = {};
} else { cal.data = JSON.parse(cal.data); }

// (C3) DRAWING CALCULATIONS
// Blank squares before start of month
let squares = [];
if (cal.sMon &amp;&amp; startDay != 1) {
let blanks = startDay==0 ? 7 : startDay ;
for (let i=1; i&lt;blanks; i++) { squares.push(&quot;b&quot;); }

}
if (!cal.sMon &amp;&amp; startDay != 0) {
for (let i=0; i&lt;startDay; i++) { squares.push(&quot;b&quot;); }
}

// Days of the month
for (let i=1; i&lt;=daysInMth; i++) { squares.push(i); }

// Blank squares after end of month
if (cal.sMon &amp;&amp; endDay != 0) {
let blanks = endDay==6 ? 1 : 7-endDay;
for (let i=0; i&lt;blanks; i++) { squares.push(&quot;b&quot;); }
}
if (!cal.sMon &amp;&amp; endDay != 6) {
let blanks = endDay==0 ? 6 : 6-endDay;
for (let i=0; i&lt;blanks; i++) { squares.push(&quot;b&quot;); }
}

// (C4) DRAW HTML CALENDAR
// Get container
let container = document.getElementById(&quot;cal-container&quot;),
cTable = document.createElement(&quot;table&quot;);
cTable.id = &quot;calendar&quot;;
container.innerHTML = &quot;&quot;;
container.appendChild(cTable);

// First row - Day names
let cRow = document.createElement(&quot;tr&quot;),
days = [&quot;Sun&quot;, &quot;Mon&quot;, &quot;Tue&quot;, &quot;Wed&quot;, &quot;Thur&quot;, &quot;Fri&quot;, &quot;Sat&quot;];

if (cal.sMon) { days.push(days.shift()); }
for (let d of days) {
let cCell = document.createElement(&quot;td&quot;);
cCell.innerHTML = d;
cRow.appendChild(cCell);
}
cRow.classList.add(&quot;head&quot;);
cTable.appendChild(cRow);

// Days in Month
let total = squares.length;
cRow = document.createElement(&quot;tr&quot;);
cRow.classList.add(&quot;day&quot;);
for (let i=0; i&lt;total; i++) {
let cCell = document.createElement(&quot;td&quot;);
if (squares[i]==&quot;b&quot;) { cCell.classList.add(&quot;blank&quot;); }
else {
if (nowDay==squares[i]) { cCell.classList.add(&quot;today&quot;); }
cCell.innerHTML = `&lt;div class=&quot;dd&quot;&gt;${squares[i]}&lt;/div&gt;`;
if (cal.data[squares[i]]) {
cCell.innerHTML += &quot;&lt;div class=&#39;evt&#39;&gt;&quot; + cal.data[squares[i]] + &quot;&lt;/div&gt;&quot;;
}
cCell.onclick = () =&gt; { cal.show(cCell); };
}
cRow.appendChild(cCell);
if (i!=0 &amp;&amp; (i+1)%7==0) {
cTable.appendChild(cRow);
cRow = document.createElement(&quot;tr&quot;);
cRow.classList.add(&quot;day&quot;);

}
}

// (C5) REMOVE ANY PREVIOUS ADD/EDIT EVENT DOCKET
cal.close();
},

// (D) SHOW EDIT EVENT DOCKET FOR SELECTED DAY
show : (el) =&gt; {
// (D1) FETCH EXISTING DATA
cal.sDay = el.getElementsByClassName(&quot;dd&quot;)[0].innerHTML;
let isEdit = cal.data[cal.sDay] !== undefined ;

// (D2) UPDATE EVENT FORM
cal.hfTxt.value = isEdit ? cal.data[cal.sDay] : &quot;&quot; ;
cal.hfHead.innerHTML = isEdit ? &quot;EDIT EVENT&quot; : &quot;ADD EVENT&quot; ;
cal.hfDate.innerHTML = `${cal.sDay} ${cal.mName[cal.sMth]} ${cal.sYear}`;
if (isEdit) { cal.hfDel.classList.remove(&quot;ninja&quot;); }
else { cal.hfDel.classList.add(&quot;ninja&quot;); }
cal.hForm.classList.remove(&quot;ninja&quot;);
},

// (E) CLOSE EVENT DOCKET
close : () =&gt; {
cal.hForm.classList.add(&quot;ninja&quot;);
},

// (F) SAVE EVENT
save : () =&gt; {

cal.data[cal.sDay] = cal.hfTxt.value;
localStorage.setItem(`cal-${cal.sMth}-${cal.sYear}`, JSON.stringify(cal.data));
cal.list();
return false;
},

// (G) DELETE EVENT FOR SELECTED DATE
del : () =&gt; { if (confirm(&quot;Delete event?&quot;)) {
delete cal.data[cal.sDay];
localStorage.setItem(`cal-${cal.sMth}-${cal.sYear}`, JSON.stringify(cal.data));
cal.list();
}}
};
window.addEventListener(&quot;load&quot;, cal.init);