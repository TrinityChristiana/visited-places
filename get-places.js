//Trinity Terry
//Edited: 1/26/18

/* To demonstrate the ability of this page try the following:
Search with search bar alone
Search with radio select alone
Search with both the radio select and searc box together
Try to search with nothing in the search box and with no radio select selected
Try to search for something random that is not in the array
*/

console.log(`
To demonstrate the ability of this page try the following:
Search with search bar alone
Search with radio select alone
Search with both the radio select and searc box together
Try to search with nothing in the search box and with no radio select selected
`)

// Create an array of image links for places you've been. (A great source of images is Google Destinations).
var imageLinks = [
    "https://lh3.googleusercontent.com/p/AF1QipN7cC9BJsjVdYG004L0nCU2THTa-I6CW8Lz1xPW=h16383-k-s16383",
    "https://lh3.googleusercontent.com/p/AF1QipOau3I2M4HhTYh_M2-uF5li9kzUgTKE2Wwt8gD4=h16383-k-s16383",
    "https://lh4.googleusercontent.com/zAuBWjIut5fLNSaqZKDQCqrx2NaQnU6AP7Es2QU66Cyga6bz6EWU0cQRQ7LSZP2hOKhZ-HICPfqo9P7EMfF4GcsFMs4ysqDgu4tZvyxeVq9UY18h7G7-rCsmcxOiTMgvmQ=s16383",
    "https://lh5.googleusercontent.com/xOq84569fE9R0LGLXEsdglLJyoCU4osnyGFtwzuDM85qPxBljUdAjcZ9Exjbq1cV77B_MGC9Am9uAa1bN20kDKAnRJsHpbkSWmg4sulz9EJjw8cpg1818u3RA2Kd9ZmnnA=s16383",
    "https://static.pexels.com/photos/374710/pexels-photo-374710.jpeg",
    "https://lh6.googleusercontent.com/proxy/lbDH8nycdWEdil0FQqZHLqCm4uruzp8oDPtBZnYCad2tIRJEx5zwewqINJZ5zyjKzeVPisnpQbsoRIvwm1a8=s16383",
    "https://lh6.googleusercontent.com/opylijr_t-23mSGX1ZWpfXs6gnot9w6Tp9Qlur5B-bV0_vFFbmmtTw_uMoy25BZ2WQTUGLo7sPDhOGSupXY5_E0cxRLwQ7yugseSAkZfqqkuFIxaffiLpoK3T9XuzKal=s16383",
    "https://lh3.googleusercontent.com/p/AF1QipPhpxkQXJZvIe4-4Vm28GCRX7tb2ZNlbxsIzX5b=h16383-k-s16383",
    "https://lh6.googleusercontent.com/ZTFfDQSxaDLUm2PE4N97JKf7Brys4lM_gA8fC44t5VISTs7JRTRS-f53n42c8hGEKLJTqzGr1R5lsHR4xcMXcXOACgbOSF9PQGpN1IRJC55m020Em3i-anSDtGDSQc7L=s16383"
];

// Create an array of the names of those places that you created in the step above.
var imageNames = [
    "New Orleans, LA",
    "Philadelphia, PA",
    "Hollywood, CA",
    "London, England",
    "New York, NY",
    "Antigua, GU",
    "Athens, Greece",
    "Nashville, TN",
    "Barcelona, Spain"
];

//An array they keeps boolean for if I have been to place
var iBeen = ["true",
    "true",
    "false",
    "false",
    "true",
    "false",
    "false",
    "true",
    "false"
];

//Hides search bar
$("#searchPlaces").hide();

//Appends HTML for the Cads with message "I've Been Here"
function placesAppendBeen() {
    $("#output-places").append(
        `<div class="card col-sm-12 col-md-6 col-lg-3">
        <img src=${imageLinks[i]} alt="Avatar" style="width:100%">
          <div class="container-name">
            <h4><b>${imageNames[i]} </b></h4> 
            <p>I've Been Here</p> 
          </div>
      </div>`
    );
}

//Appends HTML for the Cards with message "I Want to Go Here"
function placesAppendWant() {
    $("#output-places").append(
        `<div class="card col-sm-12 col-md-6 col-lg-3">
        <img src=${imageLinks[i]} alt="Avatar" style="width:100%">
          <div class="container-name">
            <h4><b>${imageNames[i]} </b></h4> 
            <p>I Want to Go Here</p> 
          </div>
      </div>`
    );
}

//Appends HTML for cards without the message 
function placesAppendNo() {
    $("#output-places").append(
        `<div class="card col-sm-12 col-md-6 col-lg-3">
        <img src=${imageLinks[i]} alt="Avatar" style="width:100%">
          <div class="container-name">
            <h4><b>${imageNames[i]} </b></h4> 
            <p></p> 
          </div>
      </div>`
    );
}

//Shows the cards on page
function populatePlaces() {
    console.log("populatePlaces");
    //loops through the array to print all the cards to the page
    for (i = 0; i < imageLinks.length; i++) {
        if (iBeen[i] == "true") {
            placesAppendBeen();
        } else if (iBeen[i] == "false") {
            placesAppendWant();
        }
    }
    //Hides "Click to See Places" button
    $("#see-places").hide();

    //Shows searchbox and radio selector with submit buttin
    $("#searchPlaces").show();
}


function btnEnter() {
    //Clears cards from page
    $("#output-places").html("");

    //Makes search box  non-casesensitive
    var imageNameLower = [];
    for (i = 0; i < imageLinks.length; i++) {
        imageNameLower[i] = (imageNames[i]).toLowerCase();
    }

    //Pulls and changes search bar text to lowercase
    var searchBox = ($("#searchBox").val()).toLowerCase();
    //Changes image name array to string.
    var imageNamesStr = imageNameLower.toString();
    //Changes searchbox text to string.
    var searchBoxStr = searchBox.toString();
    if (searchBox != '') {
        //Uses searchbox text to search though new lowercase string form of the array imageNames to search the names of places.
        if (imageNamesStr.includes(searchBoxStr)) {
            //Clears cards from page
            $("#output-places").html("");

            //Prints cards to page if it fits the criteria of searchbox text.
            for (i = 0; i < imageNames.length; i++) {
                if (imageNameLower[i].includes(searchBoxStr)) {
                    if (iBeen[i] == "true") {
                        placesAppendBeen();
                    } else if (iBeen[i] == "false") {
                        placesAppendWant();
                    }
                }
            }
        }
    }

    //Gets the selected radio button's value
    var been = $("input[name=been]:checked").val();


    //Shows the cards that fit the criteria of selected radio input.
    if (been == "true") {
        //CLears cards on page
        $("#output-places").html("");
        for (i = 0; i < imageLinks.length; i++) {
            if (iBeen[i] == "true") {
                placesAppendBeen();
            }
        }
    } else if (been == "false") {
        //Clears cards on page
        $("#output-places").html("");
        for (i = 0; i < imageLinks.length; i++) {
            if (iBeen[i] == "false") {
                placesAppendWant();
            }
        }
    } else if ((searchBox == "") && (been == undefined)) {
        $("#message").html(
            "<h2>No thing was entered in the search box or selected. Please try to search again.<h2>"
        );
        populatePlaces();
    } else if ((imageNamesStr.includes(searchBoxStr)) == false) {
        $("#message").html(
            "<h2> Entered Search item was not found. Please try again.<h2>"
        );
        populatePlaces();
    }


    if ((searchBox != "") && (been == "true")) {
        if (imageNamesStr.includes(searchBoxStr)) {
            //Clears cards from page
            $("#output-places").html("");

            //Prints cards to page if it fits the criteria of searchbox text.
            for (i = 0; i < imageNames.length; i++) {
                if (imageNameLower[i].includes(searchBoxStr)) {
                    if (iBeen[i] == "true") {
                        placesAppendBeen();
                    }
                }
            }
        } else if ((imageNamesStr.includes(searchBoxStr)) == false) {
            $("#message").html(
                "<h2> Entered Search item was not found. Please try again.<h2>"
            );
            populatePlaces();
        }
    }

    if ((searchBox != "") && (been == "false")) {
        if (imageNamesStr.includes(searchBoxStr)) {
            //Clears cards from page
            $("#output-places").html("");

            //Prints cards to page if it fits the criteria of searchbox text.
            for (i = 0; i < imageNames.length; i++) {
                if (imageNameLower[i].includes(searchBoxStr)) {
                    if (iBeen[i] == "false") {
                        placesAppendWant();
                    }
                }
            }
        } else if ((imageNamesStr.includes(searchBoxStr)) == false) {
            $("#message").html(
                "<h2> Entered Search item was not found. Please try again.<h2>")
            populatePlaces();
        }
    }



    $(".card").fadeOut(.1);
    $(".card").fadeIn(4000);
    console.log(imageNamesStr.includes(searchBoxStr))
    //Clears radio selection
    $('input[name="been"').prop("checked", false);
}


//When enter key is pressed while in search box, this submits search

$('#searchBox').on("keypress", function(e) {
        if (e.keyCode == 13) {
            btnEnter();
            return false; // prevent the button click from happening. With this it submits form then refreshed the page.
        }
});

//Buttion Action: "Click to see places"
$("#see-places").click(populatePlaces);

//Button Action: Submit
$("#searchSub").click(btnEnter);


