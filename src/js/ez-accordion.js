/*------------ EZ Accordion ------------*/
function ezAccordion(sSelector) {
   var a = this;

       a.container   = $(sSelector);
       a.item        = a.container.find('.accordion__section');
       a.itemTitle   = a.container.find('.accordion__titlebox');
       a.itemContent = a.container.find('.accordion__content');

       a.closeAccordionSection = function () {
          a.itemTitle.removeClass('accordion__titlebox_active');
          a.itemContent.slideUp(300);
       }

       a.openAccordionSection = function () {
          var currentAttrValue = $(this).data('href');

              if($(this).hasClass('accordion__titlebox_active')) {
                  a.closeAccordionSection();
              } else {
                  a.closeAccordionSection();
                  // Add active class to section title
                  $(this).addClass('accordion__titlebox_active');
                  // Open up the hidden content panel
                  $(currentAttrValue).slideDown(300);
              }
       }

       a.itemTitle.bind('click', a.openAccordionSection);
}
/*------------------------------------------*/
