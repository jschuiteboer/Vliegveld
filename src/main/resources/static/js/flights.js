$(document).ready(function() {
    const restEndpoint = '/api/flights/';

    var _tableElement = $('#flightsTable');
    var _addButton    = $('#addButton');
    var _modalElement = $('#flightModal');
    var _inputId      = _modalElement.find('#id');
    var _saveButton   = _modalElement.find('#btnSave');

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

    _tableElement.find('tbody').on('click', 'tr', function() {
        var data = _dataTable.row(this).data();

        openModal(data);
    });

    _addButton.click(function() {
        openModal(null);
    });

    _saveButton.click(function() {
        var flight = {
            id: _inputId.val(),
        };

        $.ajax({
            contentType : 'application/json',
            url: restEndpoint,
            type: 'put',
            data: JSON.stringify(flight),
            success: function() {
                _modalElement.modal('hide');
                _dataTable.ajax.reload();
            },
        });
    })

    /**
     * Opens the modal and sets the form values.
     * @param flight - the flight object, null for an empty form
     */
    function openModal(flight) {
        if(flight) {
            _inputId.val(flight.id);
        } else {
            _inputId.val("");
        }

        _modalElement.modal('show');
    }
});