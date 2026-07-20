========================================================================
KANTIPUR OPEN ROVER CREW — OFFICIAL SITE MANUAL
========================================================================

SYSTEM REQUIREMENT
Simply open 'index.html' within any modern web browser.

FOLDER MANAGEMENT INSTRUCTIONS:
To scale up or adjust the content layout without modifying structural script mechanisms, simply match files to their assigned slots:

1. Hero Banner:
   - Place your primary high-resolution imagery background in: images/banner/banner-1.jpg

2. Logo Management:
   - Save your official squad vector or transparency graphics into: images/logo/logo.png

3. Expanding the Interactive Gallery Grid:
   - Drops new images inside: images/gallery/
   - To show them on the site, append a block matching this template directly inside the 'gallery-grid' div in index.html:
     
     <div class="gallery-item scroll-reveal">
         <img src="images/gallery/YOUR_NEW_IMAGE.jpg" alt="Description of event">
         <div class="gallery-overlay">
             <h4>Event Title</h4>
             <p>Short Subtitle</p>
         </div>
     </div>

4. Appending News Articles:
   - Place log imagery headers into: images/articles/
   - Duplicate an '<article class="article-card scroll-reveal">...</article>' structural tree inside the html file to cleanly append fresh updates.