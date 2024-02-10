function getReviews() {
    let review = {}

    review["Name"] = prompt("Как вас зовут ?")
    if (review["Name"] == null) {
        return
    }

    review["comment"] = prompt("Напишите свой отзыв")
    if (review["comment"] == null) {
        return
    }

    review["date"] = new Date().toLocaleString()

    writeReview(review)
}

function writeReview(review) {
    document.getElementsByClassName('reviews')[0].innerHTML +=
        '<div class="review-text">\n' +
            `<p> <i> <b>${review['Name']}</b>  ${review['date']}</i></p>` +
            `<p>${review['comment']}</p>` +
        '</div>';
}