# Meteor States and Provinces

## Usage:

* Include the countrySelect and stateSelect (optional) templates in your template:

```
<template name="form">
    {{> countrySelect}}
    {{> stateSelect}}
</template>
```

That's it! CSS is up to you.

### State/Province codes:

This package uses ISO-standard codes for states and provinces; for example, the code for California is US-CA, and the code for Queensland is AU-QLD.

If you want to use the domestic format instead, the package provides the `StateSelector.trimISOCode` method on the client side, which returns the state or province code without the country code:

```
var code = 'US-CA' // taken from option value;

code = StateSelector.trimISOCode(code); 

// 'CA'
```