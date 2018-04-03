$(document).ready(function() {
    const restEndpoint = '/api/airplanes/';

    var _tableElement = $('#airplanesTable');

    var _dataTable = _tableElement.DataTable({
        ajax: {
            url: restEndpoint,
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