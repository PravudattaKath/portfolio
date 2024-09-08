document.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.getElementById('changing-paragraph');
    const words = ["Developer", "Designer", "Coder"];  
    let currentIndex = 0;
  
    function changeLastWord() {
        const text = paragraph.textContent;
        const lastSpaceIndex = text.lastIndexOf(' ');
        const newText = text.substring(0, lastSpaceIndex + 1) + `<span style="color: aqua;">${words[currentIndex]}</span>`;
        
        paragraph.innerHTML = newText; // Use innerHTML to inject HTML with styling

        currentIndex = (currentIndex + 1) % words.length;
    }

    setInterval(changeLastWord, 1000);
});
