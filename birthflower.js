let imgData = [
    'img/0322.png',
    'img/0323.png',
    'img/0324.png',
    'img/0325.png',
    'img/0326.png',
    'img/0327.png',
    'img/0328.png',
    'img/0329.png',
    'img/0330.png'
];

let imgName = [
    '3/22',
    '3/23',
    '3/24',
    '3/25',
    '3/26',
    '3/27',
    '3/28',
    '3/29',
    'Birth Flower'
];

let myPhotos = document.querySelectorAll('.thumbnail');
//console.log(myPhotos);

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