const options = [
  '--require-module ts-node/register',
  '--require cucumber/helper/world.ts',
  '--require cucumber/helper/hooks.ts',
  '--require cucumber/steps/**/*.ts',
  '--format progress'
].join(' ');

module.exports = {
  default: [
    'cucumber/features/**/*.feature',
    options
  ].join(' ')
};


