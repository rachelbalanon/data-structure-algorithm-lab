"use strict";

$(document).ready(() => {

    let queue = null;

    const bugRequests = [{
        title: "Request 1",
        description: "help me!"
    },
    {
        title: "Request 2",
        description: "Please fix this thing."
    },
    {
        title: "Request 3",
        description: "This thing is broken. plz fix!"
    },
    ];


    $(document).on("click", ".submit-btn", (event) => {
        queue = $(event.target);
        // console.log(queue);
        queue
            .attr("title", $("input").eq(0).val())
            .attr("description", $("input").eq(1).val());

        $(".queue-container").prepend(`
                <p class="queue-title">${$(event.target).attr("title")}</p>
                <section class="queue-description">
                    <p>${$(event.target).attr("description")}</p>
                </section>
                <button class="done-btn" type="button">Done</button>
                `);
            
        let queueRequest = $(event.target).attr("id");
        bugRequests.push(queueRequest)
        
        console.log(queueRequest);

        $("input").each(function () {
            $(this).val("");
        });
    });


    const bugQueue = () => {

        for (let i = 0; i < bugRequests.length; i++) {
            $(".queue-container").prepend(`
            <p class="queue-title">${bugRequests[i].title}</p>
            <section class="queue-description">
                <p>${bugRequests[i].description}</p>
            </section>
            <button class="done-btn" type="button">Done</button>
            `);
        }
    }

   

    bugQueue();
   

    

    






});
