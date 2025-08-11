"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resend = void 0;
const resend_1 = require("resend");
const env_config_1 = require("./env.config");
exports.resend = new resend_1.Resend(env_config_1.Env.RESEND_API_KEY);
