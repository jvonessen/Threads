var MOCK_THREAD_LIST ={
  "current_threads": [
    {
      "id": "111111",
      "brand": "Robinson-anton",
      "threadType": "rayon 40",
      "length": "500 yds",
      "colorName": "black",
      "colorNumber": "2296"
    },
    {
      "id": "2222",
      "brand": "Robinson-anton",
      "threadType": "rayon 40",
      "length": "500 yds",
      "colorName": "white",
      "colorNumber": "2256"
    },
    {
      "id": "3333",
      "brand": "Robinson-anton",
      "threadType": "rayon 40",
      "length": "500 yds",
      "colorName": "blue",
      "colorNumber": "2280"
    },
    {
      "id": "2222",
      "brand": "Robinson-anton",
      "threadType": "rayon 40",
      "length": "500 yds",
      "colorName": "green",
      "colorNumber": "2275"
    },
    {
      "id": "2222",
      "brand": "Robinson-anton",
      "threadType": "rayon 40",
      "length": "500 yds",
      "colorName": "purple",
      "colorNumber": "2387"
    }
  ]
};

function getThreadList(callbackFn) {
    setTimeout(function(){ callbackFn(MOCK_THREAD_LIST)}, 100);
}

function displayThreads(data) {
    for (index in data.current_threads) {
       $('body').append(
        '<p>' + data.current_threads[index].brand + ' ' + data.current_threads[index].colorNumber + '</p>');
    }
}

function getAndDisplayThreads() {
    getThreadList(displayThreads);
}

$(function() {
    getAndDisplayThreads();
})
