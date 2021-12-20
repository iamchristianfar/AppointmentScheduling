var routURL = location.protocol + "//" + location.host;

$(document).ready(function () {
    $("appointmentDate").kendoDateTimePicker({
        format: "dd/MM/yyyy",
        value: new Date(),
        dateInput: true
    });

    InitializeCalendar();
});
function InitializeCalendar() {
    try {

       
        var calendarEl = document.getElementById('calendar');
        if (calendarEl != null) {
            var calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                headerToolbar: {
                    left: 'prev,next,today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                selectable: true,
                editable: false,
                select: function (event) {
                    onShowModal(event, null);
                }
            });
            calendar.render();
        }


    } catch (e) {
        alert(e);
    }
}

function onShowModal(obj, isEventDetail) {
    $("#appointmentInput").modal("show");
}

function onCloseModal() {
    $("#appointmentInput").modal("hide");
}

function onSubmitForm() {
    var requesteData = {
        Id: parseInt($("#id").val()),
        Title: $("#title").val(),
        Description: $("#description").val(),
        StartDate: $("#appointmentDate").val(),
        Duration: $("#duration").val(),
        DoctorId: $("#doctorId").val(),
        PatientId: $("#patientId").val(),
    };
    $.ajax({
        url: routURL + '/api/Appointment/SaveCalendarData',
        type: 'POST',
        data: JSON.stringify(requesteData),
        contentType: 'application/json',
        success: function (resposne) {
            if (resposne.status === 1) {
                $.notify(response.message, "succes");
                onCloseModal();
            }
            else {
                $.notify(response.message, "error");
            }
        },
        error: function (xhr) {
            $.notify("Error", "error");
        }

    });

}