$(document).ready(function() {
    const restEndpoint = '/api/flights/';

    var _tableElement        = $('#flightsTable');
    var _addButton           = $('#addButton');
    var _editModalElement    = $('#flightModal');
    var _inputId             = _editModalElement.find('#id');
    var _inputAirplane       = _editModalElement.find('#airplane');
    var _saveButton          = _editModalElement.find('#btnSave');
    var _btnSelectAirplane   = _editModalElement.find('#btnSelectAirplane');
    var _airplaneSelectModal = $('#airplaneSelectModal');

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
                _editModalElement.modal('hide');
                _dataTable.ajax.reload();
            },
        });
    });

    _btnSelectAirplane.click(function() {
        var _airplanesTable = _airplaneSelectModal.find('#airplanesTable');

        _airplanesTable.find('tbody').on('click', 'tr', function() {
            var data = _airplanesTable.DataTable().row(this).data();

            _inputAirplane.val(data.id);
            _airplaneSelectModal.modal('hide');
        });

        _airplaneSelectModal.modal('show');
    });

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

        _editModalElement.modal('show');
    }
});