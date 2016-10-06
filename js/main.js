var user = {
    apiKey: "7217dd6df5c8e146461ff195b8ed3159b3c439d6",
};

var button = $("#button");

$("#button").on("click", function() {
    orgQuery();
});


/**  Tried this as many ways as I could think of. Even tried dropping the api key.
     Nothing worked, so I went with a straight ajax call.

function orgQuery() {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.github.com/users/" + username + "/orgs",
    "method": "GET",
    "processData": false,
    "data": "{}"
  };
  $.ajax(this.settings).done(function(response) {
    console.log(response);
  });
}

orgQuery();**/

function orgQuery() {
  var username = $("#userInput").val();
    $.ajax({
        url: "https://api.github.com/users/" + username + "/orgs",
        dataType: "jsonp",
        method: "GET",
    }).done(function(response) {
      for (var index = 0; response.data.length; index++) {
    new targetInfo(response.data[index]);
   }
});
}

function targetInfo(ob) {
  info = {
    name: ob.login,
    image: ob.avatar_url
  };


 magicElements = function() {
    var orgContainer = $('<div>').attr('class', 'orgContainer');
    var img = $('<img>').attr('src', this.info.image).appendTo(orgContainer);
    var name = $('<span>').html(this.info.name).appendTo(orgContainer);

    $(orgContainer).appendTo('#container');
  };
  magicElements();
}
