/*
 * Allows:
 * foo-bar
 * FooBar
 * foo-bar--foo-bar
 * foo-bar__foo-bar
 * FooBar--FooBar
 * FooBar__FooBar
 * FooBar--foo-bar
 * foo-bar--FooBar
 * Foo-bar
 * …
 */
export const lowerCaseFirstUpper = /([A-Z][a-z\d]*(-[a-z\d]+)*)/;
export const lowerCase = /([a-z][a-z\d]*(-[a-z\d]+)*)/;
export const pascalCase = /(([A-Z][a-zA-Z\d]+)*)/;
export const namePattern = new RegExp(
  `^(${lowerCaseFirstUpper.source}|${lowerCase.source}|${pascalCase.source})((--|__)(${lowerCase.source}|${pascalCase.source}))*$`
);
