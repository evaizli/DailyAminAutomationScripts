function zoomInviteAuto(name = "Candidate", time, ampm){
    //Meeting Title
    const topic = document.getElementById("topic");
    name = name || "Candidate";
    topic.value = `App Academy Interview with ${name}`;


    //Meeting Agenda
    const description = document.getElementById("agenda");
    description.value = "App Academy Non-technical Interview";

    //Meeting Start & End Time
    const startTime = document.getElementById("start_time");
    startTime.value = `${time}`;

    const amPm = document.getElementById("start_time_2");
    amPm.value = `${ampm}`;

    const durationHour = document.getElementById("duration_hr");
    durationHour.value = 0;

    const durationMinute = document.getElementById("duration_min");
    durationMinute.value = 30;


    //record options
    const recordOption = document.getElementById("option_autorec_cloud");
    recordOption.checked = "checked";

}

function saving(){
    const save = document.querySelector(".submit");
    save.click();
}
