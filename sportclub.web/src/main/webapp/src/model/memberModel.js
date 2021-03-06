/* ========================================================================
 * Copyright 2014 monitor
 *
 * Licensed under the MIT, The MIT License (MIT)
 * Copyright (c) 2014 monitor

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 * ========================================================================


Source generated by CrudMaker version 1.0.0.201408112050

*/
define(['model/_memberModel'], function() {
    App.Model.MemberModel = App.Model._MemberModel.extend({

 	validate: function(attrs,options){
            var validationMessage = "";
            if(!attrs.name){
                validationMessage = "The name can't be empty.";
            }
            else if(!attrs.firstName){
                validationMessage = "The first name can't be empty.";
            }
            else if(!attrs.lastName){
                validationMessage = "The last name can't be empty.";
            }
            else if(!attrs.birthDate){
                validationMessage = "The birth date can't be empty";
            }
            //else if(!attrs.enable){
            //    validationMessage = "The enable can't be empty";
            //}
            else if(!attrs.docNumber){
                validationMessage = "The doc number can't be empty";
            }
            else if(!attrs.documenttypeId){
                validationMessage = "The document type Id  can't be empty";
            }
            else if(!attrs.partnerId){
                validationMessage = "The partner Id can't be empty";
            }
            else {
                var dia1=parseInt(attrs.birthDate.substring(0,2));
                var mes1=parseInt(attrs.birthDate.substring(3,5))-1;
                var anho1=parseInt(attrs.birthDate.substring(6,10));
                var fechaActual=new Date();
                var dia2=fechaActual.getDate();
                var mes2=fechaActual.getMonth();
                var anho2=fechaActual.getFullYear();
                //alert(dia1+";"+mes1+";"+anho1);
                //alert(dia2+";"+mes2+";"+anho2);
                if(anho1<anho2-100||(anho1==anho2-100 && mes1<mes2)||(anho1==anho2-100 && mes1==mes2 && dia1<dia2)){
                   validationMessage = "La persona no puede tener mas de 100 anhos";
                }
                else if(attrs.docNumber.length<5){
                   validationMessage = "El n�mero de documento debe tener por lo menos 5 caracteres";
                }
                else if(anho1>anho2||(anho1==anho2 && mes1>mes2)||(anho1==anho2 && mes1==mes2 && dia1>=dia2)){
                   validationMessage = "La persona no puede haber nacido en una fecha igual o posterior a la actual";
                }
            }


            
            if(validationMessage.length>0){
               return validationMessage;
            }
        }

    });

    App.Model.MemberList = App.Model._MemberList.extend({
        model: App.Model.MemberModel
    });

    return  App.Model.MemberModel;

});