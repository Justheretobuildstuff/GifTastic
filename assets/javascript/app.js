$(document).ready(function () {

    var topics = ["Guitars", "Cars", "Technology"];

    function displayTopicInfo() {

        var topic = $(this).attr("data-name");
        var apiKey = "cKS4IiTZ3IDKipuUbOff2eklN8zL04js";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=" + apiKey + "&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var imageUrl = response.data;

            for (var i = 0; i < imageUrl.length; i++) {

                if (imageUrl[i].rating !== "r" && imageUrl[i].rating !== "pg-13") {
                    var gifDiv = $("<div class='rating'>");

                    var rating = imageUrl[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    var topicDiv = $("<img>");

                    topicDiv.attr("src", imageUrl[i].images.fixed_height.url);
                    topicDiv.attr("alt", "topic image");

                    var rating = response.data.rating;

                    var pOne = $("<p>").text("Rating: " + rating);

                    gifDiv.append(p);
                    topicDiv.append(pOne);

                    $("#topics-view").prepend(topicDiv);

                };

            };
        });
    }

    function renderButtons() {

        $("#buttons-view").empty();

        for (var i = 0; i < topics.length; i++) {

            var a = $("<button>");

            a.addClass("topic-btn");

            a.attr("data-name", topics[i]);

            a.text(topics[i]);

            $("#buttons-view").append(a);
        }
    }

    $("#add-topic").on("click", function (event) {
        event.preventDefault();

        var topic = $("#topic-input").val().trim();

        topics.push(topic);

        renderButtons();
    });

    $(document).on("click", ".topic-btn", displayTopicInfo);

    renderButtons();
});