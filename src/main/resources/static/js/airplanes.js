$(document).ready(function() {
    const restEndpoint = '/api/airplanes/';

    var _tableElement = $('#airplanesTable');
    var _addButton    = $('#addButton');
    var _modalElement = $('#airplaneModal');
    var _inputId      = _modalElement.find('#id');
    var _inputFuel    = _modalElement.find('#fuel');
    var _saveButton   = _modalElement.find('#btnSave');
    var _dataTable = _tableElement.DataTable();

    _tableElement.find('tbody').on('click', 'tr', function() {
        var data = _dataTable.row(this).data();

        openModal(data);
    });

    _addButton.click(function() {
        openModal(null);
    });

    _saveButton.click(function() {
        var airplane = {
            id: _inputId.val(),
            fuel: _inputFuel.val(),
        };

        $.ajax({
            contentType : 'application/json',
            url: restEndpoint,
            type: 'put',
            data: JSON.stringify(airplane),
            success: function() {
                _modalElement.modal('hide');
                _dataTable.ajax.reload();
            },
        });
    })

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