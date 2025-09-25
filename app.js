document.querySelectorAll('.clickable').forEach(function(heading) {
  heading.addEventListener('click', function(e) {
    // Section container is parent of the heading
    let parentDiv = heading.parentElement;
    // Get section HTML
    let sectionContent = parentDiv.innerHTML;
    let sectionTitle = heading.textContent;

    let newWindow = window.open('', '_blank', 'width=500,height=400');
    newWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${sectionTitle}</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <div class="container">
          <h2>${sectionTitle}</h2>${sectionContent}
        </div>
      </body>
      </html>
    `);
    newWindow.document.close();
  });
});
