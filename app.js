// DARK MODE TOGGLE
document.getElementById('dark-toggle').onclick = function() {
  document.body.classList.toggle('dark');
  // Optionally persist using localStorage
};
// Animated navigation scroll handled by browser via scroll-behavior CSS

// Floating Back to Top
const topBtn = document.getElementById('backToTop');
window.addEventListener('scroll',function() {
  topBtn.style.display = (window.scrollY > 300) ? 'block' : 'none';
});
topBtn.onclick = () => window.scrollTo({top:0, behavior:"smooth"});

// Section Expansion/Collapse
document.querySelectorAll('.collapsible .section-title').forEach(function(title){
  title.onclick = function(){
    let parent = title.closest('.collapsible');
    parent.classList.toggle('expanded');
  };
});

// PDF Open Button
function openPDF() {
  window.open('Resume.pdf-2.pdf', '_blank');
}
