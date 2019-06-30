import {expectType} from 'tsd';
import orgRegex = require('.');

expectType<RegExp>(orgRegex());
expectType<RegExp>(orgRegex({exact: true}));
