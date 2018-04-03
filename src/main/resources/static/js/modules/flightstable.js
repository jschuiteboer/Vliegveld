$(document).ready(function() {
    $('#flightsTable').DataTable({
        ajax: {
            url: '/api/flights/',
            dataSrc: "",
            type: "GET",
        },
        columns: [
            {
                title: "ID",
                data: "id",
            },
            {
                title: "Airplane",
                data: "airplane.id",
            },
            {
                title: "Origin",
                data: "origin.name",
            },
            {
                title: "Destination",
                data: "destination.name",
            },
        ]
    });
});