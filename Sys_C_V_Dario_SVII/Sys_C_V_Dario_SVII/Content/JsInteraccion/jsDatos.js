﻿function fn_Alerta(controller, action, _data, content, _idmodal , time) {
    $.ajax({
        type: "POST",
        data: _data,
        datatype: "html",
        url: controller + action,
        success: function (page) {
            $("#" + content).html(page);
            $("#" + _idmodal).modal("show");
            setTimeout(function () {
                $("#" + _idmodal).modal("hide");
            }, time);
        }
    });
}
function fn_Detalles(controller, action, _data, content, _idmodal) {
    $.ajax({
        type: "POST",
        data: _data,
        datatype: "html",
        url: controller + action,
        success: function (page) {
            $("#" + content).html(page);
            $("#" + _idmodal).modal("show");
        }
    });
}

function fillcbo(idcbo, val, dscp) {
    $("#" + idcbo).append("<option value = '" + val + "'> " + dscp + "</option>");
}

function fn_ControlElement(Element) {
    //var val = $(Element).val();
    alert($("#"+Element).val());
}

// validate nombres o apellidos
function fn_Validate_ID_05(Etiqueta) {
    $("#" + Etiqueta).keypress(function ( evt ) {

    });
}

function fn_today() {
    var f = new Date();
    var month = (f.getMonth() + 1);
    var day = f.getDate();
    month = (month < 10 ? '0' : '') + month;
    day = (day < 10 ? '0' : '') + day;
    return f.getFullYear() + "-" + month + "-" + day;
}

