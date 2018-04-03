$(document).ready(function() {
    $('#airplanesTable').DataTable({
        ajax: {
            url: '/api/airplanes/',
            dataSrc: "",
            type: "GET",
        },
        columns: [
            {
                title: "ID",
                data: "id",
            },
            {
                title: "Fuel Level",
                data: "fuel",
            },
        ]
    });
});