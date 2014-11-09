!function(t){"use strict";var e=function(e,i){this.options=i,this.$elementFilestyle=[],this.$element=t(e)};e.prototype={clear:function(){this.$element.val(""),this.$elementFilestyle.find(":text").val("")},destroy:function(){this.$element.removeAttr("style").removeData("filestyle").val(""),this.$elementFilestyle.remove()},icon:function(t){if(t===!0)this.options.icon||(this.options.icon=!0,this.$elementFilestyle.find("label").prepend(this.htmlIcon()));else{if(t!==!1)return this.options.icon;this.options.icon&&(this.options.icon=!1,this.$elementFilestyle.find("i").remove())}},input:function(t){if(t===!0){if(!this.options.input){this.options.input=!0,this.$elementFilestyle.prepend(this.htmlInput());var e="",i=[];void 0===this.$element[0].files?i[0]={name:this.$element[0].value}:i=this.$element[0].files;for(var s=0;s<i.length;s++)e+=i[s].name.split("\\").pop()+", ";""!==e&&this.$elementFilestyle.find(":text").val(e.replace(/\, $/g,""))}}else{if(t!==!1)return this.options.input;this.options.input&&(this.options.input=!1,this.$elementFilestyle.find(":text").remove())}},buttonText:function(t){return void 0===t?this.options.buttonText:(this.options.buttonText=t,void this.$elementFilestyle.find("label span").html(this.options.buttonText))},classButton:function(t){return void 0===t?this.options.classButton:(this.options.classButton=t,void this.$elementFilestyle.find("label").attr({"class":this.options.classButton}))},classIcon:function(t){return void 0===t?this.options.classIcon:(this.options.classIcon=t,void this.$elementFilestyle.find("label").find("i").attr(-1!==this.options.classButton.search(/btn-inverse|btn-primary|btn-danger|btn-warning|btn-success/i)?{"class":this.options.classIcon}:{"class":this.options.classIcon}))},classInput:function(t){return void 0===t?this.options.classInput:(this.options.classInput=t,void this.$elementFilestyle.find(":text").addClass(this.options.classInput))},htmlIcon:function(){if(this.options.icon){var t="";return-1!==this.options.classButton.search(/btn-inverse|btn-primary|btn-danger|btn-warning|btn-success/i)&&(t="icon-white "),'<i class="'+this.options.classIcon+'"></i> '}return""},htmlInput:function(){return this.options.input?'<input type="text" class="'+this.options.classInput+'" disabled> ':""},constructor:function(){var e=this,i="",s=this.$element.attr("id"),n=[];""!==s&&s||(s="filestyle-"+t(".bootstrap-filestyle").length,this.$element.attr({id:s})),i=this.htmlInput()+'<label for="'+s+'" class="'+this.options.classButton+'">'+this.htmlIcon()+"<span>"+this.options.buttonText+"</span></label>",this.$elementFilestyle=t('<div class="bootstrap-filestyle" style="display: inline;">'+i+"</div>"),this.$element.css({position:"fixed",left:"-500px"}).after(this.$elementFilestyle),this.$element.change(function(){var t="";void 0===this.files?n[0]={name:this.value}:n=this.files;for(var i=0;i<n.length;i++)t+=n[i].name.split("\\").pop()+", ";""!==t&&e.$elementFilestyle.find(":text").val(t.replace(/\, $/g,""))}),window.navigator.userAgent.search(/firefox/i)>-1&&this.$elementFilestyle.find("label").click(function(){return e.$element.click(),!1})}};var i=t.fn.filestyle;t.fn.filestyle=function(i,s){var n="",l=this.each(function(){if("file"===t(this).attr("type")){var l=t(this),o=l.data("filestyle"),a=t.extend({},t.fn.filestyle.defaults,i,"object"==typeof i&&i);o||(l.data("filestyle",o=new e(this,a)),o.constructor()),"string"==typeof i&&(n=o[i](s))}});return void 0!==typeof n?n:l},t.fn.filestyle.defaults={buttonText:"Choose file",input:!0,icon:!0,classButton:"btn",classInput:"input-large",classIcon:"icon-folder-open"},t.fn.filestyle.noConflict=function(){return t.fn.filestyle=i,this},t(".filestyle").each(function(){var e=t(this),i={buttonText:e.attr("data-buttonText"),input:"false"===e.attr("data-input")?!1:!0,icon:"false"===e.attr("data-icon")?!1:!0,classButton:e.attr("data-classButton"),classInput:e.attr("data-classInput"),classIcon:e.attr("data-classIcon")};e.filestyle(i)})}(window.jQuery);