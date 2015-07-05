/* eslint-env node */
'use strict';
var fs = require('fs');
var Handlebars = require('handlebars');
var moment = require('moment');
var _ = require('lodash');

var render = function(resume) {
	var css = fs.readFileSync('./style.css', 'utf-8');
	var tpl = fs.readFileSync('./resume.hbs', 'utf-8');

	resume.work = _(resume.work).map(function(job) {
		job.startDate = moment(job.startDate).format('MM/DD/YYYY');
		if (job.endDate) {
			job.endDate = moment(job.endDate).format('MM/DD/YYYY');
		}
		return job;
	}).value();

	resume.education = _(resume.education).map(function(school) {
		school.startDate = moment(school.startDate).format('MM/DD/YYYY');
		if (school.endDate) {
			school.endDate = moment(school.endDate).format('MM/DD/YYYY');
		}
		return school;
	}).value();

	return Handlebars.compile(tpl)({
		css: css,
		resume: resume
	});
};

module.exports = {
	render: render
};
