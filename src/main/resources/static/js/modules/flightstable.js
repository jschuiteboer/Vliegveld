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
                data: function(data) {
                    return data.airplane ? data.airplane.id : "";
                },
            },
            {
                title: "Origin",
                data: function(data) {
                    return data.origin ? data.origin.name : "";
                },
            },
            {
                title: "Destination",
                data: function(data) {
                    return data.destination ? data.destination.name : "";
                },
            },
        ]
    });
});