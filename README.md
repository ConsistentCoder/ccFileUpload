# ccFileUpload
A Fully Cutomizable Responsive HTML5 Multiple File Upload Built with jQuery and BootStrap.

<div class="col-xs-12" style="background-color:#333; color:#fff;">
            <h2>Features:</h2>
            <ul class="list">
                <ol><span class="glyphicon glyphicon-check" aria-hidden="true"></span> Multiple file upload supported</ol>
                <ol><span class="glyphicon glyphicon-check" aria-hidden="true"></span> Auto preview</ol>
                <ol><span class="glyphicon glyphicon-check" aria-hidden="true"></span> Option to cancel</ol>
                <ol><span class="glyphicon glyphicon-check" aria-hidden="true"></span> Option to set file input name</ol>
                <ol><span class="glyphicon glyphicon-check" aria-hidden="true"></span> Option to view live file counter</ol>
                <ol><span class="glyphicon glyphicon-check" aria-hidden="true"></span> Option to change no. of preview columns</ol>
                <ol><span class="glyphicon glyphicon-check" aria-hidden="true"></span> Option to set 'Allowed Files'</ol>
                <ol><span class="glyphicon glyphicon-check" aria-hidden="true"></span> Option to set which file type will have previews</ol>
                <ol><span class="glyphicon glyphicon-check" aria-hidden="true"></span> Not allowed files will be ignored</ol>
                <ol><span class="glyphicon glyphicon-check" aria-hidden="true"></span> Will auto single align on mobile devices</ol>
                <ol><span class="glyphicon glyphicon-check" aria-hidden="true"></span> Responsive design</ol>
                <ol><span class="glyphicon glyphicon-check" aria-hidden="true"></span> Fully customizable design</ol>
                <ol><span class="glyphicon glyphicon-check" aria-hidden="true"></span> Easy to integrate to PHP, JAVA, and other scripting languages</ol>
            </ul>
            <h2>Built with:</h2>
            <ul class="list">
                <ol><span class="glyphicon glyphicon-check" aria-hidden="true"></span> HTML5</ol>
                <ol><span class="glyphicon glyphicon-check" aria-hidden="true"></span> jQuery</ol>
                <ol><span class="glyphicon glyphicon-check" aria-hidden="true"></span> BootStrap</ol>
            </ul>
            <h2>Tested with:</h2>
            <ul class="list">
                <ol><span class="glyphicon glyphicon-check" aria-hidden="true"></span> Google Chrome 46.0.24</ol>
                <ol><span class="glyphicon glyphicon-check" aria-hidden="true"></span> FireFox 42.0</ol>
            </ul>
            <h2>Support:</h2>
            <ul class="list">
                <ol><span class="glyphicon glyphicon-check" aria-hidden="true"></span> Tutorial - <a href="http://consistentcoder.com/create-a-file-uploader-using-jquery-and-bootstrap">Create a File Uploader using jQuery and Bootstrap</a></ol>
                <ol><span class="glyphicon glyphicon-check" aria-hidden="true"></span> GitHub Repo - <a href="https://github.com/ConsistentCoder/ccFileUpload">https://github.com/ConsistentCoder/ccFileUpload</a></ol>
                <ol><span class="glyphicon glyphicon-check" aria-hidden="true"></span> Facebook Page - <a href="https://www.facebook.com/ConsistentCoder/">https://www.facebook.com/ConsistentCoder/</a></ol>
                <ol><span class="glyphicon glyphicon-check" aria-hidden="true"></span> Twitter Page - <a href="https://twitter.com/ConsistentCoder/">https://twitter.com/ConsistentCoder/</a></ol>
            </ul>
            <hr>
            <h3>Basic set up: <small>Refer to 'ccFileUpload-basic.html' for demo.</small></h3>
            <p>
                <code>
                    $("#DIV").ccFileUploader();
                </code>
            </p>
            <p>
                <ul>
                    <li>Will create an input file with name "<strong>file</strong>"</li>
                    <li>Previews will appear on an element with an ID="<strong>previews</strong>"</li>
                    <li>Live file counter will appear on an element with a CSS class="<strong>counter</strong>"</li>
                    <li>Will have four (4) columns on preview area</li>
                    <li>Allowed files are "<strong>'gif','png','jpg','jpeg'</strong>"</li>
                    <li>File types that will have previews are "<strong>'gif','png','jpg','jpeg'</strong>"</li>
                </ul>
            </p>
            <h3>Advanced set up: <small>Refer to 'index.html' for demo.</small></h3>
            <p>
                <code>
                    var options = {</code><br>
                                    <code>&nbsp;&nbsp;&nbsp;&nbsp;'name':'myFile',</code><br>
                                    <code>&nbsp;&nbsp;&nbsp;&nbsp;'previews':'stage',</code><br>
                                    <code>&nbsp;&nbsp;&nbsp;&nbsp;'counter':'countMe',</code><br>
                                    <code>&nbsp;&nbsp;&nbsp;&nbsp;'columnClass':'col-md-4 text-center',</code><br>
                                    <code>&nbsp;&nbsp;&nbsp;&nbsp;'allowedFiles':['gif','png','jpg','jpeg','xlsx'],</code><br>
                                    <code>&nbsp;&nbsp;&nbsp;&nbsp;'allowedPreviews':['jpg','jpeg']</code><br>
                                    <code>
                                   };</code><br><br>
                    <code>$("#DIV").ccFileUploader(options);
                </code>
            </p>
            <p>
                <ul>
                    <li>Will create an input file with name "<strong>myFile</strong>"</li>
                    <li>Previews will appear on an element with an ID="<strong>stage</strong>"</li>
                    <li>Live file counter will appear on an element with a CSS class="<strong>countMe</strong>"</li>
                    <li>Will have four (3) columns on preview area (always best with 'text-center' combo)</li>
                    <li>Allowed files are "<strong>'gif','png','jpg','jpeg','xlsx'</strong>" - Do a back-end checking, too.</li>
                    <li>File types that will have previews are "<strong>'jpg','jpeg'</strong>" (obviously, only image files here)</li>
                </ul>
            </p>
            <hr>
            <h2>IMPORTANT ! ! !</h2>
            <h4>IT IS A MUST TO DO A BACK-END (JAVA/PHP/etc) CHECKING FOR FILE TYPE RESTRICTIONS, TOO.</h4>
            <hr>
            <h3>Notes:</h3>
            <p>
                <ul>
                    <li>License: MIT</li>
                    <li>Copyright: 2015 ConsistentCoder.com (http://consistentcoder.com)</li>
                </ul>
            </p>
            <div class="col-xs-12">&nbsp;</div>
        </div>