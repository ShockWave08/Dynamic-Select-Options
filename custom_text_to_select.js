(function ($, Drupal) {
    'use strict';
    Drupal.behaviors.customTextToSelect = {
      attach: function (context, settings) {
        // Additional JS functionality can be added here if needed.

        // Log a message when the page is loaded.
        console.log('Custom Text To Select JavaScript is loaded.');

        // Add a custom behavior to the first select field.
        $('select[name="field_property_st_target_id"]', context).once('customTextToSelect').on('change', function () {
          console.log('Status option has been changed.');
        });
      }
    };
  })(jQuery, Drupal);
  
