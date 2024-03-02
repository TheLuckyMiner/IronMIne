document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header-nav').classList.toggle('open');
});

function displayHint(clicked_id){
    let id = clicked_id.slice(-2);
    let hint_id = "#hint" + id;
    if ($(hint_id).hasClass('hint__show')){
        $(hint_id).fadeOut(500);
    }
    else {
        $(hint_id).fadeIn(1000);
    }
    document.querySelector(hint_id).classList.toggle('hint__show');
}