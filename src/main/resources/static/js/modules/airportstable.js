$(document).ready(function() {
    $('#airportsTable').DataTable({
        ajax: {
            url: '/api/airports/',
            dataSrc: "",
            type: "GET",
        },
        columns: [
            {
                title: "ID",
                data: "id",
            },
            {
                title: "Name",
                data: "name",
            },
            {
                title: "Latitude",
                data: "lat",
            },
            {
                title: "Longtitude",
                data: "lng",
            },
        ]
    });
});