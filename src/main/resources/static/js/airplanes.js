$(document).ready(function() {
    const restEndpoint = '/api/airplanes/';

    var _tableElement = $('#airplanesTable');
    var _addButton    = $('#addButton');
    var _modalElement = $('#airplaneModal');
    var _inputId      = _modalElement.find('#id');
    var _inputFuel    = _modalElement.find('#fuel');

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

    _tableElement.find('tbody').on('click', 'tr', function() {
        var data = _dataTable.row(this).data();

        openModal(data);
    });

    _addButton.click(function() {
        openModal(null);
    });

    /**
     * Opens the modal and sets the form values.
     * @param airplane - the airplane object, null for an empty form
     */
    function openModal(airplane) {
        if(airplane) {
            _inputId.val(airplane.id);
            _inputFuel.val(airplane.fuel);
        } else {
            _inputId.val("");
            _inputFuel.val("");
        }

        _modalElement.modal('show');
    }
});