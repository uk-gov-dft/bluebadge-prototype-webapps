/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

if (/Mobi|Android/i.test(navigator.userAgent)) {
  $('html').addClass('is-mobile');
} else {
  $('html').addClass('is-desktop');
}

$(document).ready(function () {
 window.GOVUKFrontend.initAll()
})

$(document).ready(function () {

  function gup( name )
  {
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( window.location.href );
    if( results == null )
      return null;
    else
      return results[1];
  }

  if(gup('success')) {

    var gupValue = gup('success').replace(/\+/g, ' '),
      gupDecoded = decodeURI(gupValue);

    $('[data-successmessage]').text(gupDecoded);

    $('.success-panel').show();

  }

  if(gup('user-removed')) {

    var gupDecoded = unescape(gup('user-removed'));

    $('.govuk-table').find("tr:contains('" + gupDecoded + "')").remove();

  }

  if(gup('council-removed')) {

    var gupDecoded = unescape(gup('council-removed'));

    $('.govuk-table').find("a[href*='" + gupDecoded + "']").closest('tr').remove();

  }

  $('[data-controls-element] input').on('change', function() {
    var $this = $(this),
        $thisID = $this.attr('id'),
        $theContainer = $this.closest('[data-control-group]'),
        $thisControls = $('[data-controller-is="' + $thisID + '"]');

    $theContainer.find('[data-controller-is]').addClass('hidden').find('input').prop('checked', false);
    $thisControls.removeClass('hidden');

  });

  // Radio options updating a hidden input

  $('[data-catchoption-label] input').on('change', function() {
    var $this = $(this),
        $thisParent = $this.closest('[data-catchoption-label]'),
        $checkedItems = $thisParent.find('input:checked'),
        thisGroupName = $checkedItems.attr('name'),
        listOfValues = '';

    if($this.is(":checked")) {

    } else {
      $this.closest('.govuk-checkboxes__item').next('.govuk-checkboxes__conditional').find('textarea, input').val("");
    }

    $checkedItems.each(function() {
      var $this = $(this),
          $thisLabel = $this.next('label'),
          labelHasBTag = $thisLabel.find('b').length,
          $thisNextHtmlB = $thisLabel.find('b'), 
          thisLabelText = '';

      if(labelHasBTag) {
        listOfValues += $thisLabel.find('b').text().trim() + '\n';
      } else {
        listOfValues += $thisLabel.text().trim() + '\n';
      }
      
    });

    $('#hiddenCaughtInputs')
      .html('<input type="hidden" name="' + thisGroupName + '-chosen-value" value="' + listOfValues + '">');

  });

  // Radio options to an array

  var arrayOfCheckRadioValues = [];


  if($('[data-optionstoarray]').length) {
    var $form = $('form');

    $form.submit(function(event) {
      event.preventDefault();

      var $checkedItems = $('[data-optionstoarray] > .govuk-checkboxes__item input:checked'),
          groupName = $checkedItems.attr('name');

      $checkedItems.each(function() {
        var $this = $(this),
            thisLabel = $this.next('label').text().trim(),
            thisChildRadioText = $this.closest('.govuk-checkboxes__item')
                                  .next('.govuk-checkboxes__conditional')
                                  .find(':checked')
                                  .next('label').text().trim(),
            thisChildDescription = $this.closest('.govuk-checkboxes__item')
                                         .next('.govuk-checkboxes__conditional')
                                         .find('textarea').val();

        arrayOfCheckRadioValues.push({
                                      name: thisLabel, 
                                      childoption: thisChildRadioText,
                                      childdesc: thisChildDescription
                                    });
        
      });

      $form.prepend("<input type='hidden' name='" + groupName + "-array' value='" + JSON.stringify(arrayOfCheckRadioValues) + "'>");

      $(this).unbind('submit').submit();
    });
  }

});
