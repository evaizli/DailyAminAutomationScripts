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

    //options
    const waitingRoomOption = document.getElementById("option_waiting_room");
    waitingRoomOption.checked = "checked";

    const recordOption = document.getElementById("option_autorec_cloud");
    recordOption.checked = "checked";

}

function saving(){
    const save = document.querySelector(".submit");
    save.click();
}

function addCalender(){
    const addToGoogle = document.querySelector(".google-plugin-link");
    addToGoogle.click();
}

function addToGoogleCal(){
    const removeHangout = document.getElementById("xRemRtcBu");
    if (removeHangout){
        removeHangout.click();
    }
    const inputBox = document.getElementById("hInySc0");
    const link = Array.from(inputBox.children).filter(child => child.tagName === "A")[0].innerText;

    const subjectTitle = document.getElementById("xTiIn").value.split(" ");
    const name = subjectTitle.slice(4).join(" ");
    const today = document.getElementById("xStDaIn").value;
    const time = document.getElementById("xStTiIn").value;

    inputBox.innerText = `Hi ${name},\n
        We're ready to begin your App Academy interview at ${time} on ${today}. Please follow this link. Once there, click the JOIN MEETING button.\n
        \n${link}\n\n
        This interview will be recorded for evaluation and quality assurance.\n
        Best,\n
        \n
        Eva Pan\n
        Technical Admissions Specialist\n
        App Academy `;
}
