# Emotion Environment

CRA does not allow for `css` prop use via babel plugin, so we're forced to used the [jsx pragma](https://emotion.sh/docs/css-prop#jsx-pragma).

To enable:

1. Replace `/** jsx jsx */` with `/** @jsx jsx */`
2. Uncomment the `jsx` lines in component files
3. Comment out `react` import
