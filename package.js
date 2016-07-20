Package.describe({
  name: 'lifefilm:react-flexbox-grid',
  version: '0.9.6',
  summary: 'React flexboxgrid components',
  git: 'https://github.com/fortunto2/react-flexbox-grid.git',
  documentation: 'README.md'
});

Npm.depends({
  // react: '0.14.3',
  // flexboxgrid: '6.3.0',
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@1.0']);
  api.use([
    'ecmascript@0.4.8',
    // 'nathantreid:css-modules@2.1.0',
    // 'kristoferjoseph:flexboxgrid',
  ]);

  api.mainModule('src/index.js');

  api.addFiles([
    'client/index.min.css',
    'client/flexboxgrid.min.css'
  ], ['client']);


});
