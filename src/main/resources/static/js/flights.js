$(document).ready(function() {
    const restEndpoint = '/api/flights/';

    var _tableElement         = $('#flightsTable');
    var _addButton            = $('#addButton');
    var _editModalElement     = $('#flightModal');
    var _inputId              = _editModalElement.find('#id');
    var _btnSave              = _editModalElement.find('#btnSave');
    var _dataTable            = _tableElement.DataTable();
    var _airplaneSelectModal  = $('#airplaneSelectModal');
    var _airportSelectModal   = $('#airportSelectModal');

    var _inputAirplane        = _editModalElement.find('#airplane');
    var _btnSelectAirplane    = _editModalElement.find('#btnSelectAirplane');

    var _inputOrigin             = _editModalElement.find('#origin');
    var _inputOriginDisplay      = _editModalElement.find('#originDisplay');
    var _btnSelectOrigin         = _editModalElement.find('#btnSelectOrigin');

    var _inputDestination        = _editModalElement.find('#destination');
    var _inputDestinationDisplay = _editModalElement.find('#destinationDisplay');
    var _btnSelectDestination    = _editModalElement.find('#btnSelectDestination');

    _tableElement.find('tbody').on('click', 'tr', function() {
        var data = _dataTable.row(this).data();

        openModal(data);
    });

    _addButton.click(function() {
        openModal(null);
    });

    _btnSave.click(function() {
        var flight = {
            id: _inputId.val(),
            airplane: {
                id: _inputAirplane.val(),
            },
            origin: {
                id: _inputOrigin.val(),
            },
            destination: {
                id: _inputDestination.val(),
            },
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
            error: function(xhr) {
                var json = JSON.parse(xhr.responseText);
                var errorMessage = json.message;
                alert("unable to save flight: \n" + errorMessage);
            }
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

    _btnSelectOrigin.click(function() {
        var _airportsTable = _airportSelectModal.find('#airportsTable');

        _airportsTable.find('tbody').on('click', 'tr', function() {
            var airport = _airportsTable.DataTable().row(this).data();

            _inputOrigin.val(airport.id);
            _inputOriginDisplay.val(airport.name);
            _airportSelectModal.modal('hide');
        });

        _airportSelectModal.modal('show');
    });

    _btnSelectDestination.click(function() {
        var _airportsTable = _airportSelectModal.find('#airportsTable');

        _airportsTable.find('tbody').on('click', 'tr', function() {
            var airport = _airportsTable.DataTable().row(this).data();

            _inputDestination.val(airport.id);
            _inputDestinationDisplay.val(airport.name);
            _airportSelectModal.modal('hide');
        });

        _airportSelectModal.modal('show');
    });

    /**
     * Opens the modal and sets the form values.
     * @param flight - the flight object, null for an empty form
     */
    function openModal(flight) {
        if(flight) {
            _inputId.val(flight.id);
            _inputAirplane.val(flight.airplane ? flight.airplane.id : "");
            _inputOrigin.val(flight.origin ? flight.origin.id : "");
            _inputOriginDisplay.val(flight.origin ? flight.origin.name : "");
            _inputDestination.val(flight.destination ? flight.destination.id : "");
            _inputDestinationDisplay.val(flight.destination ? flight.destination.name : "");
        } else {
            _inputId.val("");
            _inputAirplane.val("");
            _inputOrigin.val("");
            _inputOriginDisplay.val("");
            _inputDestination.val("");
            _inputDestinationDisplay.val("");
        }

        _editModalElement.modal('show');
    }
});