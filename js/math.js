   fillSelect: function($super, element){
        $super(element);
        //if (this.config.transform_dropdowns){
        var transformed = this.transformDropdown(element);
        if (!transformed && !this.getConfigValue(this.config, 'allow_no_stock_select', false)) {
            var attributeId = element.id.replace(/[a-z]*/, '');
            var options = this.getAttributeOptions(attributeId);
            for (var i in options) {
                if (options.hasOwnProperty(i)){
                    var optVal = options[i].id;
                    var inStock = this.isInStock(attributeId, optVal);
                    $(element).select('option').each (function(elem){
                        if ($(elem).value == optVal && !inStock) {
                            $(elem).disabled="disabled";
                        }
                    });
                }
            }
        }
    },
	fillSelect: function($super, element){
        $super(element);
        //if (this.config.transform_dropdowns){
        var transformed = this.transformDropdown(element);
        if (!transformed && !this.getConfigValue(this.config, 'allow_no_stock_select', false)) {
            var attributeId = element.id.replace(/[a-z]*/, '');
            var options = this.getAttributeOptions(attributeId);
            for (var i in options) {
                if (options.hasOwnProperty(i)){
                    var optVal = options[i].id;
                    var inStock = this.isInStock(attributeId, optVal);
                    $(element).select('option').each (function(elem){
                        if ($(elem).value == optVal && !inStock) {
                            $(elem).disabled="disabled";
                        }
                    });
                }
            }
        }
    }