$(document).ready(function() {
    const restEndpoint = '/api/locations/';

    var _tableElement = $('#locationsTable');
    var _addButton    = $('#addButton');
    var _modalElement = $('#locationModal');
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
        var location = {
            id: _inputId.val(),
            fuel: _inputFuel.val(),
        };

        $.ajax({
            contentType : 'application/json',
            url: restEndpoint,
            type: 'put',
            data: JSON.stringify(location),
            success: function() {
                _modalElement.modal('hide');
                _dataTable.ajax.reload();
            },
        });
    })

    /**
     * Opens the modal and sets the form values.
     * @param location - the location object, null for an empty form
     */
    function openModal(location) {
        if(location) {
            _inputId.val(location.id);
        } else {
            _inputId.val("");
        }

        _modalElement.modal('show');
    }
});