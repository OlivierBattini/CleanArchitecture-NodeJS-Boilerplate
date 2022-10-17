import express from 'express';

import { v1Router } from './shared/infrastructure/http/express/api/v1/index'

express()
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(v1Router)
    .listen(8080, () => console.log('Listening on port 8080'));