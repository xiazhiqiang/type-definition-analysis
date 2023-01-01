#!/usr/bin/env node

import { Command } from "commander";
import * as pkgJSON from "../../package.json";
const program = new Command();

program
  .name("typed")
  .description("描述信息")
  .version(pkgJSON.version, "-v, --version")
  .command("parse <fileName>", "解析typescript类型");

// program.help();

program.parse(process.argv);
