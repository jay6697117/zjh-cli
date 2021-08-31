#!/usr/bin/env node

require('commander')
  .version(require('../package.json').version)
  .usage('<command> [options]')
  .command('create', '创建项目')
  .parse(process.argv);
