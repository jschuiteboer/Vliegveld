$(document).ready(function() {
    const restEndpoint = '/api/airplanes/';

    var _tableElement  = $('#airplanesTable');
    var _dataTable     = _tableElement.DataTable();
    var _btnAdd        = $('#addButton');
    var _airplaneModal = $('#airplaneModal');
    var _inputId           = _airplaneModal.find('#id');
    var _inputLat          = _airplaneModal.find('#lat');
    var _inputLng          = _airplaneModal.find('#lng');
    var _inputFuel         = _airplaneModal.find('#fuel');
    var _btnSave           = _airplaneModal.find('#btnSave');
    var _btnPlaceAtAirport = _airplaneModal.find('#btnPlaceAtAirport');
    var _airportSelectModal = $('#airportSelectModal');

    _tableElement.find('tbody').on('click', 'tr', function() {
        var data = _dataTable.row(this).data();

        openModal(data);
    });

    _btnAdd.click(function() {
        openModal(null);
    });

    _btnSave.click(function() {
        var airplane = {
            id: _inputId.val(),
            lat: _inputLat.val(),
            lng: _inputLng.val(),
            fuel: _inputFuel.val(),
        };

        $.ajax({
            contentType : 'application/json',
            url: restEndpoint,
            type: 'put',
            data: JSON.stringify(airplane),
            success: function() {
                _airplaneModal.modal('hide');
                _dataTable.ajax.reload();
            },
            error: function(xhr) {
                var json = JSON.parse(xhr.responseText);
                var errorMessage = json.message;
                alert("unable to save airplane: \n" + errorMessage);
            }
        });
    });

    _btnPlaceAtAirport.click(function() {
        var _airportsTable = _airportSelectModal.find('#airportsTable');

        _airportsTable.find('tbody').on('click', 'tr', function() {
            var airport = _airportsTable.DataTable().row(this).data();

            _inputLat.val(airport.lat);
            _inputLng.val(airport.lng);
            _airportSelectModal.modal('hide');
        });

        _airportSelectModal.modal('show');
    });

    /**
     * Opens the modal and sets the form values.
     * @param airplane - the airplane object, null for an empty form
     */
    function openModal(airplane) {
        if(airplane) {
            _inputId.val(airplane.id);
            _inputLat.val(airplane.lat);
            _inputLng.val(airplane.lng);
            _inputFuel.val(airplane.fuel);
        } else {
            _inputId.val("");
            _inputLat.val("");
            _inputLng.val("");
            _inputFuel.val("");
        }

        _airplaneModal.modal('show');
    }
});