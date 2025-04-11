 Q1>.
 <pre> <a href="#about"><h3>ABOUT MYSELF</h3></a>           <a href="#education"> <h3>EDUCATION</h3></a>         <a href="#education"> <h3>TCHNICAL SKILLS</h3></a></pre>
         WHY IS IT NOT COMING SIDE BY SIDE


ChatGPT said:
Ah, I see! You're using <pre> which is causing unexpected layout behavior.

🚨 Problem:
The <pre> tag preserves whitespace and line breaks exactly as they are, and it's not meant for layout.

Also, putting <h3> tags inside <a> tags like that isn't semantically correct HTML and might break layout in some browsers.

✅ Better Way to Do It:
Use a flexbox layout or inline elements instead of <pre>. Here's how:

🧼 Clean & Correct Version:
html
Copy
Edit
<div style="display: flex; gap: 20px;">
  <a href="#about"><h3>ABOUT MYSELF</h3></a>
  <a href="#education"><h3>EDUCATION</h3></a>
  <a href="#skills"><h3>TECHNICAL SKILLS</h3></a>
</div>
🔁 Or, even better with just links (semantically cleaner):
html
Copy
Edit
<div style="display: flex; gap: 20px;">
  <a href="#about">ABOUT MYSELF</a>
  <a href="#education">EDUCATION</a>
  <a href="#skills">TECHNICAL SKILLS</a>
</div>
And your section targets might look like:

html
Copy
Edit
<h2 id="about">About Myself</h2>
<h2 id="education">Education</h2>
<h2 id="skills">Technical Skills</h2>
🔧 Bonus Styling (Optional):
Add this in your <head> to make links look nicer:

html
Copy
Edit
<style>
  a {
    text-decoration: none;
    font-size: 1.2em;
    font-weight: bold;
    color: #333;
  }

  a:hover {
    color: #007BFF;
  }
</style>
Let me know if you want to build a full navbar or want it to be responsive/mobile-friendly too!





2. The defer attribute ensures the JS runs after the HTML has loaded.

