var showAndHideImg = document.querySelector('.shImg')
var imgCourse = document.querySelectorAll('.imgCourse')

var openVideo = document.querySelector('.groupTitle')
openVideo.addEventListener('click', function() {
    var a = document.querySelector('.groupVideo')
    a.classList.toggle('open')
})


function check() {
    var totalCheckbox = document.querySelectorAll('input[type="checkbox"]:checked').length;
    var a = document.querySelector('.countCourse').textContent = totalCheckbox + '/3';
    console.log(a)
}
// console.log(showAndHideImg.textContent)
// imgCourse[0].classList.add('hiddenImg')
    showAndHideImg.addEventListener('click',function() {
        for(let i =0;i<imgCourse.length;i++) {
            imgCourse[i].classList.toggle('hidden') 
        } 
        if(showAndHideImg.textContent == 'Ẩn hình thu nhỏ') {
            showAndHideImg.textContent = 'Hiện hình thu nhỏ'
        } else {
            showAndHideImg.textContent = 'Ẩn hình thu nhỏ'
        }
    })

// function myFunction() {
//     var showItem = document.getElementById('show')
//     if(showItem.style.display == 'none') {
//         showItem.style.display = 'block';
   
//     } else {
//         showItem.style.display = 'none'
//     }
// }


var categoryTitle = document.querySelectorAll('.contentCourse');
var allVideo = document.querySelectorAll('.all')
console.log(categoryTitle)
console.log(allVideo)
for(let i =0; i<categoryTitle.length;i++) {
    categoryTitle[i].addEventListener('click', 
    filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item) {
    changeActivePosition(item);
        for(let i =0;i<allVideo.length;i++) {
            if(allVideo[i].classList.contains(item.attributes.id.value)) {
                allVideo[i].style.display = 'block';
            } else {
                allVideo[i].style.display = 'none';
            }
        }
        // console.log(item.attributes.id.value)
        console.log(item)
    
}
function changeActivePosition(activeItem) {
    for(let i =0; i<categoryTitle.length;i++) {
        categoryTitle[i].classList.remove('active')
    }
    activeItem.classList.add('active');
}


