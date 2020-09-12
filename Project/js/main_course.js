
var categoryTitle = document.querySelectorAll('.category-title');
var allCourse = document.querySelectorAll('.all')
console.log(categoryTitle)
console.log(allCourse)

for(let i =0; i<categoryTitle.length;i++) {
    categoryTitle[i].addEventListener('click', 
    filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item) {
    changeActivePosition(item);
        for(let i =0;i<allCourse.length;i++) {
            if(allCourse[i].classList.contains(item.attributes.id.value)) {
                allCourse[i].parentElement.style.display = 'block';
            } else {
                allCourse[i].parentElement.style.display = 'none';
            }
        }
        console.log(item.attributes.id.value)
    
}
function changeActivePosition(activeItem) {
    for(let i =0; i<categoryTitle.length;i++) {
        categoryTitle[i].classList.remove('active')
    }
    activeItem.classList.add('active');
}
