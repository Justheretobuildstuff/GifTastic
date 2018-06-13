$(document).ready(function () {

    var topics = ["Guitars", "Cars", "Technology"];

    // displayMovieInfo function re-renders the HTML to display the appropriate content
    function displayTopicInfo() {

        var topic = $(this).attr("data-name");
        var apiKey = "cKS4IiTZ3IDKipuUbOff2eklN8zL04js";
        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=" + apiKey + "&tag=" + topic;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var topicDiv = $("<div class='topic'>");

            var rating = response.Rated;

            var pOne = $("<p>").text("Rating: " + rating);

            topicDiv.append(pOne);

            $("#topics-view").prepend(topicDiv);
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