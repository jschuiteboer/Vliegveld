$(document).ready(function() {
    var _tableElement = $('#airplanesTable');

    _tableElement.DataTable({
        columns: [
            {
                title: "ID",
                data: "id",
            },
            {
                title: "Feul Level",
                data: "fuel",
            },
        ]
    });
});