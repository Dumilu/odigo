var buttonLikeElement = document.querySelector('.action-list__btn--like');
var countLikeElement = document.querySelector('.action-list__counter');
var countLike = Number(countLikeElement.innerHTML);

buttonLikeElement.addEventListener('click', function() {
    countLike += 1;
    countLikeElement.innerHTML = countLike; 
});