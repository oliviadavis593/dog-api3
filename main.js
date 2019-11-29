'use strict';

$(function() {
    console.log('App loaded!');
    returnDogImage();
});

function userInput() {
   let breed = $('#dog-breed').val();
   return breed;
}

function returnDogImage() {
    $('#dog-input-form').submit(e => {
        e.preventDefault();
        retrieveImage();
    });
}

function retrieveImage() {
    fetch('https://dog.ceo/api/breed/' + userInput() + '/images/random')
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('I cant seem to find that. Try something else!'));
}

function displayResults(responseJson)  {
    console.log(responseJson);
    if(responseJson.status !== 'success') {
        alert('I cant seem to find that. Try something else!');
    }
    else if (responseJson.status === 'success') {
        $('.results').replaceWith (
            `<img src="${responseJson.message}" class="results">` 
        );
        $('.results').removeClass('hidden');
    }
}