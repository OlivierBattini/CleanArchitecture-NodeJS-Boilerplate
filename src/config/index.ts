import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });

import AppConfig from './AppConfig';
import DatabaseConfig from './DatabaseConfig';
import EmailConfig from './EmailConfig';
import HttpConfig from './HttpConfig';

export { AppConfig, DatabaseConfig, EmailConfig, HttpConfig };