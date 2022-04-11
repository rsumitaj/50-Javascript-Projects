const panels = document.querySelectorAll('.panel'); // puts all in an nodelst(array)

panels.forEach(panel => {
    panel.addEventListener('click',() => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

removeActiveClasses = () => {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}


