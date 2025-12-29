'use strict';

/**
 * hero-heading service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hero-heading.hero-heading');
