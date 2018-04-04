$(document).ready(function() {
    const restEndpoint = '/api/airports/';

    var _tableElement = $('#airportsTable');
    var _addButton    = $('#addButton');
    var _modalElement = $('#airportModal');
    var _inputId      = _modalElement.find('#id');
    var _inputName    = _modalElement.find('#name');
    var _inputLat     = _modalElement.find('#lat');
    var _inputLng     = _modalElement.find('#lng');
    var _saveButton   = _modalElement.find('#btnSave');
    var _dataTable    = _tableElement.DataTable();

    _tableElement.find('tbody').on('click', 'tr', function() {
        var data = _dataTable.row(this).data();

        openModal(data);
    });

    _addButton.click(function() {
        openModal(null);
    });

    _saveButton.click(function() {
        var airport = {
            id: _inputId.val(),
            name: _inputName.val(),
            lat: _inputLat.val(),
            lng: _inputLng.val(),
        };

        $.ajax({
            contentType : 'application/json',
            url: restEndpoint,
            type: 'put',
            data: JSON.stringify(airport),
            success: function() {
                _modalElement.modal('hide');
                _dataTable.ajax.reload();
            },
            error: function(xhr) {
                var json = JSON.parse(xhr.responseText);
                var errorMessage = json.message;
                alert("unable to save airport: \n" + errorMessage);
            }
        });
    })

    /**
     * Opens the modal and sets the form values.
     * @param airport - the airport object, null for an empty form
     */
    function openModal(airport) {
        if(airport) {
            _inputId.val(airport.id);
            _inputName.val(airport.name);
            _inputLat.val(airport.lat);
            _inputLng.val(airport.lng);
        } else {
            _inputId.val("");
            _inputName.val("");
            _inputLat.val("");
            _inputLng.val("");
        }

        _modalElement.modal('show');
    }
});