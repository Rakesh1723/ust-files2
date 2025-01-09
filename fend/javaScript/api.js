// var activity = 'skiing'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/caloriesburned?activity=' + activity,
//     headers: { 'X-Api-Key': 'rjaq2qiAq31JovS0ctDuRQ==M6b14TWYSjke88NL'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

const axios = require('axios');

var activity = 'skiing';

axios.get('https://api.api-ninjas.com/v1/caloriesburned?activity=' + activity, {
    headers: { 'X-Api-Key': 'rjaq2qiAq31JovS0ctDuRQ==M6b14TWYSjke88NL' }
})
.then(function (response) {
    console.log(response.data);
})
.catch(function (error) {
    console.error('Error: ', error.response ? error.response.data : error.message);
});
