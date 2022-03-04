calendar.html
Who has access

System properties
Type
HTML
Size
863 bytes
Storage used
863 bytes
Location
calendar-js
Owner
Febin Aziz
Modified
11 Dec 2021 by Febin Aziz
Opened
20:14 by me
Created
6 Feb 2022
Unable to load description
Viewers can download
<!DOCTYPE html>
<html>
  <head>
    <title>Simple Javascript Calendar</title>
    <link href="calendar.css" rel="stylesheet">
    <script async src="calendar.js"></script>
  </head>
  <body>
    <div id="cal-wrap">
      <!-- (A) PERIOD SELECTOR -->
      <div id="cal-date">
        <select id="cal-mth"></select>
        <select id="cal-yr"></select>
      </div>

      <!-- (B) CALENDAR -->
      <div id="cal-container"></div>

      <!-- (C) EVENT FORM -->
      <form id="cal-event">
        <h1 id="evt-head"></h1>
        <div id="evt-date"></div>
        <textarea id="evt-details" required></textarea>
        <input id="evt-close" type="button" value="Close"/>
        <input id="evt-del" type="button" value="Delete"/>
        <input id="evt-save" type="submit" value="Save"/>
      </form>
    </div>
  </body>
</html>