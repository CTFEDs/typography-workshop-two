# CSS font-feature-settings with OpenType

The font-feature-settings property in CSS gives you control over advanced typographic features in the OpenType font format. The CSS3 spec defines two ways of accessing OpenType features in CSS: using high-level or low-level properties.

### High-level CSS Properties

High-level properties are independent of font format and have semantic, readable names. The spec encourages developers to use these properties whenever possible, but sadly browser support is lagging. Here are a few examples:

- font-variant-caps: small-caps;
- font-variant-caps: all-small-caps;
- font-variant-ligatures: common-ligatures;
- font-variant-ligatures: discretionary-ligatures;
- font-variant-alternates: contextual;
- font-variant-alternates: historical-forms;
- font-variant-numeric: oldstyle-nums;
- font-variant-numeric: diagonal-fractions;
- font-variant-numeric: ordinal;
- font-variant-position: super;
- font-variant-position: sub;

### Low-level CSS Property - font-feature-settings

On the other hand, the low-level property `font-feature-settings`, is supported by the latest versions of all major browsers. It is specific to OpenType fonts. The default value for this property is normal, while all other values are strings which are 4 ASCII characters long. These specific values can be turned either on or off using either the keywords `on` and `off` or their corresponding integers, 1 and 0.

There are many values listed in the spec, most of which are rarely included as features in a font. You can find the [full list](https://css-tricks.com/almanac/properties/f/font-feature-settings/) of values on CSS Tricks, and here is a list of the more common values:
- small caps: "smcp";
- ligatures: "liga";
- swashes: "swsh";

### Support

Not all openType fonts will have all of these advanced feature settings and to further complicate matters, not all browsers support all font-feature-settings.

Another thing to bear in mind when using a resource such as typekit or font squirrel to export fonts in different formats, is that the option to include OpenType Features MUST be checked in order to preserve them in the new format and make them accessible to the font-feature-setting property.
