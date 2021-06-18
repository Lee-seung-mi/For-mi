let imgData = [
    'img/color1.jpg',
    'img/color2.jpg',
    'img/color3.jpg',
    'img/color4.jpg',
    'img/color5.jpg',
    'img/color6.jpg',
    'img/color7.jpg',
    'img/color8.jpg',
    'img/color9.jpg',
    'img/color10.jpg',
    'img/color11.jpg',
    'img/color12.jpg',
    'img/color13.jpg',
    'img/color14.jpg',
    'img/color15.jpg',
];

let imgName = [
    'Big Fish',
    'The Grand Budapest Hotel',
    'Call Me by Your Name',
    'Laurence Anyway',
    'Blue Is the Warmest Colour',
    'Atonement',
    'Mood Indigo',
    'Midsommar',
    'Moonrise Kingdom',
    'Populaire',
    'The Umbrellas Of Cherbourg',
    'Alice In Wonderland',
    'About Time',
    'The Stepford Wives',
    'The Florida Project'
];

let myPhotos = document.querySelectorAll('.thumbnail');
//console.log(myPhotos);

//이미지태그를 가져오는데, 문제는 html문서 안에  '.imageTag'라는 클래스가 없습니다. 그냥 class 만 적혀있어요.
let imgTag = document.querySelectorAll('.imageTag'); 
let myTitle = document.querySelectorAll('.textField');

for(let i = 0; i < myPhotos.length; i++)
{
    imgTag[i].src = imgData[i];
    myTitle[i].textContent = imgName[i];
    myPhotos[i].addEventListener('mouseover', overFn);
    myPhotos[i].addEventListener('mouseout', outFn);
}

function overFn(e)
{
    //console.log(e);
    e.path[1].querySelector('.imageTag').classList.remove('on');
    e.path[0].classList.add('on');
}

function outFn(e)
{
    e.path[1].querySelector('.imageTag').classList.add('on');
    e.path[0].classList.remove('on');
}