/**
 * ccFileUpload - ConsistentCoder File Upload
 * 
 * License: MIT
 * Copyright: 2015 ConsistentCoder.com (http://consistentcoder.com)
 *
 * IMPORTANT ! ! !
 * IT IS A MUST TO DO A BACK-END (JAVA/PHP/etc) CHECKING FOR FILE TYPE RESTRICTIONS, TOO.
 * 
 * Tutorial Page: http://consistentcoder.com/create-a-file-uploader-using-jquery-and-bootstrap
 * GitHub Page: 
 */
(function($){
    /**
     * Global vars.
     * Available in all methods.
     */
    var __fileName = '';
    var __fileExtension = '';
    var __options = [];
    var __counter = 0;
    
    $.fn.extend({
        ccFileUpload: function(options){
            var _this = this;
            
            /**
             * Default settings.
             */
            var defaults = {
                name: 'file',
                previews: 'previews',
                counter: 'counter',
                columnClass: 'col-sm-3 text-center',
                allowedFiles: ['gif','png','jpg','jpeg'],
                allowedPreviews: ['gif','png','jpg','jpeg']
            };
            
            /**
             * Overwrite default settings
             * for any user set values.
             */
            __options = $.extend(defaults, options);
            
            /**
             * Create the initial file input field. 
             */
            var file = _this.createInput({type:'file', name:__options.name, cssClass:'hidden', multiple:true});
            
            /**
             * Create the button that will trigger the file field.
             */
            var fileDecoy = _this.createInput({type:'button', cssClass:'button btn btn-sm', text:'Choose File'});
            
            /**
            * Get the previews id for later reference.
            */
            var previewsId = $('#'+__options.previews);
            
            /**
             * Construct the initial file input field
             * together with the needed functions.
             */
            _this.append(file.bind('change',function(){
                /**
                 * Get the file properties.
                 */
                var fileProps = $(this).get(0);
                
                /**
                 * Loop through all the chosen files.
                 */
                for(var i=0; i<fileProps.files.length; i++){
                    /**
                     * Get the file extension and check if it is allowed.
                     * Do nothing if true.
                     */
                    __fileExtension = fileProps.files.item(i).name.split('.').pop().toLowerCase();
                    if($.inArray(__fileExtension, __options.allowedFiles) == -1){
                        return false;
                    }
                    
                    /**
                     * Clear previews container on first file select.
                     */
                    if(__counter==0){
                        previewsId.empty();
                    }
                
                    /**
                     * Get the file name.
                     */
                    __fileName = fileProps.files.item(i).name.split('\\').pop();
                    
                    /**
                     * Create the preview container.
                     */
                    var prvwCntnr = $('<div/>');
                    
                    /**
                     * Call the 'showPreview' function.
                     * @param: Selected file properties (fileProps.files[i]).
                     * @param: Preview container element (prvwCntnr)
                     */
                    _this.showPreview(fileProps.files[i], prvwCntnr);
                    
                     /**
                      * Construct the preview.
                      */
                    previewsId.prepend(
                            prvwCntnr.addClass(__options.columnClass)
                               .append($('<p/>')
                                       .append(_this.createInput({type:'button', name:'button', cssClass:'btn btn-xs btn-danger', text:'Cancel'})
                                               .bind('click',function(){
                                                        $(this).parent().parent().fadeOut(200,function(){
                                                            $(this).remove(); __counter--; _this.updateCounter();
                                                        });
                                                    })
                                                )
                                            )
                            .append(_this.createInput({type:'file',name:__options.name,cssClass:'file hidden', multiple:true}))
                    );
                    
                     /**
                      * Increment file counter.
                      */
                    __counter++;
                     
                     /**
                      * Show to the user the updated file counter.
                      */
                    _this.updateCounter();
                }
            }));
            
            /**
             * Append the 'decoy' button with a function
             * that will trigger the input field on click.
             */
            _this.append(fileDecoy.bind('click', function(e){ e.preventDefault();
                file.trigger('click');
            }));
            
            /**
             * Create the initial message.
             */
            previewsId.html($('<div/>').addClass('text-center text-muted').append('<h1>No file chosen...</h1>'));

            return _this;
        },
        
        /**
         * Function that will create an input field.
         * @param: options[type, name, cssClass, text, multiple].
         * type='Field Type'.
         * name='String, Given Field Name'.
         * cssClass='String, Given CSS Class'.
         * text='String, Given Field Value'.
         * multiple='Boolean, true=Field is multiple'.
         */
        createInput: function(options){
            var input = $('<input/>');
            if(options.multiple == true){
                input.prop('multiple',true);
            }
            return input.attr('type', options.type).attr('name', options.name).addClass(options.cssClass).val(options.text);
        },
        
        /**
         * Function that will show a preview of a chosen file
         * if it's within the allowed previewed file list.
         */
        showPreview: function(input, prvwCntnr){
            if ($.inArray(__fileExtension, __options.allowedPreviews) != -1){
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('<p/>').append($('<img/>').attr('src', e.target.result).addClass('thumbnail img-responsive center-block').css({'max-height':'200px','max-width':'200px'})).prependTo(prvwCntnr);
                };
                reader.readAsDataURL(input);
            }
            else{
                $('<p/>').append(__fileName).addClass('well well-sm').prependTo(prvwCntnr);
            }
        },
        
        /**
         * Function that will show the updated
         * counter to the user.
         */
        updateCounter: function(){
            $('.'+__options.counter).html(__counter);
        }
    });
}(jQuery));