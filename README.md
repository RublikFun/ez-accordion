# Show/Hide Text - jQuery plugin

Simple jQuery plugin - EZ Accordion.

## Demo

[demo link](https://rublikfun.github.io/ez-accordion/)

## Init

```
<div class="accordion">
    <!-- 1 -->
    <div class="accordion__section">
        <div class="accordion__titlebox" data-href="#accordion-1">
            <div class="accordion__icon">
                <span class="plus">+</span>
                <span class="minus">—</span>
            </div>
            <div class="accordion__title">...</div>
        </div>

        <div id="accordion-1" class="accordion__content">
            ...
        </div>
    </div>
    <!-- / -->
    <!-- 2 -->
    <div class="accordion__section">
        <div class="accordion__titlebox" data-href="#accordion-2">
            <div class="accordion__icon">
                <span class="plus">+</span>
                <span class="minus">—</span>
            </div>
            <div class="accordion__title">...</div>
        </div>

        <div id="accordion-2" class="accordion__content">
            ...
        </div>
    </div>
    <!-- / -->
</div>

<script src="js/ez-accordion.js"></script>

<script>
    var a  = new ezAccordion('.accordion');
</script>
```
## Authors

**Vitaly Rublivsky**
